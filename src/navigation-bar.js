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

const NavigationBar = () => (
    <div>
        <Navbar color="dark" light expand="md">
            <NavbarBrand href="/">
                <img src={logo} width={"50"}
                     height={"35"} />
            </NavbarBrand>
            <Nav className="mr-auto" navbar>

                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle style={textStyle} nav caret>
                       Menu
                    </DropdownToggle>
                    <DropdownMenu right >

                        <DropdownItem>
                            <NavLink href="/client">Clients</NavLink>
                        </DropdownItem>
                        <DropdownItem>
                            <NavLink href="/device">Devices</NavLink>
                        </DropdownItem>
                        <DropdownItem>
                            <NavLink href="/sensor">Sensor</NavLink>
                        </DropdownItem>


                    </DropdownMenu>
                </UncontrolledDropdown>

               <LoginContainer></LoginContainer>

            </Nav>
        </Navbar>
    </div>
);

export default NavigationBar
