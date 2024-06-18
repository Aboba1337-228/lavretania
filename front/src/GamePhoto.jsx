// GamePhoto.jsx
import { useState } from "react";
import "./GamePhoto.css";

const GamePhoto = ({ imageUrl }) => {

  return (
    <div
      className="gamePhotoContainer"
    >
      <img className="gamePhotoThumbnail" src={imageUrl} alt="Game Thumbnail" />
    </div>
  );
};

export default GamePhoto;
