import React, { Component } from 'react';

import { Card, Container, CardHeader, CardBody, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import NavBar from '../navbar/NavBar';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            firstname: "",
            lastname: "",
            email: "",
            username: "",
            password: ""
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
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    render() { 
        return ( 
            <div>
                <NavBar />
                <Container className="col-lg-8 col-sm-12">
                    <Card className="mt-5">
                        <CardHeader>Register an account</CardHeader>
                        <CardBody>
                            <Form className="p-3" onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label for="firstname" sm={2}>Firstname</Label>
                                    <Col sm={10}>
                                    <Input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} placeholder="Enter Firstname" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="lastname" sm={2}>Firstname</Label>
                                    <Col sm={10}>
                                    <Input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} placeholder="Enter Lastname" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="email" sm={2}>Email</Label>
                                    <Col sm={10}>
                                    <Input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter Email Address" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="username" sm={2}>Username</Label>
                                    <Col sm={10}>
                                    <Input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter Username" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="examplePassword" sm={2}>Password</Label>
                                    <Col sm={10}>
                                    <Input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter password" />
                                    </Col>
                                </FormGroup>
                                <FormGroup check row>
                                    <Col sm={{ size: 10, offset: 2 }}>
                                    <Button color="primary">Register</Button>
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