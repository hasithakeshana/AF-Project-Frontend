import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
//import logo from "./logo.png";

import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import SignInSide from './components/SignInSide';
import SignUp from './components/SignUp';
import AddItem from './components/AddItem';
import ManagerDash from './components/ManagerDash';
import AdminDash from './components/AdminDash';
import AddCategory from './components/addCategory';
import ManagerSignUp from './components/managerSignup';
import NavBar from './components/navBar';

class App extends Component {
  render() {
    return (
      <MDBContainer>
      <AdminDash/>
      </MDBContainer>
    );
  }
}

export default App;
