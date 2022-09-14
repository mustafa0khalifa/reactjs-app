/**
 * Created by WebStorm
 * Author: Ahmed Marwan
 * Date: 4/28/2020
 * Time: 6:58 PM
 */
import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, Container, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import Loading from "./Loading";
import {baseURL} from "../shared/baseURL";

function RenderMenuItem({dish, onClick}) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={baseURL + dish.image} alt={dish.name}/>
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {
    if (props.dishes.isLoading)
        return (
            <Container>
                <Row>
                    <Loading/>
                </Row>
            </Container>
        );
    if (props.dishes.errMess)
        return (
            <Container>
                <Row tag="h4">{props.dishes.errMess}</Row>
            </Container>
        );

    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1" key={dish.id}>
                <RenderMenuItem dish={dish} onClick={props.onClick}/>
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
};

export default Menu;