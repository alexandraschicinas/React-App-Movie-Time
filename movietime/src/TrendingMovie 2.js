import React, { useState, useEffect } from 'react';


const TrendingMovie = () => {
    const [movie,setMovie]= useState("");

    useEffect(() => {
        fetch("https://www.themoviedb.org/trending/movie/week?api_key=697bccbdd485f20ab91cbd1ed65ce799")
          .then((response) => response.json())
          .then((movie) => {
            setMovie(movie);
          });
      }, [setMovie]);

    return(
       <div>
           {movie}
       </div> 

    )
}
export default TrendingMovie;