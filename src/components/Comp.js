import React from 'react'

import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
function Comp() {
    return (
        <MDBCol lg="4" md="15" className="mb-lg-0 mb-4">
        <MDBView hover className="rounded z-depth-2 mb-4" waves>
          <img
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg"
            alt=""
          />
          <MDBMask overlay="white-slight" />
        </MDBView>
        <a href="#!" className="pink-text">
          <h6 className="font-weight-bold mb-3">
            <MDBIcon icon="map" className="pr-2" />
            Adventure
          </h6>
        </a>
        <h4 className="font-weight-bold mb-3">
          <strong>Title of the news</strong>
        </h4>
        <p>
          by <a href="#!" className="font-weight-bold">Billy Forester</a>,
          15/07/2018
        </p>
        <p className="dark-grey-text">
          Nam libero tempore, cum soluta nobis est eligendi optio cumque
          nihil impedit quo minus id quod maxime placeat facere possimus
          voluptas.
        </p>
        <MDBBtn color="pink" rounded size="md">
          Read more
        </MDBBtn>
      </MDBCol>
    )
}

export default Comp;
