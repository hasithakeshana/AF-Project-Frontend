import * as ACTIONS from '../common/constants';


const initialState = {

    
    auth: {
        currentUser: {},
        isAuthenticated: false,
        isTokenChecked: false,
        isRegistered: false,
      },


};


const reducer = (state = initialState, { type, payload }) => {

const newState = {...state};




if(type === ACTIONS.USER_REGISTER_SUCCESS ){

    console.log('USER_REGISTER_SUCCESS');
    
    newState.auth.currentUser = payload.user ;
}


// action = login success -> currentUser = payload.user/ isauthenticated = true

// action logout -> isauthenticated / false

// register success -> isregistered = success

// toekn checked -> tokenchecked = true


return newState;

}




export default reducer;