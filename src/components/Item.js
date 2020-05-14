import React, {useEffect, useState} from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {MDBCol, MDBMask, MDBView, MDBBtn } from "mdbreact";
import '../index.css'
import {connect} from "react-redux";
import {add_to_total, cart_check_true, check_cart, update_cart, update_cart_count} from "../store/actions";
import  * as ACTIONS from "../common/actions";
import TestModel from "./TestModel";
import img1 from "../images/fashion5.jpg"

function Item(props) {

   /* const {id,images,description,price,name,selectedcategory,selectedSubCategory} = props;*/
    const{item} = props
    const [inCart , setIncart] = useState(false);

    const [userId , setUserId] = useState("5eb68be4a37f442020387c0e");

     const allIn =(item) => {
        if(item.cartIn===false) {
            props.updateCart(item);
            props.updateCartCount();
            props.updateTotalInCart(item);
            props.checkCart(item);

        }else{
            props.updateCartCheckTrue();
            return (
                <diV> <TestModel/></diV>
            )
        }

    }

    const addWish = (item) =>{

        props.addToWishList({userId,item});
    }

    return (

        <MDBCol lg="4" md="1" className="" >
        <MDBView hover className="rounded z-depth-4 mb-3 item" waves>
          <img
            className="img-fluid "
            src= {item.images[0]}
            alt=""
          />
          <MDBMask overlay="white-slight" />
        </MDBView>

          <h6 className=" mb-3 itemIcons" >
              {item.name}
          </h6>
            <h6 className=" mb-3 itemIcons" >
             Price :   {item.price}LKR
            </h6>
            <MDBBtn className="fas fa-heart fa-2x itemIcons mb-3" 
            
            onClick={()=>{
                addWish(item)
 
             }}
            />
            <MDBBtn className="fal fa-shopping-bag fa-2x mb-3"  onClick={()=>{
               allIn(item)

            }}/>


      </MDBCol>

    )
}
const mapStateToProps = state => {
    return {
        items: state.items,
        cart :state.cart,
        selectedItemsArray : state.selectedItemsArray
    }
}

const mapDispatchToProps = dispatch => {
    return {

        updateCart : (item)=>dispatch( update_cart(item)),
        updateCartCount : () =>dispatch(update_cart_count()),
        updateTotalInCart : (item) => dispatch(add_to_total(item)),
        updateCartCheckTrue : () => dispatch(cart_check_true()),
        checkCart :(item) => dispatch(check_cart(item)),
        addToWishList : (item) => dispatch(ACTIONS.itemAddToWishlist(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)

// itemAddToWishlist
