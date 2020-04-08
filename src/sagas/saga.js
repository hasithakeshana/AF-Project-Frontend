import {takeLatest, all, put, call} from 'redux-saga/effects';
import * as CONSTANTS from '../common/constants';
import {fetchData, fetchLogin, fetchUsers} from '../common/apiRoutes';
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


export function* rootWatcher() {

    yield  all([

        takeLatest(CONSTANTS.USER_SIGN_UP, signUpUserWorker),
        takeLatest(CONSTANTS.USER_LOGIN, loginUserWorker),
        takeLatest("UPDATE_USERS", updateUsers)

    ]);

}