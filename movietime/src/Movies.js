import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import SearchBox from "./SearchBox";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    Promise.all([
      fetch(
        `https://api.themoviedb.org/3/search/movie/?api_key=697bccbdd485f20ab91cbd1ed65ce799&language=en-US&page=1&include_adult=false&query=${search}`
      ).then((response) => response.json()),
      fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=697bccbdd485f20ab91cbd1ed65ce799&language=en-US"
      ).then((response) => response.json()),
    ]).then((jsonResult) => {
      console.log(jsonResult);
      const moviesResponse =
        jsonResult[0] &&
        jsonResult[0].results &&
        jsonResult[0].results.map((movie) => {
          const genres = movie.genre_ids.map((id) => {
            return (
              jsonResult[1] &&
              jsonResult[1].genres &&
              jsonResult[1].genres.find((genre) => genre.id === id)
            );
          });
          return {
            ...movie,
            genres,
          };
        });
      setMovies(moviesResponse);
    });
  }, [search]);
  console.log(movies);

  const searchMovies = (value) => {
    setSearch(value);
  };

  return (
    <div className="">
      <SearchBox searchMovies={searchMovies} />
      <div className="Movies">
        {" "}
        {movies.map((movie, index) => (
          <Link
            to={`/movie/${movie.id}`}
            key={`index${movie.title}${movie.id}`}
          >
            <div
              className="poster">

             <img 
      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
      alt={`${movie.title} Poster`}/> 
              <div id="para"> {movie.title}</div>
              <div>
                {" "}
                {movie.genres.map((genre) => (
                  <span key={genre.id}> {genre.name} </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
