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
export const addManager = async (user) =>{
 
  try{

  const data = user ;
   console.log('api data = ',data);

    //  const correctData = user["user"];
    //   console.log('correctData',correctData);


  const response = await axios.request({
          method: 'POST',
          url: `http://localhost:4000/api/addManager`,
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

export const addCatergory = async (user) =>{
 
  try{

  const data = user ;
   console.log('api data = ',data);

    //  const correctData = user["user"];
    //   console.log('correctData',correctData);


  const response = await axios.request({
          method: 'POST',
          url: `http://localhost:4000/api/addCatergory`,
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

