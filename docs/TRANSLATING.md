# Ajouter des traductions (FR/EN)

1. Chaque page a son fichier : `js/translations/<page>.js`.
2. Utilise seulement le préfixe de ta page (ex. `news.`, `projects.`, `visits.`).
3. Une entrée = une clé avec le français et l'anglais :

```js
window.TRANSLATIONS = Object.assign(window.TRANSLATIONS || {}, {
  "news.title":  { fr: "Actualités", en: "News" },
  "news.readMore": { fr: "Lire la suite", en: "Read more" }
});
```

4. Dans le HTML :
   - Texte : `<h1 data-i18n="news.title">Actualités</h1>`
   - Placeholder : `<input data-i18n-placeholder="news.search" placeholder="Rechercher">`
5. Ordre des scripts (ne le change pas) :
   `layout.js`, `theme.js`, `translations/layout.js`, `translations/<page>.js`, `lang.js`, `<page>.js`
6. Texte créé par JavaScript : utilise `t("news.readMore")`. Si tu génères du HTML
   avec `data-i18n`, appelle `applyLang()` juste après l'avoir inséré.
7. Pour redessiner tes cartes au changement de langue :
   `document.addEventListener("langchange", render);`
8. Une clé manquante affiche le texte français et un avertissement dans la console (F12).
9. Les contenus d'exemple (noms, titres d'actus) restent en français pour l'instant.