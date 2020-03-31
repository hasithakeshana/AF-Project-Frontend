import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
//import logo from "./logo.png";

import SignInSide from './components/SignInSide';

class App extends Component {
  render() {
    return (
      <MDBContainer>
       <SignInSide></SignInSide>
      </MDBContainer>
    );
  }
}

export default App;
