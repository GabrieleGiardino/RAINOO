# RAINOO

Rainoo è una web app per il noleggio smart di ombrelli in città, pensata per aiutare i cittadini nei giorni di pioggia improvvisa, o di troppo

## 🚀 Funzionalità principali

* Registrazione e login utenti (anche tramite Google OAuth)
* Dashboard personale con visualizzazione e modifica del profilo
* Upload avatar con Cloudinary
* Visualizzazione cronologia noleggi
* Sezione di pagamento per il noleggio
* Differenziazione utenti base/premium

## ⚙️ Tecnologie usate

**Frontend:**

* React + Vite
* React Router DOM
* Axios
* Context API
* i18next (internazionalizzazione)
* CSS custom

**Backend:**

* Node.js + Express
* MongoDB + Mongoose
* JWT per autenticazione
* Cloudinary per immagini
* Multer + streamifier per upload

## ♻️ Setup locale

### Prerequisiti:

* Node.js
* MongoDB
* Account gratuito Cloudinary

### Backend

```bash
cd rainoo-backend
npm install
npm run dev
```

### Frontend

```bash
cd rainoo-frontend
npm install
npm run dev
```

App disponibile su: `http://localhost:3000`

## 🌐 Deploy (consigliato)

Deploy su:

* **Frontend:** Vercel / Netlify
* **Backend:** Render / Railway / Cyclic


## 📆 Stato del progetto

* [x] CRUD utenti
* [x] Avatar upload funzionante
* [x] Login/Logout gestiti correttamente
* [x] Connessione a MongoDB stabile
* [x] Traduzioni EN/IT implementate

## ✉️ Contatti

Per supporto o domande:
**Email:** [info@rainoo.it]
 
**Autore**
Giardino Gabriele
