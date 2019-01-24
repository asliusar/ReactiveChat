import { all, call, delay, put, race, take } from 'redux-saga/effects';
import { ACTION_TYPE, get } from '..';

function* pollMessagesWorker(action) {
    while (true) {
        try {
            yield delay(2000);
            const data = yield call(get, "http://localhost:8080/api/message");
            yield put(getDataSuccessAction(data));
        } catch (err) {
            yield put(getDataFailureAction(err));
        }
    }
}

function* pollMessagesWatcher() {
    while (true) {
        yield take(ACTION_TYPE.POLL_START);
        yield race([
            call(<any>pollMessagesWorker),
            take(ACTION_TYPE.POLL_STOP)
        ]);
    }
}

const getDataSuccessAction = (messages) => {
    return {
        type: ACTION_TYPE.RESEIVE_MESSAGES,
        messages
    };
}

const getDataFailureAction = (error) => {
    console.log(error);
    return {
        type: ACTION_TYPE.RESEIVE_MESSAGES_FAILURE,
        error
    }
}

export default function* rootSaga() {
    yield all([
        pollMessagesWatcher()
    ])
}