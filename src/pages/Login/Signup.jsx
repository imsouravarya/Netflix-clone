import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css"; 
import bgImage from "../../assets/ChatGPT Image Aug 21, 2025, 11_31_12 PM.png"; 
import ArrowLeft from "../../assets/svg image of back ar.png";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div
      className="signup-page"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="signup-box">
        <h1>Sign Up</h1>
        <img onClick={() => navigate("/")} className='arrow' src={ArrowLeft} alt="img" />
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
        <p>
          Already have an account?{" "}
          <Link to="/login">Sign in now</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
