import { combineReducers } from 'redux';

import authReducer from '../scene/auth/redux';
import chatReducer from '../scene/chat/redux';

const state = combineReducers({
    chat: chatReducer,
    auth: authReducer,
});

export default state;
