import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBBtn, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
     <Navbar expand="lg" variant="light" bg="danger" fixed="top">
        <MDBNavbarBrand>
          <strong className="white-text">Navgurukul</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#home">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#students">Team</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#contact">Contact</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon icon="user-circle" size="2x" />
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </Navbar>
      <br />
    </Router>
    );
  }
}

export default NavbarPage;