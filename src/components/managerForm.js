import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { checkPropTypes } from "prop-types";
//import 'bootstrap/dist/css/bootstrap.min.css.js';
//import * as Yup from "yup";
import * as reduxActions from "../common/actions"
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const axios = require('axios').default;

 export default class managerForm extends React.Component {

    constructor(props){
        super(props);

        this.onChangefirstName = this.onChangefirstName.bind(this);
        this.onChangelastName = this.onChangelastName.bind(this);
        this.onChangeemail= this.onChangeemail.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            firstName : '',
            lastName : '',
            email : '',
            password : '',
            firstNameError: '',
            lastNameError: '',
            emailError: '',
            passwordError: ''

        }
    }

    onChangefirstName(e) {
        this.setState ({
            firstName : e.target.value
        });
    }

    onChangelastName(e){
        this.setState({
            lastName: e.target.value
        });
    }

    onChangeemail(e){
        this.setState({
            email: e.target.value
        });
    }

    onChangepassword(e){
        this.setState({
            password:e.target.value
        });
    }

    validate = () => {

        let firstNameError= '';
      let lastNameError= '';
        let emailError= '';
       let passwordError= '';

       if(this.state.firstName.includes("1","2","3","4","5","6","7","8","9","0")){
           firstNameError = "Please Inlcude only Letters";
       }
       
       if(this.state.lastName.includes("1","2","3","4","5","6","7","8","9","0")){
        lastNameError = "Please Inlcude only Letters";
        }

        if(!this.state.lastName){
            lastNameError = "Last Name cannot be blank"
        }
        if(!this.state.firstName){
            firstNameError = "First Name cannot be blank"
        }
        if(!this.state.email){
            emailError = "Email cannot be blank"
        }
        if(!this.state.password){
            passwordError = "Password cannot be blank"
        }

        if(this.state.password < 5){
            passwordError = "Please Enter more than 5 characters"
        }
    

       if(!this.state.email.includes("@")){
           emailError = "Please Enter Valid Email";
       }

       if(emailError || firstNameError || lastNameError || passwordError){
           this.setState({emailError, firstNameError, lastNameError, passwordError});
           return false;
       }

       return true;

    }

    onSubmit(e){
        e.preventDefault();
        const addM = addM();
        const isValid = this.validate();
        if(isValid){

        console.log('New Manager Added:');
        console.log('First Name:  ${this.state.firstName}');
        console.log('Last Name: ${this.state.lastName}');

        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    }
}

    addM = async(user) => {

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
    //const validationSchema =Yup.object({
     //   firstName: Yup.string().required("Please fill the field")
   // })

    render() {
        return (
            
             
<div>
        
                

            <form onSubmit={this.addM} id="mForm">
                
                <div className="form-group">
                <label>First Name   </label>
                <input 
                type = "text"
                name="firstName"
                className="form-control"
                placeholder="Alex" 
                value = {this.state.firstName} 
                onChange= {this.onChangefirstName}/>
                </div>
                <div style={{fontSize: 12, color:"red"}}>
                    {this.state.firstNameError}
                    
                </div>

                <div className = "form-group">
                <label>Last Name   </label>
                <input 

                name="lastName"
                type="text"
                className= "form-control"
                placeholder="Noward" 
                value = {this.state.lastName} 
                onChange= {this.onChangelastName}/>
                </div>
                <div style={{fontSize: 12, color:"red"}}>
                    {this.state.lastNameError}
                    
                </div>
               

                <div className = "form-group">
                <label>Email </label>
                <input 
                name="email"
                className="form-control"
                type="text"
                placeholder="abc@yahoo.com" 
                value = {this.state.email} 
                onChange= {this.onChangeemail}/>
                </div>
                <div style={{fontSize: 12, color:"red"}}>
                    {this.state.emailError}
                    
                </div>
                
                <div className = "form-group">
                <label>Password   </label>
                <input 
                name="password"
                className="form-control"
                type="password"
                placeholder="*****" 
                value = {this.state.password} 
                onChange= {this.onChangepassword} />
                </div>
                <div style={{fontSize: 12, color:"red"}}>
                    {this.state.passwordError}
                    
                </div>
                <br/>


            <div className="form-group">
                        <input type="submit" value="ADD" className="btn btn-primary" />
                    </div>

            </form> 
            </div>
            
        );
    }
}

/*managerForm.prototypes = {

    addManager: PropTypes.func,


};

const mapStateToProps = (state)=> {

    
    return{
     
      firstName : state.data.managerdetails.firstName,
      lastName : state.data.managerdetails.lastName,
      email : state.data.managerdetails.email,
      password : state.data.managerdetails.password,
      
      
    }
  };
  
  const mapDispachToProps = (dispach) => {

    return {
     
      addManager : (firstName,lastName,email,password) => dispach(reduxActions.addManagerAction({firstName,lastName,email,password})) ,
      
  
  
    }
  }
  
export default connect(mapStateToProps,mapDispachToProps) (managerForm);*/