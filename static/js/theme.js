// Function to apply and save the theme
function applyTheme(theme) {
  // Toggles data-theme on documentElement
  document.documentElement.setAttribute("data-theme", theme);
  
  // Saves the choice in localStorage
  localStorage.setItem("theme", theme);
  
  // Changes the button label/icon
  const themeBtn = document.getElementById("theme-btn");
  if (themeBtn) {
    themeBtn.textContent = theme === "dark" ? "☀️ Light" : "🌙 Dark";
  }
}

// FIRST VISIT & BONUS: Avoid white flash by running this immediately
function initializeTheme() {
  let savedTheme = localStorage.getItem("theme");
  
  // If no saved theme, follow the computer's setting
  if (!savedTheme) {
    savedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  
  applyTheme(savedTheme);
}

// Run immediately on script load
initializeTheme();

// Attach listener to the button (using event delegation since layout.js injects the button later)
document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "theme-btn") {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
  }
});

// Extra safety: Update button label after layout.js finishes injecting the header
document.addEventListener("DOMContentLoaded", () => {
  // Small delay to ensure layout.js has injected the HTML
  setTimeout(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    applyTheme(currentTheme);
  }, 50);
});