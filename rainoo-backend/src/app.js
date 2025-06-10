// === src/app.js ===
const express = require('express');
console.log("✅ APP.JS VERO ESEGUITO"); 
const session = require('express-session');
const passport = require('./config/passport');
const cors = require('cors');

console.log("🧪 Inizio caricamento rotte...");

let authRoutes;
try {
  authRoutes = require('./routes/authRoutes');
  console.log("✅ authRoutes caricato con successo");
} catch (err) {
  console.error("❌ Errore nel caricamento di authRoutes:", err);
}

const userRoutes = require('./routes/userRoutes');
const stripeRoutes = require('./routes/stripeRoutes');

const app = express();
app.get('/', (req,res)=>{
  res.send("ciao")
})

// CORS
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET || 'rainooSessionSecret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 1000 * 60 * 15,
  },
}));

app.use(passport.initialize());
app.use(passport.session());

// ✅ Monto le routes solo se caricate correttamente
if (authRoutes) {
  app.use('/api/auth', authRoutes);
}
app.use('/api/users', userRoutes);
app.use('/api/stripe', stripeRoutes);

module.exports = app;
