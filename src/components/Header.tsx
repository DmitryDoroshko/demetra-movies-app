import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__title">
            <h1>Demetra Movies App</h1>
          </div>
          <div className="header__links">
            <Link to="/movies" className="header__link">
              Movies
            </Link>
            <Link to="/about" className="header__link">
              About
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
