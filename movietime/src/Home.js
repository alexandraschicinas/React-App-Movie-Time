import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Scroll from "./Scroll";
const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    Promise.all([
      fetch(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=697bccbdd485f20ab91cbd1ed65ce799"
      ).then((response) => response.json()),
      fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=697bccbdd485f20ab91cbd1ed65ce799&language=en-US"
      ).then((response) => response.json()),
    ]).then((jsonResult) => {
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
  }, []);
  return (
    <Scroll>
      <div>
        <div className="Movies">
          {movies.map((movie, index) => (
            <Link
              className="genre-link"
              to={`/movie/${movie.id}`}
              key={`index${movie.title}${movie.id}`}
            >
              <img
                className="poster"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={`${movie.title} Poster`}
              />
              {movie.genres.map((genre) => (
                <div className="genre" key={genre.id}>
                  {genre.name}
                </div>
              ))}
            </Link>
          ))}
        </div>
      </div>
    </Scroll>
  );
};
export default Home;