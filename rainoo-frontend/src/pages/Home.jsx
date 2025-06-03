import React from 'react';
import Map from '../pages/Map';
import './Home.css';
import { useTranslation } from 'react-i18next';
import MotionDiv from '../components/MotionDiv';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-container">

      <MotionDiv>
        <section className="slogan">
          <h2>{t('slogan')}</h2>
        </section>
      </MotionDiv>

      <MotionDiv>
        <section className="how-it-works section-box">
          <h3 className="section-title">{t('howItWorks')}</h3>
          <div className="steps-container">
            <div className="step">
              <h4>01</h4>
              <p>{t('step1')}</p>
            </div>
            <div className="step">
              <h4>02</h4>
              <p>{t('step2')}</p>
            </div>
            <div className="step">
              <h4>03</h4>
              <p>{t('step3')}</p>
            </div>
            <div className="step">
              <h4>04</h4>
              <p>{t('step4')}</p>
            </div>
          </div>
        </section>
      </MotionDiv>

      <MotionDiv>
        <section className="map-section section-box">
          <h3 className="section-title">{t('mapTitle')}</h3>
          <Map />
        </section>
      </MotionDiv>

      <MotionDiv>
        <section className="benefits-section section-box">
          <h3 className="section-title">{t('benefitsTitle')}</h3>
          <ul className="benefits-list">
            <li>{t('benefit1')}</li>
            <li>{t('benefit2')}</li>
            <li>{t('benefit3')}</li>
            <li>{t('benefit4')}</li>
          </ul>
        </section>
      </MotionDiv>

      <MotionDiv>
        <section className="partnership-section section-box">
          <h3 className="section-title">{t('partnersTitle')}</h3>
          <div className="partners-list">
            <div className="partner-card">🚲 Comune di Milano</div>
            <div className="partner-card">🌍 Green Mobility Italia</div>
            <div className="partner-card">⚡ E-Move S.r.l.</div>
            <div className="partner-card">🏎️ Bolt Spa</div>
          </div>
        </section>
      </MotionDiv>
      
    </div>
  );
}

export default Home;
