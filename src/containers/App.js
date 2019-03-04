import React, {Component} from 'react';
import {combineReducers, createStore, compose } from 'redux';
import {Provider} from 'react-redux';

import FriendListApp from './FriendListApp';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, {}, composeEnhancers());

export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <FriendListApp/>
                </Provider>
            </div>
        );
    }
}
