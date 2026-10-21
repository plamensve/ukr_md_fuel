(() => {
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.getElementById('main-nav');
  if (!toggle || !menu) return;
  const close = () => {menu.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false');};
  toggle.addEventListener('click', () => {
    const next = !menu.classList.contains('is-open');
    menu.classList.toggle('is-open', next);
    toggle.setAttribute('aria-expanded', String(next));
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  document.addEventListener('click', e => { if (!toggle.contains(e.target) && !menu.contains(e.target)) close(); });
})();
