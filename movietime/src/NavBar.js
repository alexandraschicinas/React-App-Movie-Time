import React from 'react';
import {Link} from 'react-router-dom'
import {SearchBox} from './SearchBox'
 const NavBar = () => {
     return(
        <div className="nav">
          <img  className="image"
             src="https://img.freepik.com/free-vector/movie-time-neon-sign-sign_24908-55555.jpg?size=338&ext=jpg "
          />
        <ul className="list">
            <li > <Link to="/"> Home </Link> </li>
             <li> <Link  to="/movies"> Movies</Link></li>
            <li> <Link to="/mylist"> My List</Link></li>
        </ul>
        <SearchBox/>
    </div>
     )
 }
export default NavBar;