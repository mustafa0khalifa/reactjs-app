/**
 * Created by WebStorm
 * Author: Ahmed Marwan
 * Date: 4/29/2020
 * Time: 5:22 PM
 */
import React from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from 'reactstrap';
import Loading from "./Loading";
import {baseURL} from "../shared/baseURL";

function RenderCard({item, isLoading, errMess}) {
    if (isLoading)
        return (<Loading/>);
    else if (errMess)
        return (<h4>{errMess}</h4>);
    return (
        <Card>
            <CardImg src={baseURL + item.image} alt={item.name}/>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.errMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion}
                                isLoading={props.promosLoading}
                                errMess={props.promosErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}
                                isLoading={props.leadersLoading}
                                errMess={props.leadersErrMess}/>
                </div>
            </div>
        </div>
    );
}

export default Home;