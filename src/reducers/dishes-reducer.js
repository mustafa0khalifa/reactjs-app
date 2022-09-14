/**
 * Created by WebStorm
 * Author: Ahmed Marwan
 * Date: 5/23/2020
 * Time: 4:52 AM
 */
import * as ActionTypes from "../actions/types"

export default (state = {isLoading: true, errMess: null, dishes: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {
                ...state, isLoading: false, errMessage: null, dishes: action.payload
            };
        case ActionTypes.DISHES_LOADING:
            return {
                ...state, isLoading: true, errMessage: null, dishes: []
            };
        case ActionTypes.DISHES_FAILED:
            return {
                ...state, isLoading: false, errMess: action.payload, dishes: []
            };
        default:
            return state;
    }
};