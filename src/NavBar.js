import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarFeatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  render() {
    return (
      <Router>
        <Navbar color="unique-color-dark" dark expand="md" fixed="top" scrolling>
          <NavbarBrand href="/">
            <strong>The Pirate Shop</strong>
          </NavbarBrand>
          { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
          <Collapse isOpen = { this.state.collapse } navbar>
            <NavbarNav right>
              <NavItem active>
                <NavLink to="#">Shop</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">Cart</NavLink>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>Account</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="#">Sign In</DropdownItem>
                    <DropdownItem href="#">Create an Account</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </Router>
    );
  }
}

export default NavbarFeatures