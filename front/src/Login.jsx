import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function Login({ setAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setAuth(true);
      navigate('/');
    } catch (error) {
      console.error('Ошибка пароля:', error);
      alert('Неправильный email или пароль');
    }
  };

  return (
    <div className="auth-container">
      <h2>Авторизация</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Войти</button>
      </form>
      <p>Ещё нет аккаунта? <a href="/register">Зарегистрируйтесь</a></p>
    </div>
  );
}

export default Login;
