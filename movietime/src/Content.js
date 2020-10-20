import React from 'react';
import MovieCardT from "./MovieCardT";
import {Frozen} from './Frozen'

    const Content = ()=> {
        return (
            <section>
                
            <div  className="content">
                <div id="content1">
                <MovieCardT Frozen = {Frozen} />
                </div>

                <div id="content2">
                <h1>Movie List</h1>
                </div>
            </div>
            
            </section>
        )
    }

export default Content;

//https://www.themoviedb.org/trending/movie/week?api_key=697bccbdd485f20ab91cbd1ed65ce799