export enum ACTION_TYPE {
    LOGIN_USER = 'LOGIN_USER'
}

export const loginUser = (name: String) => (dispatch) => {
    fetch("http://localhost:8080/api/user", {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name})
    })
    .then(res => res.json())
    .then(user => {
        dispatch({
            type: ACTION_TYPE.LOGIN_USER,
            user
        })
    })
    .catch(err => console.log(err));
}