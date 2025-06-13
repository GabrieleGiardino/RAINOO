import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import MotionDiv from '../components/MotionDiv';
import './Login.css';

function Login() {
  const { t } = useTranslation();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/auth/login', {
        email,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem('token', token);


      login({
        _id: user.id || user._id,  
        nome: user.nome,
        cognome: user.cognome,
        email: user.email,
        age: user.age,
        userType: user.userType,
        avatar: user.avatar || '',
        username: user.username || `${user.nome}${user.cognome}`,
      });
      

      navigate('/profile');
    } catch (error) {
      console.error('Errore login:', error);
      alert(t('updateError') || 'Login fallito!');
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3001/api/auth/google';
  };

  return (
    <MotionDiv>
      <div className="auth-container">
        <h1>{t('loginTitle')}</h1>
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="email"
            placeholder={t('email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder={t('password')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
          <button type="submit">{t('login')}</button>
        </form>

        <button onClick={handleGoogleLogin} className="google-btn">
          {t('loginWithGoogle')}
        </button>
      </div>
    </MotionDiv>
  );
}

export default Login;
