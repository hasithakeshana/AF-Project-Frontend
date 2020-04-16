import React from 'react'
import logo from '../images/logo.png'
import  '../index.css'
import {connect} from "react-redux";
import {Link} from 'react-router-dom'
function Header(props) {

    return(
        <div>


            <nav class="navbar navbar-light bg-light center" style={{"height":"55px"}}>
                <p>Hotline : 0771792083</p>
                <img src={logo} alt = ""class = "imageCenter"/>
                <Link to="/cart" style={{ textDecoration: 'none' }}>
                <i className=" nav-link active fas fa-shopping-bag fa-lg  " style={{color: " #FF007F", fontSize:"8"}}> <sup>{props.count}</sup></i>
                </Link>
                <i className=" nav-link active fas fa-heart fa-lg  "style={{color: " #FF007F", fontSize:"8"}}>0</i>
                <i className=" nav-link active fas fa-user fa-lg " style={{color: " #FF007F"}}> </i>
            </nav>



        </div>


    )
}

const mapStateToProps = state => {
    return {
       count : state.itemInCartCount

    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)