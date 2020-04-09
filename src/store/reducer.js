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

    menCategories :['Jeans','Shirts','T-Shirts','Footwear'],
    womenCategories :['Jeans','Blouses','Life Style','Footwear'],
    kidsCategories :['Jeans','Shirts','T-Shirts','Footwear'],
    sportsCategories :['Jeans','Shirts','T-Shirts','Footwear'],
    discountCategories :['Jeans','Shirts','Footwear'],
    selectedMainCategory : "",
    selectedSubCategory:""

};

const reducer = (state = initialState, { type, payload }) => {

    const newState = {...state};


    if(type === ACTIONS.USER_REGISTER_SUCCESS ){

        console.log('USER_REGISTER_SUCCESS');
        newState.auth.currentUser = payload.user ;
    }else if (type === 'UPDATE_MAIN_CATEGORY'){

        newState.selectedMainCategory = payload;
    }
    else if (type === 'UPDATE_SUB_CATEGORY'){

        newState.selectedSubCategory = payload;
    }
    return newState;

}




export default reducer;