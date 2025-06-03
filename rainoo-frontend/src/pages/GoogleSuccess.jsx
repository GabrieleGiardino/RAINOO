import { useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import axios from 'axios';

function GoogleSuccess() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');

        if (token) {
          localStorage.setItem('token', token);
          console.log('✅ Token salvato:', token);
        }

        const savedToken = localStorage.getItem('token');
        if (!savedToken) {
          console.error('❌ Nessun token trovato!');
          navigate('/login');
          return;
        }

        const response = await axios.get('http://localhost:3001/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${savedToken}`,
          },
        });

        const userData = response.data.user;
        console.log('✅ Utente recuperato:', userData);

        login(userData);
        navigate('/profile');
      } catch (error) {
        console.error('❌ Errore nel recuperare il profilo:', error.response || error);
        navigate('/login');
      }
    };

    fetchUser();
  }, [login, navigate, location.search]);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Accesso in corso...</h2>
    </div>
  );
}

export default GoogleSuccess;