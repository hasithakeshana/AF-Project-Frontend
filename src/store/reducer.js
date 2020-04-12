import * as ACTIONS from '../common/constants';


const initialState = {

    
    auth: {
        currentUser: {

            role : 'guest'
        },
        isAuthenticated: false,
        isTokenChecked: false,
        isRegistered: false,
        
      },
    item:{
        currentSelectedItem : {} ,
        itemRatingDetails:{
            countRatings : {} ,
            avgRating : 0,
            ratingCount : {},
            ratingList : {},
            
        }

    }

};


const reducer = (state = initialState, { type, payload }) => {

const newState = {...state};




if(type === ACTIONS.USER_REGISTER_SUCCESS ){

    console.log('USER_REGISTER_SUCCESS');
    
    newState.auth.currentUser = payload.user ;
}

if(type === ACTIONS.GET_RATE_COMMENTS_SUCCESS){

   // console.log(payload.data);

    newState.item.itemRatingDetails.countRatings = payload.data.countRatings;
    
    newState.item.itemRatingDetails.avgRating = payload.data.avg;

    newState.item.itemRatingDetails.ratingCount = payload.data.noOfRatings;

    newState.item.itemRatingDetails.ratingList = payload.data.ratings

}

if(type === ACTIONS.GET_VIEW_ITEM_SUCCESS){

    newState.item.currentSelectedItem = payload.data;



}


// action = login success -> currentUser = payload.user/ isauthenticated = true

// action logout -> isauthenticated / false

// register success -> isregistered = success

// toekn checked -> tokenchecked = true


return newState;

}




export default reducer;