import React from 'react';
import {Link }from 'react-router-dom';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import {Home} from './Home'
import {Genres} from './Genres'
import {Movies} from './Movies'
import {MyList} from './MyList'



export const NavBar =(props)=> (
    
    <div className="nav">
        <ul>
            <li> <Link to="/" >Home</Link></li>
            <li> <Link to="/genres">Genres</Link> </li>
            <li> <Link to="/movies" >Movies</Link> </li>
            <li> <Link to="/mylist" >My List</Link></li>
        </ul>
    </div>

)

