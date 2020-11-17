import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="nav">
      <img
        className="image"
        src="https://img.freepik.com/free-vector/movie-time-neon-sign-sign_24908-55555.jpg?size=338&ext=jpg "
        alt="logo"
      />
      <ul className="list">
        <li>
          <Link className="Link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="Link" to="/mylist">
            My List
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;