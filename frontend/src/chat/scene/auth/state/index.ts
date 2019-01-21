export interface User {
    id: number;
    name: String;
}

export class UserState {
    private user: User;

    public static getUser = (state) => state.auth.user;
}
