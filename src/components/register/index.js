import { Component } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap';
class Register extends Component {

    render() {
        return (
            <div className="container">
                <Row>
                    <Col>
                        <h1 className="text-danger text-center">Register Account</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form className="w-100 ">
                            <Form.Group>
                                <Form.Label htmlFor="firstname">FirstName:</Form.Label>
                                <Form.Control type="text" name="firstname" id="firstname" placeholder="John" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="lastname">LastName:</Form.Label>
                                <Form.Control type="text" name="lastname" id="lastname" placeholder="Cena" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="email">Email:</Form.Label>
                                <Form.Control type="email" name="email" id="email" placeholder="cenajohn@gmail.com" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="password">Password</Form.Label>
                                <Form.Control type="password" name="password" id="password" placeholder="********" />
                            </Form.Group>
                            <Button className="btn btn-primary w-100">Create Account</Button>
                        </Form>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Register;