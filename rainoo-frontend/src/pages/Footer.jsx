import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Rainoo - {t('rights')}</p>
        <p>
          {t('contactEmail')}: <a href="mailto:info@rainoo.it">info@rainoo.it</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
