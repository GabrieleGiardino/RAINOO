import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './NavBar.css';

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate('/login');
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
          Rainoo
        </Link>
      </div>

      <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {!user && (
          <>
            <Link to="/about" onClick={handleLinkClick}>{t('nav.about')}</Link>
            <Link to="/partnerships" onClick={handleLinkClick}>{t('nav.partnerships')}</Link>
            <Link to="/solutions" onClick={handleLinkClick}>{t('nav.solutions')}</Link>
            <Link to="/login" onClick={handleLinkClick}>{t('nav.login')}</Link>
            <Link to="/register" onClick={handleLinkClick}>{t('nav.register')}</Link>
          </>
        )}
        {user && (
          <>
            <Link to="/profile" onClick={handleLinkClick}>{t('profile')}</Link>
            <div className="navbar-user">
              <img
                src={user.avatar || user.picture || 'https://via.placeholder.com/40'}
                alt="Foto profilo"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginRight: '8px'
                }}
              />
              <span>{user.username || user.name}</span>
              <button onClick={handleLogout}>{t('logout')}</button>
            </div>
          </>
        )}

        <div className="language-switch">
          <button onClick={() => changeLanguage('it')}>🇮🇹</button>
          <button onClick={() => changeLanguage('en')}>🇬🇧</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
