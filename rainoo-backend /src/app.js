const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const stripeRoutes = require('./routes/stripeRoutes');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));


const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);



app.use(express.json());


app.use(session({
  secret: process.env.SESSION_SECRET || 'rainooSessionSecret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 1000 * 60 * 15
  }
}));


app.use(passport.initialize());
app.use(passport.session());


app.use('/api/auth', authRoutes);
app.use('/api/stripe', stripeRoutes);

module.exports = app;
