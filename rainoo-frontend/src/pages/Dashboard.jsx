// src/pages/Dashboard.jsx
import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import './Dashboard.css';

function Dashboard() {
  const { user, setUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    nome: user.nome || '',
    cognome: user.cognome || '',
    email: user.email || '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(`http://localhost:3001/api/users/${user._id}`, formData);
      setUser(res.data); // aggiorna contesto
      alert('Profilo aggiornato!');
    } catch (err) {
      alert('Errore durante l\'aggiornamento.');
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Il tuo profilo</h2>
      <form onSubmit={handleSubmit} className="dashboard-form">
        <label>Nome</label>
        <input name="nome" value={formData.nome} onChange={handleChange} />

        <label>Cognome</label>
        <input name="cognome" value={formData.cognome} onChange={handleChange} />

        <label>Email</label>
        <input name="email" value={formData.email} onChange={handleChange} />

        <button type="submit">Salva modifiche</button>
      </form>
    </div>
  );
}

export default Dashboard;
