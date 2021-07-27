import React from 'react';
import './Card.scss';

import numeral from 'numeral';

const Card = ({ movie }) => {
    const { 
        poster_path,
        tagline,
        overview,
        original_title,
        vote_average,
        runtime,
        release_date,
        revenue
     } = movie ? movie : '';

    /**
     * Joins data and returns it as one string
     * @param {Array} nestedData - Array of data
     * @returns data displayed in one string
    */
    const nestedDataToString = (nestedData) => {
        let nestedArray = [],
            resultString;

        if(nestedData){
          nestedData.forEach(function(item){
            nestedArray.push(item.name);
          });
        }

        resultString = nestedArray.join(', ');
        return resultString;
    };

    const genreList = movie ? nestedDataToString(movie.genres) : '';
    const productionList = movie ? nestedDataToString(movie.production_companies) : '';

    return(
        <div className="card">
            <div className="card__image" 
                style={poster_path ? 
                {backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path}`} : 
                {backgroundImage: `https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png`}
                }>
            </div>
            <div className="card__description">
                <h1 className="card__title">{original_title}</h1>
                <span className="card__tagline">{tagline}</span>
                <p>{overview}</p>
                <div className="card__additional-details">
                    <span className="card__tagline genre">{genreList}</span>
                    <span className="card__production">{productionList}</span>
                    <div className="card__release">
                        <div className="card__release-detail">
                            <span className="release-title">original release:</span>
                            <span className="card__tagline">{release_date}</span>
                        </div>
                        <div className="card__release-detail">
                            <span className="release-title">running time:</span>
                            <span className="card__tagline">{runtime ? runtime : '-'}</span>
                        </div>
                        <div className="card__release-detail">
                            <span className="release-title">box office:</span>
                            <span className="card__tagline">{revenue ? numeral(revenue).format('($0,0)') : '-'}</span>
                        </div>
                        <div className="card__release-detail">
                            <span className="release-title">Vote Average:</span>
                            <span className="card__tagline">{vote_average ? vote_average : '-'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;