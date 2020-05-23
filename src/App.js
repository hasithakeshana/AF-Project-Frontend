import React, { Component ,useState,useEffect} from "react";
import HomePage from "./components/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./components/Cart/Cart";
import wishList from "./components/WishList/WishList";
import ItemContainer from './components/ItemContainer';
import TestModel from "./components/TestModel";
import ImageSlider from "./components/ImagSlider";
import viewItem from "./components/ViewItem/ViewItem"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Footer from "./components/Footer";
import login from "./components/SignInSide";
import NotFound from './components/NotFound/PageNotFound';
import PrivateRoute from './PrivateRoutes/PrivateRouter';
import PrivateStoreManagerRoute from "./PrivateRoutes/PrivateRouerForStoreManager";
import jwt_decode from 'jwt-decode';
import {connect} from "react-redux";
import * as reduxActions from './common/actions';
function App(props)  {
  //const [isAuthenticated, setIsAuthenticated] = useState(true);
  useEffect(() => {

    props.getAllProducts();

    // if (Date.now() >= decodedUser.exp * 1000) { // check token expired or not
    //     console.log('expired');
    //   }
    //   else{
    //     console.log('not expired');
    //   }

    const token = localStorage.getItem('jwtToken');
    if(token === null || token === undefined)
    {
        console.log('guest user');
    }
    else{
        const decodedUser = jwt_decode(token);
        console.log(decodedUser);
        props.setUserDetails(decodedUser); // set user using localstorage
        props.getWishList(decodedUser.id); // set userWishList using localstorage
    }
    
    },[])


    return (


        <Router>
        <div>
        <HomePage/>
        <switch>
        <Route path = "/" exact component ={ImageSlider}/>
        <Route path = "/products" exact component ={ItemContainer}/>
       
        <Route path ="/viewItem" exact component={viewItem}/>
        <PrivateRoute exact path="/cart"  component={Cart}></PrivateRoute>
        
        <PrivateRoute exact path="/wishlist" component={wishList}></PrivateRoute>
        <PrivateStoreManagerRoute exact path="/not"  component={NotFound}></PrivateStoreManagerRoute>
        <Route path ="/login" exact component={login}/>
        
        </switch>
        <Footer/>
        </div>
        </Router>

    );
  
}

const mapStateToProps = state => {
  return {
     
  }
}

const mapDispatchToProps = dispatch => {
  return {
     
    getAllProducts : () => dispatch(reduxActions.GetAllProducts()),
    getWishList : (userId) => dispatch(reduxActions.GetUserWishListAction(userId)),
    setUserDetails : (user) => dispatch(reduxActions.loginSuccessAction(user))
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(App)

