import React from "react";
import "./Login.css";
import bgImage from "../../assets/ChatGPT Image Aug 21, 2025, 11_31_12 PM.png"; // your background image
import { Link } from "react-router-dom"; 
import ArrowLeft from "../../assets/svg image of back ar.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="login-box">
        <h1>Sign In</h1>
        <img onClick={() => navigate("/")} className='arrow' src={ArrowLeft} alt="img" />
        <input type="email" placeholder="Email or phone number" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
        <p>New to Netflix? <Link to="/Signup">Sign up now</Link></p>
      </div>
    </div>
  );
};

export default Login;
