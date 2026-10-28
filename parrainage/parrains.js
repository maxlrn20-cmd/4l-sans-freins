/* =====================================================================
   PARRAINAGE — réglages de la page « Parrainez un kilomètre ».
   Les parrains s'ajoutent automatiquement (Google Sheet + HelloAsso).
   On peut aussi en ajouter à la main dans "parrains", par ex. :
     { nom: "Garage Martin", de: 400, a: 449, message: "Bonne route !" },
   ===================================================================== */
window.PARRAINAGE = {
  prixKm: 1,                                   // prix d'un kilomètre en euros
  leetchi: "https://www.leetchi.com/fr/c/4lsansfreins-4189768",
  site: "../",
  instagram: "https://www.instagram.com/4lsansfreins/",
  email: "4lsansfreins@gmail.com",
  // Adresse du script Google qui gère les réservations et les paiements
  apiUrl: "https://script.google.com/macros/s/AKfycbzHZlwITT5Q7wYDe4T7xM-yrLrhB6pPGHL92EEuDU-PUcv9C1cSP0_bMGg5LkGqXPPXyw/exec",
  paiement: "leetchi",                         // tous les dons vont sur la cagnotte Leetchi
  parrains: [
    // { nom: "Prénom Nom", de: 1, a: 1, message: "facultatif" },
  ]
};
