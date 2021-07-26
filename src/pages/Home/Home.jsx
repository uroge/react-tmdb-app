import React from 'react';
import { useEffect } from 'react';

import { fetchMovie } from '../../store/actions/actions';
import { useDispatch, useSelector } from "react-redux";

import SearchBox from '../../components/SearchBox/SearchBox';
import Card from '../../components/Card/Card';

import './Home.scss';

const Home = () => {
    const movie = useSelector(state => state.movie);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovie(19));
    }, [dispatch]);

    const backdrop_path = movie ? movie.backdrop_path : '';

    return(
        <div className="home" style={{ backgroundImage: 
        `linear-gradient(to right, 
        rgba(7.45%, 6.27%, 6.27%, 1.00) 150px, 
        rgba(7.45%, 6.27%, 6.27%, 0.84) 20%), 
        url(https://image.tmdb.org/t/p/w500${backdrop_path}`}}>
            <div className="home__content">
                <SearchBox />
                <Card movie={movie}/>
            </div>
        </div>
    );
};

export default Home;