router.get('/google-token', async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Utente non autenticato' });
    }

    const token = jwt.sign(
      { id: req.user._id, username: req.user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({ token });
  } catch (error) {
    console.error('Errore nella generazione del token:', error);
    res.status(500).json({ message: 'Errore del server' });
  }
});
