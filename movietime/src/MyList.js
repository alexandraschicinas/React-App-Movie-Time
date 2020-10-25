import React, {useContext} from 'react';
import{GlobalContext} from './GlobalState';
import {Movie} from './Movie'

const MyList = (id)=>{
    const {mylist} =useContext(GlobalContext)
    return(
   <div>
      <div id="title">
          <h1>My list </h1>
         </div>
              <div className="posters" >
               {mylist.map((movie,id)=> (
          <Movie movie={movie} type="mylist"/>
       ))}
       </div>
   </div>
    )
}
export default MyList;