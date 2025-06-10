// === server.js (nella root di rainoo-backend) ===
require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');
console.log(app)
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connesso a MongoDB');
    app.listen(PORT, () => {
      console.log(`✅ Server attivo sulla porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Errore connessione MongoDB:', err.message);
    process.exit(1);
  });