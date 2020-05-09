import React,{ useState , useEffect } from 'react';

import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import * as reduxActions from '../common/actions';
import Carousal from './Carousel';

function ViewItem({getItemDetails,item}) {

    console.log('itemm',item);

    const [itemId, setItemId] = useState("5e933a529b9e6363f89edebb"); // get from the store

    useEffect(() => {

    
        getItemDetails(itemId);
    
     },[])
    return (
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
    )
}

ViewItem.propTypes = {
  
   
    getItemDetails: PropTypes.func,
    item:PropTypes.object,
   
    
  };
  

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


