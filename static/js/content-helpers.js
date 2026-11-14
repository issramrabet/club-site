// Aides partagées par mes 4 pages
function tr(key, fallback) {
  if (typeof t === "function") { var v = t(key); if (v && v !== key) return v; }
  return fallback;
}
function formatDate(iso) {
  var en = typeof getLang === "function" && getLang() === "en";
  return new Date(iso).toLocaleDateString(en ? "en-GB" : "fr-FR", { day: "numeric", month: "long", year: "numeric" });
}
function bindFilters(onChange) {
  var btns = document.querySelectorAll("[data-filter]");
  btns.forEach(function (b) {
    b.addEventListener("click", function () {
      btns.forEach(function (x) { x.classList.toggle("btn-outline", x !== b); });
      onChange(b.dataset.filter);
    });
  });
}
function showList(html) {
  document.getElementById("list").innerHTML = html || '<p data-i18n="common.empty">Aucun résultat.</p>';
  if (typeof applyLang === "function") applyLang();
}