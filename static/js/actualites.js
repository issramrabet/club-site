var news = [
  { title: "Rencontre auto du campus", date: "2026-11-20", category: "event", summary: "Une journée pour rencontrer les passionnés d'automobile du campus." },
  { title: "Atelier mécanique", date: "2026-11-27", category: "workshop", summary: "Initiation à l'entretien d'un moteur avec les membres du pôle mécanique." },
  { title: "Course de karting inter-écoles", date: "2026-12-05", category: "competition", summary: "Notre équipe participe à la compétition régionale." },
  { title: "Nouveau local du club", date: "2026-10-15", category: "club", summary: "Le club dispose désormais d'un espace dédié pour ses projets." },
  { title: "Atelier électronique embarquée", date: "2026-11-10", category: "workshop", summary: "Capteurs et microcontrôleurs sur véhicule." },
  { title: "Assemblée générale", date: "2026-10-30", category: "club", summary: "Bilan de l'année et présentation des projets." }
];
var labels = { event: "Événement", competition: "Compétition", workshop: "Atelier", club: "Club" };
var category = "all";

function render() {
  var items = news
    .filter(function (n) { return category === "all" || n.category === category; })
    .sort(function (a, b) { return new Date(b.date) - new Date(a.date); }); // plus récent d'abord
  showList(items.map(function (n, i) {
    return '<article class="card' + (i === 0 ? ' featured' : '') + '">' +
      '<span class="badge" data-i18n="news.cat.' + n.category + '">' + labels[n.category] + '</span>' +
      '<h3>' + n.title + '</h3><small>' + formatDate(n.date) + '</small><p>' + n.summary + '</p></article>';
  }).join(""));
}
bindFilters(function (f) { category = f; render(); });
document.addEventListener("langchange", render);
render();