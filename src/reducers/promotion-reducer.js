import {initialState} from "./index";

/**
 * Created by WebStorm
 * Author: Ahmed Marwan
 * Date: 5/23/2020
 * Time: 4:52 AM
 */
import * as ActionTypes from "../actions/types";

export default (state = {isLoading: true, errMess: null, promotions: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROMOS:
            return {
                ...state, isLoading: false, errMessage: action.payload, promotions: action.payload
            };
        case ActionTypes.PROMOS_LOADING:
            return {
                ...state, isLoading: true, errMessage: null, promotions: []
            };
        case ActionTypes.PROMOS_FAILED:
            return {
                ...state, isLoading: false, errMess: action.payload, promotions: []
            };
        default:
            return state;
    }
};