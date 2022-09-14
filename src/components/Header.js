/**
 * Created by WebStorm
 * Author: Ahmed Marwan
 * Date: 4/29/2020
 * Time: 4:24 PM
 */
import React, {Component} from 'react';
import {
    Button,
    Collapse,
    Form,
    FormGroup,
    Input,
    Jumbotron,
    Label,
    Modal,
    ModalBody,
    ModalHeader,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem
} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    };

    render() {
        return (
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className="mr-auto" href="/"><img src='/assets/images/logo.png' height="30"
                                                                       width="41"
                                                                       alt='Ristorante Con Fusion'/></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/home'><span
                                        className="fa fa-home fa-lg"/> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'><span
                                        className="fa fa-info fa-lg"/> About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/menu'><span
                                        className="fa fa-list fa-lg"/> Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'><span
                                        className="fa fa-address-card fa-lg"/> Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"/>Login</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion
                                    experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label for='username'>Username</Label>
                                <Input type={"text"} id={"username"} name={"username"} placeholder={"UserName"}
                                       value={this.username}
                                       innerRef={(input) => {
                                           this.username = input
                                       }}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for='password'>Password</Label>
                                <Input type={"password"} id={"password"} name={"password"} placeholder={"Password"}
                                       value={this.password}
                                       innerRef={(input) => {
                                           this.password = input
                                       }}/>
                            </FormGroup>
                            <Button type={"submit"}>Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }

    handleLogin = () => {
        alert("Username: " + this.username.value + "\nPassword: " + this.password.value);
    };
}

export default Header;