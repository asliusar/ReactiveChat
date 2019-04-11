import { WithStyles, withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { Owner } from 'src/root/scene/chat/state';
import { styles } from './styles';

export interface MessageProps {
    text: string;
    date: Date;
    owner: Owner;
}

const MessageBlock = (props: MessageProps & WithStyles<any>) => {
    const date = new Date(props.date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
    })

    return (
        <section className={props.classes.container}>
            <div className={props.classes.userNameLabel}>{props.owner.name}</div>
            <div className={props.classes.textLabel}>{props.text}</div>
            <div className={props.classes.dateLabel}>{date}</div>
        </section>
    )
}

export default withStyles(styles)(MessageBlock);
