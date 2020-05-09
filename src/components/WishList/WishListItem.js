import React, { Component } from "react";
import '../../index.css'
import {connect} from "react-redux";
import {down_count_in_cart, up_count_in_cart} from "../../store/actions";
import * as reduxActions from '../../common/actions';
import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, 

    MDBTableHead, MDBInput, MDBBtn } from "mdbreact";


class WishListItem extends Component{

    constructor(props){
        super(props);
    }

    state = {
        id : '5eb68be4a37f442020387c0e'
    }

    handleDelete = (id) => {

        console.log('id',id);
        //const { getWishList } = this.props; working
         
        //getWishList(this.state.id);
        const { removeItemFromWishList} = this.props;
       
        removeItemFromWishList(this.state.id,id);
       }

    render(){
        return (
            <div>
                <tr>
                    <td className="tableDataPrice"><img  className="border border-success rounded" src={this.props.item.name} style={{width: "150px"}}/></td>
                    <td className="tableDataQ">{this.props.item.price}LKR</td>
                    <td className="tableDataQ">{this.props.item.quantity}</td>
                    <td className="tableDataQ"> <MDBBtn color="primary" size="sm" 
                    
                    onClick={() => this.handleDelete

                        (this.props.item._id)}
                    >
                            X
                    </MDBBtn></td>
                    <td className="tableDataQ"></td>
                </tr>
                <br/>
            </div>
    
    
        );
    }

   


}

const mapStateToProps = state => {
    return {

        state:state
    }
};

const mapDispachToProps = (dispach) => {

    return {
     
      removeItemFromWishList : (userId,wishListOredrId) => dispach(reduxActions.RemoveWishListItemAction(userId,wishListOredrId)) ,
      getWishList : (userId) => dispach(reduxActions.GetUserWishListAction(userId)),
      addToCartFromWishList : (data) => dispach(reduxActions.AddToCartFromWishListAction(data)),
  
  
    }
  }

export default connect(mapStateToProps, mapDispachToProps)(WishListItem)
