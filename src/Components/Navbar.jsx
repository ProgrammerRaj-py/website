import React, {useState} from 'react';
import { NavLink } from 'react-router-dom'

import { Container } from '../Styles/Default'
import { Navbar, NavbarBrand, NavLogo, NavToggler, NavbarLinks } from '../Styles/Navbar'

const Navbars = () => {
    const [toggle, setToggle] = useState(false)
    const activeToggle = () => setToggle(!toggle)
    return (
        <Container>
            <Navbar> 
                <NavbarBrand>
                    <NavLogo className="nav-logo"><span>R</span>Raj</NavLogo>
                    <NavToggler onClick={activeToggle}>&#9776;</NavToggler>
                </NavbarBrand>
                <NavbarLinks className={toggle ? "toggle" : ""}>
                    <NavLink className="nav-links" exact to="/">Home</NavLink>
                    <NavLink className="nav-links" exact to="/about">About</NavLink>
                    <NavLink className="nav-links" exact to="/portfolio">Portfolio</NavLink>
                    <NavLink className="nav-links" exact to="/blog">Blogs</NavLink>
                    <NavLink className="nav-links" exact to="/contact">Contact</NavLink>
                </NavbarLinks>
            </Navbar>
        </Container>
    )
}
export default Navbars