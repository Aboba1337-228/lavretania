// Allgames.jsx
import React from "react";
import "./Allgames.css"; // Импортируем CSS-файл
import GamePhoto from "./GamePhoto.jsx"; // Импортируем компонент GamePhoto
import photo1 from "./assets/photo1.png"; // Импортируем файл изображения
import photo2 from "./assets/photo2.png"; // Импортируем файл изображения
import photo3 from "./assets/photo3.png"; // Импортируем файл изображения
import photo4 from "./assets/photo4.png"; // Импортируем файл изображения
import photo5 from "./assets/photo5.png"; // Импортируем файл изображения
import photo6 from "./assets/photo6.png"; // Импортируем файл изображения
import Form from './form.jsx'

const Allgames = () => {
  return (
    <div>
      <div className="allGamesContainer">
        {/* Добавляем класс allGamesTitle */}
        <h1 className="allGamesTitle">Все игры</h1>
        <div className="gamesGrid">
          {/* Рендерим 6 фотографий */}
          <GamePhoto imageUrl={photo1} />
          <GamePhoto imageUrl={photo2} />
          <GamePhoto imageUrl={photo3} />
          <GamePhoto imageUrl={photo4} />
          <GamePhoto imageUrl={photo5} />
          <GamePhoto imageUrl={photo6} />
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Allgames;
