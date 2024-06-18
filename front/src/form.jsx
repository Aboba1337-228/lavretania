import React, { useState } from 'react';
import './form.css';
import Background from './assets/Background1.png';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        wishes: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.text(); // Если сервер возвращает текст
            console.log(data);
            // Показать всплывающее окно после успешной отправки
            alert('Заявка успешно отправлена на рассмотрение!');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
        }
    };

    return (
        <div className='booking' >
            <div className='bookingContent'>
                <div className='leftBlock'>
                    <p id='bookingText'>Хотите забронировать<br />праздник?</p>
                    <p id='contactText'>Оставьте ваши контактные данные и<br />мы свяжемся с вами в ближайшее<br />время!</p>
                </div>
                <div className='rightBlock'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Имя" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <input type="tel" name="phone" placeholder="Телефон" value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <input type="date" name="date" placeholder="Дата праздника" value={formData.date} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <textarea name="wishes" placeholder="Пожелания (макс. 120 символов)" maxLength="120" value={formData.wishes} onChange={handleChange}></textarea>
                        </div>
                        <p>Нажимая кнопку "Оставить заявку", вы соглашаетесь на обработку<br />персональных данных</p>
                        <button type="submit">Оставить заявку</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;