import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from "./logo.png";

//import SignInSide from './components/SignInSide';
//import SignUp from './components/SignUp';
import ManagerForm from './components/managerForm';
import AddCat from './components/addCatergory';
import NavAdmin from './components/navAdminBar';

class App extends Component {
  render() {
    return (
      <MDBContainer>
        <NavAdmin></NavAdmin>
      </MDBContainer>
    );
  }
}

export default App;
