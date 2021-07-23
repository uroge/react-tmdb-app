import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getMovie = movie => {
    return {
        type: actionTypes.GET_MOVIE,
        payload: movie
    }
};

export const fetchMovie = (movieId) => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=d4cf5da2d09c42ae97cf196827629126`)
        .then(response => {
            console.log(response.data);
            dispatch(getMovie(response.data));
        })
        .catch(error => console.log(error));
    }
}