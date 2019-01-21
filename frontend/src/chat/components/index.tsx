import * as React from 'react';
import Paper from 'material-ui/Paper';
import Table from 'material-ui/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import {styles} from './styles';

const Chat = (props: WithStyles<any>) => (
    <div className={props.classes.root}>

    </div>
);
  
export default withStyles(styles)(Chat);
