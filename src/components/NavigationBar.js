import React from 'react';
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import {update_selected_main_category, update_selected_sub_category} from "../store/actions";


function NavigationBar(props) {

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
                            <a className="nav-link" href="/#">Shop Here <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Men
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {props.state.menCategories.map(subCategory =>
                                    <li className="dropdown-item" onClick={() => {
                                        props.selectSub(subCategory);
                                        props.selectMain("Men")
                                    }} key={subCategory}>{subCategory}</li>
                                )}
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Women
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {props.state.womenCategories.map(subCategory =>
                                    <li className="dropdown-item" onClick={() => {
                                        props.selectSub(subCategory);
                                        props.selectMain("Women")
                                    }} key={subCategory}>{subCategory}</li>
                                )}
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Kids
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {props.state.kidsCategories.map(subCategory =>
                                    <li className="dropdown-item" onClick={() => {
                                        props.selectSub(subCategory);
                                        props.selectMain("Kids")
                                    }} key={subCategory}>{subCategory}</li>
                                )}
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sports
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {props.state.sportsCategories.map(subCategory =>
                                    <li className="dropdown-item" onClick={() => {
                                        props.selectSub(subCategory);
                                        props.selectMain("Sports")
                                    }} key={subCategory}>{subCategory}</li>
                                )}
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Special discounts
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {props.state.discountCategories.map(subCategory =>
                                    <li className="dropdown-item" onClick={() => {
                                        props.selectSub(subCategory);
                                        props.selectMain("SpecialDiscounts")
                                    }} key={subCategory}>{subCategory}</li>
                                )}
                            </div>
                        </li>
                        <li className="nav-item nav-item mr-5">
                            <a className="nav-link active" href="/#">Contact Us</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search"
                               aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>


            </nav>
        </div>
    );

}

const mapStateToProps = state => {
    return {
        state: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectMain: (mainCategory) => dispatch(update_selected_main_category(mainCategory)),
        selectSub: (subCategory) => dispatch(update_selected_sub_category(subCategory))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)