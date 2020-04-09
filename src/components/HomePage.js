import React from 'react';
import {connect} from 'react-redux'
import NavigationBar from "./NavigationBar";
import Header from "./Header";
import ImageSlider from "./ImagSlider";


function HomePage(props) {


    return (
        <div>
            <Header/>
        <NavigationBar> </NavigationBar>
            <h1> {props.state.selectedMainCategory}</h1>
            <h1> {props.state.selectedSubCategory}</h1>
            <ImageSlider/>

        </div>

    )

}

const mapStateToProps = state => {
    return {
        state : state
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)