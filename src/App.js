import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
//import logo from "./logo.png";

import SignInSide from './components/SignInSide';
import SignUp from './components/SignUp';
import RatingsCom from './components/RatingsCom';

class App extends Component {
  render() {
    return (
      <MDBContainer>
    <RatingsCom></RatingsCom>
      </MDBContainer>
    );
  }
}

export default App;
