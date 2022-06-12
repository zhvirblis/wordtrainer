import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Item from '.';
import './styles.css';

export default function ItemComponent({term, defenition, example, transcription, ...others}: Item) {
    return (
        <div className="item">
            <Row className="item__inputs">
                <Col>
                    <Form.Control type="text" placeholder="Term" value={term} />
                </Col>
                <Col>
                    <Form.Control type="text" placeholder="Transcription" value={transcription} />
                </Col>
                <Col>
                    <Form.Control type="text" placeholder="Defenition" value={defenition} />
                </Col>
            </Row>
            <Form.Control as="textarea" placeholder="Example" aria-label="Example" value={example} />
        </div>
    );
}