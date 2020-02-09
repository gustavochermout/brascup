import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

export default function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">BrasCup</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Torneios</Nav.Link>
                        <Nav.Link href="/times">Times</Nav.Link>
                        <Nav.Link href="/jogadores">Jogadores</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}