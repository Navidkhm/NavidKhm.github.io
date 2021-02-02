import {Navbar,NavDropdown,Nav} from 'react-bootstrap';
import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div className='menu'>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark"  sticky='top'>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand href="/">آسان اکسچنج</Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#features">خانه</Nav.Link>
                    <Nav.Link href="#pricing">بازارها</Nav.Link>
                    <NavDropdown title="معامله" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#features">کارمزد</Nav.Link>
                    
                    <NavDropdown title="راهنما" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#pricing">بلاگ</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">ورود | ثبت نام</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes" className='mode'>
                        mode
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Menu;

