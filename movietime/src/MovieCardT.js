import { title } from 'process';
import React from 'react';
import {Frozen} from './Frozen';

class MovieCardT  extends React.Component {
    // const [movieData, setMovieData]= useState({});

    // useEffect(() => {
    //         fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=46f0d4f8&i=${movieData}&plot=full`
    //         )
    //         .then((response) => response.json())
    //         .then((jsonResult) => {
    //             setMovieData({movieData});
    //         });
    // },[setMovieData]
    
    constructor(){
        super()
        this.state = {
            Frozen: Frozen,
        }
        console.log(Frozen)
    }
   
    render(){
    const{
        Title,
        Released,
        Genre,
        Plot,
        imdbRating
    } = this.state.Frozen;
    console.log(Title)
    return (
            <div className="movie-card-container">
                <div className="movie-info">
                    <h2>Movie Details</h2>
                    <div>
                        <h1>{Title}</h1>
                     
                        <h3>Released Date:{Released}</h3>
                    </div>
                    <h4>Rating: {imdbRating} / 10</h4>
                    <p>{Plot && Plot.substr(0, 350)}</p>
                    <div className="tags-container">
                        {Genre &&
                            Genre.split(', ').map(g => (
                                <span key={g}>{g}</span>
                            ))}
                    </div>
                </div>
            </div>
    );
    }
}
export default MovieCardT;
