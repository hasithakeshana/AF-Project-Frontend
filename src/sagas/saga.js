import {takeLatest , all ,  put , call} from 'redux-saga/effects';


import * as CONSTANTS from '../common/constants';

import {fetchData , fetchLogin , fetchRatingsAdd , getRatingComments } from '../common/apiRoutes';

//import {registerSuccessAction , registerFailAction } from '../common/actions';

import * as globalActions from '../common/actions';

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

 function* rateAddedWorker({ payload: { data } }){

    
    console.log('saga working');
 
    console.log('saga RATE ',data.itemId);
 
    const ProductId = data.itemId;
  
 
     try{
         const data  = yield call (fetchRatingsAdd ,{data}) || {};

         const result = yield call (getRatingComments ,ProductId) || {};

         console.log('result get',result);
 
        // console.log('correct data',data);
 
       if (result) yield put(globalActions.GetRatingSuccessAction(result.data));
 
        
         
     }
     catch(err){
         console.log(err);
        
     }
    
 
 }

 function* getRateCommentsWorker({ payload: { ProductId } }){

    
    console.log('saga working');
 
    console.log('saga productid ',ProductId);
 
  
 
     try{
         const data  = yield call (getRatingComments ,ProductId) || {};
 
         console.log('correct data',data);
 
       if (data) yield put(globalActions.GetRatingSuccessAction(data.data));
 
        
         
     }
     catch(err){

        yield put(globalActions.GetRatingFailAction(err));
         console.log(err);
        
     }
    
 
 }









export function* rootWatcher(){

    yield  all ([

    takeLatest(CONSTANTS.USER_SIGN_UP,signUpUserWorker),
    takeLatest(CONSTANTS.USER_LOGIN,loginUserWorker),
    takeLatest(CONSTANTS.ADD_RATE_COMMENT,rateAddedWorker),
    takeLatest(CONSTANTS.GET_RATE_COMMENTS,getRateCommentsWorker),
   
   
    ]);
}