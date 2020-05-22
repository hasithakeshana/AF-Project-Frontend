import {takeLatest , all ,  put , call} from 'redux-saga/effects';


import * as CONSTANTS from '../common/constants';

import {fetchData , fetchLogin, fetchItemData, fetchUser, fetchManager} from '../common/apiRoutes';

//import {registerSuccessAction , registerFailAction } from '../common/actions';

import * as globalActions from '../common/actions';
import managerSignup from '../components/managerSignup';

function* signUpUserWorker({ payload: { user } }){

    
   console.log('saga working');

   console.log('saga user',user);

 

    try{
        const data  = yield call (fetchData ,{user}) || {};


        if (data) yield put(globalActions.registerSuccessAction(data.user));

       
        
    }
    catch(err){
        console.log(err);
        yield put(globalActions.registerFailAction(err.message));
    }
   

}

/*function* editUser({ payload: { email } }){

    
    console.log('saga working');
 
    console.log('saga user',email);
 
  
 
     try{
         const data  = yield call (fetchUser ,{email}) || {};
 
         console.log('correct data',data);
 
         if (data) yield put(globalActions.editUserSuccess(data.email));
 
        
         
     }
     catch(err){
         console.log(err);
         yield put(globalActions.editUserFail(err.message));
     }
    
 
}*/

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

function* signUpManager({ payload: { manager } }){

    
    console.log('saga working');
 
    console.log('saga manager',manager);
 
  
 
     try{
         const data  = yield call (fetchManager ,{manager}) || {};
 
 
         if (data) yield put(globalActions.registerManagerSuccessAction(data.manager));
 
        
         
     }
     catch(err){
         console.log(err);
         yield put(globalActions.registerManagerFailAction(err.message));
     }
    
 
 }

function* addItem({ payload: { item } }){

    
    console.log('saga working');
 
    console.log('saga item',item);
 
  
 
     try{
         const data  = yield call (fetchItemData ,{item}) || {};
 
         console.log('correct data',data);
 
         if (data) yield put(globalActions.addItemActionSuccess(data.item));
 
        
         
     }
     catch(err){
         console.log(err);
         yield put(globalActions.addItemActionFail(err.message));
     }
    
 
}


export function* rootWatcher(){

    yield  all ([

    takeLatest(CONSTANTS.USER_SIGN_UP,signUpUserWorker),
    takeLatest(CONSTANTS.USER_LOGIN,loginUserWorker),
    takeLatest(CONSTANTS.MANAGER_SIGN_UP, signUpManager),
    takeLatest(CONSTANTS.ADD_ITEM,addItem),

    ]);
}