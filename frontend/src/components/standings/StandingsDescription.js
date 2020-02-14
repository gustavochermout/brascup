import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';

import { Label } from '../Styles';

export default function StandingsDescription() {
    return (
        <ListGroup.Item className="py-1">
            <Row>
                <Col xs={4}>
                    <Label>Time</Label>
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
        </ListGroup.Item>
    )
}