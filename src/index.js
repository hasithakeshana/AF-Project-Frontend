import React from "react";
import ReactDOM from "react-dom";


import {Provider} from 'react-redux';
import {createStore , applyMiddleware } from 'redux';
import reducer from './store/reducer';
import createSagaMiddleware from 'redux-saga';
import {watchAgeUp} from './sagas/saga';




import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";



import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();

//sagaMiddleware.run();

const store = createStore(reducer , applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAgeUp);

ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));

registerServiceWorker();