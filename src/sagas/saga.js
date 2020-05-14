import {takeLatest , all ,  put , call} from 'redux-saga/effects';


import * as CONSTANTS from '../common/constants';

import {fetchData , fetchLogin, addManager, addCatergory} from '../common/apiRoutes';

//import {registerSuccessAction , registerFailAction } from '../common/actions';

import * as globalActions from '../common/actions';
import { compose } from 'redux';
//import addCatergory from '../components/addCatergory';

function* signUpUserWorker({ payload: { user } }){

    
   console.log('saga working');

   console.log('saga user',user);

 

    try{
        const data  = yield call (fetchData ,{user}) || {};

        console.log('correct data',data);

        if (data) yield put(globalActions.registerSuccessAction(data.user));

       
        
    }
    catch(err){
        console.log(err);
        yield put(globalActions.registerFailAction(err.message));
    }
   

}

function* loginUserWorker({ payload: { user } }){

    
    console.log('saga working');
 
    console.log('saga user',user);
 
  
 
     try{
         const data  = yield call (fetchLogin ,{user}) || {};
 
         console.log('correct data',data);
 
         if (data) yield put(globalActions.loginSuccessAction(data.user));
 
        
         
     }
     catch(err){
         console.log(err);
         yield put(globalActions.loginFailAction(err.message));
     }
    
 
 }

 function* addManagerWorker({payload: {user}}){

    console.log('saga working');

    console.log('saga user',user);


    try{

        const data = yield call(addManager, {user}) || {};

        console.log('correct data', data);

        if(data) yield put(globalActions.addManagerSuccessAction(data.user));

    }

    catch(err){
        console.log(err);
        yield put(globalActions.addManagerFailAction(err.message));
    }
 }


function* addCatergoryWorker({payload: {data}}){

    console.log('saga working');

    console.log('saga user',data);

    try{

        const data = yield call(addCatergory,{data}) || {};

        console.log('result :', data);

        if(data) yield put(globalActions.addCatergoryActionSuccess(data.data));

    }

    catch(err){
        console.log(err);
        yield put(globalActions.addCatergoryActionFail(err.message));
    }
}






export function* rootWatcher(){

    yield  all ([

    takeLatest(CONSTANTS.USER_SIGN_UP,signUpUserWorker),
    takeLatest(CONSTANTS.USER_LOGIN,loginUserWorker),
    takeLatest("ADD_MANAGER",addManagerWorker),
    takeLatest("ADD_CATERGORY",addCatergoryWorker),


   
    ]);
}