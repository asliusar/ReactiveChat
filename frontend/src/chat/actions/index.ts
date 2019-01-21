export enum ACTION_TYPE {
    SEND_USER_MESSAGE = 'SEND_USER_MESSAGE',
}

export const sendMessage = () => {
    return {
        type: ACTION_TYPE.SEND_USER_MESSAGE
    };
};
