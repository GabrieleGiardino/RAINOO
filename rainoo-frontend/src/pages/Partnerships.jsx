import React from 'react';
import { useTranslation } from 'react-i18next';

function Partnerships() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{t('partnershipsTitle')}</h1>

      <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>
        {t('partnershipsIntro')}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
        <div style={cardStyle}>
          <h3>🌆 {t('publicSpacesTitle')}</h3>
          <p>{t('publicSpacesText')}</p>
        </div>
        <div style={cardStyle}>
          <h3>📣 {t('sponsorshipsTitle')}</h3>
          <p>{t('sponsorshipsText')}</p>
        </div>
        <div style={cardStyle}>
          <h3>🤝 {t('customProjectsTitle')}</h3>
          <p>{t('customProjectsText')}</p>
        </div>
      </div>

      <div style={{ marginTop: '50px' }}>
        <h2 style={{ fontSize: '1.8rem' }}>{t('contact')}</h2>
        <p style={{ fontSize: '1.1rem' }}>
          {t('contactEmail')}: <a href="mailto:partnership@rainoo.it" style={{ color: '#007bff' }}>partnership@rainoo.it</a>
        </p>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: '#f7f7f7',
  borderRadius: '12px',
  padding: '30px',
  width: '280px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  textAlign: 'left'
};

export default Partnerships;
