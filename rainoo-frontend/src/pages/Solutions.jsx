import React from 'react';
import { useTranslation } from 'react-i18next';
import './Solutions.css';

function Solutions() {
  const { t } = useTranslation();

  return (
    <div className="solutions-container">
      <h1 className="solutions-title">{t('solutionsTitle')}</h1>

      <p className="solutions-intro">{t('solutionsIntro')}</p>

      <div className="solutions-cards">
        <div className="solution-card">
          <h3>🏛️ {t('publicTitle')}</h3>
          <p className="solution-text">{t('publicText')}</p>
        </div>

        <div className="solution-card">
          <h3>🏢 {t('privateTitle')}</h3>
          <p className="solution-text">{t('privateText')}</p>
        </div>
      </div>

      <div className="installation-box">
        <h2>{t('installationTitle')}</h2>
        <p>{t('installationText')}</p>
      </div>
    </div>
  );
}

export default Solutions;
