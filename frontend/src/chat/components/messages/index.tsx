import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { styles } from './styles/index';
import { Message } from './../../state';
import MyMessageBlock from './MyMessageBlock';
import MessageBlock from './MessageBlock';
import { User } from 'src/chat/scene/auth/state';

interface MessageListProps {
    user: User;
    messages: Array<Message>;
}

export const MessageList = (props: MessageListProps & WithStyles<any>) => {
    return (
        <div className={props.classes.messages}>
            {
                props.messages && props.messages.map((message: Message) =>
                    props.user && message.owner.id === props.user.id
                        ? <MyMessageBlock {...message} key={message.id} />
                        : <MessageBlock {...message} key={message.id} />
                )
            }
        </div>
    )
};

export default withStyles(styles)(MessageList);
