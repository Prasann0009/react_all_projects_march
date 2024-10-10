import { useState } from "react";
import { moviesList } from "../data";
import MovieCard from "./components/MovieCard";
import "./styles/movies.css";
import { Filters } from "./components/Filters";

function filterMovies(filter) {
    if (filter == 1) {
        return moviesList.filter(movie => Number(movie.imdbRating) >= 8);
    }
    else if (filter == 2) {
        return moviesList.filter(movie => Number(movie.imdbRating) < 7.5);
    }
    return moviesList;
}

function MoviesApp() {
    const [filter, setFilter] = useState("");
    let selectedMoviesList = filterMovies(filter);

    return (
        <div>
            <Filters setFilter={setFilter} />
            <div className="movies-list">
                {
                    selectedMoviesList.map(movie => <MovieCard movie={movie} />)
                }
            </div>
        </div>

    );
}

export default MoviesApp;
