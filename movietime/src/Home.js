import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";


const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=697bccbdd485f20ab91cbd1ed65ce799"
    )
      .then((response) => response.json())
      .then((jsonResult) => {
        setMovies(jsonResult.results);
      })
  }, [setMovies]);
  
  

  return (
    <div>
      <SearchBox  />

      <div className="Movies"> {movies.map((movie,index )=>
      <div className="movies" key={`index${movie.title}${movie.id}`} 
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
       <div id= "para"> {movie.title}</div>
      </div>
     
      )
      }
      </div></div>



  )
};
export default Home;