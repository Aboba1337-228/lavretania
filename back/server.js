const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

// Настройки CORS
const corsOptions = {
  origin: 'http://localhost:5173', // Замените на URL вашего фронтенда
  optionsSuccessStatus: 200
};

// Использование CORS с указанными настройками
app.use(cors(corsOptions));
app.use(express.json()); // express.json() используется вместо bodyParser.json() в новых версиях Express

const secretKey = 'ananasik12345678'; // Замените на свой секретный ключ

// Подключение к базе данных PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Lavretania',
  password: '123123',
  port: 5432,
});

// Создание таблиц пользователей, форм отправки и обратной связи
const createTablesQueries = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    birthdate DATE NOT NULL,
    password VARCHAR(255) NOT NULL
  );
  CREATE TABLE IF NOT EXISTS submission_form (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    wishes TEXT
  );
  CREATE TABLE IF NOT EXISTS feedback (
    id SERIAL PRIMARY KEY,
    phone VARCHAR(20) NOT NULL,
    message TEXT
  );
`;

pool.query(createTablesQueries)
  .then(() => console.log('Tables created or verified successfully'))
  .catch(err => console.error('Error creating tables:', err));

// Эндпоинты

// Регистрация
app.post('/register', async (req, res) => {
  try {
    const { name, email, birthdate, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const insertQuery = `
      INSERT INTO users (name, email, birthdate, password)
      VALUES ($1, $2, $3, $4)
    `;
    await pool.query(insertQuery, [name, email, birthdate, hashedPassword]);
    res.json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'An error occurred during registration' });
  }
});

// Авторизация
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const selectQuery = 'SELECT * FROM users WHERE email = $1';
    const result = await pool.query(selectQuery, [email]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (isValidPassword) {
        const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
        res.json({ token });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'An error occurred during login' });
  }
});

// Отправка формы
app.post('/submit-form', async (req, res) => {
  try {
    const { name, phone, email, date, wishes } = req.body;
    const insertQuery = `
      INSERT INTO submission_form (name, phone, email, date, wishes)
      VALUES ($1, $2, $3, $4, $5)
    `;
    await pool.query(insertQuery, [name, phone, email, date, wishes]);
    res.json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'An error occurred during form submission' });
  }
});

// Создание записи обратной связи
app.post('/feedback', async (req, res) => {
  try {
    const { phone, message } = req.body;
    const insertQuery = `
      INSERT INTO feedback (phone, message)
      VALUES ($1, $2)
    `;
    await pool.query(insertQuery, [phone, message]);
    res.json({ message: 'Feedback received successfully' });
  } catch (error) {
    console.error('Error receiving feedback:', error);
    res.status(500).json({ message: 'An error occurred during feedback submission' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});