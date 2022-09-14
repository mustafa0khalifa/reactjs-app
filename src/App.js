import React, {Component} from 'react';
import './App.css';
import Main from './components/Main';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux"
import reducers from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger"

const store = createStore(reducers, applyMiddleware(thunk, logger));

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Main/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
