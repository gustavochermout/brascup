import React from 'react';
import styled from 'styled-components';
import { ListGroup, Col } from 'react-bootstrap';
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = styled.div`
    width: 100%;
    display: flex;
    height: 30px;
    margin-top: 5px;
    margin-left: -20px;
`

const Icons = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 2px;
    margin-left: 40px;
`

const Icon = styled.div`
    cursor: pointer;
    margin-left: 10px;
    color: #5C5C5C;
`

export default function ListItem({ item }) {
    return (
        <ListGroup.Item className="py-1">
            <Item>
                <Col>
                    <p>{item.nome}</p>
                </Col>
                <Col>
                    <Icons>
                        <Icon>
                            <FontAwesomeIcon icon={faEdit} />
                        </Icon>
                        <Icon>
                            <FontAwesomeIcon icon={faTrash} />
                        </Icon>
                    </Icons>
                </Col>
            </Item>    
        </ListGroup.Item> 
    )
}