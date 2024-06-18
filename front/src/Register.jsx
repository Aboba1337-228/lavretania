import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await axios.post('http://localhost:3000/register', { name, email, birthdate, password });
      navigate('/login');
    } catch (error) {
      console.error('Error registering:', error);
      alert('An error occurred during registration');
    }
  };

  return (
    <div className="auth-container">
      <h2>Регистрация</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="date" placeholder="День рождения" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} required />
        <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="password" placeholder="Подтвердите пароль" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        <button type="submit">Зарегистрироваться</button>
      </form>
      <p>Уже есть аккаунт? <a href="/login">Войти</a></p>
    </div>
  );
}

export default Register;
