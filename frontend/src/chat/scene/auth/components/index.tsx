import { WithStyles, withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { styles } from './styles';
import {useState} from 'react';

interface AuthBlockProps {
    loginUser: (userName: string) => void
}

const AuthBlock = (props: AuthBlockProps & WithStyles<any>) => {
    const [userName, setUserName] = useState('');

    return (
        <div className={props.classes.container}>
            <input type='text' value={userName} 
                onChange={(event) => setUserName(event.target.value)}
            />
            <button onClick={() => props.loginUser(userName)}>
                Login
            </button>
        </div>
    ) 
};

export default withStyles(styles)(AuthBlock);
