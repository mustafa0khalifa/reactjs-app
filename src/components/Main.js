/**
 * Created by WebStorm
 * Author: Ahmed Marwan
 * Date: 4/29/2020
 * Time: 2:47 PM
 */
import React, {Component} from 'react';
import Menu from './Menu';
import Contact from './Contact';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import DishDetail from "./DishDetail";
import {connect} from "react-redux";
import {fetchComments, fetchDishes, fetchLeaders, fetchPromos, postComment, postFeedback} from "../actions";
import {actions} from "react-redux-form";

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions
    }
};

const mapDispatchToProps = dispatch => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => dispatch(fetchDishes()),
    resetFeedbackForm: () => dispatch(actions.reset('feedback')),
    postFeedback: (firstName, lastName, tel, email, agree, message) => dispatch(postFeedback(firstName, lastName, tel, email, agree, message)),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
});

class Main extends Component {

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }

    render() {
        const DishWithId = ({match}) => {
            return (
                <DishDetail
                    dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    commentserrMess={this.props.comments.errMess}
                    postComment={this.props.postComment}/>
            );
        };
        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    promosLoading={this.props.promotions.isLoading}
                    promosErrMess={this.props.promotions.errMess}
                    leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                    leadersLoading={this.props.leaders.isLoading}
                    leadersErrMess={this.props.leaders.errMess}
                />
            );
        };
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}/>}/>
                    <Route path='/menu/:dishId' component={DishWithId}/>
                    <Route exact path='/contactus'
                           component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}
                                                     postFeedback={this.props.postFeedback}/>}/>
                    <Route path='/aboutus' component={() => <About leaders={this.props.leaders.leaders}
                                                                   isLoading={this.props.leaders.isLoading}
                                                                   errMess={this.props.leaders.errMess}/>}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));