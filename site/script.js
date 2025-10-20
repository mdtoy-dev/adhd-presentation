(function () {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const STORAGE_KEY = 'appraisal-theme';

  function setTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      btn?.setAttribute('aria-pressed', 'true');
    } else {
      root.removeAttribute('data-theme');
      btn?.setAttribute('aria-pressed', 'false');
    }
  }

  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  setTheme(getPreferredTheme());

  btn?.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch {}
  });

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear().toString();
})();
