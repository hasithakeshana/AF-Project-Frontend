import React, {useState,useEffect} from "react";
import  image1 from  '../images/ImageSlider/imageSlider1.jpg'
import  image2 from  '../images/ImageSlider/imageSlider2.jpg'
import {connect} from "react-redux";
import '../index.css'

import * as reduxActions from '../common/actions';

function ImageSlider(props) {

    useEffect(() => {

        props.getAllProducts();

        const token = localStorage.getItem('jwtToken');
        if(token === null || token === undefined)
        {

        }
        else{
            const decodedUser = jwt_decode(token);
			console.log(decodedUser);
            //props.getWishList(props.userId);
        }
        
        },[])

    return(
        <center>
        <div>
    <div class="imageSlider" >
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={image1} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={image2} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={image2} alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"> </span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"> </span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            </div>

        </div>
        </center>


    )

}

const mapStateToProps = state => {
    return {
        items: state.items,
        selectedItemsArray : state.selectedItemsArray,
        cartCheck : state.cartCheck,
        role : state.auth.role,
        userId : state.auth.userId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllProducts : () => dispatch(reduxActions.GetAllProducts()),
        getWishList : (userId) => dispatch(reduxActions.GetUserWishListAction(userId)),

    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(ImageSlider)