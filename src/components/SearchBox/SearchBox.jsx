import React from 'react';
import './SearchBox.scss';

import Logo from '../../assets/tmdb-logo.svg';

const SearchBox = () => {
    return(
        <div className="search-box">
            <a href="https://www.themoviedb.org/" rel="noreferrer" target="_blank">
                <img src={Logo} alt="Logo" className="search-box__logo" />
            </a>
            <input type="text" placeholder="Search Movie Title..." className="search-box__input" />
        </div>
    );
};

export default SearchBox;