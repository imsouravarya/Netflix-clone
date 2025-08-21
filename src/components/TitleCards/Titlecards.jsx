import React, { useEffect, useState } from 'react';
import './Titlecards.css';
import { Link } from 'react-router-dom';

export const Titlecards = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MThiMjQ1ZjkzZjk2ODI0ODllODY5YWE1ZWM5Mzg2MSIsIm5iZiI6MTc1NDkyNzQyOS44NjYsInN1YiI6IjY4OWExMTQ1ODJlMzQ1YWY5MDkyZjU2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Do5u3mdlZYPszApxSFnWH4WHr8h8NkrS2Z5KZbs5KPw',
    },
  };

  useEffect(() => {
    if (!fetchUrl) return;

    fetch(fetchUrl, options)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results || []);
      })
      .catch((err) => console.error('Error fetching movies:', err));
  }, [fetchUrl]);

  return (
    <div className="Titlecards">
      <h2 id="heading">{title ? title : 'Popular on Netflix'}</h2>
      <div className="cardlist">
        {movies.map((movie, index) => (
          <Link to={`/player/${movie.id}`} className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title || movie.name}
            />
            <p>{movie.title || movie.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Titlecards;
