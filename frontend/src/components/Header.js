import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <NavLink exact activeClassName="active" to="/">
                <Navbar.Brand>BrasCup</Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink exact activeClassName="active" to="/">Torneios</NavLink>
                    <NavLink exact activeClassName="active" to="/times">Times</NavLink>
                    <NavLink exact activeClassName="active" to="/jogadores">Jogadores</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}