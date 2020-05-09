
//import {USER_SIGN_UP , USER_REGISTER_SUCCESS , USER_REGISTER_FAILED } from './constants';

import * as ACTIONS from '../common/constants';

export function signUpAction(user){

    return{
        type : ACTIONS.USER_SIGN_UP,
        payload: {
               user
                 },
    };
}
export function registerSuccessAction(user) {
    return {
      type: ACTIONS.USER_REGISTER_SUCCESS,
      payload: {
        user,
      },
    };
  }


export function registerFailAction(error) {
    return {
      type: ACTIONS.USER_REGISTER_FAILED,
      payload: {
        error,
      },
    };
  }

  export function loginAction(user){

    return{
        type : ACTIONS.USER_LOGIN,
        payload: {
               user
                 },
    };
}

export function loginSuccessAction(user) {
    return {
      type: ACTIONS.USER_LOGIN_SUCCESS,
      payload: {
        user,
      },
    };
  }


export function loginFailAction(error) {
    return {
      type: ACTIONS.USER_LOGIN_FAILED,
      payload: {
        error,
      },
    };
  }

export function update_name(name) {

    return {
        type:'UPDATE_NAME',
        payload:name
    }
}
export function update_name_success(name) {

    return {
        type:'UPDATE_NAME_SUCCESS',
        payload:name
    }

}

export function update_users(name) {

    return {
        type:'UPDATE_USERS',
        payload:name
    }

}

export function update_users_success(data) {

    return {
        type:'UPDATE_USERS_SUCCESS',
        payload:data
    }

}


export function AddRatingAction(data){

    return{
        type : ACTIONS.ADD_RATE_COMMENT,
        payload: {
               data
                 },
    };
}

export function AddRatingSuccessAction(data) {
    return {
      type: ACTIONS.ADD_RATE_COMMENT_SUCCESS,
      payload: {
        data,
      },
    };
  }


export function AddRatingFailAction(error) {
    return {
      type: ACTIONS.ADD_RATE_COMMENT_FAILED,
      payload: {
        error,
      },
    };
  }

  export function GetRatingAction(ProductId){

    return{
        type : ACTIONS.GET_RATE_COMMENTS,
        payload: {
          ProductId
                 },
    };
}

export function GetRatingSuccessAction(data) {
    return {
      type: ACTIONS.GET_RATE_COMMENTS_SUCCESS,
      payload: {
        data,
      },
    };
  }


export function GetRatingFailAction(error) {
    return {
      type: ACTIONS.GET_RATE_COMMENTS_FAILED,
      payload: {
        error,
      },
    };
  }


export function GetViewItemAction(ProductId){

    return{
        type : ACTIONS.GET_VIEW_ITEM,
        payload: {
          ProductId
                 },
    };
}

export function GetViewItemSuccessAction(data){

  return{
      type : ACTIONS.GET_VIEW_ITEM_SUCCESS,
      payload: {
        data
               },
  };
}

export function GetViewItemFailAction(error){

  return{
      type : ACTIONS.GET_VIEW_ITEM_SUCCESS,
      payload: {
        error
               },
  };
}


export function GetUserWishListAction(userId){

  return{
      type : ACTIONS.GET_USER_WISHLIST,
      payload: {
        userId
               },
  };
}

export function GetUserWishListSuccessAction(data) {
  return {
    type: ACTIONS.GET_USER_WISHLIST_SUCCESS,
    payload: {
      data,
    },
  };
}


export function GetUserWishListFailAction(error) {
  return {
    type: ACTIONS.GET_USER_WISHLIST_FAILED,
    payload: {
      error,
    },
  };
}

export function RemoveWishListItemAction(userId,wishListOredrId){

  return{
      type : ACTIONS.REMOVE_WISHLIST_ITEM,
      payload: {
        userId,wishListOredrId
               },
  };
}

export function AddToCartFromWishListAction(data){

  return{
      type : ACTIONS.ADD_TO_CART_FROM_WISHLIST,
      payload: data
          
  };
}

export function AddToCartFromWishListSuccessAction(data){

  return{
      type : ACTIONS.ADD_TO_CART_FROM_WISHLIST_SUCCESS,
      payload: {
        data
          },
  };
}

export function AddToCartFromWishListFailAction(error){

  return{
      type : ACTIONS.ADD_TO_CART_FROM_WISHLIST_FAILED,
      payload: {
        error
          },
  };
}
