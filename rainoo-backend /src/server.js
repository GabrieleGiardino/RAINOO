require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 3001;

// Connessione a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connesso a MongoDB');

    // Avvio server Express
    app.listen(PORT, () => {
      console.log(`✅ Server attivo sulla porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Errore di connessione a MongoDB:', error.message);
    process.exit(1); // Chiude il processo in caso di errore grave
  });
