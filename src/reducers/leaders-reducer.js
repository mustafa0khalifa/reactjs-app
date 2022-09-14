/**
 * Created by WebStorm
 * Author: Ahmed Marwan
 * Date: 5/23/2020
 * Time: 4:52 AM
 */
import * as ActionTypes from "../actions/types";

export default (state = {isLoading: true, errMess: null, leaders: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return {
                ...state, isLoading: false, errMessage: null, leaders: action.payload
            };
        case ActionTypes.LEADERS_LOADING:
            return {
                ...state, isLoading: true, errMessage: null, leaders: []
            };
        case ActionTypes.LEADERS_FAILED:
            return {
                ...state, isLoading: false, errMess: action.payload, leaders: []
            };
        default:
            return state;
    }
};