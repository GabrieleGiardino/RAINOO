import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:partnership@rainoo.it?subject=Messaggio da ${form.name}&body=${form.message}%0D%0A%0D%0AContatto: ${form.email}`;
  };

  return (
    <section className="contact-form-section">
      <h3>Scrivici un messaggio</h3>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Il tuo nome"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="La tua email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Il tuo messaggio"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Invia via Email</button>
        <a
          href={`https://wa.me/393401234567?text=Ciao%20Rainoo!%20${encodeURIComponent(form.message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          Oppure invia via WhatsApp
        </a>
      </form>
    </section>
  );
}

export default ContactForm;
