import React, { Component } from "react";
import HomePage from "./components/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./components/Cart/Cart";
import ItemContainer from './components/ItemContainer';
import ImageSlider from "./components/ImagSlider";
import viewItem from "./components/ViewItem/ViewItem"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Footer from "./components/Footer";
import Discount from "./components/Discount/Discount";
import SelectedProducts from "./components/SelectedProducts";

class App extends Component {
  render() {
    return (


        <Router>
            <div>
                <HomePage/>
                    <switch>
                        <Route path = "/" exact component ={ImageSlider}/>
                        <Route path="/s" exact component={SelectedProducts}/>
                        <Route path = "/products" exact component ={ItemContainer}/>
                        <Route path ="/cart" exact component={Cart}/>
                        <Route path ="/wishlist" exact component={viewItem}/>
                        <Route path ="/viewItem" exact component={viewItem}/>
                        <Route path="/addDiscount" exact component={Discount}/>
                    </switch>
                <Footer/>
            </div>
        </Router>

    );
  }
}

export default App;
