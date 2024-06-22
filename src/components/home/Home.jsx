import React from "react";
import "./index.css";
import image from "../../assets/profilePhoto.png";
function Home() {
  const imageStyle = {
    height: "100%",
  };
  return (
    <div className="home-parent">
      <div className="text-buttons">
        <div className="text-parent">
          <h3>HELLO!</h3>
          <h1>I am Yonatan Haddish.</h1>
          <h2>A Full Stack Developer</h2>
        </div>
        <div className="button-parent">
          <button>Hire Me</button>
          <button>My Works</button>
        </div>
      </div>
      <div className="image-box">
        <img src={image} style={imageStyle}></img>
      </div>
    </div>
  );
}

export default Home;
