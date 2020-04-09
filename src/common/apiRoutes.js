const axios = require('axios').default;

export const fetchData = async (user) =>{
 
    try{

    const data = user ;
     console.log('api data = ',data);

       const correctData = user["user"];
        console.log('correctData',correctData);


    const response = await axios.request({
            method: 'POST',
            url: `http://localhost:4000/api/signup`,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                      "Access-Control-Allow-Origin": "*"
            },
            data: JSON.stringify(correctData),
          
          }).then((res) => {

            console.log('output',res);

            console.log('out',res.data);

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


export const fetchLogin = async (user) =>{
 
  try{

  const data = user ;
   console.log('api data = ',data);

     const correctData = user["user"];
      console.log('correctData',correctData);


  const response = await axios.request({
          method: 'POST',
          url: `http://localhost:4000/api/login`,
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*"
          },
          data: JSON.stringify(correctData),
        
        }).then((res) => {

          console.log('output',res);

          console.log('out',res.data);

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



export const fetchRatingsAdd = async (user) =>{
 
  try{

  const {itemId,userName,rate,comment} = user.data ;
   console.log('api data = ',rate,comment);

   const reqBody = {userName,rate,comment};
   const id = itemId;

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
