import React from "react";
import "./LoadingScreen.css"; // Make sure to import the CSS file

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="body">
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="base">
          <span></span>
          <div className="face"></div>
        </div>
        <div className="longfazers">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1>Getting Ratings for you ....</h1>
      </div>
    </div>
  );
}

export default LoadingScreen;
