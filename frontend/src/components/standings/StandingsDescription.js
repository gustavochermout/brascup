import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { Label } from '../Styles';

export default function StandingsDescription() {
    return (
        <Row>
            <Col xs={4}>
                <Label>Posição</Label>
            </Col>
            <Col>
                <Label>PTS</Label>
            </Col>
            <Col>
                <Label>J</Label>
            </Col>
            <Col>
                <Label>V</Label>
            </Col>
            <Col>
                <Label>E</Label>
            </Col>
            <Col>
                <Label>D</Label>
            </Col>
            <Col>
                <Label>GP</Label>
            </Col>
            <Col>
                <Label>GC</Label>
            </Col>
            <Col>
                <Label>SG</Label>
            </Col>
        </Row>
    )
}