import React, { useContext } from "react";
import {GlobalContext}  from './GlobalState'
export const ResultCard = ({ movie }) => {
  const {addMovieToMyList, mylist}=useContext(GlobalContext)
 let storedMovie= mylist.find(o => o.id ===movie.id);
  const mylistDisabled= storedMovie ? true : false;
  return (
    <div className="result-card">
      <div className="poster">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
        <div className="info">
          <div className="header">
            <h3 className="title"> {movie.title} </h3>
            <h4 className="release-date"> {movie.release_date}</h4>
            <h5 className="overview">{movie.overview}</h5>
          </div>
          <div className="controls">
            <button className="btn"
            disabled={mylistDisabled}
            onClick={()=> addMovieToMyList(movie)}
            >
              Add to my list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
