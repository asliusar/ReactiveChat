import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import Chat from './../components';
import {sendMessage} from './../actions';

const mapStateToProps = (state, props) => ({
    user: UserState.getUser(state),
    messages: ChatState.getMessages(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    ...bindActionCreators({
        sendMessage
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
