import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import {styles} from './styles';
import { User } from 'src/chat/scene/auth/state';
import { Message, Owner } from 'src/chat/state';

export interface MessageProps {
    text: string;
    date: Date;
    owner: Owner;
}

const MessageBlock = (props: MessageProps & WithStyles<any>) => (
    <section className={props.classes.container}>
        <div>{props.owner.name}</div>
        <div>{props.text}</div>
        <div>{props.date}</div>
    </section>
)
  
export default withStyles(styles)(MessageBlock);
