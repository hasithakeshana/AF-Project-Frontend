import React, {useEffect} from 'react'
import logo from '../images/LOGO.png'
import  '../index.css'
import {connect} from "react-redux";
import {Link} from 'react-router-dom'
function Header(props) {
    let x;
    useEffect(()=>{
        props.cart.map(item=>{
            x++;
        })

    },[props.cart])

    return(
        <div>


            <nav class="navbar navbar-light bg-light center" style={{"height":"90px"}}>
                <p>Hotline : 0771792083</p>
                <img src={logo} alt = ""class = "imageCenter"/>
                <Link to="/cart" style={{ textDecoration: 'none' }}>
                <i className=" nav-link active fas fa-shopping-bag fa-lg  " style={{color: " #FF007F", fontSize:"8"}}> <sup>{props.count}</sup></i>
                </Link>
                <Link to="/wishlist" style={{ textDecoration: 'none' }}>
                <i className=" nav-link active fas fa-heart fa-lg  "style={{color: " #FF007F", fontSize:"8"}}> <sup>{x}</sup></i>
                </Link>
                <i className=" nav-link active fas fa-user fa-lg " style={{color: " #FF007F"}}> </i>
            </nav>



        </div>


    )
}

const mapStateToProps = state => {
    return {
       count : state.itemInCartCount,
       wishlistCount : state.auth.wishListCount,
        cart:state.cart

    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
