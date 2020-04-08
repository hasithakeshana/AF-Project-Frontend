import React from 'react';
import {connect} from 'react-redux'
import NavigationBar from "./NavigationBar";


function HomePage(props) {


    return (
        <div>
        <NavigationBar> </NavigationBar>
            <h1> {props.state.selectedCategory}</h1>
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