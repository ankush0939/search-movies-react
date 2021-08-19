import React from "react";
import { useState } from "react";

import MovieInfo from "./MovieInfo";

const SearchForm = () => {
  const [query, setquery] = useState("");
  const [movies, setMovies] = useState([]);

  const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;

  const getMovies = async (e) => {
    try {
      e.preventDefault();

      const result = await fetch(url);

      const data = await result.json();

      setMovies(data.results);

      console.log("My Result: ", movies);
    } catch (error) {
      console.log("fetch error", error.message);
    }
  };

  return (
    <div id="content" className="section">
      <form className="form-control" onSubmit={getMovies}>
        <label className="form-lable"><h2>Movie Name</h2></label>
        <input
          className="form-input"
          type="text"
          name="query"
          required
          placeholder="Enter the movie name"
          onChange={(e) => setquery(e.target.value)}
        />
        <button className="form-button" type="submit">
          Search
        </button>
      </form>

      <div className="card-list">
          {
              movies.filter( movie => movie.poster_path ).map( movie => 
                <MovieInfo movie={ movie } key = { movie.id } />
                )
          }
      </div>
    </div>
  );
};

export default SearchForm;
