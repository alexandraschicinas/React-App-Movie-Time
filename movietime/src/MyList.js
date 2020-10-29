import React from "react";
import { Link } from "react-router-dom";
import { getWishlist } from "./util/wishlist";
//import {removeItemFromMyList} from './util/wishlist';
const MyList = () => {
  const movies = getWishlist();
  return (
    <div>
      {/* <div className="control-btn">
             <button 
                onClick={() => removeItemFromMyList()}>
                    delete
                </button> </div> */}
      <div className="Movies">
        
        {movies.map((movie, index) => (
          <Link
            to={`/movie/${movie.id}`}
            key={`index${movie.title}${movie.id}`}
          >
            <div>
              <img
                className="poster"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={`${movie.title} Poster`}
              />
              {/* {movie.genres.map((genre) => (
             <div className="genre" key={genre.id}> {genre.name} </div>
               ))} */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default MyList;
