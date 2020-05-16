import {takeLatest, all, put, call} from 'redux-saga/effects';
import * as CONSTANTS from '../common/constants';
import {fetchData ,fetchUsers, fetchLogin , fetchRatingsAdd , getRatingComments , getItemDetails , getUserWishList , removeItemFromWishList , addToCartFromWishList,addToWishList,getAllProducts} from '../common/apiRoutes';
import * as globalActions from '../common/actions';



function* signUpUserWorker({payload: {user}}) {
    try {
        const data = yield call(fetchData, {user}) || {};
        if (data) yield put(globalActions.registerSuccessAction(data.user));
    } catch (err) {
        console.log(err);
        yield put(globalActions.registerFailAction(err.message));
    }
}

function* loginUserWorker({payload: {user}}) {
    try {
        const data = yield call(fetchLogin, {user}) || {}
        if (data) yield put(globalActions.loginSuccessAction(data.user));
    } catch (err) {
        yield put(globalActions.loginFailAction(err.message));
    }
}

function* updateUsers() {
    const data = yield  call(fetchUsers)
    yield put(globalActions.update_users_success(data))
}


// function* rateAddedWorker({ payload: { data } }){

    
//     console.log('saga working');
 
//     console.log('saga RATE ',data.itemId);
 
//     const ProductId = data.itemId;

//     console.log('item sagaaaaaaa',data);
  
 
//      try{
//          const data  = yield call (fetchRatingsAdd ,data) || {};

//          const result = yield call (getRatingComments ,ProductId) || {};

//          console.log('result get',result);
 
//         // console.log('correct data',data);
 
//        if (result) yield put(globalActions.GetRatingSuccessAction(result.data));
 
        
         
//      }
//      catch(err){
//          console.log(err);
        
//      }
    
 
//  }

function* rateAddedWorker({ payload: { data } }){

    
    //console.log('saga working');
 
    console.log('saga RATE ',data.itemId);
 
    const ProductId = data.itemId;

    console.log('payload rate add worker',data);

  
 
     try{
        const datas  = yield call (fetchRatingsAdd ,{data}) || {};

     const result = yield call (getRatingComments ,ProductId) || {};

    console.log('result get',result);
 
        //console.log('correct data',datas);
 
       if (result) yield put(globalActions.GetRatingSuccessAction(result.data));
 
        
         
     }
     catch(err){
         console.log(err);
        
     }
    
 
 }


 function* getRateCommentsWorker({ payload: { ProductId } }){

    
   // console.log('saga working');
 
    console.log('saga productid ',ProductId);
 
  
 
     try{
         const data  = yield call (getRatingComments ,ProductId) || {};
 
        // console.log('correct data',data);
 
       if (data) yield put(globalActions.GetRatingSuccessAction(data.data));
 
        
         
     }
     catch(err){

        yield put(globalActions.GetRatingFailAction(err));
         console.log(err);
        
     }
    
 
 }

 function* getViewItemDetails({ payload: { ProductId } }){

    
   // console.log('saga working');
 
    console.log('saga productid ',ProductId);
 
  
 
     try{
        const data  = yield call (getItemDetails ,ProductId) || {};
 
        //console.log('correct data',data.data.item);
 
      if (data) yield put(globalActions.GetViewItemSuccessAction(data.data.item));
 
        
         
     }
     catch(err){

       // yield put(globalActions.GetRatingFailAction(err));
         console.log(err);
        
     }
    
 
 }


 function* getWishListWorker({ payload: { userId } }){

    
    console.log('saga working');
 
    console.log('saga productid ',userId);
 
  
 
     try{
        const data  = yield call (getUserWishList ,userId) || {};
 
        console.log('correct data',data.data.wishlist);
 
     if (data) yield put(globalActions.GetUserWishListSuccessAction(data.data.wishlist));
 
        
         
     }
     catch(err){

       // yield put(globalActions.GetRatingFailAction(err));
         console.log(err);
        
     }
    
 
 }


function* removeWishListItemWorker({ payload: { userId ,wishListOredrId } }){

    
    console.log('saga working');
 
    console.log('saga productid ',userId,wishListOredrId);
 
  
 
     try{
        const data  = yield call (removeItemFromWishList ,{userId,wishListOredrId}) || {};

        const datas  = yield call (getUserWishList ,userId) || {};
 
        console.log('correct data',data);

        console.log('correct datass',datas);
 
    // if (data) yield put(globalActions.GetUserWishListSuccessAction(data.data.wishlist));
 
     if (datas) yield put(globalActions.GetUserWishListSuccessAction(datas.data.wishlist));
         
     }
     catch(err){

       // yield put(globalActions.GetRatingFailAction(err));
         console.log(err);
        
     }
    
 
 }


function* addToCartFromWishListWorker({ payload: data }){

    
    console.log('saga working');
 
    console.log('saga productid ',data);

    const {userId} = data;

    console.log('user id saga',userId);
 
  
 
     try{
        const data  = yield call (addToCartFromWishList ,data) || {};


    //     const datas  = yield call (getUserWishList ,userId) || {};
 
    //     console.log('correct data',datas.data.wishlist);
 
    //  if (datas) yield put(globalActions.GetUserWishListSuccessAction(datas.data.wishlist));
 
    //     console.log('correct data',data.data.wishlist);
 
    //  if (data) yield put(globalActions.GetUserWishListSuccessAction(data.data.wishlist));
   }
     catch(err){

       // yield put(globalActions.GetRatingFailAction(err));
         console.log(err);
        
     }
    
 
 }


 function* addToWishListWorker({ payload: data }){

    
    console.log('saga working');
 
    console.log('saga productid ',data);
 
    // addToWishList
    const item ={data};

    const {userId} = data;

    console.log('user id saga',userId);
    
  
    
    try{
        const data  = yield call (addToWishList,item) || {};
 
        console.log('result saga',data);

        
        const datas  = yield call (getUserWishList ,userId) || {};
 
        console.log('correct data',datas.data.wishlist);
 
     if (datas) yield put(globalActions.GetUserWishListSuccessAction(datas.data.wishlist));
 
    //  if (data) yield put(globalActions.GetUserWishListSuccessAction(data.data.wishlist));
   }
     catch(err){

       // yield put(globalActions.GetRatingFailAction(err));
         console.log(err);
        
     }
    
 
 }

 function* getAllProductsWorker({ payload: {  } }){

    
    console.log('saga working');
 
   
 
  
 
     try{
        const data  = yield call (getAllProducts) || {};
 
        console.log('saga data',data.data.item);

        const products = data.data.item;
 
    if (data) yield put(globalActions.GetAllProductsSuccessAction(products));
 
        
         
     }
     catch(err){

       // yield put(globalActions.GetRatingFailAction(err));
         console.log(err);
        
     }
    
 
 }



export function* rootWatcher() {

    yield  all([
        takeLatest(CONSTANTS.ADD_TO_WISHLIST,addToWishListWorker),
        takeLatest(CONSTANTS.USER_SIGN_UP,signUpUserWorker),
        takeLatest(CONSTANTS.USER_LOGIN,loginUserWorker),
        takeLatest(CONSTANTS.ADD_RATE_COMMENT,rateAddedWorker),
        takeLatest(CONSTANTS.GET_RATE_COMMENTS,getRateCommentsWorker),
        takeLatest(CONSTANTS.GET_VIEW_ITEM,getViewItemDetails),
        takeLatest(CONSTANTS.GET_USER_WISHLIST,getWishListWorker),
        takeLatest(CONSTANTS.REMOVE_WISHLIST_ITEM,removeWishListItemWorker),
        takeLatest(CONSTANTS.ADD_TO_CART_FROM_WISHLIST,addToCartFromWishListWorker),
        takeLatest(CONSTANTS.USER_SIGN_UP, signUpUserWorker),
        takeLatest(CONSTANTS.USER_LOGIN, loginUserWorker),
        takeLatest("SIGNUP", updateUsers),
        takeLatest(CONSTANTS.GET_ALL_PRODUCTS, getAllProductsWorker),

    ]);

}