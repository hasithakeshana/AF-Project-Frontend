import React from 'react'
import '../../index.css'
import {connect} from "react-redux";
import WishListItem from "./WishListItem";


function WishList(props) {

    console.log(props)
    return(

       <div className="tableContainer" >
           <table className="table">
               <thead className="table">
               <tr>
                   <th scope="col">Product</th>
                   <th scope="col" >Price</th>
                   <th scope="col">Quantity</th>
                   <th scope="col"  >Total</th>
               </tr>
               </thead>
           </table>

           {
               props.cart.map(item=>
                   <WishListItem
                       item={item}
                   > </WishListItem>
               )
           }


               <div  ><p className="total mt-3">Total : {props.cartTotal} LKR</p>
                   <button className="btn btn-sm btn-block btn-outline-dark mb-2">Proceed to Payment</button>
               </div>


           </div>

    )

}


const mapStateToProps = state => {
    return {
        cart: state.cart,
        selectedItemsArray : state.selectedItemsArray,
        cartTotal : state.cartTotal
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(WishList)
