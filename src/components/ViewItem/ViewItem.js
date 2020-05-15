import React,{ useState , useEffect } from 'react';

import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import * as reduxActions from '../../common/actions';
import Carousal from './Carousel';
import queryString from 'query-string';
import Rating from '../Ratings/RatingsCom';


function ViewItem({getItemDetails,item,location, history}) {

    console.log('itemm',item);

    const [pID, setId] = useState("");

    useEffect(() => {
    console.log('locationnn', location.search);
    const values = queryString.parse(location.search);
    console.log('queryyyyyyyy', values.productId); // get id of product
    setId(values.productId);
    getItemDetails(values.productId); // SAGA ACTION
    // const params = new URLSearchParams(location.search);
  }, [location]);

   
    return (
        <div>
        <div>

    <h4 class="alert-heading"> {item.name} </h4>
            <Carousal></Carousal>
            <br></br>
            <br></br>

          

            <p className="dark-grey-text">
         {item.description}
        </p>
        <br></br>
            

        
        <h5 class="alert-heading"> LKR {item.price}</h5>

        <br></br>
           

        <select class="form-control form-control-sm">
                <option>Small</option>
                 <option>Large</option>
                 <option>Extra-Large</option>
            </select>

<br></br>
<br></br>
            <button type="button" class="btn btn-outline-danger">Add To Cart</button>
            
        </div>
        <Rating product={item._id}></Rating>
        </div>
    )
}

  
const mapStateToProps = (state)=> {

  
    return{
    
      item : state.item.currentSelectedItem,
    }
  };
  
  
  const mapDispachToProps = (dispach) => {
  
    return {
     
     
     getItemDetails : (ProductId) => dispach(reduxActions.GetViewItemAction(ProductId)),
  
  
    }
  }
  
  export default connect(mapStateToProps,mapDispachToProps) (ViewItem);


