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

