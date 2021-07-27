import React, { useEffect, useState } from 'react';
import './SearchBox.scss';

import Logo from '../../assets/tmdb-logo.svg';

import { useDispatch } from "react-redux";
import { fetchMovie } from '../../store/actions/actions';

import axios from 'axios';

const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [options, setOptions] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if(searchTerm) {
            axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=d4cf5da2d09c42ae97cf196827629126&include_adult=true`)
            .then(response => {
                let movies = [];
                if(response.data.results) {
                    movies.push(response.data.results.slice(0, 6).map((movie) => {
                        return { title: movie.title, id: movie.id}
                    }));

                    setOptions(...movies);
                }
            })
            .catch(error => console.log(error));
        }
    }, [searchTerm]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
        if(event.target.value === '') {
            setOptions([]);
        }
    }

    const searchMovie = (event, id) => {
        event.preventDefault();
        setOptions([]);
        dispatch(fetchMovie(id));
    }
    
    return(
        <div className="search-box">
            <a href="https://www.themoviedb.org/" rel="noreferrer" target="_blank">
                <img src={Logo} alt="Logo" className="search-box__logo" />
            </a>
            <div className="search-box__search">
                <input type="text" placeholder="Search Movie Title..." onChange={(event) => handleChange(event)} className="search-box__input" />
                <div className="search-box__results">
                    { options.length ? options.map((movie, idx) => {
                        return <a href="/"
                                key={idx}
                                onClick={(event) => searchMovie(event, movie.id)}
                                className="search-box__autofill">{movie.title}</a>;
                    }) : null}
                </div>
            </div>
        </div>
    );
};

export default SearchBox;