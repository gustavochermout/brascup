import React from 'react';
import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';

import ListItem from '../components/ListItem';

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

const Line = styled.hr`
    border-top: 1px solid #B0B0B0;
`

const Title = styled.p`
    font-size: 20px;
    height: 10px;
`

const Button = styled.button`
    border: 0;
    border-radius: 2px;
    width: 200px;
    height: 42px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: bold;
    background: #30A24A;
    color: #FFF;
    cursor: pointer;
`

const ButtonHover = styled.div`
    &:hover ${Button} {
        background: #56B566;
    }
`

const Items = styled.div`
    width: 100%;
    height: 320px;
    overflow-y: auto;
`

const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

export default function List({ title, items }) {
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
                <ButtonHover>
                    <Button>Novo</Button>
                </ButtonHover>
            </Footer>
        </Container>
    )
}