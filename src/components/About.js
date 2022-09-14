import React from 'react';
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Col, Container, Media, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import Loading from "./Loading";
import {baseURL} from "../shared/baseURL";
import {FadeTransform, Stagger, Fade} from 'react-animation-components'


function RenderLeaders({leaders, isLoading, errMess}) {
    if (isLoading)
        return <Loading/>;
    if (errMess)
        return (
            <Container>
                <Row tag="h4">{errMess}</Row>
            </Container>
        );
    const leaderss = leaders.map((leader) => {
        return (
            <Stagger in>
                <RenderLeader leader={leader}/>
            </Stagger>
        );
    });
    return (
        <Media list className="pt-3">
            {leaderss}
        </Media>
    );
}


function RenderLeader({leader}) {
    return (
        // <FadeTransform in transformProps={{
        //     exitTransform: 'scale(0.5) translateY(-50%)'
        // }}>
        <Fade in>
            <Media tag="li" className="mr-auto pb-5" key={leader.id}>
                <Media left>
                    <Media className="mr-5" object src={baseURL + leader.image} alt={leader.name}/>
                </Media>
                <Media body>
                    <Media heading>{leader.name}</Media>
                    <h6>{leader.designation}</h6>
                    <p>{leader.description}</p>
                </Media>
            </Media>
        </Fade>
        // </FadeTransform>
    );
}

function About({leaders, isLoading, errMess}) {
    return (
        <Container>
            <Row>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <Col xs={12}>
                    <h3>About Us</h3>
                    <hr/>
                </Col>
            </Row>
            <Row className="row-content">
                <Col xs={12} md={6}>
                    <h2>Our History</h2>
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par
                        excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere
                        else, it enjoys patronage from the A-list clientele in Hong Kong. Featuring four of the best
                        three-star Michelin chefs in the world, you never know what will arrive on your plate the next
                        time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain
                        started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in
                        a pan.</p>
                </Col>
                <Col sm={12} md={5}>
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={12}>
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                    <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                        P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="row-content">
                <Col xs={12} tag="h2">Corporate Leadership </Col>
                <Col xs={12}>
                    <RenderLeaders leaders={leaders} errMess={errMess} isLoading={isLoading}/>
                </Col>
            </Row>
        </Container>
    );
}

export default About;