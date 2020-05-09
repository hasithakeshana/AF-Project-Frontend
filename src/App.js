import React, { Component } from "react";
import HomePage from "./components/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./components/Cart/Cart";
import ItemContainer from './components/ItemContainer';
import TestModel from "./components/TestModel";
import ImageSlider from "./components/ImagSlider";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
//import logo from "./logo.png";

import SignInSide from './components/SignInSide';
import SignUp from './components/SignUp';
import RatingsCom from './components/RatingsCom';
import RatingList from './components/RatingsList';
import RatingProgress from './components/RatingProgress';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './components/RatingView';
import CardExample from './components/EcommercePage';

import WishList from './components/WishList';
import Carousel from './components/Carousel';

import ViewItem from './components/ViewItem';

import Particles from 'react-particles-js';

class App extends Component {
  render() {
    return (


        <Router>
        <div>
        <HomePage/>
        <switch>
        <Route path = "/" exact component ={ImageSlider}/>
        <Route path = "/products" exact component ={ItemContainer}/>
        <Route path ="/cart" exact component={Cart}/>
        </switch>
        </div>
        </Router>

    );
  }
}

export default App;
