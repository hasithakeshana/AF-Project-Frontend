import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css.js';
//import * as Yup from "yup";

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
            password : ''

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

    onSubmit(e){
        e.preventDefault();

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

    //const validationSchema =Yup.object({
     //   firstName: Yup.string().required("Please fill the field")
   // })

    render() {
        return (
            
             
<div>
        
                

            <form onSubmit={this.onSubmit} id="mForm">
                
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
                <br/>


            <div className="form-group">
                        <input type="submit" value="ADD" className="btn btn-primary" />
                    </div>

            </form> 
            </div>
            
        );
    }
}

