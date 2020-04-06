const usersReducer = (state={},{type,payload}) => {
 

    if(type === 'UPDATE_USERS'){
    
      return payload
    }
    return state;
}

export default usersReducer;