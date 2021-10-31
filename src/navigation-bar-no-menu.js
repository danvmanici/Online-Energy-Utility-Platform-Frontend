import React from 'react'
import logo from './commons/images/icon.png';
import LoginContainer from "./person/login-container";
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
            <NavbarBrand href="/home">
                <img src={logo} width={"50"}
                     height={"35"} />
            </NavbarBrand>
            <Nav className="mr-auto" navbar>



                <LoginContainer></LoginContainer>

            </Nav>
        </Navbar>
    </div>
);

export default NavigationBarNoMenu
