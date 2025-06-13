import React from 'react';
import { useTranslation } from 'react-i18next';
import '../pages/Partner.css';
import ContactForm from '../components/ContactForm';

function Partnerships() {
  const { t } = useTranslation();

  return (
    <div className="partnerships-container">
      <h1 className="partnerships-title">{t('partnershipsTitle')}</h1>

      <p className="partnerships-intro">{t('partnershipsIntro')}</p>

      <div className="partnerships-cards">
        <div className="partnership-card">
          <h3>🌆 {t('publicSpacesTitle')}</h3>
          <p>{t('publicSpacesText')}</p>
        </div>
        <div className="partnership-card">
          <h3>📣 {t('sponsorshipsTitle')}</h3>
          <p>{t('sponsorshipsText')}</p>
        </div>
        <div className="partnership-card">
          <h3>🤝 {t('customProjectsTitle')}</h3>
          <p>{t('customProjectsText')}</p>
        </div>
      </div>

      <div className="partnership-contact">
        <h2>{t('contact')}</h2>
        <p>
          {t('contactEmail')}: <a href="mailto:partnership@rainoo.it">partnership@rainoo.it</a>
        </p>
      </div>
      <ContactForm />
    </div>
  );
}

export default Partnerships;
