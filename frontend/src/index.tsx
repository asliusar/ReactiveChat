import createHistory from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CUSTOM_THEME } from './theme';
import MainContainer from './MainContainer';
import state from './chat/redux';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
    state,
    composeWithDevTools(
        applyMiddleware(middleware)
    ),
    applyMiddleware(thunk)
);

const rootEl = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={CUSTOM_THEME}>
            <MainContainer />
        </MuiThemeProvider>
    </Provider>,
    rootEl
);
