/**
 * Created by WebStorm
 * Author: Ahmed Marwan
 * Date: 4/29/2020
 * Time: 5:54 PM
 */
import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Col, Label, Row, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, Errors, Form} from "react-redux-form"
// import {isEmpty, isEmail} from 'validator';

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {

    handleSubmit = values => {
        this.props.postFeedback(values.firstName, values.lastName, values.tel, values.email, values.agree, values.message);
        this.props.resetFeedbackForm();
    };

    render() {
        return (
            <Container>
                <Row>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <Col xs={12}>
                        <h3>Contact Us</h3>
                        <hr/>
                    </Col>
                </Row>
                <Row className="row-content">
                    <Col xs={12} tag="h3">Location Information </Col>
                    <Col xs={12} sm={{size: 4, offset: 1}}>
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br/>
                            Clear Water Bay, Kowloon<br/>
                            HONG KONG<br/>
                            <i className="fa fa-phone"/>: +852 1234 5678<br/>
                            <i className="fa fa-fax"/>: +852 8765 4321<br/>
                            <i className="fa fa-envelope"/>: <a
                            href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </Col>
                    <Col xs={12} sm={{size: 6, offset: 1}} tag={"h5"}>Map of our Location</Col>
                    <Col xs={12} sm={{size: 11, offset: 1}}>
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678">
                                <i className="fa fa-phone"/> Call
                            </a>
                            <a role="button" className="btn btn-info" href="">
                                <i className="fa fa-skype"/> Skype
                            </a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net">
                                <i className="fa fa-envelope-o"/> Email
                            </a>
                        </div>
                    </Col>
                </Row>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit} model={'feedback'} validators={{
                            firstName: {required},
                            lastName: {required},
                            email: {required},
                            message: {required}
                        }}>
                            <Row className="form-group">
                                <Label for="firstName" md={"2"}>First Name</Label>
                                <Col>
                                    <Control.text className="form-control" id={"firstName"}
                                                  model=".firstName" placeholder={"First Name"}
                                                  validators={{
                                                      required
                                                  }}/>
                                    <Errors model=".firstName" className="text-danger" show="touched" messages={{
                                        required: "Pleas enter your first name.",
                                    }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label for="lastName" md={"2"}>Last Name</Label>
                                <Col>
                                    <Control.text className="form-control" id={"lastName"}
                                                  model=".lastName" placeholder={"Last Name"}
                                                  validators={{
                                                      required
                                                  }}/>
                                    <Errors model=".lastName" className="text-danger" show="touched" messages={{
                                        required: "Pleas enter your last name.",
                                    }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label for="tel" md={"2"}>Tel</Label>
                                <Col>
                                    <Control.text type={"number"} className="form-control" id={"lastName"}
                                                  model=".tel" placeholder={"Tel"}
                                                  validators={{
                                                      required,
                                                      isNumber
                                                  }}/>
                                    <Errors model=".tel" className="text-danger" show="touched" messages={{
                                        required: "Pleas enter your number.",
                                        isNumber: "Pleas enter a valid number.",
                                    }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label for="email" md={"2"}>Email</Label>
                                <Col>
                                    <Control className="form-control" id={"email"} type={"email"}
                                             model=".email" placeholder={"Email"}
                                             validators={{
                                                 required,
                                                 validEmail
                                             }}/>
                                    <Errors model=".email" className="text-danger" show="touched" messages={{
                                        required: "Please enter an email address.",
                                        validEmail: (val) => val ? `${val} is not a valid email.` : ''
                                    }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox className="form-check-input" model=".agree"/>
                                            <strong>May we Contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select className="form-control" defaultValue="Tel." model=".contactType">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label md={2} for={"message"}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea id={"message"} className="form-control" model=".message"
                                                      rows={"10"}
                                                      validators={{
                                                          required, minLength: minLength(10)
                                                      }}/>
                                    <Errors model=".message" show="touched" className="text-danger" messages={{
                                        required: "Pleas enter your message.",
                                        minLength: "Please enter a message more than 10 characters."
                                    }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type={"submit"}>
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Contact;