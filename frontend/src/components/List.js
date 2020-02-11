import React from 'react';
import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Line, Button, ButtonHover, Title, Footer } from './Styles';
import ListItem from './ListItem';

const Container = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    background: #FFF;
    border-radius: 4px;
    padding: 15px;
`

const Items = styled.div`
    width: 100%;
    height: 320px;
    overflow-y: auto;
`

export default function List({ title, items, linkToNew }) {
    return (
        <Container>
            <Title>{title}</Title>
            <Line />
            <Items>
                <ListGroup variant="flush">
                    {items.map(item => (
                        <ListItem key={item.id} item={item}/>     
                    ))}
            </ListGroup>
            </Items>
            <Line />
            <Footer>
                <Link to={linkToNew}>
                    <ButtonHover>
                        <Button>Novo</Button>
                    </ButtonHover>
                </Link>
            </Footer>
        </Container>
    )
}