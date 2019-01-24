import { WithStyles, withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import MessageBlock, { MessageProps } from './MessageBlock';
import { styles } from './styles';

const MyMessageBlock = (props: MessageProps & WithStyles<any>) => (
    <section className={props.classes.myMessageContainer}>
        <MessageBlock {...props} owner={{name: "You"}} />   
    </section>
)
  
export default withStyles(styles)(MyMessageBlock);
