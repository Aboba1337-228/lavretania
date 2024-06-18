// Footer.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Импорт Link из react-router-dom
import './Footer.css';
import Phone from './assets/phone.png';
import Adress from './assets/adress.png';
import Time from './assets/time.png';
import Logo from './assets/image1.png';
import Vk from './assets/vk.png';

function Footer() {
    const [count, setCount] = useState(0);

    return (
        <div className="footerContent">
            <div className='ALLcontent'>
                <p className="locationTitle">Как нас найти?</p>
                <div className="contactInfo">
                    <div className="contactItem"><img src={Phone} alt="/" /> +7 (3532) 66-34-99</div>
                    <div className="contactItem"> <img src={Adress} alt="/" /> г. Оренбург, Пр. Победы, 1А</div>
                    <div className="contactItem"><img src={Time} alt="/  " /> Время работы игрового центра:</div>
                    <div className="workingHours">
                        <p>ПН-ЧТ 10:00-21:00</p>
                        <p>ПТ 10:00-22:00</p>
                        <p>СБ-ВС 09:00-22:00</p>
                        <p>Звонки принимаются до 20:45. После 20:30 - все игры проводятся только по предварительной записи в рабочее время центра, при подтверждении брони.</p>
                    </div>
                </div>
            </div>

            {/* Блок с колонками */}
            <img id='logo' src={Logo} alt="Логотип" />
            <div className="footerColumns">

                <div className="column">
                    <p className="columnTitle">Клиентам</p>
                    <Link to="/">Главная</Link> {/* Добавление ссылки */}
                    <Link to="/gift">Акции</Link> {/* Добавление ссылки */}
                </div>
                <div className="column">
                    <p className="columnTitle">Услуги</p>
                    <Link to="/Allgames">Все развлечения</Link> {/* Добавление ссылки */}
                    <Link to="/allgames">Детские праздники</Link> {/* Добавление ссылки */}
                    <Link to="/allgames">Выпускные</Link> {/* Добавление ссылки */}
                </div>
                <div className="column">
                    <p className="columnTitle">О центре</p>
                    <Link to="/contact">Контактная информация</Link> {/* Добавление ссылки */}
                    <Link to="/gallery">Фотогалерея</Link> {/* Добавление ссылки */}
                    {/* "Юридическая информация" пока не имеет ссылки */}
                </div>
            </div>

            {/* Мы в социальных сетях */}
            <div className="socialNetworks">
                <p>Мы в социальных сетях</p>
                <a href="https://vk.com"><img src={Vk} alt="Вконтакте" /></a> {/* Использование обычной ссылки */}
            </div>

            {/* Политика защиты персональных данных и Пользовательское соглашение */}
            <div className="legalInfo">
                <Link to="/">Политика защиты персональных данных</Link> {/* Добавление ссылки */}
                <Link to="/">Пользовательское соглашение</Link> {/* Добавление ссылки */}
            </div>

            {/* ©2024 Лавретания */}
            <p className="copyright">©2024 Лавретания</p>
        </div>
    );
}

export default Footer;
