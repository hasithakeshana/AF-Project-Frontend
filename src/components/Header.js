import React from 'react'
import logo from '../images/logo.png'
import  '../index.css'
function Header() {

    return(
        <div>


            <nav class="navbar navbar-light bg-light center" style={{"height":"55px"}}>
                <p>Hotline : 0771792083</p>
                <img src={logo} class = "imageCenter"></img>
                <i className=" nav-link active fas fa-shopping-bag fa-lg  " style={{color: " #FF007F"}}> </i>
                <i className=" nav-link active fas fa-heart fa-lg  "style={{color: " #FF007F"}}> </i>
                <i className=" nav-link active fas fa-user fa-lg " style={{color: " #FF007F"}}> </i>
            </nav>



        </div>


    )
}

export default Header;