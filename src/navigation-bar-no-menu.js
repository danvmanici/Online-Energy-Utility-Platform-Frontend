import React from 'react'
import logo from './commons/images/icon.png';
import LoginContainer from "./person/login-container";
import SignUpContainer from "./person/signup-container";
import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavLink,
    UncontrolledDropdown
} from 'reactstrap';

const textStyle = {
    color: 'white',
    textDecoration: 'none'
};

const NavigationBarNoMenu = () => (
    <div>
        <Navbar color="dark" light expand="md">
            <NavbarBrand href="/">
                <img src={logo} width={"50"}
                     height={"35"} />
            </NavbarBrand>
            <Nav className="mr-auto" navbar>



                <LoginContainer></LoginContainer>
                <SignUpContainer></SignUpContainer>
            </Nav>
        </Navbar>
    </div>
);

export default NavigationBarNoMenu
