import { Component } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Login extends Component {

    render() {
        return (
            <div className="container">
                <Row>
                    <Col>
                        <h1 className="text-danger text-center">Login</h1>
                    </Col>
                </Row>
                <Row className="m-auto">
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.Label htmlFor="email">Email:</Form.Label>
                                <Form.Control type="email" name="email" id="email" placeholder="cenajohn@gmail.com" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="password">Password</Form.Label>
                                <Form.Control type="password" name="password" id="password" placeholder="********" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Check.Input className="ml-0" name="remember" />
                                <Form.Check.Label className="ml-3">Remember me</Form.Check.Label>
                            </Form.Group>

                            <Link to="/forgot" >Forgot got password?</Link>
                            <Button className="mt-3" variant="primary w-100" type="submit">Login</Button>

                        </Form>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Login;