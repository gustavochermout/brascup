import React from 'react';
import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { ContainerList, Line, Button, ButtonHover, Title, Footer } from './../Styles';
import ListItem from './ListItem';

const Items = styled.div`
    width: 100%;
    height: 320px;
    overflow-y: auto;
`

export default function List({ title, items, linkToNew }) {
    return (
        <ContainerList>
            <Title>{title}</Title>
            <Line />
            <Items>
                <ListGroup variant="flush">
                    {items ? items.map(item => (
                        <ListItem key={item.id} item={item}/>     
                    )) : null}
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
        </ContainerList>
    )
}