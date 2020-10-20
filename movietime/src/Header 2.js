import React from 'react';

const Header = (props) => (
  <header>
    <div className="container">
      <div className="picture">
          <img  className="image"
             src="https://img.freepik.com/free-vector/movie-time-neon-sign-sign_24908-55555.jpg?size=338&ext=jpg "
          />
          </div>
          <div id="Home">
              <h3>Home</h3>
          </div>
          <div id="genres">
              <h3><a href="https://api.themoviedb.org/3/genre/movie/list?api_key=697bccbdd485f20ab91cbd1ed65ce799&language=en-US"> Genres</a></h3>
             
          </div>
          <div id="movies">
              <h3>Movies</h3>
          </div>
          <div id="list">
              <h3>My List</h3>
          </div>
          <div id="input">
              <input type="search" placeholder="Search"/>
          </div>
          </div>
  </header>
)
export default Header