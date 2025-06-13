import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MotionDiv from '../components/MotionDiv';
import {
  FaMapMarkedAlt,
  FaQrcode,
  FaCloudSunRain,
  FaExchangeAlt,
} from 'react-icons/fa';
import MapWithMarkers from './Map';
import Hero from './Hero';
import './Home.css';

function Home() {
  const { t } = useTranslation();
  const [markers, setMarkers] = useState([]);

  const showMilanoMarkers = () => {
    const milanoMarkers = [
      [45.4642, 9.19],
      [45.4780, 9.2270],
      [45.4668, 9.1905],
    ];
    setMarkers(milanoMarkers);

    const section = document.getElementById('map-section');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-container">
      <MotionDiv>
        <Hero onShowMarkers={showMilanoMarkers} />
      </MotionDiv>

      <MotionDiv>
        <section className="how-it-works section-box">
          <h3 className="section-title">{t('howItWorks')}</h3>
          <div className="steps-container">
            <div className="step">
              <FaMapMarkedAlt className="step-icon" />
              <h4>01</h4>
              <p>{t('step1')}</p>
            </div>
            <div className="step">
              <FaQrcode className="step-icon" />
              <h4>02</h4>
              <p>{t('step2')}</p>
            </div>
            <div className="step">
              <FaCloudSunRain className="step-icon" />
              <h4>03</h4>
              <p>{t('step3')}</p>
            </div>
            <div className="step">
              <FaExchangeAlt className="step-icon" />
              <h4>04</h4>
              <p>{t('step4')}</p>
            </div>
          </div>
        </section>
      </MotionDiv>

      <MotionDiv>
        <section id="map-section" className="map-section section-box">
          <h3 className="section-title">{t('mapTitle')}</h3>
          <MapWithMarkers markers={markers} />
        </section>
      </MotionDiv>

      <MotionDiv>
        <section className="benefits-section section-box">
          <h3 className="section-title">{t('benefitsTitle')}</h3>
          <div className="benefits-grid">
            <div className="benefit-card">💸 {t('benefit1')}</div>
            <div className="benefit-card">🌱 {t('benefit2')}</div>
            <div className="benefit-card">🎒 {t('benefit3')}</div>
            <div className="benefit-card">🏷️ {t('benefit4')}</div>
          </div>
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
