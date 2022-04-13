import axios from "axios";
import MovieCard from "../components/MovieCard";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const API_KEY = "63bf2c077a4e69193655625e368b2409";


const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;


const Main = () => {
  const currentUser = useContext(AuthContext);
const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    getMovies(FEATURED_API);
  }, [])
  

  const getMovies = (API) => {
    axios
      .get(API)
      .then((res) => {
        console.log(res.data)
        setMovies(res.data.results);
      })
      .catch((err) => {console.log(err);});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchUrl = SEARCH_API + searchTerm;
    if (searchTerm && currentUser) {
      getMovies(searchUrl);
    }
    else if (!currentUser) {
      alert("Please login to search");
    }
    else {
      alert("Please enter a search term");
    }


  }


  return (
  <>
    <form className="search" onSubmit={handleSubmit}>
        <input
          type="search"
          className="search-input"
          placeholder="Search a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    <div className="d-flex justify-content-center flex-wrap">
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
      </div>
  </>)
};

export default Main;
