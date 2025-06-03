import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import MotionDiv from '../components/MotionDiv';
import './Register.css';

function Register() {
  const { t } = useTranslation();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    password: '',
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
      const response = await axios.post('http://localhost:3001/api/auth/register', formData);
      login(response.data.user);
      navigate('/profile');
    } catch (error) {
      alert('Errore nella registrazione.');
    }
  };

  return (
    <MotionDiv>
      <div className="auth-container">
        <h1>{t('registerTitle')}</h1>
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="text"
            name="nome"
            placeholder={t('firstName')}
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="cognome"
            placeholder={t('lastName')}
            value={formData.cognome}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t('email')}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder={t('password')}
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">{t('register')}</button>
        </form>

        <p>{t('alreadyHaveAccount')} <Link to="/login">{t('goToLogin')}</Link></p>
      </div>
    </MotionDiv>
  );
}

export default Register;
