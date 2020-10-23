import React, { useState, useEffect } from "react";
const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
          "https://api.themoviedb.org/3/trending/all/day?api_key=697bccbdd485f20ab91cbd1ed65ce799"
    )
      .then((response) => response.json())
      .then((jsonResult) => {
        setMovies(jsonResult.results);
      })
  }, [setMovies]);
  return (
    <div>

      <div className="Movies"> {movies.map((movie,index )=>
      <div className="movies"key={index.poster} 
      style={{ 
        backgroundImage:`url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
        backgroundSize: 'contain',
        backgroundRepeat:'no-repeat',
        width: '200px',
        height: '400px',
    
      }}
      > 
     {/* <img 
      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
      alt={`${movie.title} Poster`}/>  */}
       
      </div>
     
      )
      }
      </div></div>



  )
};
export default Home;