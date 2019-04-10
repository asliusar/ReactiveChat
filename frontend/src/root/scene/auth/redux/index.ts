import { combineReducers } from 'redux';
import { ACTION_TYPE } from '../actions';
import { UserState } from '../state';

const authReducer = (state = UserState, action: any) => {
    switch (action.type) {
        case ACTION_TYPE.LOGIN_USER:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
};

export default authReducer;
