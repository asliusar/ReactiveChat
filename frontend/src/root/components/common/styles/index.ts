import { StyleRulesCallback } from '@material-ui/core/es';

export const styles: StyleRulesCallback = theme => ({
    block: {
        backgroundColor: '#D5DADE',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        flex: '0 0 auto'
    },
    button: {
        border: 0,
        background: 'none',
        boxShadow: 'none',
        borderRadius: '0px',
        fontSize: '18px',
        fontWeight: 'bold',
        margin: '10px',
        flex: 0,
        cursor: 'pointer',
        '&:focus': {
            outline: 0
        }
    },
    input: {
        fontSize: '20px',
        margin: '10px',
        width: '100%',
        flex: 1
    }
});