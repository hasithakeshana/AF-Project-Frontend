
import {USER_SIGN_UP} from './constants';

export function signUpAction(user){

    return{
        type : USER_SIGN_UP,
        payload: {
               user
                 },
    };
}

// export function registerAction(fullName, email, password) {
//     return {
//       type: ACTIONS.USER_REGISTER,
//       payload: {
//         fullName,
//         email,
//         password,
//       },
//     };
//   }
  
//   export function registerSuccessAction(user) {
//     return {
//       type: ACTIONS.USER_REGISTER_SUCCESS,
//       payload: {
//         user,
//       },
//     };
//   }
  
//   export function registerFailAction(error) {
//     return {
//       type: ACTIONS.USER_REGISTER_FAILED,
//       payload: {
//         error,
//       },
//     };
//   }