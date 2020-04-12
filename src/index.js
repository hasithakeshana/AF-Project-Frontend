import React from "react";
import ReactDOM from "react-dom";


import {Provider} from 'react-redux';
import {createStore , applyMiddleware ,compose} from 'redux';
import reducer from './store/reducer';
import createSagaMiddleware from 'redux-saga';
import {rootWatcher} from './sagas/saga';


//import 'bootstrap/dist/css/bootstrap.min.css'; // carousal

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
//import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";



import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();

//sagaMiddleware.run();
const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer ,composeEnhansers(applyMiddleware(sagaMiddleware)) );

sagaMiddleware.run(rootWatcher);

ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));

registerServiceWorker();