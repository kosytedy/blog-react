import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import { Card, Container, CardHeader, CardBody, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import NavBar from '../navbar/NavBar';
import LoginContext from "../app/LoginContext";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: "",
            token: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { 
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({[name]: value}); console.log(value);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        fetch('/api/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            this.setState({token: data.token});
            sessionStorage.setItem('jwttkn', data.token);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    isLoggedIn(){
        return sessionStorage.getItem("jwttkn") !== null && this.state.token !== null;
    }

    render() { 
        if(this.isLoggedIn()) return <LoginContext.Provider value={this.isLoggedIn()}> <Redirect to="/" /> </LoginContext.Provider>
        return ( 
            <div>
                <NavBar />
                <Container className="col-lg-8 col-sm-12">
                    <Card className="mt-5">
                        <CardHeader>Account login</CardHeader>
                        <CardBody>
                            <Form className="p-3" onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label for="username" sm={2}>Username</Label>
                                    <Col sm={10}>
                                    <Input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter username" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="password" sm={2}>Password</Label>
                                    <Col sm={10}>
                                    <Input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter password" />
                                    </Col>
                                </FormGroup>
                                <FormGroup check row>
                                    <Col sm={{ size: 10, offset: 2 }}>
                                    <Button color="primary">Login</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        );
    }
}
 
export default Register;