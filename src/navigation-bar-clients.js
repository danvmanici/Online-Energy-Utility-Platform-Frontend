import React from 'react'
import logo from './commons/images/icon.png';
import LoginContainer from "./person/login-container";
import {
    Button,
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

const handleLogout =() => {
    localStorage.clear();
    window.location.pathname="/home";
};

const NavigationBarClient = () => (
    <div>
        <Navbar color="dark" light expand="md">
            <NavbarBrand href="/account">
                <img src={logo} width={"50"}
                     height={"35"} />
            </NavbarBrand>
            <Nav className="mr-auto" navbar>

                <Button color="primary" onClick={handleLogout}>Logout </Button>

            </Nav>
        </Navbar>
    </div>
);

export default NavigationBarClient
