import React, {useState} from 'react'
import '../../index.css'
import {connect} from "react-redux";
import {down_count_in_cart, up_count_in_cart} from "../../store/actions";


function CartItem(props) {


    const {item} = props


    return (
        <div>
            <tr>
                <td className="tableDataPrice"><img  className="border border-success rounded" src={"http://localhost:4000/uploads/"+item.images[0].productImage} style={{width: "80px"}}/></td>
                <td className="tableDataQ">{props.item.price}LKR</td>
                <td className="tableDataTotal">
                    <i onClick={() => props.upCount(props.item.itemID)}
                       className="fas fa-plus-circle cartButton"/> {props.item.itemID}
                    <i onClick={() => props.downCount(props.item.itemID)}
                       className="fas fa-minus-circle cartButton"/></td>
                <td className="tableData">{props.item.price * props.item.quantityInCart}</td>
            </tr>
            <br/>
        </div>


    )


}

const mapStateToProps = state => {
    return {

        state:state
    }
};

const mapDispatchToProps = dispatch => {
    return {

        upCount: (itemId) => dispatch(up_count_in_cart(itemId)),
        downCount: (itemId) => dispatch(down_count_in_cart(itemId))

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
