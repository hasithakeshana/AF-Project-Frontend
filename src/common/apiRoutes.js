const axios = require('axios').default;

export const fetchData = async (user) => {

    try {

        const data = user;
        console.log('api data = ', data);
        const correctData = user["user"];
        const response = await axios.request({
            method: 'POST',
            url: `http://localhost:4000/api/signup`,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*"
            },
            data: JSON.stringify(correctData),

        }).then((res) => {
            const result = res.data;
            return result;
        });
        const resData = await response;
        return resData;
    } catch (e) {
        console.log(e);
    }


}


export const fetchLogin = async (user) => {

    try {

        const data = user;
        console.log('api data = ', data);
        const correctData = user["user"];
        console.log('correctData', correctData);
        const response = await axios.request({
            method: 'POST',
            url: `http://localhost:4000/api/login`,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*"
            },
            data: JSON.stringify(correctData),

        }).then((res) => {

            const result = res.data;
            return result;
        });

        const resData = await response;
        return resData;


    } catch (e) {
        console.log(e);
    }


}


export async function fetchUsers (){
    try{
        const data = await fetch('https://reqres.in/api/users')
        const returnedData=  await data.json();
        return returnedData.data;

    }catch (e) {

    }


}


/*
axios.get('https://reqres.in/api/users')
    .then (res=>{
        const data = res.data.data
        return data;
    })
*/

// export const fetchRatingsAdd = async (user) =>{
 
//     try{
  
//         console.log('rating api user',user);
//     const {itemId,userName,rate,comment} = user.data ;
//      console.log('api data = ',rate,comment);
  
//      const reqBody = {userName,rate,comment};
//      const id = itemId;
  
//      console.log('body',reqBody);
   
      
//      // console.log('api rate = ',data.data);
//   //  `/fetch/${date}`
  
//     const response = await axios.request({
//             method: 'POST',
//             url: `http://localhost:4000/api/addRatingWithComment/${id}`,
//             headers: {
//                 'Content-Type': 'application/json;charset=UTF-8',
//                       "Access-Control-Allow-Origin": "*"
//             },
//             data: JSON.stringify(reqBody),
           
             
          
//           }).then((res) => {
  
//             console.log('output',res.data);
  
//            // console.log('out',res.data);
  
//             const result =  res.data;
           
//             return result;
//           });
  
//        const resData = await response;
       
//        console.log('responsee api',resData);
        
//       return resData;
         
  
  
//     }
//     catch(e){
//         console.log(e);
//     }
  
    
//   }

export const fetchRatingsAdd = async (user) =>{
 
    try{
  
   console.log('userrrrrrrrrrrr rating',user);
  
    const {itemId,userName,rate,comment} = user.data ;
     console.log('api data = ',rate,comment);
  
     const reqBody = {userName,rate,comment};
     const id = itemId;
  
     //const id = '5eb68ab6a37f442020387c0a';
  
     console.log('apiiiiiiiiiiiiiiiiiiiiiiiiiiii',itemId);
  
     console.log('body',reqBody);
   
      
     // console.log('api rate = ',data.data);
  //  `/fetch/${date}`
  
    const response = await axios.request({
            method: 'POST',
            url: `http://localhost:4000/api/addRatingWithComment/${id}`,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                      "Access-Control-Allow-Origin": "*"
            },
            data: JSON.stringify(reqBody),
           
             
          
          }).then((res) => {
  
            console.log('output',res.data);
  
           // console.log('out',res.data);
  
            const result =  res.data;
           
            return result;
          });
  
       const resData = await response;
       
       console.log('responsee api',resData);
        
      return resData;
         
  
  
    }
    catch(e){
        console.log(e);
    }
  
    
  }
  
  export const getRatingComments = async (productId) => {
  
  console.log('productId ',productId);
  
  
  const response = await axios.get(`http://localhost:4000/api/getRatingsWithComments/${productId}`);
  
  console.log('response',response);
  
  return response;
  
  }
  
  export const getItemDetails = async (productId) => {
  
    console.log('productId ',productId);
    
    const response = await axios.get(`http://localhost:4000/api/items/${productId}`);
    
    console.log('response',response);
    
    return response;
    
    }
    
  
   // getUserWishList
  
   export const getUserWishList = async (userId) => {
  
    console.log('productId ',userId);
    
    const response = await axios.get(`http://localhost:4000/api/getWishList/${userId}`);
    
    console.log('response',response);
    
    return response;
    
    }
  
    // removeItemFromWishList
  
    export const removeItemFromWishList = async (user) =>{
   
      try{
    
      const data = user ;
       console.log('api data = ',data);
    
        //  const correctData = user["user"];
        //   console.log('correctData',correctData);
    
    
      const response = await axios.request({
              method: 'POST',
              url: `http://localhost:4000/api/deleteWishListProduct`,
              headers: {
                  'Content-Type': 'application/json;charset=UTF-8',
                        "Access-Control-Allow-Origin": "*"
              },
              data: JSON.stringify(data),
            
            }).then((res) => {
    
               console.log('output',res);
    
              // console.log('out',res.data);
    
              // const result =  res.data;
             
              //return result;
            });
    
         // const resData = await response;
         
         // console.log('responsee api',resData);
          
         //return resData;
           
    
    
      }
      catch(e){
          console.log(e);
      }
    
      
    }
  
  
  export const addToCartFromWishList = async (data) =>{
   
      try{
    
      const { userId , product } = data ;
       
       const reqBody = product;
  
       const id = userId;
       
    
       console.log('api body',reqBody);
       
     
     
    
      const response = await axios.request({
              method: 'POST',
              url: `http://localhost:4000/api/addItemWishListFromCart/${id}`,
              headers: {
                  'Content-Type': 'application/json;charset=UTF-8',
                        "Access-Control-Allow-Origin": "*"
              },
              data: JSON.stringify(reqBody),
             
               
            
            }).then((res) => {
    
              console.log('output',res.data);
    
             // console.log('out',res.data);
    
              const result =  res.data;
             
              return result;
            });
    
         const resData = await response;
         
         console.log('responsee api',resData);
          
        // return resData;
           
    
    
      }
      catch(e){
          console.log(e);
      }
    
      
    }


export const addToWishList = async (data) =>{

    console.log('api dataaa',data.data);

    const {userId , item} = data.data;

    console.log('api item',item.name);
 
    try{
    
        
    const reqBody = {userId};

    console.log('req body frontend',reqBody);
    
    // const id = item.id;         

    const id = "5eb68ab6a37f442020387c0a"; // sample value
         
    console.log('api body',reqBody);
         
    const response = await axios.request({
                method: 'POST',
                url: `http://localhost:4000/api/addItemToWishList/${id}`,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                          "Access-Control-Allow-Origin": "*"
                },
                data: JSON.stringify(reqBody),
        }).then((res) => {
      
            const result =  res.data;
               
            return result;
            });
      
           const resData = await response;
           
           console.log('responsee api',resData);
            
          return resData;
             
      
      
        }
        catch(e){
            console.log(e);
        }
        
}

export const getAllProducts = async () => {
  
    console.log('get all axios working');
    
    const response = await axios.get(`http://localhost:4000/api/allitems`);
    
    console.log('response',response);
    
    return response;
    
}
      
 
export const checkUserRated = async (user) =>{
   
    try{
  
        const {username,product} = user;
        const reqBody = {username};
        const id = String(product);
        console.log('reqqqqqqqqqqqqqqqqbodyyy',reqBody);
        const response = await axios.request({
          method: 'POST',
          url: `http://localhost:4000/api/checkUserIsRated/${id}`,
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*"
          },
          data: JSON.stringify(reqBody),
         
           
        
        }).then((res) => {
      
            const result =  res.data;
               
            return result;
        });
   
       const resData = await response;
       
       console.log('responsee api',resData);
        
       return resData;
         
  
  
    }
    catch(e){
        console.log(e);
    }
  
    
  }
