import React from 'react';
import { useEffect } from 'react';

import axios from 'axios';
import { getMovie } from '../../store/actions/actions';
import { useDispatch, useSelector } from "react-redux";

import SearchBox from '../../components/SearchBox/SearchBox';

import './Home.scss';

const Home = () => {
    const movie = useSelector(state => state.movie);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/550?api_key=d4cf5da2d09c42ae97cf196827629126')
        .then(response => {
            console.log(response.data);
            dispatch(getMovie(response.data));
        })
        .catch(error => console.log(error));
    }, [dispatch]);

    return(
        <div className="home">
            <SearchBox />
        </div>
    );
};

export default Home;