import React from 'react';
import { FaBars } from "react-icons/fa";
import { Nav, NavContainer, NavLogoContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, AlienIcon, AboutIcon } from './NavbarElement';


const Navbar = ({toggle}) => {

    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogoContainer>
                        <NavLogo to="/" id="nav-bar">The star wars</NavLogo>
                    </NavLogoContainer>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem >
                            <NavLink to="/" id="nav-item-home">
                                <AlienIcon />
                                People
                            </NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink to="/about" id="nav-item-about">
                                <AboutIcon />
                                About
                            </NavLink>
                        </NavItem>
                        
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar
