/**
 * Created by WebStorm
 * Author: Ahmed Marwan
 * Date: 5/23/2020
 * Time: 5:25 AM
 */
import * as ActionTypes from "./types";
import {baseURL} from "../shared/baseURL";

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => dispatch => {
    let newComment = {
        dishId,
        rating,
        author,
        comment,
        date: new Date().toISOString()
    };
    return fetch(baseURL + 'comments'
        , {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(res => {
            if (res.ok)
                return res;
            let error = new Error('Error ' + res.status + ': ' + res.statusText);
            error.response = res;
            throw error;
        }, error => {
            throw new Error(error.message);
        })
        .then(res => res.json())
        .then(res => dispatch(addComment(res)))
        .catch(error => alert(error))
};

export const postFeedback = (firstName, lastName, tel, email, agree, message) => dispatch => {
    let newFeedback = {
        firstName,
        lastName,
        tel,
        email,
        agree,
        message,
        date: new Date().toISOString()
    };
    return fetch(baseURL + 'feedback'
        , {
            method: 'POST',
            body: JSON.stringify(newFeedback),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(res => {
            if (res.ok)
                return res;
            let error = new Error('Error ' + res.status + ': ' + res.statusText);
            error.response = res;
            throw error;
        }, error => {
            throw new Error(error.message);
        })
        .then(res => res.json())
        .then(res => alert(JSON.stringify(res)))
        .catch(error => alert(error))
};


export const fetchDishes = () => dispatch => {
    return fetch(baseURL + 'dishes')
        .then(res => {
            if (res.ok)
                return res;
            let error = new Error('Error ' + res.status + ': ' + res.statusText);
            error.response = res;
            throw error;
        }, error => {
            throw new Error(error.message);
        })
        .then(res => res.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
};

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errMess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMess
});


export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});


export const fetchComments = () => dispatch => {
    return fetch(baseURL + 'comments')
        .then(res => {
            if (res.ok)
                return res;
            let error = new Error('Error ' + res.status + ': ' + res.statusText);
            error.response = res;
            throw error;
        }, error => {
            throw new Error(error.message);
        })
        .then(res => res.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)))
};

export const commentsFailed = (errMess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});


export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});


export const fetchPromos = () => dispatch => {
    return fetch(baseURL + 'promotions')
        .then(res => {
            if (res.ok)
                return res;
            let error = new Error('Error ' + res.status + ': ' + res.statusText);
            error.response = res;
            throw error;
        }, error => {
            throw new Error(error.message);
        })
        .then(res => res.json())
        .then(promotions => dispatch(addPromos(promotions)))
        .catch(error => dispatch(promosFailed(error.message)))
};

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errMess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errMess
});


export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const fetchLeaders = () => dispatch => {
    return fetch(baseURL + 'leaders')
        .then(res => {
            if (res.ok)
                return res;
            let error = new Error('Error ' + res.status + ': ' + res.statusText);
            error.response = res;
            throw error;
        }, error => {
            throw new Error(error.message);
        })
        .then(res => res.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)))
};

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errMess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errMess
});


export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});