import axios from 'axios';
import { useTranslation } from 'react-i18next';

const CheckoutPage = () => {
  const { t } = useTranslation();

  const handleCheckout = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/stripe/create-checkout-session', {
        amount: 500, 
      });

      window.location.href = response.data.url;
    } catch (err) {
      console.error('Errore nel checkout:', err);
      alert(t('checkout.error'));
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '60px' }}>
      <h2>{t('checkout.title')}</h2>
      <p>{t('checkout.description')}</p>
      <button
        onClick={handleCheckout}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#6772e5',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        {t('checkout.cta')}
      </button>
    </div>
  );
};

export default CheckoutPage;
