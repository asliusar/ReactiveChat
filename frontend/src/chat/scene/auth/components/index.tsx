import { WithStyles, withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { styles } from './styles';

interface AuthBlockProps {
    login: (userName: string) => void
}

const AuthBlock = (props: AuthBlockProps & WithStyles<any>) => {
    const [userName, setUserName] = React.useState('');

    return (
        <div className={props.classes.container}>
            <input type='text' value={userName} 
                onChange={(event) => setUserName(event.target.value)}
            />
            <button onClick={() => props.login(userName)}>
                Login
            </button>
        </div>
    ) 
};

export default withStyles(styles)(AuthBlock);
