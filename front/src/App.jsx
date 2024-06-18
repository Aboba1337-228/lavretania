import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './MainPage';
import Allgames from './Allgames';
import Gift from './Gift';
import Gallery from './Gallery';
import Contact from './Contact';
import Header from './Header'; // Убедитесь, что импортируете Header
import Footer from './Footer';
import Login from './Login';
import Register from './Register';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Проверка токена в localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const setAuth = (isAuth) => {
    setIsAuthenticated(isAuth);
  };

  const logout = () => {
    localStorage.removeItem('token'); // Удаляет токен из localStorage
    setIsAuthenticated(false); // Обновляет состояние аутентификации на неаутентифицированное
  };

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} logout={logout} />
      <Routes>
        <Route path="/login" element={!isAuthenticated ? <Login setAuth={setAuth} /> : <Navigate to="/" />} />
        <Route path="/register" element={!isAuthenticated ? <Register setAuth={setAuth} /> : <Navigate to="/" />} />
        <Route path="/" element={isAuthenticated ? <MainPage /> : <Navigate to="/login" />} />
        <Route path="/allgames" element={isAuthenticated ? <Allgames /> : <Navigate to="/login" />} />
        <Route path="/gift" element={isAuthenticated ? <Gift /> : <Navigate to="/login" />} />
        <Route path="/gallery" element={isAuthenticated ? <Gallery /> : <Navigate to="/login" />} />
        <Route path="/contact" element={isAuthenticated ? <Contact /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;