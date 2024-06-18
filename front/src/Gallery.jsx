// Allgames.jsx
import React from "react";
import "./Allgames.css"; // Импортируем CSS-файл
import GamePhoto from "./GamePhoto"; // Импортируем компонент GamePhoto
import pic1 from './assets/photo1.jpg'
import pic2 from './assets/photo2.jpg'
import pic3 from './assets/photo3.jpg'
import pic4 from './assets/photo4.jpg'
import pic5 from './assets/photo5.jpg'
import pic6 from './assets/photo6.jpg'

const Allgames = () => {
  return (
    <div className="allGamesContainer">
      {/* Добавляем класс allGamesTitle */}
      <h1 className="allGamesTitle">Фото довольных детей</h1>
      <div className="gamesGrid">
        {/* Рендерим 6 фотографий */}
        <GamePhoto imageUrl={pic1} />
        <GamePhoto imageUrl={pic2} />
        <GamePhoto imageUrl={pic3} />
        <GamePhoto imageUrl={pic4} />
        <GamePhoto imageUrl={pic5} />
        <GamePhoto imageUrl={pic6} />

      </div>
    </div>
  );
};

export default Allgames;
