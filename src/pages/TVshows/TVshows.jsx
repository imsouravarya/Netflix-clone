import React, { useEffect, useState } from 'react';
import './TVshows.css'
import { useNavigate } from 'react-router-dom';

const TVshows = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MThiMjQ1ZjkzZjk2ODI0ODllODY5YWE1ZWM5Mzg2MSIsIm5iZiI6MTc1NDkyNzQyOS44NjYsInN1YiI6IjY4OWExMTQ1ODJlMzQ1YWY5MDkyZjU2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Do5u3mdlZYPszApxSFnWH4WHr8h8NkrS2Z5KZbs5KPw'
  }
    };

    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then((res) => res.json())
      .then((data) => setShows(data.results || []))
      .catch((err) => console.error('Error fetching TV shows:', err));
  }, []);

  return (
    <div>
      <h1 id='h1'>Now Playing</h1>
      <div className="shows-listi">
        {shows.map((show) => (
          <div key={show.id} className="showi-card"
          onClick={() => navigate(`/player/${show.id}`)}>
            <img
              src={`https://image.tmdb.org/t/p/w500${show.backdrop_path}`}
              alt={show.name}
            />
            <p>{show.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVshows;
