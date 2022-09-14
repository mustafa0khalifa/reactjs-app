/**
 * Created by WebStorm
 * Author: Ahmed Marwan
 * Date: 5/22/2020
 * Time: 7:15 PM
 */
import dishes from "./dishes-reducer";
import leaders from "./leaders-reducer";
import promotions from "./promotion-reducer";
import comments from "./comments-reducer";
import {InitialFeedback as feedback} from "./forms-reducer";
import {combineReducers} from "redux"
import {createForms} from "react-redux-form";

export default combineReducers({
    dishes,
    comments,
    leaders,
    promotions,
    ...createForms({
        feedback
    })
});