let ws: WebSocket;

export enum ACTION_TYPE {
    SEND_USER_MESSAGE = 'SEND_USER_MESSAGE',
    RESEIVE_MESSAGES = 'RESEIVE_MESSAGES',
    RESEIVE_MESSAGES_FAILURE = 'RESEIVE_MESSAGES_FAILURE',
    POLL_START = 'POLL_START',
    POLL_STOP = 'POLL_STOP'
}

export const subscribeOnMessages = () => (dispatch) => {
    if (ws != null) {
        return {type: ACTION_TYPE.POLL_START};
    }

    ws = new WebSocket('ws://localhost:8080/chat');

    ws.onmessage = (message) => {
        dispatch({
            type: ACTION_TYPE.RESEIVE_MESSAGES,
            messages: JSON.parse(message.data)
        })
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
    ws.send(JSON.stringify(message));
};
