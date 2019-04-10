import { connect } from 'react-redux';

import Chat from '../scene/chat/components';
import { UserState } from '../scene/auth/state';

const mapStateToProps = (state, props) => ({
    user: UserState.getUser(state),
});

export default connect(mapStateToProps, null)(Chat);
