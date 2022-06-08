import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Mountain from '../app/assets/img/mountain.png';
import UserLoginForm from '../user/UserLoginForm';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='dark' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <img src={Mountain} alt='mountain logo' className='float-start' width="50px" height='50px' />
            </NavbarBrand>
            
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='mx-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link me-2' to='/'>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link me-2' to='/directory'>
                            Trails
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link me-2' to='/about'>
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link me-2' to='/contact'>
                            Contact
                        </NavLink>
                    </NavItem>
                </Nav>
                <UserLoginForm />
            </Collapse>
        </Navbar>
    );
};

export default Header;
