import { useState } from 'react';
import AdminLogin from './AdminLogin';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {!isLoggedIn ? (
        <AdminLogin onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <h1>Добро пожаловать в админку!</h1>
      )}
    </>
  );
}

export default App;
