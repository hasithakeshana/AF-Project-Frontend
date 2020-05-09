import React, { Component } from "react";
import '../../index.css'
import {connect} from "react-redux";
import WishListItem from "./WishListItem";
import * as reduxActions from '../../common/actions';

class WishList extends Component {
    constructor(props){
        super(props);
    }
    state = {
        id : '5eb68be4a37f442020387c0e'
    }

    componentDidMount(){

        const { getWishList , wishList} = this.props;
        
        getWishList(this.state.id);
      
        console.log('wishList',wishList);
      }

    //console.log(props)

    render(){
    const { wishList} = this.props;
  console.log('wwwwwwwwwwwwww',wishList);

  const lists = Array.from(wishList);
  console.log('lists',lists);

        return(

            <div className="tableContainer" >
                <table className="table">
                    <thead className="table">
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col" >Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Remove</th>
                        <th scope="col">AddtoCart</th>
                    </tr>
                    </thead>
                </table>
     
                {
                    lists.map(item=>
                        <WishListItem
                            item={item}
                        > </WishListItem>
                    )
                }
     
     
                    <div  ><p className="total mt-3">Total : {this.props.cartTotal} LKR</p>
                        <button className="btn btn-sm btn-block btn-outline-dark mb-2">Proceed to Payment</button>
                    </div>
     
     
                </div>
     
         );

    }
    

}


const mapStateToProps = state => {

    return {
        cart: state.cart,
        selectedItemsArray : state.selectedItemsArray,
        cartTotal : state.cartTotal,
        wishList : state.auth.wishList
    }
}

const mapDispachToProps = (dispach) => {

    return {
     
      removeItemFromWishList : (userId,wishListOredrId) => dispach(reduxActions.RemoveWishListItemAction(userId,wishListOredrId)) ,
      getWishList : (userId) => dispach(reduxActions.GetUserWishListAction(userId)),
      addToCartFromWishList : (data) => dispach(reduxActions.AddToCartFromWishListAction(data)),
  
  
    }
  }

export default connect(mapStateToProps, mapDispachToProps)(WishList)
