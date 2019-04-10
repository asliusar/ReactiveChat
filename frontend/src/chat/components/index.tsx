import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { styles } from './styles/index';
import { User } from '../scene/auth/state';
import { Message } from '../state';
import InputBlock from './common/InputBlock';
import AuthBlock from './../scene/auth/containers';
import MyMessageBlock from './messages/MyMessageBlock';
import MessageBlock from './messages/MessageBlock';

interface ChatProps {
    user: User;
    messages: Array<Message>;
    sendMessage: (message: Message) => void;
    subscribeOnMessages: any;
    getAllMessages: any;
}

// TODO move the message block to a separate component
export const Chat = (props: ChatProps & WithStyles<any>) => {
    React.useEffect(() => {
        props.subscribeOnMessages();
    }, [props.user])

    let sendMessage = (text: string) => props.sendMessage({
        text,
        date: new Date(),
        owner: { id: props.user.id }
    } as Message)

    return (
        <div className={props.classes.container}>
            <div className={props.classes.messages}>
                {
                    props.messages && props.messages.map((message: Message) =>
                        props.user && message.owner.id === props.user.id
                            ? <MyMessageBlock {...message} key={message.id} />
                            : <MessageBlock {...message} key={message.id} />
                    )
                }
            </div>
            {
                props.user
                    ? <InputBlock onSubmit={sendMessage} buttonText={'Send'}
                        inputPlaceholder={'Message'} />
                    : <AuthBlock />
            }
        </div>
    )
};

export default withStyles(styles)(Chat);
