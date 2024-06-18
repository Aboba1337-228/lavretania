import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from './assets/image1.png';
import phone from './assets/phone.png';
import vk from './assets/vk.png';
import adress from './assets/adress.png';

function Header({ isAuthenticated, logout }) { // Добавлены пропсы для состояния аутентификации и функции выхода
    const [showModal, setShowModal] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [question, setQuestion] = useState('');

    const handlePhoneChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ phone: phoneNumber, message: question })
            });
            const data = await response.json();
            console.log(data);
            // Закрываем модальное окно после успешной отправки
            setShowModal(false);
            // Очищаем поля ввода после отправки
            setPhoneNumber('');
            setQuestion('');
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
    };

    return (
        <>
            <div className='orangeblock'>
                <div className='header'>
                    <NavLink to="/">
                        <img id='logo' src={logo} alt="Logo" />
                    </NavLink>
                    <div className='city'>
                        <p>Оренбург</p>
                    </div>
                    <div className='Number'>
                        <p>+7 (3532) 66-34-99</p>
                        <div className='call'>
                            <button id='phone' onClick={() => setShowModal(true)}>
                                <img src={phone} alt="Phone" />
                                <p id='dur'>Обратный звонок</p>
                            </button>
                        </div>
                    </div>
                    <a href="https://vk.com"><img id='vk' src={vk} alt="VK" /></a>
                </div>
            </div>
            <div className='whiteblock'>
                <NavLink to="/allgames">Все<br /> развлечения</NavLink>
                <NavLink to="/allgames">Детские <br/> праздники</NavLink>
                <NavLink to="/gift">Акции</NavLink>
                <NavLink to="/gallery">Галерея</NavLink>
                {/* Условное отображение ссылки на авторизацию или кнопки выхода */}
                {isAuthenticated ? (
                    <button onClick={logout}>Выйти</button>
                ) : (
                    <NavLink to= '/login'>Авторизация</NavLink>
                )}
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>×</span>
                        <h2>Обратный звонок</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="phone">Номер телефона:</label>
                            <input type="text" id="phone" value={phoneNumber} onChange={handlePhoneChange} required />
                            <label htmlFor="message">Краткая информация вопроса:</label>
                            <textarea id="message" value={question} onChange={handleQuestionChange} required />
                            <button type="submit">Отправить</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;