export const siteConfig = {
  company: {
    name: "JC Nature",
    tagline: "Votre paysagiste de confiance dans les Hauts-de-France",
    description: "JC Nature transforme vos espaces extérieurs avec passion et expertise. Spécialiste en aménagement paysager, création de jardins et entretien d'espaces verts, nous mettons notre savoir-faire au service de vos projets pour créer des environnements harmonieux et durables."
  },
  contact: {
    phoneDisplay: "06 28 40 33 94",
    phoneE164: "+33628403394",
    email: "Contactez-nous via notre formulaire"
  },
  location: {
    city: "Nibas",
    region: "Hauts-de-France",
    radiusKm: 30,
    coords: {
      lat: 50.082377,
      lng: 1.5939292
    },
    villes: [
      "Nibas",
      "Berck",
      "Montreuil",
      "Étaples",
      "Le Touquet-Paris-Plage",
      "Rang-du-Fliers",
      "Verton",
      "Cucq",
      "Merlimont",
      "Fort-Mahon-Plage",
      "Rue",
      "Crécy-en-Ponthieu"
    ],
    realisationsVilles: [
      "Nibas",
      "Berck",
      "Montreuil",
      "Étaples",
      "Le Touquet-Paris-Plage",
      "Rang-du-Fliers"
    ],
    temoignagesVilles: [
      "Nibas",
      "Berck",
      "Montreuil"
    ]
  },
  stats: {
    projectsCount: "25+",
    yearsExperience: "3 ans"
  },
  googleReviews: {
    rating: "5",
    count: 7,
    searchQuery: "JC+Nature+Nibas+avis"
  },
  seo: {
    titleTemplate: "%s | JC Nature - Paysagiste Nibas",
    defaultTitle: "JC Nature - Paysagiste à Nibas | Aménagement paysager Hauts-de-France",
    metaDescription: "JC Nature, votre paysagiste expert à Nibas et dans les Hauts-de-France. Aménagement paysager, création de jardins, entretien d'espaces verts. Devis gratuit, 5/5 étoiles sur Google.",
    url: "https://jc-nature-nibas.fr"
  }
};

export const googleReviewsSearchUrl = () => `https://www.google.com/search?q=${siteConfig.googleReviews.searchQuery}`;

export type SiteConfig = typeof siteConfig;