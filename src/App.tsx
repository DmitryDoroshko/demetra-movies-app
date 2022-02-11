import React from "react";
import "./styles/styles.scss";
import Header from "./components/Header";
import SearchMovie from "./components/SearchMovie";
import MoviesList from "./components/MoviesList";
import Footer from "./components/Footer";

type Props = {};

const App: React.FC = (props: Props) => {
    return (
        <div className="app">
            <Header />
            <main>
                <div className="container">
                    <SearchMovie />
                    <div className="movie-sort__actions">
                        <button className="btn">Sort Descending</button>
                    </div>
                    <MoviesList />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
