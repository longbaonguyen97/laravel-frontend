import { Component } from 'react';
import { Nav, Row, Col } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import Login from './components/login';
import Register from './components/register';
import ForgotPassword from './components/forgot_password';
import ListUsers from './components/list_users';
import DetailUser from './components/detail_user';
import ListTitles from './components/list_titles';
import DetailTitles from './components/detail_titles';


class App extends Component {

    render() {
        return (
            <div className="container">
                <div className="mt-5"></div>
                <Router>
                    <Row>
                        <Col md={3}>
                            <Nav className="bg-secondary">
                                <ul className="nav-menu w-100 pt-2 pl-1 pr-1 pb-0">
                                    <li>
                                        <Link className="btn btn-success w-100 mb-2" to="/login">Login</Link>
                                    </li>
                                    <li>
                                        <Link className="btn btn-success w-100 mb-2" to="/register">Register</Link>
                                    </li>
                                    <li>
                                        <Link className="btn btn-success w-100 mb-2" to="/forgot">Forgot Password</Link>
                                    </li>
                                    <li>
                                        <Link className="btn btn-success w-100 mb-2" to="/list-users">List Users</Link>
                                    </li>
                                    <li>
                                        <Link className="btn btn-success w-100 mb-2" to="/detail-user">Detail User</Link>
                                    </li>
                                    <li>
                                        <Link className="btn btn-success w-100 mb-2" to="/list-titles">List Titles</Link>
                                    </li>
                                    <li>
                                        <Link className="btn btn-success w-100 mb-2" to="/detail-titles">Detail Titles</Link>
                                    </li>
                                </ul>
                            </Nav>
                        </Col>
                        <Col md={9}>
                            <Switch>
                                <Route exact path="/login">
                                    <Login />
                                </Route>
                                <Route path="/register">
                                    <Register></Register>
                                </Route>
                                <Route path="/forgot">
                                    <ForgotPassword></ForgotPassword>
                                </Route>
                                <Route path="/list-users">
                                    <ListUsers></ListUsers>
                                </Route>
                                <Route path="/detail-user">
                                    <DetailUser></DetailUser>
                                </Route>
                                <Route path="/list-titles">
                                    <ListTitles></ListTitles>
                                </Route>
                                <Route path="/detail-titles">
                                    <DetailTitles></DetailTitles>
                                </Route>
                            </Switch>
                        </Col>
                    </Row>
                </Router>
            </div>
        );
    }
}
export default App;
