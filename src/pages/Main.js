import axios from "axios";
import MovieCard from "../components/MovieCard";
import React, { useEffect, useState } from "react";

const API_KEY = "63bf2c077a4e69193655625e368b2409";


const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;


const Main = () => {
const [movies, setMovies] = useState([]);

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

  
  return (
  <>
    <div className="d-flex justify-content-center flex-wrap">
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
      </div>
  </>)
};

export default Main;
