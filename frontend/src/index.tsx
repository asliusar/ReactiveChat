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
import state from './chat/redux';
import Chat from './chat/containers';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './chat/actions/saga';

const history = createHistory();
const middleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    state,
    composeWithDevTools(
        applyMiddleware(middleware),
        applyMiddleware(sagaMiddleware)
    ),
    applyMiddleware(thunk)
);

sagaMiddleware.run(rootSaga);

const rootEl = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={CUSTOM_THEME}>
            <Chat />
        </MuiThemeProvider>
    </Provider>,
    rootEl
);
