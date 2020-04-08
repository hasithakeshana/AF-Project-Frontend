import * as ACTIONS from '../common/constants';


export const initialState = {


    auth: {
        currentUser: {},
        isAuthenticated: false,
        isTokenChecked: false,
        isRegistered: false,
    },
    item:{
        itemRatingDetails:{},
        name : "",
        price:0.0,
        description : "",
    },
    categories : ['Men','Women','Kids','Sports'],
    selectedCategory : "All"

};

const reducer = (state = initialState, { type, payload }) => {

    const newState = {...state};


    if(type === ACTIONS.USER_REGISTER_SUCCESS ){

        console.log('USER_REGISTER_SUCCESS');
        newState.auth.currentUser = payload.user ;

    }else if(type === 'UPDATE_NAME'){
        console.log("Success "+payload);
        newState.person.name = payload;
    }else  if(type === 'UPDATE_USERS_SUCCESS'){
        console.log("UPDATE_USERS_SUCCESS" + payload)
        newState.users=payload;
    }else if (type === 'UPDATE_CATEGORY'){

        newState.selectedCategory = payload;
    }

    return newState;

}




export default reducer;