import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import styled from 'styled-components';

export const Label = styled.label`
    font-size: 15px;
    color: #444;
    margin-bottom: 8px;
`

export default function StandingsItem({ item }) {
    return (
        <ListGroup.Item className="py-1">
            <Row>
                <Col xs={4}>
                    <Label>{`${item.id}] ${item.nome}`}</Label>
                </Col>
                <Col>
                    <Label>{item.pontos}</Label>
                </Col>
                <Col>
                    <Label>{item.partidas}</Label>
                </Col>
                <Col>
                    <Label>{item.vitorias}</Label>
                </Col>
                <Col>
                    <Label>{item.empates}</Label>
                </Col>
                <Col>
                    <Label>{item.derrotas}</Label>
                </Col>
                <Col>
                    <Label>{item.golsFeitos}</Label>
                </Col>
                <Col>
                    <Label>{item.golsSofridos}</Label>
                </Col>
                <Col>
                    <Label>{item.saldoGols}</Label>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}