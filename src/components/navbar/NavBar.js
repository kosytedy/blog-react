import React, { Component, useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav, NavLink } from 'reactstrap';

class NavBar extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            navbarIsOpen: false,

        }
    }
    
    render() { 
        const toggle = () => this.setState({navbarIsOpen:!this.state.navbarIsOpen});

        return ( 
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">MyForum</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={this.state.navbarIsOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/posts">Posts</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/register">Register</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/login">Login</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
 
export default NavBar;