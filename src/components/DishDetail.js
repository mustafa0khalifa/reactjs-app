/**
 * Created by WebStorm
 * Author: Ahmed Marwan
 * Date: 4/29/2020
 * Time: 3:13 AM
 */
import React, {useState} from 'react';

import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Col,
    Container,
    Label,
    Modal,
    ModalBody,
    ModalHeader,
    Row
} from 'reactstrap';
import {Control, Errors, LocalForm} from "react-redux-form"
import {Link} from 'react-router-dom';
import Loading from "./Loading";
import {baseURL} from "../shared/baseURL";

const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;


const CommentForm = ({postComment, dishId}) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const toggleModal = () => setModalOpen(!isModalOpen);
    const handleSubmit = values => {
        toggleModal();
        postComment(dishId, values.rating, values.name, values.comment);
    };
    return (
        <div>
            <Button onClick={toggleModal} outline><span className="fa fa-pencil"/> Submit
                Comment</Button>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader tag="h1" toggle={toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <Container>
                        <LocalForm onSubmit={handleSubmit}>
                            <Row className="form-group">
                                <Label for="rating"><h6>Rating</h6></Label>
                                <Control.select model={".rating"} defaultValue={1} className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                                <Errors model={".rating"} show={"touched"}/>
                            </Row>
                            <Row className="form-group">
                                <Label for="yourName"><h6>Your Name</h6></Label>
                                <Control.text model={".name"} className="form-control"
                                              validators={{minLength: minLength(3), maxLength: maxLength(15)}}/>
                                <Errors model={".name"} show={"touched"} className="text-danger" messages={{
                                    minLength: "Must be greater than 2 characters",
                                    maxLength: "Must be 15 characters or less"
                                }}/>
                            </Row>
                            <Row className="form-group">
                                <Label for="comment"><h6>Comment</h6></Label>
                                <Control.textarea model={".comment"} className="form-control" rows={6}/>
                                <Errors model={".comment"} show={"touched"}/>
                            </Row>
                            {/*<Row className="form-group">*/}
                            <Button type={"submit"} color="primary">Submit</Button>
                            {/*</Row>*/}
                        </LocalForm>
                    </Container>
                </ModalBody>
            </Modal>
        </div>
    )
};

function RenderComments({comments, postComment, dishId}) {
    if (comments === undefined)
        return <div><Button><span className="fa fa-pencil"/>Submit Comment</Button></div>;
    return (
        <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {comments.map((comment) => {
                    return (
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: '2-digit'
                            }).format(new Date(Date.parse(comment.date)))}</p>
                        </li>
                    )
                })}
            </ul>
            <CommentForm postComment={postComment} dishId={dishId}/>
        </div>
    )
}

function RenderDish({dish}) {
    return (
        <Card>
            <CardImg top src={baseURL + dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle tag="h1">{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    )
}

const DishDetail = (props) => {
    if (props.isLoading)
        return (
            <Container>
                <Row>
                    <Loading/>
                </Row>
            </Container>
        );
    if (props.errMess)
        return (
            <Container>
                <Row tag="h4">{props.errMess}</Row>
            </Container>
        );
    if (props.dish != null)
        return (
            <Container>
                <Row>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <Col sm={12} tag="h3">
                        {props.dish.name}
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={5} className="m-1">
                        <RenderDish dish={props.dish}/>
                    </Col>
                    <Col sm={12} md={5} className="m-1">
                        <RenderComments comments={props.comments} postComment={props.postComment} dishId={props.dish.id}/>
                    </Col>
                </Row>
            </Container>
        );
    return <div/>;
};

export default DishDetail;