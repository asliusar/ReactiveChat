import { call, put, race, delay, take } from 'redux-saga/effects';

export enum ACTION_TYPE {
    SEND_USER_MESSAGE = 'SEND_USER_MESSAGE',
    RESEIVE_MESSAGES = 'RESEIVE_MESSAGES',
    RESEIVE_MESSAGES_FAILURE = 'RESEIVE_MESSAGES_FAILURE',
    POLL_START = 'POLL_START',
    POLL_STOP = 'POLL_STOP'
}

export const startPollMessages = () => {
    return {
        type: ACTION_TYPE.POLL_START
    }
}

export const stopPollMessages = () => {
    return {
        type: ACTION_TYPE.POLL_STOP
    }
}

function* pollMessagesWorker(action) {
    while (true) {
        try {
            const { data } = yield call(fetch, "/messages");
            yield put(getDataSuccessAction(data));
            yield call(delay, 1000);
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

export const sendMessage = () => {
    return {
        type: ACTION_TYPE.SEND_USER_MESSAGE
    };
};
