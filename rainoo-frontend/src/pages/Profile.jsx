import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import './Profile.css';

function Profile() {
  const { user, updateUser } = useContext(AuthContext);
  const { t } = useTranslation();
  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    if (user && user._id) {
      setFormData({
        nome: user.nome || '',
        cognome: user.cognome || '',
        email: user.email || '',
        age: user.age || '',
        userType: user.userType || 'base',
      });

      const token = localStorage.getItem('token');
      axios
        .get(`http://localhost:3001/api/users/${user._id}/rentals`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setRentals(res.data))
        .catch((err) => console.error('Errore noleggi:', err));
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.put(
        `http://localhost:3001/api/users/${user._id}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      updateUser(res.data);
      setIsEditing(false);
    } catch (err) {
      console.error('Errore aggiornamento profilo:', err);
      alert(t('updateError'));
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return alert(t('selectFile'));
    const form = new FormData();
    form.append('avatar', selectedFile);
    try {
      setUploading(true);
      const token = localStorage.getItem('token');
      const res = await axios.post(
        `http://localhost:3001/api/users/${user._id}/avatar`,
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      updateUser({ ...user, avatar: res.data.avatarUrl });
      alert(t('avatarUpdated'));
    } catch (err) {
      console.error('Upload error:', err);
      alert(t('avatarUploadError'));
    } finally {
      setUploading(false);
    }
  };

  if (!user) return <p>{t('loading')}</p>;

  return (
    <div className="profile-container">
      <h1>{t('profileWelcome')}, {user.username}</h1>

      <div className="profile-info">
        {isEditing ? (
          <>
            <input name="email" value={formData.email} onChange={handleChange} placeholder={t('email')} /><br />
            <input name="nome" value={formData.nome} onChange={handleChange} placeholder={t('firstName')} /><br />
            <input name="cognome" value={formData.cognome} onChange={handleChange} placeholder={t('lastName')} /><br />
            <input name="age" value={formData.age} onChange={handleChange} placeholder={t('age')} /><br />
            <select name="userType" value={formData.userType} onChange={handleChange}>
              <option value="base">Base</option>
              <option value="premium">Premium</option>
            </select><br />
            <div className="profile-buttons">
              <button onClick={handleSave}>{t('save')}</button>
              <button onClick={() => setIsEditing(false)}>{t('cancel')}</button>
            </div>
          </>
        ) : (
          <>
            <p>{t('email')}: {user.email}</p>
            <p>{t('firstName')}: {user.nome}</p>
            <p>{t('lastName')}: {user.cognome}</p>
            <p>{t('age')}: {user.age || 'N/D'}</p>
            <p>{t('userType')}: {user.userType}</p>
            <div className="profile-buttons">
              <button onClick={() => setIsEditing(true)}>{t('edit')}</button>
            </div>
          </>
        )}
      </div>

      <div className="profile-avatar">
      <img src={user.avatar || 'https://via.placeholder.com/150'} alt="avatar" />



        <br />
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={uploading} className="upload-button">
          {uploading ? t('uploading') : t('uploadNewPhoto')}
        </button>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h2>{t('rentalHistory')}</h2>
        {rentals.length === 0 ? (
          <p>{t('noRentals')}</p>
        ) : (
          <table className="profile-table">
            <thead>
              <tr>
                <th>{t('station')}</th>
                <th>{t('date')}</th>
                <th>{t('duration')}</th>
                <th>{t('amount')}</th>
              </tr>
            </thead>
            <tbody>
              {rentals.map((r, i) => (
                <tr key={i}>
                  <td>{r.station}</td>
                  <td>{new Date(r.date).toLocaleDateString()}</td>
                  <td>{r.duration}h</td>
                  <td>{r.amount}€</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div style={{ marginTop: '40px' }}>
        <h3>{t('rentUmbrella')}</h3>
        <a href="/checkout">
          <button className="upload-button">{t('goToPayment')}</button>
        </a>
      </div>
    </div>
  );
}

export default Profile;
