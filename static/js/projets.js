var projects = [
  { name: "Smart Wiper Controller", status: "encours", members: "Sami, Rania", description: "Deux cartes dialoguent sur un bus LIN pour piloter les essuie-glaces.", tags: ["Arduino", "LIN"], progress: 60 },
  { name: "BMS Monitor", status: "encours", members: "Yassine, Aya", description: "Lit tension, courant et température de la batterie et les diffuse sur un bus CAN.", tags: ["ESP32", "CAN"], progress: 40 },
  { name: "Open Differential Model", status: "termine", members: "Mehdi", description: "Différentiel à engrenages coniques avec étude du mouvement en virage.", tags: ["SolidWorks"], progress: 100 },
  { name: "Quarter-Car Ride Model", status: "encours", members: "Nour, Omar", description: "Simule le passage d'un dos d'âne pour équilibrer confort et tenue de route.", tags: ["MATLAB", "Simulink"], progress: 75 },
  { name: "Traffic Sign Detection", status: "idee", members: "À définir", description: "Détection de panneaux en temps réel sur le flux d'une caméra.", tags: ["Python", "YOLO"], progress: 10 }
];
var labels = { encours: "En cours", termine: "Terminé", idee: "Idée" };
var currentStatus = "all";

function render() {
  var items = projects.filter(function (p) { return currentStatus === "all" || p.status === currentStatus; });
  showList(items.map(function (p) {
    return '<article class="card"><span class="badge status-' + p.status + '" data-i18n="projects.status.' + p.status + '">' + labels[p.status] + '</span>' +
      '<h3>' + p.name + '</h3><p>' + p.description + '</p>' +
      '<small>' + p.members + '</small>' +
      '<div class="bar"><div style="width:' + p.progress + '%"></div></div><small>' + p.progress + ' %</small>' +
      '<div class="tags">' + p.tags.map(function (g) { return '<span class="badge">' + g + '</span>'; }).join(" ") + '</div></article>';
  }).join(""));
}
bindFilters(function (f) { currentStatus = f; render(); });
render();