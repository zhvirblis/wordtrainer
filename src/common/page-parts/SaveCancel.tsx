import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function SaveCancel() {
    const nav = useNavigate();
    return (
        <div className="save-cancel">
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        <Card.Body>
                            <Button onClick={() => {nav(-1)}} variant="light">
                                Cancel
                            </Button>
                            <Button variant="primary" type="submit">
                                Save
                            </Button>
                        </Card.Body>
                    </Col>
                </Row>
        </div>
    );
}
