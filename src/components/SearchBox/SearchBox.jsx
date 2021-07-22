import React from 'react';
import './SearchBox.scss';

import Logo from '../../assets/tmdb-logo.svg';

const SearchBox = () => {
    return(
        <div className="search-box">
            <img src={Logo} alt="Logo" className="search-box__logo" />
            <input type="text" placeholder="Search Movie" className="search-box__input" />
        </div>
    );
};

export default SearchBox;