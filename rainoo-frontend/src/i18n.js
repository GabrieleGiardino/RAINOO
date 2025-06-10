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

      // Navbar
      nav: {
        about: "Dicono di noi",
        partnerships: "Collaborazioni",
        solutions: "Soluzioni",
        login: "Login",
        register: "Registrati"
      },

      // Hero
      hero: {
        title: "Noleggia un ombrello. Ovunque. Quando vuoi.",
        subtitle: "Siamo qui per proteggerti dal sole e dalla pioggia, in modo sostenibile.",
        cta: "Scopri le stazioni"
      },
      

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

      // Partnerships
      partnershipsTitle: "Diventa partner di Rainoo",
      partnershipsIntro: "Rainoo collabora con aziende, istituzioni e realtà locali per portare ombrelli condivisi in ogni angolo della città. Siamo alla ricerca di partner che condividano la nostra visione di una mobilità sostenibile e di una città più accessibile e vivibile.",
      publicSpacesTitle: "Spazi pubblici & aziende",
      publicSpacesText: "Ospita una stazione Rainoo nel tuo spazio commerciale o pubblico e offri un servizio innovativo ai cittadini.",
      sponsorshipsTitle: "Sponsorizzazioni",
      sponsorshipsText: "Posiziona il tuo brand sugli ombrelli o sulle stazioni Rainoo e comunica il tuo impegno green in modo visibile.",
      customProjectsTitle: "Progetti su misura",
      customProjectsText: "Se sei un ente o una startup interessata a soluzioni condivise, possiamo co-creare progetti personalizzati.",

      // Solutions
      solutionsTitle: "Soluzioni Rainoo",
      solutionsIntro: "Rainoo offre stazioni intelligenti per ombrelli condivisi, pensate per adattarsi a diversi contesti urbani e commerciali. Offriamo soluzioni flessibili e su misura per enti pubblici e realtà private.",
      publicTitle: "Spazi pubblici",
      publicText: "Comuni, parchi e piazze\nStazioni, aeroporti, fermate bus\nUniversità e scuole\n\nFacilita la mobilità urbana sostenibile e proteggi i cittadini in caso di pioggia.",
      privateTitle: "Clienti privati",
      privateText: "Centri commerciali\nAziende e coworking\nHotel, eventi e fiere\n\nOffri un servizio innovativo ai tuoi clienti e valorizza la tua immagine green.",
      installationTitle: "Installazione semplice e veloce",
      installationText: "Le nostre stazioni sono modulari, non richiedono opere complesse e sono facilmente integrabili in qualsiasi ambiente.",

      // About
      aboutTitle: "La Storia di Rainoo",
      aboutSectionTitle: "La storia di Rainoo",
      aboutParagraph1: "Rainoo nasce da un’idea semplice ma potente: condividere anziché sprecare. In un mondo dove ogni oggetto viene spesso usato una sola volta, ci siamo chiesti:\n“E se gli ombrelli potessero essere condivisi come le bici o i monopattini?”",
      aboutParagraph2: "Il nostro obiettivo è offrire una soluzione concreta per proteggersi dalla pioggia o dal sole, senza dover possedere un ombrello personale. Con Rainoo, puoi prendere un ombrello nella stazione più vicina, usarlo quanto ti serve, e restituirlo quando hai finito. Tutto questo in pochi click.",
      aboutParagraph3: "Crediamo in una mobilità urbana più sostenibile, in un consumo più intelligente e nella forza delle piccole azioni quotidiane per costruire un cambiamento collettivo. Perché insieme si può, anche sotto la pioggia.",

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
      contactEmail: "Contattaci"
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

      // Navbar
      nav: {
        about: "About",
        partnerships: "Partnerships",
        solutions: "Solutions",
        login: "Login",
        register: "Register"
      },

      // Hero
      hero: {
        title: "Rent an umbrella. Anywhere. Anytime.",
        subtitle: "We're here to protect you from sun and rain, in a sustainable way.",
        cta: "Discover the stations"
      },
      

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

      // Partnerships
      partnershipsTitle: "Become a Rainoo partner",
      partnershipsIntro: "Rainoo collaborates with companies, institutions, and local entities to bring shared umbrellas to every corner of the city. We are looking for partners who share our vision of sustainable mobility and a more accessible and livable city.",
      publicSpacesTitle: "Public spaces & companies",
      publicSpacesText: "Host a Rainoo station in your commercial or public space and offer citizens an innovative service.",
      sponsorshipsTitle: "Sponsorships",
      sponsorshipsText: "Place your brand on umbrellas or Rainoo stations and communicate your green commitment visibly.",
      customProjectsTitle: "Custom projects",
      customProjectsText: "If you are an organization or a startup interested in shared solutions, we can co-create custom projects.",

      // Solutions
      solutionsTitle: "Rainoo Solutions",
      solutionsIntro: "Rainoo offers smart stations for shared umbrellas, designed to adapt to different urban and commercial contexts. We provide flexible and tailor-made solutions for public bodies and private entities.",
      publicTitle: "Public spaces",
      publicText: "Municipalities, parks and squares\nStations, airports, bus stops\nUniversities and schools\n\nFacilitates sustainable urban mobility and protects citizens in case of rain.",
      privateTitle: "Private clients",
      privateText: "Shopping malls\nCompanies and coworking spaces\nHotels, events and fairs\n\nProvide your clients with an innovative service and enhance your green image.",
      installationTitle: "Easy and fast installation",
      installationText: "Our stations are modular, do not require complex works, and are easily integrated into any environment.",

      // About
      aboutTitle: "The Story of Rainoo",
      aboutSectionTitle: "The story of Rainoo",
      aboutParagraph1: "Rainoo was born from a simple but powerful idea: to share instead of waste. In a world where every object is often used only once, we asked ourselves:\n“What if umbrellas could be shared like bikes or scooters?”",
      aboutParagraph2: "Our goal is to offer a concrete solution to protect yourself from the rain or sun, without needing to own a personal umbrella. With Rainoo, you can grab an umbrella from the nearest station, use it as long as you need, and return it when you're done. All in just a few clicks.",
      aboutParagraph3: "We believe in more sustainable urban mobility, smarter consumption, and the power of small everyday actions to build collective change. Because together we can—even in the rain.",

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
      contactEmail: "Contact us"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'it', // lingua di default
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
