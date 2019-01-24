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

export const getAllMessages = () => (dispatch) => {
    get("http://localhost:8080/api/message").
    then((messages) => dispatch({
            type: ACTION_TYPE.RESEIVE_MESSAGES,
            messages
    }))
}

export function get(endpoint) {
    return fetch(endpoint, 
        {
            method: 'GET',
            mode: 'cors'
        }
    )
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))
}

export const sendMessage = (message) => (dispatch) => {
    fetch("http://localhost:8080/api/message", {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    })
    .then(res => {
        dispatch(() => ({
            type: ACTION_TYPE.SEND_USER_MESSAGE
        }))
    })
    .catch(err => console.log(err));
};
