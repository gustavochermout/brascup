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

const MessageEmptyItems = styled.p`
    color: #808080;
    font-size: 14px; 
    display: flex;
    justify-content: center;
`

export default function List({ title, items, linkToNew, viewIcon, loading, entity, setItems }) {
    return (
        <ContainerList>
            <Title>{title}</Title>
            <Line />
            <Items>
                <ListGroup variant="flush">
                    {(items.length > 0) ? 
                        items.map(item => (
                            <ListItem 
                                key={item.id} 
                                items={items} 
                                item={item} 
                                viewIcon={viewIcon} 
                                entity={entity}
                                setItems={setItems}
                            />     
                        )) :  
                        <ListGroup.Item className="py-1">
                            <MessageEmptyItems>{loading ? 'Carregando...' : 'Clique em "Novo" para começar! :)'}</MessageEmptyItems>
                        </ListGroup.Item>}
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