import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import * as reduxActions from '../../common/actions';
import queryString from 'query-string';
import ReactLoading from 'react-loading';
import Rating from '../Ratings/RatingsCom';
import {forEach} from "react-bootstrap/cjs/ElementChildren";


function ViewItem({getItemDetails, item, location, history}) {

    const [pID, setId] = useState("");

    useEffect(() => {
        const values = queryString.parse(location.search);
        setId(values.productId);
        getItemDetails(values.productId); // SAGA ACTION
        // const params = new URLSearchParams(location.search);
    }, [location]);

    if(Object.entries(item).length !== 0){
        console.log(item)
        return (

            <div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={"http://localhost:4000/uploads/"+   item.images[0].productImage} alt="First slide"/>
                        </div>
                        {
                                item.images.slice(1).map(image =>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={"http://localhost:4000/uploads/"+image.productImage}  alt=""/>
                                    </div>
                                )
                        }

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <Rating product={item._id}/>

            </div>
        )

    }else{

        return(
            <ReactLoading type={"spinningBubbles"} color={"#e75480"} height={'20%'} width={'20%'} />
        );

    }

}


const mapStateToProps = (state) => {


    return {

        item: state.item.currentSelectedItem,
    }
};


const mapDispachToProps = (dispach) => {

    return {


        getItemDetails: (ProductId) => dispach(reduxActions.GetViewItemAction(ProductId)),


    }
}

export default connect(mapStateToProps, mapDispachToProps)(ViewItem);


