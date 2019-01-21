export enum ACTION_TYPE {
    LOGIN_USER = 'LOGIN_USER'
}

export const loginUser = (name: String) => {
    return {
        type: ACTION_TYPE.LOGIN_USER,
        user: {name}
    }
}