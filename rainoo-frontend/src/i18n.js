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

      nav: {
        about: "Dicono di noi",
        partnerships: "Collaborazioni",
        solutions: "Soluzioni",
        login: "Login",
        register: "Registrati"
      },

      hero: {
        title: "Noleggia un ombrello. Ovunque. Quando vuoi.",
        subtitle: "Siamo qui per proteggerti dal sole e dalla pioggia, in modo sostenibile.",
        cta: "Scopri le stazioni"
      },

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

      partnershipsTitle: "Diventa partner di Rainoo",
      partnershipsIntro: "Rainoo collabora con aziende, istituzioni e realtà locali per portare ombrelli condivisi ovunque...",
      publicSpacesTitle: "Spazi pubblici & aziende",
      publicSpacesText: "Ospita una stazione Rainoo nel tuo negozio, ufficio o spazio pubblico per offrire un servizio innovativo e utile ai cittadini.",
      sponsorshipsTitle: "Sponsorizzazioni",
      sponsorshipsText: "Personalizza gli ombrelli e le stazioni con il tuo logo e comunica il tuo impegno per la sostenibilità.",
      customProjectsTitle: "Progetti su misura",
      customProjectsText: "Hai un’idea o un progetto particolare? Collaboriamo per sviluppare soluzioni personalizzate su misura per la tua realtà.",

      solutionsTitle: "Soluzioni Rainoo",
      solutionsIntro: "Le nostre stazioni intelligenti per ombrelli condivisi sono modulari, facili da installare e integrate con la nostra app.",
      publicTitle: "Spazi pubblici",
      publicText: "Ideali per piazze, parchi, università, stazioni e aeroporti. Offri ai cittadini un nuovo modo per affrontare il maltempo.",
      privateTitle: "Clienti privati",
      privateText: "Perfette per centri commerciali, coworking, hotel ed eventi. Aggiungi un servizio utile e green alla tua struttura.",
      installationTitle: "Installazione semplice e veloce",
      installationText: "Le nostre stazioni si installano senza interventi invasivi e si adattano a qualsiasi spazio. Inizia oggi il cambiamento.",

      aboutTitle: "La Storia di Rainoo",
      aboutSectionTitle: "La storia di Rainoo",
      aboutParagraph1: "Rainoo nasce da un’idea semplice ma potente: condividere anziché sprecare. Ogni anno milioni di ombrelli vengono persi, rotti o dimenticati. Perché non trasformarli in una risorsa condivisa?",
      aboutParagraph2: "Il nostro obiettivo è offrire una soluzione concreta per proteggerti dal sole e dalla pioggia, senza dover acquistare o trasportare sempre un ombrello. Con Rainoo, prendi un ombrello dove ti serve e lo lasci dove vuoi.",
      aboutParagraph3: "Crediamo in una mobilità urbana più sostenibile, in una città più intelligente, e in piccoli gesti che insieme fanno la differenza.",

      loginTitle: "Login",
      email: "Email",
      password: "Password",
      loginWithGoogle: "Accedi con Google",

      registerTitle: "Registrati",
      firstName: "Nome",
      lastName: "Cognome",
      alreadyHaveAccount: "Hai già un account?",
      goToLogin: "Accedi qui",

      rights: "Tutti i diritti riservati.",
      contactEmail: "Contattaci",

      profileWelcome: "Benvenuto",
      edit: "Modifica",
      save: "Salva",
      cancel: "Annulla",
      userType: "Tipo utente",
      uploadNewPhoto: "Carica nuova foto",
      uploading: "Caricamento...",
      avatarUpdated: "Foto aggiornata!",
      avatarUploadError: "Errore durante il caricamento",
      selectFile: "Seleziona un file",
      updateError: "Errore aggiornamento profilo",
      rentalHistory: "Cronologia noleggi",
      noRentals: "Nessun noleggio trovato.",
      station: "Stazione",
      date: "Data",
      duration: "Durata",
      amount: "Importo",
      rentUmbrella: "Vuoi noleggiare un ombrello?",
      goToPayment: "Vai al pagamento",
      loading: "Caricamento in corso...",

      checkout: {
        title: "Noleggia il tuo ombrello!",
        description: "Paghi solo 5€ per il noleggio.",
        cta: "Procedi al pagamento",
        error: "Errore durante il pagamento"
      }
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

      nav: {
        about: "About",
        partnerships: "Partnerships",
        solutions: "Solutions",
        login: "Login",
        register: "Register"
      },

      hero: {
        title: "Rent an umbrella. Anywhere. Anytime.",
        subtitle: "We're here to protect you from sun and rain, in a sustainable way.",
        cta: "Discover the stations"
      },

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

      partnershipsTitle: "Become a Rainoo partner",
      partnershipsIntro: "Rainoo collaborates with companies, institutions and local organizations to make shared umbrellas accessible everywhere...",
      publicSpacesTitle: "Public spaces & companies",
      publicSpacesText: "Host a Rainoo station in your store, office, or public area to offer a smart and useful service to citizens.",
      sponsorshipsTitle: "Sponsorships",
      sponsorshipsText: "Customize umbrellas and stations with your logo and communicate your commitment to sustainability.",
      customProjectsTitle: "Custom projects",
      customProjectsText: "Do you have a specific idea or project? Let’s work together to build a custom solution for your needs.",

      solutionsTitle: "Rainoo Solutions",
      solutionsIntro: "Our smart umbrella stations are modular, easy to install and integrated with our app.",
      publicTitle: "Public spaces",
      publicText: "Perfect for squares, parks, universities, stations and airports. Offer citizens a smarter way to handle weather.",
      privateTitle: "Private clients",
      privateText: "Ideal for malls, coworking spaces, hotels and events. Add a sustainable service to your venue.",
      installationTitle: "Easy and fast installation",
      installationText: "Our stations install easily with no invasive work and adapt to any space. Start the change today.",

      aboutTitle: "The Story of Rainoo",
      aboutSectionTitle: "The story of Rainoo",
      aboutParagraph1: "Rainoo was born from a simple yet powerful idea: sharing instead of wasting. Millions of umbrellas are lost, broken or forgotten every year. Why not turn them into a shared resource?",
      aboutParagraph2: "Our goal is to offer a practical solution to protect you from sun and rain, without always having to carry or buy an umbrella. With Rainoo, you grab one where you need and drop it off when you're done.",
      aboutParagraph3: "We believe in more sustainable urban mobility, smarter cities, and small actions that add up to a big difference.",

      loginTitle: "Login",
      email: "Email",
      password: "Password",
      loginWithGoogle: "Login with Google",

      registerTitle: "Register",
      firstName: "First Name",
      lastName: "Last Name",
      alreadyHaveAccount: "Already have an account?",
      goToLogin: "Login here",

      rights: "All rights reserved.",
      contactEmail: "Contact us",

      profileWelcome: "Welcome",
      edit: "Edit",
      save: "Save",
      cancel: "Cancel",
      userType: "User type",
      uploadNewPhoto: "Upload new photo",
      uploading: "Uploading...",
      avatarUpdated: "Photo updated!",
      avatarUploadError: "Error uploading avatar",
      selectFile: "Select a file",
      updateError: "Error updating profile",
      rentalHistory: "Rental history",
      noRentals: "No rentals found.",
      station: "Station",
      date: "Date",
      duration: "Duration",
      amount: "Amount",
      rentUmbrella: "Want to rent an umbrella?",
      goToPayment: "Go to payment",
      loading: "Loading...",

      checkout: {
        title: "Rent your umbrella!",
        description: "Pay only €5 for the rental.",
        cta: "Proceed to payment",
        error: "Payment error occurred"
      }
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
