import { combineReducers } from 'redux';
import { ACTION_TYPE } from '../actions';
import ChatState from '../state';

const chatReducer = (state = ChatState, action: any) => {
    switch (action.type) {
        /**
         * TODO memorize messages to prevent sending all messages every time.
         * 
         * The idea is to have all messages localy and just perform CRUD operations from backend.
         *  */ 
        case ACTION_TYPE.RESEIVE_MESSAGES:
            return {
                ...state,
                messages: action.messages
            };
        default:
            return state;
    }
};

const state = combineReducers({
    chat: chatReducer,
    auth: authReducer,
});

export default state;
