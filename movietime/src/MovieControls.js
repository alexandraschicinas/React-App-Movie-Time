import React,{useContext} from 'react'
import {GlobalContext} from './GlobalState'
export const MovieControls = ({movie,type}) => {
   const {removeMovieFromMyList}=useContext(GlobalContext);
    return (
        <div className="controls">
            {type=== "mylist" && (
                <>
                <button className="control-btn"
                onClick={() => removeMovieFromMyList(movie.id)}>
                    x
                </button>
                </>
            )}
   </div>
            )
};