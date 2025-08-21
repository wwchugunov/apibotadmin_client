import { useState } from 'react';
import './AdminLogin.css';

export default function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Здесь можно вызвать API для проверки логина
    // Пример: POST /api/admin/login {username, password}
    // Для демо просто проверим фиктивные данные
    if (username === 'admin' && password === '1234') {
      setError('');
      onLogin(); // успешный вход
    } else {
      setError('Неверный логин или пароль');
    }
  };

  return (
    <div className="admin-login-container">
      <h1>Вход</h1>
      <form onSubmit={handleSubmit} className="admin-login-form">
        <label>
          Логин:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Пароль:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
