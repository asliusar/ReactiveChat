import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import Chat from './../components';
import { sendMessage, subscribeOnMessages } from './../actions';
import { UserState } from '../scene/auth/state';
import ChatState from '../state';

const mapStateToProps = (state, props) => ({
    user: UserState.getUser(state),
    messages: ChatState.getMessages(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    ...bindActionCreators({
        sendMessage,
        subscribeOnMessages
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
