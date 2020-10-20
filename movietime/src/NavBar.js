import React from 'react';
import {Link} from 'react-router-dom'

export const NavBar = (props) => (

    <div className="nav">
        <ul className="">
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="/genres"> Genres </Link></li>
            <li> <Link to="/movies"> Movies</Link></li>
            <li> <Link to="/mylist"> My List</Link></li>
        </ul>
    </div>
)
