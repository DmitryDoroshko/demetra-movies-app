import React from "react";

type Props = {};

const Header = (props: Props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__title">
                        <h1>Demetra Movies App</h1>
                    </div>
                    <div className="header__links">
                        <a href="/movies" className="header__link active">
                            Movies
                        </a>
                        <a href="/about" className="header__link">
                            About
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
