import React from 'react';
import { useEffect } from 'react';

import axios from 'axios';
import { getMovie } from '../../store/actions/actions';
import { useDispatch, useSelector } from "react-redux";

import SearchBox from '../../components/SearchBox/SearchBox';
import Card from '../../components/Card/Card';

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

    const backdrop_path = movie ? movie.backdrop_path : '';

    return(
        <div className="home" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop_path}`}}>
            <div className="home__content">
                <SearchBox />
                <Card movie={movie}/>
            </div>
        </div>
    );
};

export default Home;