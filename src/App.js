import React, { Component } from "react";
import HomePage from "./components/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./components/Cart/Cart";
import Rating from "./components/Ratings/RatingsCom";
import ItemContainer from './components/ItemContainer';
import Footer from './components/Footer';
import ImageSlider from "./components/ImagSlider";
import viewItem from "./components/ViewItem/ViewItem"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

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
        <Route path ="/wishlist" exact component={viewItem}/>
        <Route path ="/viewItem" exact component={viewItem}/>
        <Route path ="/wishlist" exact component={Rating}/>

        </switch>
            <Footer/>
        </div>
        </Router>

    );
  }
}

export default App;
