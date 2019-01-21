import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import AuthBlock from './../components';
import {loginUser} from './../actions';

const mapStateToProps = (state, props) => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    ...bindActionCreators({
        loginUser
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthBlock);
