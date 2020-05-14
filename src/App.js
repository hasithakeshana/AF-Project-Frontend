import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
//import logo from "./logo.png";

import SignInSide from './components/SignInSide';
import SignUp from './components/DisplayItems';
import AddItem from './components/AddItem';
import EditUser from './components/EditUser';
import DisplayItem from "./components/DisplayItems";

class App extends Component {
  render() {
    return (
      <MDBContainer>
      <AddItem/>
      </MDBContainer>
    );
  }
}

export default App;
