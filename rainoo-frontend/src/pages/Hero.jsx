import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

function Hero({ onShowMarkers }) {
  const { t, i18n } = useTranslation();
  const [index, setIndex] = useState(0);

  const reviews = [
    { name: "Chiara", text_it: "Servizio comodo e veloce!", text_en: "Convenient and fast service!" },
    { name: "Luca", text_it: "Finalmente non dimentico più l’ombrello!", text_en: "Finally I no longer forget my umbrella!" },
    { name: "Anna, Torino", text_it: "Comodissimo quando sei in giro e piove all’improvviso.", text_en: "Very handy when you're out and it starts raining unexpectedly." }
  ];

  const current = reviews[index];
  const currentText = i18n.language === 'it' ? current.text_it : current.text_en;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="hero section-box">
      <div className="hero-content">
        <h1>{t('slogan')}</h1>
        <p>{t('hero.subtitle')}</p>
        <button className="cta-button" onClick={onShowMarkers}>
          {t('hero.cta')}
        </button>
      </div>

      <div className="review-box">
        <blockquote>“{currentText}”</blockquote>
        <cite>– {current.name}</cite>
        <div className="review-stars">★★★★★</div>
      </div>
    </section>
  );
}

export default Hero;
