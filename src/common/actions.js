
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