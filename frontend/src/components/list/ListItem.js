import React from 'react';
import styled from 'styled-components';
import { ListGroup, Col } from 'react-bootstrap';
import { faEdit, faTrash, faFutbol } from "@fortawesome/free-solid-svg-icons";
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
    margin-left: 12px;
    color: #5C5C5C;
`

const AdjustedIcon = styled(FontAwesomeIcon)`
    margin-top: 5px;
`

export default function ListItem({ item, viewIcon }) {
    return (
        <ListGroup.Item className="py-1">
            <Item>
                <Col>
                    <p>{item.nome}</p>
                </Col>
                <Col>
                    <Icons>
                        {viewIcon ? <Icon>
                            <AdjustedIcon icon={faFutbol} />
                        </Icon> : null}
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