import {createStore, combineReducers, applyMiddleware,compose} from 'redux';
import gameReducer from './reducers/gameReducer';
import personReducer from './reducers/personReducer'
import usersReducer from './reducers/usersReducer'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk'

const AllReducers = combineReducers({game:gameReducer,person:personReducer,users:usersReducer});

const initialStates ={
    game : {name :'football'},
    person : {name : 'Rashmika',age : '18'},
    users : []

}

const middleware = [thunk]
const store = createStore(AllReducers,initialStates,compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()))
export default store;







