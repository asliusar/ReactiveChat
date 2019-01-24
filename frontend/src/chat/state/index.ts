export interface Owner {
    id: number;
    name?: String;
}

export interface Message {
    text: string;
    date: Date;
    owner: Owner;
}

export default class ChatState {
    messages: Array<Message>;

    public static getMessages = (state) => state.chat.messages;
}