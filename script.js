(function() {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)');

  function setMode(mode) {
    if (mode === 'light') {
      root.classList.add('light');
      localStorage.setItem('theme', 'light');
      toggle.setAttribute('aria-pressed', 'true');
    } else {
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      toggle.setAttribute('aria-pressed', 'false');
    }
  }

  function init() {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setMode(saved);
    } else {
      setMode(prefersLight.matches ? 'light' : 'dark');
    }
  }

  toggle?.addEventListener('click', () => {
    const isLight = root.classList.contains('light');
    setMode(isLight ? 'dark' : 'light');
  });

  prefersLight.addEventListener('change', (e) => {
    const saved = localStorage.getItem('theme');
    if (!saved) setMode(e.matches ? 'light' : 'dark');
  });

  // Smooth scroll for internal links
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target instanceof HTMLAnchorElement && target.hash && target.origin === location.origin) {
      const el = document.querySelector(target.hash);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', target.hash);
      }
    }
  });

  init();
})();
