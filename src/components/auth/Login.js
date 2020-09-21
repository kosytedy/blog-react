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
                        <CardHeader>Account login</CardHeader>
                        <CardBody>
                            <Form className="p-3">
                                <FormGroup row>
                                    <Label for="username" sm={2}>Username</Label>
                                    <Col sm={10}>
                                    <Input type="text" name="username" id="username" placeholder="Enter username" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="password" sm={2}>Password</Label>
                                    <Col sm={10}>
                                    <Input type="password" name="password" id="password" placeholder="Enter password" />
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