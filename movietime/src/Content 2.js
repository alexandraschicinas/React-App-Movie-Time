import React from 'react';
import TrendingMovie from './TrendingMovie';

    const Content = ()=> {
        return (
            <section>
                
            <div  className="content">
                <div id="content1">
                <TrendingMovie  />
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