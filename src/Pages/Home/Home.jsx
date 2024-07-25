import React, { useContext } from "react";
import "./Home.css";
import { IoCodeSlash } from "react-icons/io5";
import { IoPlayOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <h2>Flip Around</h2>
        <button onClick={() => navigate("/game")}>
          <IoPlayOutline className="icon" />
          <span>Start Game</span>
        </button>
        <button>
          <IoSettingsOutline className="icon" />
          <span>Settings</span>
        </button>
        <button>
          <IoCodeSlash className="icon" />
          <span>Developer</span>
        </button>
      </div>
    </>
  );
};

export default Home;
