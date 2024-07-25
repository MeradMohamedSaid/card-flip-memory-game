import React from "react";
import "./Card.css";
import lion from "../assets/l.png";
import cat from "../assets/k.png";
import elephant from "../assets/e.png";
import penguin from "../assets/p.png";
import dog from "../assets/h.png";

// Mapping IDs to images
const imageMap = {
  1: lion,
  2: cat,
  3: elephant,
  4: penguin,
  5: dog,
  6: lion,
  7: cat,
  8: elephant,
  9: penguin,
  10: dog,
};

const Card = ({ id, currentPair, setCurrentPair, winning }) => {
  const handleClickCard = () => {
    setCurrentPair((prevPairs) => {
      if (!prevPairs.includes(id)) {
        return [...prevPairs, id];
      }
      return prevPairs;
    });
  };

  // Check if the card is in the current pair to determine if it's flipped
  const isFlipped = currentPair.includes(id);
  const isWin = winning.includes(id);

  return (
    <div
      className={isFlipped ? "flippedCard" : isWin ? "winCard" : "cardBody"}
      onClick={isFlipped || isWin ? undefined : handleClickCard}
    >
      {isFlipped || isWin ? (
        <img src={imageMap[id]} alt={`Card ${id}`} className="cardImage" />
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
