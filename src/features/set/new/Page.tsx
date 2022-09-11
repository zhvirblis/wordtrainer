import { FormEvent, useState } from "react";
import { Button, Card, Container, Form, Col, Row } from "react-bootstrap";
import Header from "../../../common/page-parts/Header";
import SaveCancel from "../../../common/page-parts/SaveCancel";
import ItemComponent from "../../item/Component";
import Item from "../../item";
import { v4 as uuid } from 'uuid';
import { useModules } from "../../module/hooks";

export default function NewSetPage() {
    const [items, setItem] = useState<Item[]>([]);
    const { modules } = useModules();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    }

    const addNewItem = () => {
        setItem([...items, {
            id: uuid(),
            term: '',
            transcription: '',
            defenition: '',
            example: '',
        }])
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Card className="add-new-module">
                    <Card.Header>
                        <h2>Create set</h2>
                    </Card.Header>
                    <Card.Body>
                        <Form.Group>
                            <Form.Control size="lg" type="text" placeholder="Name" />
                            <Form.Label htmlFor="choose-module" className="mt-3">Choose module</Form.Label>
                            <Form.Select id="choose-module" size="lg">
                                { modules.map(({ name }) => {
                                    return <option>{name}</option>
                                }) }
                            </Form.Select>
                        </Form.Group>
                    </Card.Body>
                </Card>
                <SaveCancel/>
                <Card>
                    <Card.Header>
                        <h3>Items</h3>
                    </Card.Header>
                    <Card.Body>
                        <Row className="justify-content-md-center">
                            {items.map((item) => {
                                return <ItemComponent key={item.id} {...item} />
                            })}
                            <Col className="d-grid gap-2" md={4}>
                                <Button size="lg" onClick={() => addNewItem()}>
                                    Add item
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <SaveCancel/>
            </form>
        </div>
    )
}
