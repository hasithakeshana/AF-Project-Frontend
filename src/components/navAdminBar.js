import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class navBarAdmin extends React.Component{


    render() {
        return(

            
            
            
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="#">Admin</a>
                </div>
                <ul className="nav navbar-nav">
                <li className="active"><a href="#">Add Manager</a></li>
                <li><a href="#">Add Catergory</a></li>
                <li><a href="#">Add Item</a></li>
                </ul>
             <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Out</a></li>
      
            </ul>
        </div>
    </nav>
        )
    }
}