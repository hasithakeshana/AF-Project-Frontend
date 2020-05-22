import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
//import logo from "./logo.png";

import SignInSide from './components/SignInSide';
import SignUp from './components/SignUp';
import AddItem from './components/AddItem';
import ManagerSignUp from './components/managerSignup';

class App extends Component {
  render() {
    return (
      <MDBContainer>
      <ManagerSignUp/>
      </MDBContainer>
    );
  }
}

export default App;
