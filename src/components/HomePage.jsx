import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/playground");
  };

  return (
    <div className="home">
      <h1 className="home__title">Hello! This is a project!</h1>
      <p className="home__subtitle">Welcome to Code Playground — Run your Program!</p>

      <button
        className="home__cta"
        onClick={handleClick}
        aria-label="Go to playground"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="home__icon"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M5 7l5 5l-5 5"></path>
          <path d="M12 19l7 0"></path>
        </svg>
        <span className="home__cta-text">Go to Playground</span>
      </button>
    </div>
  );
}

export default HomePage;
