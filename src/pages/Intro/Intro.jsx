import React from 'react';
import "./Intro.css";
import ArrowLeft from "../../assets/svg image of back ar.png";
import { useNavigate } from 'react-router-dom';
import video from "./public/invideo-ai-1080 The Truth Behind My React Website Thumbn 2025-08-20.mp4"

export const Intro = () => {
  const navigate = useNavigate();
  return (
    <div className="intro">
      <img onClick={() => navigate("/")} src={ArrowLeft} alt="hello" />
      <video 
        className="intro-video"
        autoPlay 
        loop 
        muted 
        controls
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Intro;
