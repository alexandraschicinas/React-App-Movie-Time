import React, { useEffect, useState } from "react";
import { checkMovie, updateWishlist } from "./util/wishlist";

const MovieType = (props) => {
  console.log(props);
  const [movie, setMovie] = useState(null);
  const [movieAdded, setMovieAdded] = useState(false);

  useEffect((id) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=697bccbdd485f20ab91cbd1ed65ce799&language=en-US&append_to_response=videos`
    )
      .then((response) => response.json())
      .then((responseJson) => setMovie(responseJson));
  },[]);
  console.log(movie);

  const isMovieInWishlist = movie && checkMovie(movie.id);
  const handleClick = () => {
    updateWishlist(movie);
    setMovieAdded(true);
  };

  return (
    <div>
      <div >
        {movie && movie.videos && movie.videos.results && (
          <iframe className="trailer"
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
          ></iframe>
        )}
      </div>
        <div className="title">Title: {movie && movie.title}</div> 
        <div className="date">Release date: {movie && movie.release_date}</div>
        <div className="plot">Plot: {movie && movie.overview}</div>  
        <button disabled={isMovieInWishlist} onClick={handleClick}>
        
        {isMovieInWishlist ? "ADDED TO MY LIST" : "ADD TO MY LIST"}
      </button>
    </div>
  );
};

export default MovieType;