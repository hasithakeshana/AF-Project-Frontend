import {takeLatest , all ,  put} from 'redux-saga/effects';

import {USER_SIGN_UP} from '../common/constants';



function* ageUpAsync(){

    yield put ( {type : 'AGE_UP_ASYNC',value:1})



}

function* signUpUserWorker({ payload: { user } }){

    
    yield put ( {type : 'SIGN_UP',value: user })

    console.log('saga working');

    console.log('saga user',user);

 //   console.log('sage password',password);


}









export function* watchAgeUp(){

    yield  all ([

        takeLatest('AGE_UP',ageUpAsync),
        takeLatest(USER_SIGN_UP,signUpUserWorker),
    ]);
}