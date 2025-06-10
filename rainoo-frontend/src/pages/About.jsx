import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '40px' }}>
      <h1>{t('aboutTitle')}</h1>
      <section style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>{t('aboutSectionTitle')}</h2>

        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
          {t('aboutParagraph1')}
        </p>

        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginTop: '20px' }}>
          {t('aboutParagraph2')}
        </p>

        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginTop: '20px' }}>
          {t('aboutParagraph3')}
        </p>
      </section>
    </div>
  );
}

export default About;
