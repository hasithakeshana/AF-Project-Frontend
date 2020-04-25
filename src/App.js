import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
//import logo from "./logo.png";

import SignInSide from './components/SignInSide';
import SignUp from './components/SignUp';
import RatingsCom from './components/RatingsCom';
import RatingList from './components/RatingsList';
import RatingProgress from './components/RatingProgress';
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './components/RatingView';
import CardExample from './components/EcommercePage';

import WishList from './components/WishList';
import Carousel from './components/Carousel';

import ViewItem from './components/ViewItem';

import Particles from 'react-particles-js';

class App extends Component {
  render() {
    return (
   <RatingsCom></RatingsCom>

      
    );
  }
}

export default App;
