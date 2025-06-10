import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MotionDiv from '../components/MotionDiv';
import { FaMapMarkedAlt, FaUmbrellaBeach, FaCloudSunRain, FaExchangeAlt } from 'react-icons/fa';
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
      [45.4668, 9.1905]
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
            <div className="step"><FaMapMarkedAlt /><h4>01</h4><p>{t('step1')}</p></div>
            <div className="step"><FaUmbrellaBeach /><h4>02</h4><p>{t('step2')}</p></div>
            <div className="step"><FaCloudSunRain /><h4>03</h4><p>{t('step3')}</p></div>
            <div className="step"><FaExchangeAlt /><h4>04</h4><p>{t('step4')}</p></div>
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
