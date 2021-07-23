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

    const nestedDataToString = (nestedData) => {
        let nestedArray = [],
            resultString;
        if(nestedData !== undefined){
          nestedData.forEach(function(item){
            nestedArray.push(item.name);
          });
        }
        resultString = nestedArray.join(', '); // array to string
        return resultString;
    };

    const genreList = movie ? nestedDataToString(movie.genres) : '';
    const productionList = movie ? nestedDataToString(movie.production_companies) : '';
    return(
        <div className="card">
            <div className="card__image" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path}`}}>

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
                            <span className="card__tagline">{runtime}</span>
                        </div>
                        <div className="card__release-detail">
                            <span className="release-title">box office:</span>
                            <span className="card__tagline">{numeral(revenue).format('($0,0)')}</span>
                        </div>
                        <div className="card__release-detail">
                            <span className="release-title">Vote Average:</span>
                            <span className="card__tagline">{vote_average}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;