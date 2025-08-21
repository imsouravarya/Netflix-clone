import React, { useEffect,useState } from 'react'
import './Player.css'
import { useParams } from 'react-router-dom';
import ArrowLeft from "../../assets/svg image of back ar.png";
import { useNavigate } from "react-router-dom";


export const player = () => {
  const navigate = useNavigate();


  const {id} = useParams();

  const [apidata, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    typeof: ''
  });

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MThiMjQ1ZjkzZjk2ODI0ODllODY5YWE1ZWM5Mzg2MSIsIm5iZiI6MTc1NDkyNzQyOS44NjYsInN1YiI6IjY4OWExMTQ1ODJlMzQ1YWY5MDkyZjU2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Do5u3mdlZYPszApxSFnWH4WHr8h8NkrS2Z5KZbs5KPw'
  }
};

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));

},[])
                            
  return (
    <div>
        <div className="player">
          <img onClick={() => navigate("/")} className='arrow' src={ArrowLeft} alt="img" />
          <iframe className='frame' src={`https://www.youtube.com/embed/${apidata.key}`} title='trailer' frameBorder={0} allowFullScreen></iframe>
          <div className="player__info">
            <p >{apidata.published_at.slice(0,10)}</p>
            <p>{apidata.name}</p>
            <p>{apidata.typeof}</p>
        </div>
    </div>
    </div>
  )
}

export default player;