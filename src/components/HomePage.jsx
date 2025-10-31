import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/playground");
  };

  return (
    <div
      style={{
        fontFamily: "'Press Start 2P', system-ui",
        textAlign: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1e1e2f, #2a2a45)",
        color: "#fff",
        letterSpacing: "1px",
      }}
    >
      <h1 style={{ fontSize: "20px", marginBottom: "20px" }}>
        Hello! This is a project!
      </h1>
      <p style={{ fontSize: "12px", marginBottom: "40px", opacity: 0.8 }}>
        Welcome to Code Playground — Run your Program!
      </p>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: "#00ff88",
          border: "none",
          color: "#111",
          padding: "12px 24px",
          fontFamily: "'Press Start 2P', system-ui",
          cursor: "pointer",
          borderRadius: "8px",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseOver={(e) => {
          e.target.style.transform = "scale(1.05)";
          e.target.style.boxShadow = "0 0 10px #00ff88";
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "none";
        }}
      >
        Go to Playground
      </button>
    </div>
  );
}

export default HomePage;
