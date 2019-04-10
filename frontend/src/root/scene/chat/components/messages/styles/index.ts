import { StyleRulesCallback } from '@material-ui/core/es';

export const styles: StyleRulesCallback = theme => ({
  container: {
    margin: '10px',
  },
  messages: {
    overflowY: 'auto',
    width: '100%',
    height: '400px'
  },
  myMessageContainer: {
    border: '1px solid #A9A9A9',
    margin: '10px',
    borderRadius: '10px'
  },
  userNameLabel: {
    color: '#B0B0B0'
  },
  textLabel: {
    fontSize: '18px'
  },
  dateLabel: {
    color: '#B0B0B0'
  }
});
