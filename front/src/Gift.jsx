import React from "react";
import "./Allgames.css"; // Импортируем CSS-файл
import GamePhoto from "./GamePhoto";
import skidka1 from "./assets/skidka1.jpg";
import skidka2 from "./assets/skidka2.jpg";
import skidka3 from "./assets/skidka3.jpg";
import skidka4 from "./assets/skidka4.jpg";



const Gift = () => {
  return (
    <div className="allGamesContainer">
      {/* Добавляем класс allGamesTitle */}
      <h1 className="allGamesTitle">Актуальные акции</h1>
      <div className="gamesGrid">
        {/* Рендерим 6 фотографий */}
        <GamePhoto imageUrl={skidka1} />
        <GamePhoto imageUrl={skidka2} />
        <GamePhoto imageUrl={skidka3} />
        <GamePhoto imageUrl={skidka4} />

      </div>
    </div>
  );
};

export default Gift;
