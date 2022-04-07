import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Navbar">
      <div className="title">
        <Link to="/" className="site-title">
          Movie X Movie
        </Link>
      </div>
      <div className="links">
        <Link to="/" className="link">
          Home
        </Link>

        <div className="genre-dropdown">
          <a className="link genre-btn" href="/">
            Genre
          </a>{" "}
        </div>
        <a className="link" href="/">
          Industry
        </a>
        <a className="link" href="/">
          About
        </a>
      </div>
    </div>
  );
};

export default Nav;
