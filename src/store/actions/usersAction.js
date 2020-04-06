

const fetch_users  = (dispatch) =>{
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(res => dispatch({type:'UPDATE_USERS',payload:res.data}))

}

//const update_users = {type:'UPDATE_USERS',payload:'gamage'}


export default fetch_users;
