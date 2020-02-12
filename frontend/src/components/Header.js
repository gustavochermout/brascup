import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
    color: #808080; 
    margin-right: 15px; 

    &:hover { 
        color: #404040; 
        text-decoration: none;
    }
`

export default function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <NavLink exact activeClassName="active" to="/">
                <Navbar.Brand>BrasCup</Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <StyledNavLink exact activeClassName="active" to="/">Torneios</StyledNavLink>
                    <StyledNavLink exact activeClassName="active" to="/times">Times</StyledNavLink>
                    <StyledNavLink exact activeClassName="active" to="/jogadores">Jogadores</StyledNavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}