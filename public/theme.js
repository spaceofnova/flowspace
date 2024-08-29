(function initTheme() {
  var theme = localStorage.getItem("theme") || "light";
  if (theme === "system") { 
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (theme === "dark") {
    document.querySelector("html").classList.add("dark");
  }
  localStorage.setItem("theme", theme);
})();
