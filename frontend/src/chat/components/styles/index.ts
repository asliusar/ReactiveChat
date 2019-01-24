import { StyleRulesCallback } from '@material-ui/core/es';

export const styles: StyleRulesCallback = theme => ({
  container: {
    height: '100%',
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    border: '1px solid #A9A9A9',
    marginLeft: '25%',
    marginRight: '25%',
    maxWidth: '300px',
    maxHeight: '600px'
  },
  messages: {
    overflowY: 'auto',
    width: '100%'
  }
});
