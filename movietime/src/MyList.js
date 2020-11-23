import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getWishlist } from "./util/wishlist";
const MyList = () => {
  const [movies, setMovies] = useState(getWishlist());
  const removeItem = (id) => {
    const wishlist = getWishlist();
    const newList = wishlist.filter((movie) => {
      if (movie.id === id) {
        return false;
      } else {
        return true;
      }
    });
    localStorage.setItem("wishlist", JSON.stringify(newList));
    setMovies(newList);
  };
  return (
    <div className="Movie">
      {movies.map((movie, id) => (
        <div>
          <button className="button" onClick={() => removeItem(movie.id)}> x </button>
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
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default MyList;