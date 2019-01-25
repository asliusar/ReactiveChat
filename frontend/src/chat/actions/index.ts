let ws: WebSocket;

export enum ACTION_TYPE {
    SEND_USER_MESSAGE = 'SEND_USER_MESSAGE',
    RESEIVE_MESSAGES = 'RESEIVE_MESSAGES',
    RESEIVE_MESSAGES_FAILURE = 'RESEIVE_MESSAGES_FAILURE',
    WS_CONNECTED = 'WS_CONNECTED'
}

export const subscribeOnMessages = () => (dispatch) => {
    if (ws != null) {
        return {type: ACTION_TYPE.WS_CONNECTED};
    }

    ws = new WebSocket('ws://localhost:8080/chat');

    ws.onmessage = (message) => {
        dispatch({
            type: ACTION_TYPE.RESEIVE_MESSAGES,
            messages: JSON.parse(message.data)
        })
    }
}

export const sendMessage = (message) => (dispatch) => {
    ws.send(JSON.stringify(message));
};
