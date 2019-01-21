export enum ACTION_TYPE {
    LOGIN_USER = 'LOGIN_USER'
}

export const loginUser = () => {
    return {
        type: ACTION_TYPE.LOGIN_USER
    }
}