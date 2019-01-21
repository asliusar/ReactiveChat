export enum ACTION_TYPE {
    SEND_USER_MESSAGE = 'SEND_USER_MESSAGE',
    RESEIVE_MESSAGES = 'RESEIVE_MESSAGES'
}

export const sendMessage = () => {
    return {
        type: ACTION_TYPE.SEND_USER_MESSAGE
    };
};
