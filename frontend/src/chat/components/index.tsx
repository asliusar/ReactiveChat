import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import {styles} from './styles';
import { User } from '../scene/auth/state';
import { Message } from '../state';
import MessageInputBlock from './MessageInputBlock';
import AuthBlock from './../scene/auth/containers';

interface ChatProps {
    user: User;
    messages: Array<Message>;
    sendMessage: (message: string) => void;
    startMessagePolling: any;
    stopMessagePolling: any;
}

const Chat = (props: ChatProps & WithStyles<any>) => {
    React.useEffect(() => {
        props.startMessagePolling();
        return props.stopMessagePolling();
    })

    return (
        <div className={props.classes.container}>
            <div className={props.classes.messages}>
                {
                    props.messages.map((message: Message) => (
                        <div>
                            {message.text}
                        </div>
                    ))
                }
            </div>
            {
                props.user 
                ? <MessageInputBlock sendMessage={props.sendMessage} />
                : <AuthBlock /> 
            }
        </div>
    )
};
  
export default withStyles(styles)(Chat);
