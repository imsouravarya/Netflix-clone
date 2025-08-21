import React, { useState, useEffect } from 'react';
import './Movies.css';
import { useNavigate } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MThiMjQ1ZjkzZjk2ODI0ODllODY5YWE1ZWM5Mzg2MSIsIm5iZiI6MTc1NDkyNzQyOS44NjYsInN1YiI6IjY4OWExMTQ1ODJlMzQ1YWY5MDkyZjU2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Do5u3mdlZYPszApxSFnWH4WHr8h8NkrS2Z5KZbs5KPw'
  },
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then((res) => res.json())
      .then((data) => setMovies(data.results || []))
      .catch((err) => console.error('Error fetching movies:', err));
  }, []);

  return (
    <div>
      <h1 id='h1'>Popular</h1>  {/*movies */}
      <div className="shows-listi">
        {movies.map((movie) => (
          <div key={movie.id} className="showi-card">
            <img onClick={() => navigate(`/player/${movie.id}`)}
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title || movie.name}
            />
            <p>{movie.title || movie.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
