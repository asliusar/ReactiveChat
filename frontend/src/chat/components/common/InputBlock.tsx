import { WithStyles, withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { styles } from './styles';

interface InputBlockProps {
    onSubmit: (text: string) => void,
    buttonText: string,
    inputPlaceholder?: string
}
// TODO move it to a shared module
const InputBlock = (props: InputBlockProps & WithStyles<any>) => {
    const [text, setText] = React.useState('');

    return (
        <div className={props.classes.block}>
            <input type='text' name='text' className={props.classes.input} 
                value={text} placeholder={props.inputPlaceholder} 
                onChange={(event) => setText(event.target.value)}
            />
            <button className={props.classes.button} onClick={() => props.onSubmit(text)}>
                {props.buttonText}
            </button>
        </div>
    ) 
};

export default withStyles(styles)(InputBlock);
