var visits = [
  { place: "Usine de câblage automobile, Sousse", date: "2026-12-10", description: "Visite des lignes d'assemblage de faisceaux électriques." },
  { place: "Atelier mécanique partenaire", date: "2026-11-28", description: "Démonstration de diagnostic moteur et d'usinage." },
  { place: "Salon de l'automobile", date: "2026-10-20", description: "Rencontres avec des constructeurs et des fournisseurs." },
  { place: "Centre d'essais routiers", date: "2026-10-05", description: "Découverte des bancs d'essais et des pistes de test." }
];
var tab = "upcoming";

function render() {
  var today = new Date().toISOString().slice(0, 10);
  var items = visits
    .filter(function (v) { return tab === "upcoming" ? v.date >= today : v.date < today; })
    .sort(function (a, b) { return tab === "upcoming" ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date); });
  showList(items.map(function (v) {
    return '<article class="card"><div class="ph"></div><h3>' + v.place + '</h3><small>' + formatDate(v.date) + '</small><p>' + v.description + '</p></article>';
  }).join(""));
}
bindFilters(function (f) { tab = f; render(); });
document.addEventListener("langchange", render);
render();