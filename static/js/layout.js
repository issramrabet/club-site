const page = location.pathname.split("/").pop() || "index.html";

// The updated array with the bonus dropdown groups
const links = [
  { href: "index.html", key: "nav.home", label: "Accueil" },
  { 
    label: "Le club", key: "nav.club", 
    dropdown: [
      { href: "apropos.html", key: "nav.about", label: "À propos" },
      { href: "bureau.html", key: "nav.team", label: "Le bureau" },
      { href: "membres.html", key: "nav.members", label: "Les membres" }
    ] 
  },
  { 
    label: "Activités", key: "nav.activities", 
    dropdown: [
      { href: "actualites.html", key: "nav.news", label: "Actualités" },
      { href: "projets.html", key: "nav.projects", label: "Projets" },
      { href: "formations.html", key: "nav.training", label: "Formations" },
      { href: "services.html", key: "nav.services", label: "Services" },
      { href: "visites.html", key: "nav.visits", label: "Les visites" }
    ] 
  },
  { href: "contact.html", key: "nav.contact", label: "Contact" }
];

// Generate the HTML for normal links OR dropdown menus
const nav = links.map(l => {
  if (l.dropdown) {
    // Build the inside of the dropdown
    const dropLinks = l.dropdown.map(d => {
      const active = d.href === page ? "active" : "";
      return `<a href="${d.href}" data-i18n="${d.key}" class="${active}">${d.label}</a>`;
    }).join("");
    
    // Wrap it in the dropdown container
    return `
      <div class="dropdown">
        <span class="dropdown-trigger" data-i18n="${l.key}">${l.label} ▾</span>
        <div class="dropdown-menu">
          ${dropLinks}
        </div>
      </div>
    `;
  } else {
    // Normal link
    const active = l.href === page ? "active" : "";
    return `<a href="${l.href}" data-i18n="${l.key}" class="${active}">${l.label}</a>`;
  }
}).join("");

// Inject the navbar with the EXACT IDs required by Yassin
document.querySelector("#site-header").innerHTML = `
  <header class="site-header">
    <a href="index.html" class="logo">ENISO Auto Crew</a>
    <button id="menu-btn" aria-label="Menu">&#9776;</button>
    
    <nav id="main-nav">
      ${nav}
    </nav>

    <div class="header-actions">
      <!-- Connexion Button -->
      <a href="login.html" class="btn" data-i18n="nav.login">Connexion</a>
      
      <!-- Theme and Language Buttons with exact IDs -->
      <button id="theme-btn" aria-label="Theme">Dark</button>
      <button id="lang-fr">FR</button> 
      <button id="lang-en">EN</button>
    </div>
  </header>
`;

// Mobile menu toggle logic
document.querySelector("#menu-btn").addEventListener("click", () => {
  document.querySelector("#main-nav").classList.toggle("open");
});

// ==========================================
// Footer Generation
// ==========================================
const currentYear = new Date().getFullYear();

const footerHTML = `
  <footer class="site-footer" style="background: var(--card); border-top: 1px solid var(--border); padding: 2rem 1rem; margin-top: 3rem; text-align: center;">
    <div class="container">
      <h3 style="margin-bottom: 1rem;">ENISO Auto Crew</h3>
      
      <div class="quick-links" style="margin-bottom: 1rem; display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap;">
        <a href="index.html" style="color: var(--text); text-decoration: none;" data-i18n="nav.home">Accueil</a>
        <a href="apropos.html" style="color: var(--text); text-decoration: none;" data-i18n="nav.about">À propos</a>
        <a href="equipe.html" style="color: var(--text); text-decoration: none;" data-i18n="nav.team">Équipe</a>
        <a href="contact.html" style="color: var(--text); text-decoration: none;" data-i18n="nav.contact">Contact</a>
      </div>

      <p style="color: var(--muted); margin-bottom: 1rem;">
        📍 ENISo, Technopôle de Sousse | ✉️ contact@enisoautocrew.tn
      </p>

      <p style="color: var(--muted); font-size: 0.9rem;">
        &copy; ${currentYear} ENISO Auto Crew. Tous droits réservés.
      </p>
    </div>
  </footer>
`;

// Inject the footer into the #site-footer div
const footerContainer = document.querySelector("#site-footer");
if (footerContainer) {
  footerContainer.innerHTML = footerHTML;
}