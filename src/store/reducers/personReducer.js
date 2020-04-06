
const personReducer = (state={},{type,payload}) => {
 

    if(type === 'UPDATE_NAME'){
    
      return Object.assign({},state,{name:payload} )
    }
    return state;
}
  
export default personReducer;