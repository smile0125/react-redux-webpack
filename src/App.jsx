import React, { Component } from 'react';
import Router from './Router.jsx';
// import {Cnt} from './assets/js/cnt.jsx';
import './assets/css/common.scss';
import store from './redux/store.jsx';
import { Provider } from 'react-redux';

class App extends Component {
    render() {
        // Cnt();
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}
export default App;