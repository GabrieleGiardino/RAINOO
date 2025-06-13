import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './NavBar.css';

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
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
        {/* Se l'utente NON è loggato */}
        {!user && (
          <>
            <Link to="/about" onClick={handleLinkClick}>{t('nav.about')}</Link>
            <Link to="/partnerships" onClick={handleLinkClick}>{t('nav.partnerships')}</Link>
            <Link to="/solutions" onClick={handleLinkClick}>{t('nav.solutions')}</Link>
            <Link to="/login" onClick={handleLinkClick}>{t('nav.login')}</Link>
            <Link to="/register" onClick={handleLinkClick}>{t('nav.register')}</Link>
          </>
        )}

        {/* Se l'utente È loggato */}
        {user && (
          <>
            <Link to="/about" onClick={handleLinkClick}>{t('nav.about')}</Link>
            <Link to="/partnerships" onClick={handleLinkClick}>{t('nav.partnerships')}</Link>
            <Link to="/solutions" onClick={handleLinkClick}>{t('nav.solutions')}</Link>

            {/* Foto profilo cliccabile che porta al profilo */}
            <Link to="/profile" onClick={handleLinkClick}>
              <img
                src={user.avatar || user.picture || 'https://via.placeholder.com/40'}
                alt="Foto profilo"
                className="navbar-avatar"
              />
            </Link>

            {/* Logout solo su pagina profilo */}
            {location.pathname === '/profile' && (
              <button onClick={handleLogout} className="logout-button">
                {t('logout')}
              </button>
            )}
          </>
        )}

        {/* Lingue */}
        <div className="language-switch">
          <button onClick={() => changeLanguage('it')}>🇮🇹</button>
          <button onClick={() => changeLanguage('en')}>🇬🇧</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
