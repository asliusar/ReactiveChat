import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { styles } from './styles/index';
import { User } from '../../auth/state';
import { Message } from './../state';
import InputBlock from '../../../components/common/InputBlock';
import MessageList from './messages';

export interface ChatProps {
    user: User;
    messages: Array<Message>;
    sendMessage: (message: Message) => void;
    subscribeOnMessages: any;
    getAllMessages: any;
}

const Chat = (props: ChatProps & WithStyles<any>) => {
    React.useEffect(() => {
        props.subscribeOnMessages();
    }, [props.user])

    let sendMessage = (text: string) => props.sendMessage({
        text,
        date: new Date(),
        owner: { id: props.user.id }
    } as Message)

    return (
        <React.Fragment>
            <MessageList user={props.user} messages={props.messages}/>
            {
                props.user && <InputBlock onSubmit={sendMessage} buttonText={'Send'}
                        inputPlaceholder={'Message'} />
            }
        </React.Fragment>
    )
};

export default withStyles(styles)(Chat);
