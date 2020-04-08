import React, {Component} from 'react';
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import {update_selected_category} from "../store/actions";
import styles from '../App.css'


function NavigationBar(props){

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"> n</span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Category
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {props.state.categories.map(category =>
                                        <li className="dropdown-item" key={category} onClick={()=>{props.select(category)}}>{category}</li>
                                    )}

                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Why Shopping Here</a>
                            </li>
                            <li className="nav-item nav-item mr-5">
                                <a className="nav-link active" href="#">Contact Us</a>
                            </li>


                        </ul>
                        <i className=" nav-link active fas fa-shopping-bag fa-2x  mr-5" style={{color:" #FF007F"}} > </i>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
                        </form>
                    </div>


                </nav>
            </div>
        );

}
const  mapStateToProps = state => {
    return{
        state: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
    select : (category) => dispatch(update_selected_category(category))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavigationBar)