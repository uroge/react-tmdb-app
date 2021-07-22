import * as actionTypes from './actionTypes';

export const getMovie = movie => {
    return {
        type: actionTypes.GET_MOVIE,
        payload: movie
    }
};