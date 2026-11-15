function getLang() {
  const saved = localStorage.getItem("lang");
  if (saved) return saved;
  // Bonus : première visite = langue du navigateur
  return navigator.language && navigator.language.startsWith("en") ? "en" : "fr";
}

function t(key) { // pour les textes créés par JavaScript
  const entry = window.TRANSLATIONS && window.TRANSLATIONS[key];
  if (!entry) { console.warn("Missing translation key:", key); return key; }
  return entry[getLang()] || entry.fr || key;
}

function applyLang() { // traduit toute la page
  const lang = getLang();
  const translations = window.TRANSLATIONS || {};

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const entry = translations[el.dataset.i18n];
    if (!entry) {
      console.warn("Missing translation key:", el.dataset.i18n);
      return; // on garde le texte français déjà dans le HTML
    }
    el.textContent = entry[lang] || entry.fr;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const entry = translations[el.dataset.i18nPlaceholder];
    if (!entry) {
      console.warn("Missing translation key:", el.dataset.i18nPlaceholder);
      return; // on garde le placeholder français
    }
    el.placeholder = entry[lang] || entry.fr;
  });

  // Bouton de langue actif
  const frBtn = document.getElementById("lang-fr");
  const enBtn = document.getElementById("lang-en");
  if (frBtn) frBtn.classList.toggle("active", lang === "fr");
  if (enBtn) enBtn.classList.toggle("active", lang === "en");
}

function setLang(lang) {
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang; // accessibilité
  applyLang();
  // prévient les pages pour qu'elles se redessinent (cartes, dates...)
  document.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
}

// Clic sur les boutons (délégation : marche même si layout.js les crée après)
document.addEventListener("click", (e) => {
  const btn = e.target.closest("#lang-fr, #lang-en");
  if (!btn) return;
  setLang(btn.id === "lang-fr" ? "fr" : "en");
});

window.getLang = getLang;
window.t = t;
window.applyLang = applyLang;

document.documentElement.lang = getLang();
applyLang();