import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  withCredentials: true, 
});

export const fetchLoggedUser = async () => {
  try {
    const token = localStorage.getItem('token');
    console.log('Token inviato:', token); 

    const response = await api.get('/auth/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.user;
  } catch (error) {
    console.error('Errore nel recupero utente:', error);
    return null;
  }
};

export default api;
