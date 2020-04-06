import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './registerServiceWorker';
import store from './store/index'
import { Provider } from 'react-redux';


let render =()=>{ReactDOM.render(
    <React.StrictMode>
        <Provider store = {store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
}

render();

// If you want your app to work offline and load faster, you can change
// unregister()
serviceWorker.unregister();
