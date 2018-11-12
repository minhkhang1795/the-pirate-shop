import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'mdbreact';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class NavbarFeatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
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
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick}/>}

          <Collapse isOpen={this.state.collapse} navbar>

            <NavbarNav right>
              <NavItem active={this.props.currentItem === 'shop'} onClick={() => this.props.updateItem('shop')}>
                <NavLink to="/">Shop</NavLink>
              </NavItem>

              <NavItem active={this.props.currentItem === 'cart'} onClick={() => this.props.updateItem('cart')}>
                <NavLink to="/cart">Cart</NavLink>
              </NavItem>

              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>Account</DropdownToggle>
                  <DropdownMenu>
                    <Link className="my-dropdown" to="/sign-in" onClick={() => this.props.updateItem('signin')}>
                      <DropdownItem active={this.props.currentItem === 'signin'}>
                        Sign In</DropdownItem></Link>
                    <Link className="my-dropdown" to="/sign-up" onClick={() => this.props.updateItem('signup')}>
                      <DropdownItem active={this.props.currentItem === 'signup'}>
                        Create an Account</DropdownItem></Link>
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