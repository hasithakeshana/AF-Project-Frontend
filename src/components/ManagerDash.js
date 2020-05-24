import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import managerForm from './managerSignup';
import AddItem from './AddItem';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class ManagerDash extends React.Component{


    render() {
        return(

            
            
            <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              
            </a>
            <div className="navbar-brand">Manager Panel</div>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/AddItem" className="nav-link">Add Item</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/AddItem" component={AddItem} />
        </div>
      </Router>
           
      
            
        )
    }
}