import React from 'react';
import { Link } from 'react-router-dom';
import { getWishlist } from './util/wishlist';

const MyList = ()=>{

    const movies = getWishlist();
    return (

        <div className="Movies"> {movies.map((movie,index )=>
          <div>
            {/* <button onClick={()=> removeItem()}> X </button> */}
            <Link to={ `/movie/${movie.id}`} key={`index${movie.title}${movie.id}`}>
              <div> 
           <img className="poster"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
            alt={`${movie.title} Poster`}/> 

          {/* {movie.genres.map((genre) => (
             <div className="genre" key={genre.id}> {genre.name} </div>
               ))} */}
            </div>
            </Link>
            </div>
            )
            }
            </div>
    )   
}
export default MyList;