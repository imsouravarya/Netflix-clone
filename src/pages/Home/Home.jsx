import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_1 from '../../assets/hero_011.png';
import Titlecards from '../../components/TitleCards/Titlecards';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';


export const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="Home">
        <Navbar />
        <div className="hero">
          <img  src={hero_1} id="hero-iamge" alt="hero-image" />
          <div className="hero-text">
            <h1>Hello there !!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus voluptatum hic, nemo adipisci minima iusto provident.
              Odit dignissimos dolor aliquid.
            </p>
            <button id="btns" onClick={() => navigate('/intro')}>▶ Play</button>
            <button onClick={() => alert("working")} id="btns">ℹ Info</button>
          </div>
        </div>

        <div className="more-cards">
        {/* First Row */}
        <Titlecards
          title="Now Playing"
          fetchUrl="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
        />

          <Titlecards
            title="All Time Blockbuster"
            fetchUrl="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
          />
          <Titlecards
            title="Bollywood Drama"
            fetchUrl="https://api.themoviedb.org/3/discover/movie?language=en-US&with_original_language=hi"
          />
          <Titlecards
            title="Comedy"
            fetchUrl="https://api.themoviedb.org/3/discover/movie?language=en-US&with_genres=35"
          />
          <Titlecards
            title="Only on Netflix"
            fetchUrl="https://api.themoviedb.org/3/discover/tv?with_networks=213&language=en-US"
          />
          <Titlecards
            title="Horror"
            fetchUrl="https://api.themoviedb.org/3/discover/movie?with_genres=27&language=en-US&page=1"
          />
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
