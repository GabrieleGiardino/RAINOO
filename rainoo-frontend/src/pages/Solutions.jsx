import React from 'react';
import { useTranslation } from 'react-i18next';

function Solutions() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{t('solutionsTitle')}</h1>

      <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>
        {t('solutionsIntro')}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
        <div style={cardStyle}>
          <h3>🏛️ {t('publicTitle')}</h3>
          <p style={listStyle}>{t('publicText')}</p>
        </div>

        <div style={cardStyle}>
          <h3>🏢 {t('privateTitle')}</h3>
          <p style={listStyle}>{t('privateText')}</p>
        </div>
      </div>

      <div style={{ marginTop: '50px' }}>
        <h2 style={{ fontSize: '1.8rem' }}>{t('installationTitle')}</h2>
        <p style={{ fontSize: '1.1rem' }}>
          {t('installationText')}
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

const listStyle = {
  textAlign: 'left',
  whiteSpace: 'pre-line',
  marginBottom: '15px',
  fontSize: '1rem'
};

export default Solutions;
