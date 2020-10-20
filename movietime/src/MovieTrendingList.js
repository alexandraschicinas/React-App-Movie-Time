import React, { useState, useEffect } from "react";

const TrendingMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=697bccbdd485f20ab91cbd1ed65ce799"
    )
      .then((response) => response.json())
      .then((jsonResult) => {
        setMovies(jsonResult.results);
      });
  }, [setMovies]);

  return <div>{movies.map((movie,index )=> 
  <h2  key={index}><img src = "{movie.poster_path}"/> {movie.name}</h2>)}
  </div>;
};
export default TrendingMovie;
