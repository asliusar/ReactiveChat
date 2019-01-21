import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import {styles} from './styles';
import { User } from '../scene/auth/state';
import { Message } from '../state';
import MessageInputBlock from './MessageInputPanel';

interface ChatProps {
    user: User,
    messages: Array<Message>,
    sendMessage: (message: Message) => void
}

const Chat = (props: ChatProps & WithStyles<any>) => (
    <div className={props.classes.container}>
        <div className={props.classes.messages}>
        </div>
        {
            props.user 
            ? <MessageInputBlock sendMessage={props.sendMessage}/>
            : <AuthPanel /> 
        }
    </div>
);
  
export default withStyles(styles)(Chat);
