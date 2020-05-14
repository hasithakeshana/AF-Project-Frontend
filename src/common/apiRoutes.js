const axios = require('axios').default;


export const fetchData = async (user) =>{
 
    try{

    const data = user ;
     console.log('api data = ',data);

       const correctData = user["user"];
        console.log('correctData',correctData);


    const response = await axios.request({
            method: 'POST',
            url: "http://localhost:4000/api/signup",
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

export const fetchUser = async (email) =>{
 
  try{

  const data = email ;
   console.log('api data = ',email);

     const correctData = email["email"];
      console.log('correctData',correctData);
      

  const response = await axios.request({
          method: 'POST',
          url: "http://localhost:4000/api/edituser",
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
          url: "http://localhost:4000/api/login",
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
     
      console.log('response api',resData);
      
     return resData;
       


  }
  catch(e){
      console.log(e);
  }

  
}

export const fetchItemData = async (item) =>{

  
 
  try{

  const data1 = item ;
   console.log('api data = ',data1);


     const correctData = item["item"];
      console.log('correctData',correctData);
      console.log('title', correctData.title);
    
      const formData = new FormData();
      formData.append('title',correctData.title);
      formData.append('description',correctData.description);
      formData.append('category',correctData.category);
      formData.append('subCategory',correctData.subCategory);
      formData.append('price',correctData.price);
      formData.append('discount',correctData.discount);
      formData.append('quantity',correctData.quantity);
      for(const key of Object.keys(correctData.productImage)) {
        formData.append('productImage', correctData.productImage[key]);
      }
      
    

  const response = await axios.request({
          method: 'POST',
          url: "http://localhost:4000/api/items",
          headers: {
            'content-type' : 'multipart/form-data'
        },
          data: formData,
        
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

export const getItems =  async () => {
   {
    let res = await axios.get(`http://localhost:4000/api/items`);
    return res.data || [];
  }
}