import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Profile() {
  const { user, updateUser } = useContext(AuthContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  if (!user) {
    return <p>Loading...</p>;
  }

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Seleziona un file prima di caricare.');
      return;
    }

    const formData = new FormData();
    formData.append('avatar', selectedFile);

    try {
      setUploading(true);
      const token = localStorage.getItem('token');

      const response = await axios.post(
        `http://localhost:3001/api/users/${user._id}/avatar`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      updateUser({ avatar: response.data.avatarUrl });
      alert('✅ Foto profilo aggiornata con successo!');
    } catch (error) {
      console.error('❌ Errore upload:', error.response?.data || error);
      alert('Errore durante il caricamento della foto.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h1>Benvenuto, {user.username}</h1>
      <p>Email: {user.email}</p>

      <div style={{ marginTop: '20px' }}>
        {user.avatar ? (
          <img
            src={user.avatar}
            alt="Avatar"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '10px'
            }}
          />
        ) : (
          <p>Nessun avatar caricato</p>
        )}

        <div>
          <input type="file" onChange={handleFileChange} />
          <button
            onClick={handleUpload}
            disabled={uploading}
            style={{
              padding: '10px 20px',
              marginLeft: '10px',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            {uploading ? 'Caricamento...' : 'Carica nuova foto'}
          </button>
        </div>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h2>Vuoi noleggiare un ombrello?</h2>
        <Link to="/checkout">
          <button
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              backgroundColor: '#3399ff',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              marginTop: '20px'
            }}
          >
            Vai al pagamento
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
