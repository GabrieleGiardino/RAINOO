import axios from 'axios';

const CheckoutPage = () => {
  const handleCheckout = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/stripe/create-checkout-session', {
        amount: 500, // es. 5 euro
      });

      window.location.href = response.data.url;
    } catch (err) {
      console.error('Errore nel checkout:', err);
      alert('Errore durante il pagamento');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '60px' }}>
      <h2>Noleggia il tuo ombrello!</h2>
      <p>Paghi solo 5€ per il noleggio.</p>
      <button onClick={handleCheckout} style={{ padding: '12px 24px', fontSize: '16px', backgroundColor: '#6772e5', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
        Procedi al pagamento
      </button>
    </div>
  );
};

export default CheckoutPage;
