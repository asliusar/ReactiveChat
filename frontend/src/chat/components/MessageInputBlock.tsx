import { WithStyles, withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { styles } from './styles';
import { Message } from '../state';

interface MessageInputBlockProps {
    sendMessage: (message: string) => void
}

const MessageInputBlock = (props: MessageInputBlockProps & WithStyles<any>) => {
    const [message, setMessage] = React.useState('');

    return (
        <div className={props.classes.container}>
            <input type='text' name='message' 
                value={message} 
                onChange={(event) => setMessage(event.target.value)}
            />
            <button type='button' onClick={() => props.sendMessage(message)}>
                Send me
            </button>
        </div>
    ) 
};

export default withStyles(styles)(MessageInputBlock);
