import React from 'react';
import "./Header.css";
import { Collapse, Nav, NavLink, Navbar, NavbarBrand, NavItem, NavbarToggler} from 'reactstrap'; 
import { NavLink as RRNavLink } from 'react-router-dom';
 

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }


  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      
         <div className="site-header">
        

        <Navbar color="full light" light expand="md">
          <NavbarBrand>
          <NavLink className="logo-text" to="/" tag={RRNavLink}>Better Email Copy</NavLink> 
          
          </NavbarBrand>
          {/* <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav className="ml-auto" navbar>

              <NavItem>
              <NavLink className="menu-links" to="/about" activeClassName="active" tag={RRNavLink}>Company</NavLink> 
              </NavItem>
              <NavItem>
              <NavLink className="menu-links" to="/privacy" activeClassName="active" tag={RRNavLink}>Privacy</NavLink> 
              </NavItem>
              </Nav>

          </Collapse> */}
        
        </Navbar>
      </div>
      

    );
  }
}


export default Header;

