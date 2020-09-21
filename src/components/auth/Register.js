import React, { Component } from 'react';

import { Card, Container, CardHeader, CardBody, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import NavBar from '../navbar/NavBar';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <NavBar />
                <Container className="col-lg-8 col-sm-12">
                    <Card className="mt-5">
                        <CardHeader>Register an account</CardHeader>
                        <CardBody>
                            <Form className="p-3">
                                <FormGroup row>
                                    <Label for="firstname" sm={2}>Firstname</Label>
                                    <Col sm={10}>
                                    <Input type="text" name="firstname" id="firstname" placeholder="Enter Firstname" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="lastname" sm={2}>Firstname</Label>
                                    <Col sm={10}>
                                    <Input type="text" name="lastname" id="lastname" placeholder="Enter Lastname" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="email" sm={2}>Email</Label>
                                    <Col sm={10}>
                                    <Input type="email" name="email" id="email" placeholder="Enter Email Address" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="username" sm={2}>Username</Label>
                                    <Col sm={10}>
                                    <Input type="text" name="username" id="username" placeholder="Enter Username" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="examplePassword" sm={2}>Password</Label>
                                    <Col sm={10}>
                                    <Input type="password" name="password" id="examplePassword" placeholder="Enter password" />
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