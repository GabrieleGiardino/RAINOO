import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  it: {
    translation: {
      slogan: "Everyone loves the sun but the rain comes anyway",
      login: "Login",
      register: "Registrati",
      profile: "Profilo",
      logout: "Logout",
      contact: "Contattaci",

      // Home
      howItWorks: "Come funziona",
      step1: "Trova la stazione più vicina dall'app",
      step2: "Ritira l'ombrello",
      step3: "Proteggiti dalla pioggia o dal sole",
      step4: "Riconsegna l'ombrello in qualsiasi stazione",
      mapTitle: "Mappa delle stazioni disponibili",
      benefitsTitle: "Perché conviene noleggiare",
      benefit1: "Risparmi sui costi rispetto all'acquisto",
      benefit2: "Rispetti l'ambiente, compri meno, sprechi meno",
      benefit3: "Nessun ingombro, lo noleggi solo per il tempo che ti serve",
      benefit4: "Puoi usufruire di tanti sconti grazie alle nostre partnership",
      partnersTitle: "Partner e collaborazioni",

      // Login
      loginTitle: "Login",
      email: "Email",
      password: "Password",
      loginWithGoogle: "Accedi con Google",

      // Register
      registerTitle: "Registrati",
      firstName: "Nome",
      lastName: "Cognome",
      alreadyHaveAccount: "Hai già un account?",
      goToLogin: "Accedi qui",

      // Footer
      rights: "Tutti i diritti riservati.",
      contactEmail: "Contattaci",
    }
  },
  en: {
    translation: {
      slogan: "Everyone loves the sun but the rain comes anyway",
      login: "Login",
      register: "Register",
      profile: "Profile",
      logout: "Logout",
      contact: "Contact us",

      // Home
      howItWorks: "How it works",
      step1: "Find the nearest station with the app",
      step2: "Pick up the umbrella",
      step3: "Stay protected from rain or sun",
      step4: "Return the umbrella at any station",
      mapTitle: "Available stations map",
      benefitsTitle: "Why renting is a smart choice",
      benefit1: "Save money compared to buying your own",
      benefit2: "Respect the environment: buy less, waste less",
      benefit3: "No clutter: rent only when you need it",
      benefit4: "Enjoy exclusive discounts thanks to our partnerships",
      partnersTitle: "Partners and collaborations",

      // Login
      loginTitle: "Login",
      email: "Email",
      password: "Password",
      loginWithGoogle: "Login with Google",

      // Register
      registerTitle: "Register",
      firstName: "First Name",
      lastName: "Last Name",
      alreadyHaveAccount: "Already have an account?",
      goToLogin: "Login here",

      // Footer
      rights: "All rights reserved.",
      contactEmail: "Contact us",
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'it',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
