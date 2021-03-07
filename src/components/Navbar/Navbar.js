import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import logo from '../../images/logo.png'
import './Navbar.css'

const WebNavbar = () => {
    return (
        <Navbar bg="light" expand="md" sticky="top">
            <div className="logo">
                <a href="/" className="title"><img src={logo} style={{width:"130px"}}></img></a>
            </div>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/products">Products</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default WebNavbar