// MainPage.jsx
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MainPage.css';
import firstphoto from './assets/main.png';
import { NavLink } from 'react-router-dom';
import slide1 from './assets/image2.png';
import slide2 from './assets/image3.png';
import slide3 from './assets/image4.png';
import NEW from './assets/Background.png';
import Background from './assets/Background1.png'
import Form from './form';
import Tort from './assets/tort.png'
import Rabbit from './assets/rabbit.png'
import Footer from './Footer';

function MainPage() {
    const [count, setCount] = useState(0);

    const sliderSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <>
            <div className='Gamecentr'>
                <div className='block1'>
                    <p id='gamecenter'>Игровой центр<br />развлечений</p>
                    <p id='opisgamecenter'>На одном пространстве собраны активные <br /> игры, интеллектуальные квесты и залы для<br />мероприятий.<br />Организуйте идеальный праздник!</p>
                    <div className='bt'>
                        <NavLink to="/allgames"><p id='yellowbt'>Заказать праздник</p></NavLink>
                    </div>
                </div>
                <div className='block2'>
                    <img id='firstphoto' src={firstphoto} alt="Gamecenter" />
                </div>
            </div>
            <div className='NEW'>
                <p id='new'>Новинка</p>
                <NavLink to="/allgames"><img id="new-img" src={NEW} alt="New" /></NavLink>
            </div>
            <Form></Form>
            <div className="discounts">
                <h2>Скидки и акции</h2>
                <div className="discountBlock">
                    <div className="discountCard">
                        <div className="diagonal"></div>
                        <p>С Днем Рождения!</p>
                        <img src={Tort} alt="Birthday" />
                        <p>В будние дни отмечать<br />праздник выгоднее!</p>
                        <NavLink to="/gift"><button>Подробнее</button></NavLink>
                    </div>
                    <div className="discountCard">
                        <div className="diagonal"></div>
                        <p>С друзьями выгодней!</p>
                        <img src={Rabbit} alt="Birthday" />
                        <p>Скидка 10% за <br />рекомендацию</p>
                        <NavLink to="/gift"><button>Подробнее</button></NavLink>
                    </div>
                    <div className="discountCard">
                        <div className="diagonal"></div>
                        <p>С Днем Рождения!</p>
                        <img src={Tort} alt="Birthday" />
                        <p>Закажите у нас торт<br />на день рождения!</p>
                        <NavLink to="/gift"><button>Подробнее</button></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage;
