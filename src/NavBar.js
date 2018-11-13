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
import {Link} from 'react-router-dom';

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
    const {activeItem, itemsCount} = this.props;
    return (
      <Navbar color="unique-color-dark" dark expand="md" fixed="top" scrolling>
        <NavbarBrand href="/">
          <strong>The Pirate Shop</strong>
        </NavbarBrand>
        {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick}/>}

        <Collapse isOpen={this.state.collapse} navbar>

          <NavbarNav right>
            <NavItem active={activeItem === ''} onClick={() => this.props.updateNavItem('')}>
              <NavLink to='/'>Shop</NavLink>
            </NavItem>

            <NavItem active={activeItem === 'cart'} onClick={() => this.props.updateNavItem('cart')}>
              <NavLink to='/cart'>Cart
                <span className="badge badge-danger ml-2">{itemsCount > 10 ? '10+' : itemsCount}
                </span>
              </NavLink>
            </NavItem>

            <NavItem>
              <Dropdown>
                <DropdownToggle nav caret>Account</DropdownToggle>
                <DropdownMenu>
                  <Link className="my-dropdown" to='/sign-in' onClick={() => this.props.updateNavItem('sign-in')}>
                    <DropdownItem active={activeItem === 'sign-in'}>
                      Sign In</DropdownItem></Link>
                  <Link className="my-dropdown" to='/sign-up' onClick={() => this.props.updateNavItem('sign-up')}>
                    <DropdownItem active={activeItem === 'sign-up'}>
                      Create an Account</DropdownItem></Link>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
          </NavbarNav>

        </Collapse>
      </Navbar>
    );
  }

}

export default NavbarFeatures