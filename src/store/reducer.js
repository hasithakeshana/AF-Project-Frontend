


const initialState = {

    age : 20,
    email: 'cc',
};


const reducer = (state = initialState,action) => {

const newState = {...state};

if(action.type === 'AGE_UP_ASYNC'){
    newState.age += action.value;
}

if(action.type === 'SIGN_UP'){

    console.log('sign up reducer starts');

    console.log(' reducer value',action.value);

    console.log(' reducer value eamil reducer',action.value.email);

    newState.email = action.value.email;
    
}


return newState;

}




export default reducer;