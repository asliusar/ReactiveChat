import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { styles } from './styles/index';
import Chat from './../scene/chat/containers';
import AuthBlock from './../scene/auth/containers';
import { User } from '../scene/auth/state';

export interface RootProps {
    user: User;
}

export const Root = (props: RootProps & WithStyles<any>) => {
    return (
        <div className={props.classes.container}>
            <Chat user={props.user} />
            {
                props.user == null && <AuthBlock /> 
            }
        </div>
    )
};

export default withStyles(styles)(Root);
