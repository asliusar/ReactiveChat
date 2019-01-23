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

export const sendMessage = () => {
    return {
        type: ACTION_TYPE.SEND_USER_MESSAGE
    };
};
