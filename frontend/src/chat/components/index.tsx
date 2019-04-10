import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { styles } from './styles/index';
import { User } from '../scene/auth/state';
import { Message } from '../state';
import InputBlock from './common/InputBlock';
import AuthBlock from './../scene/auth/containers';
import MessageList from './messages';

interface ChatProps {
    user: User;
    messages: Array<Message>;
    sendMessage: (message: Message) => void;
    subscribeOnMessages: any;
    getAllMessages: any;
}

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
            <MessageList user={props.user} messages={props.messages}/>
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
