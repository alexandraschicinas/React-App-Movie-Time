import React from 'react';


export const MovieCard = () => {
    return(
        <div>
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
       </div>)}
         </div>
        </div>
        </div>
    )
}