import React, { Component } from "react";
import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn } from "mdbreact";

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as reduxActions from '../common/actions';

class eCommercePage extends Component {



  constructor(props){
    super(props);
    
   

}

state = {
  data: [
      {
        src: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg",
        title: "iPhone",
        subTitle: "Apple",
        color: "White",
        price: "800",
        qty: "2"
      },
      {
        src: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/6.jpg",
        title: "Headphones",
        subTitle: "Sony",
        color: "Red",
        price: "200",
        qty: "2"
      },
      {
        src: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg",
        title: "iPad Pro",
        subTitle: "Apple",
        color: "Gold",
        price: "600",
        qty: "1"
      },
    ],
    columns: [
      {
        label: '',
        field: 'img',
      },
      {
        label: <strong>Product</strong>,
        field: 'product'
      },
      {
        label: <strong>Color</strong>,
        field: 'color'
      },
      {
        label: <strong>Price</strong>,
        field: 'price'
      },
      {
        label: <strong>QTY</strong>,
        field: 'qty'
      },
      {
        label: <strong>Amount</strong>,
        field: 'amount'
      },
      {
        label: '',
        field: 'button'
      }
  ],
  id : '5e8481268ec4322c1965d6ff'
}

componentDidMount(){

  const { getWishList , wishList} = this.props;
  
  getWishList(this.state.id);

  console.log('wishList',wishList);
}

handleDelete = (id) => {

 console.log('id',id);
 //const { getWishList } = this.props; working
  
 //getWishList(this.state.id);
 const { removeItemFromWishList} = this.props;

 removeItemFromWishList(this.state.id,id);
}


render() {
  const { wishList} = this.props;
  console.log('wwwwwwwwwwwwww',wishList);

  const lists = Array.from(wishList);
  console.log('lists',lists);

    const rows = [];
    const { columns, data } = this.state;

    lists.map(row => {
      return rows.push(
        {
        'img': <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg" alt="" className="img-fluid z-depth-0" />,
        'product': [<h5 className="mt-3" key={new Date().getDate + 1}><strong>{row.itemName}</strong></h5>, <p key={new
          Date().getDate} className="text-muted">{row.itemName}</p>],
        'color': row.quantity,
        'price': `$${row.price}`,
        'qty':
        <MDBInput type="number" default={row.qty} className="form-control" style={{ width: "100px" }} />,
        'amount': <strong>${row.qty * row.price}</strong>,
        'button':
        <MDBTooltip placement="top">
            <MDBBtn color="primary" size="sm" onClick={() => this.handleDelete(row._id)}>
                X
            </MDBBtn>
            <div>Remove item</div>
        </MDBTooltip>
        }
      )
    });

    return (
    <MDBRow className="my-2" center>
      <MDBCard className="w-100">
        <MDBCardBody>
          <MDBTable className="product-table">
            <MDBTableHead className="font-weight-bold" color="mdb-color lighten-5" columns={columns} />
            <MDBTableBody rows={rows} />
          </MDBTable>
        </MDBCardBody>
      </MDBCard>
    </MDBRow>
    );
  }
}


eCommercePage.propTypes = {
  removeItemFromWishList : PropTypes.func,
  getWishList: PropTypes.func,
  wishList : PropTypes.array
  
};



const mapStateToProps = (state)=> {


  console.log('state',state.auth.wishList);
  return{
   
    wishList : state.auth.wishList
    
    
  }
};

const mapDispachToProps = (dispach) => {

  return {
   
    removeItemFromWishList : (userId,wishListOredrId) => dispach(reduxActions.RemoveWishListItemAction(userId,wishListOredrId)) ,
    getWishList : (userId) => dispach(reduxActions.GetUserWishListAction(userId)),


  }
}

export default connect(mapStateToProps,mapDispachToProps) (eCommercePage);