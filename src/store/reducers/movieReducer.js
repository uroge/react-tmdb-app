import * as actionTypes from '../actions/actionTypes';

const initialState = {
    movie: null
}

const movieReducer = (state = initialState, action) => {
    switch (action.actionTypes) {
        case actionTypes.GET_MOVIE:
            return {
                ...state,
                movie: action.payload
            }
        default:
            return state;
    }
}

export default movieReducer;