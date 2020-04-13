import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css.js';


export default class managerForm extends React.Component {

    state = {

        firstName: "",
        lastName: "",
        //userName: "",
        email: "",
        password: "",
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({

        firstName: "",
        lastName: "",
       // userName: "",
        email: "",
        password: ""

        });
        
    }

    render() {
        return (
            
             
<div>
        
                

            <form>
                
                <div className="form-control">
                <label>First Name   </label>
                <input 
                name="firstName"
                placeholder="First Name" 
                value = {this.state.firstName} 
                onChange= {e => this.change(e)}/>
                </div>

                <div className = "form-control">
                <label>Last Name   </label>
                <input 

                name="lastName"
                placeholder="Last Name" 
                value = {this.state.lastName} 
                onChange= {e => this.change(e)}/>
                </div>
                
               

                <div className = "form-control">
                <label>Email  </label>
                <input 
                name="email"
                placeholder="Email" 
                value = {this.state.email} 
                onChange= {e => this.change(e)}/>
                </div>
                
                <div className = "form-control">
                <label>Password   </label>
                <input 
                name="password"
                type="password"
                placeholder="Password" 
                value = {this.state.password} 
                onChange= {e => this.change(e)} />
                </div>
                <br/>

                <button className="btn btn-warning" onClick={ e => this.onSubmit(e)}>Submit</button>
                
            </form>

            </div>
            
        );
    }
}

