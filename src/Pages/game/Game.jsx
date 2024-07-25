import React, { useState, useEffect } from "react";
import "./Game.css";
import Card from "../../Components/Card";
import { useNavigate } from "react-router-dom";
import { RiRestartLine } from "react-icons/ri";
import { GiExitDoor } from "react-icons/gi";

const Game = () => {
  const [gameTable, setGameTable] = useState([]);
  const [currentPair, setCurrentPair] = useState([]);
  const [winning, setWinning] = useState([]);
  const navigate = useNavigate();

  const shuffleArray = (array) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const genCards = () => {
    setWon((old) => false);
    setCurrentPair((old) => []);
    setWinning((old) => []);
    const arra = shuffleArray(Array.from({ length: 10 }, (_, i) => i + 1));
    console.log("Random Array: ", arra);
    setGameTable((old) => arra);
    setCurrentPair((old) => arra);

    new Promise((resolve, reject) => {
      setTimeout(() => {
        setCurrentPair((old) => []);
        const now = new Date();
        setStartTime((old) => now);
      }, 2000);
    });
  };

  useEffect(() => {
    genCards();
  }, []);

  useEffect(() => {
    if (currentPair.length === 2) {
      if (
        currentPair[0] === currentPair[1] + 5 ||
        currentPair[0] + 5 === currentPair[1]
      ) {
        setWinning((prevPairs) => {
          return [...prevPairs, currentPair[0], currentPair[1]];
        });
      }
      setTimeout(() => {
        setCurrentPair([]);
      }, 500);
    }
  }, [currentPair]);
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState();
  useEffect(() => {
    if (winning.length === 10) {
      const timestamp1 = startTime.getTime();
      const timestamp2 = new Date().getTime();
      var differenceInMilliseconds = timestamp2 - timestamp1;
      const differenceInSeconds = differenceInMilliseconds / 1000;
      setTimeout(() => {
        setTime((ol) => differenceInSeconds);
        setWon((old) => true);
      }, 1000);
    }
  }, [winning]);
  const com = "";
  const [won, setWon] = useState(false);
  return (
    <>
      {won && (
        <>
          <div className="winScreen">
            <h2>Congratulations You Beat The Game In</h2>
            <h2>{time} seconds</h2>
            <button onClick={() => genCards()}>Restart</button>
            <button onClick={() => navigate("/")}>Leave</button>
          </div>
        </>
      )}
      <div className="settings">
        <div className="restart">
          <button onClick={() => genCards()}>
            <RiRestartLine />
          </button>
        </div>
        <div className="restart">
          <button onClick={() => navigate("/")}>
            <GiExitDoor />
          </button>
        </div>
      </div>
      <div className="game-container">
        <div className="cardBoard">
          {gameTable.map((id) => (
            <Card
              key={id}
              id={id}
              currentPair={currentPair}
              setCurrentPair={setCurrentPair}
              winning={winning}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Game;
