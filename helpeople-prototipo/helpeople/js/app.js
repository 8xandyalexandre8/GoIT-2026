document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-go]').forEach(button => button.addEventListener('click', () => { window.location.href = button.dataset.go; }));
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.site-menu');
  const backdrop = document.querySelector('.menu-backdrop');
  const closeMenu = () => {
    if (!toggle || !menu || !backdrop) return;
    toggle.classList.remove('is-open'); toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label','Abrir menu');
    menu.classList.remove('open'); menu.setAttribute('aria-hidden','true');
    backdrop.classList.remove('visible');
    window.setTimeout(() => { if (!menu.classList.contains('open')) backdrop.hidden = true; }, 300);
  };
  if (toggle && menu && backdrop) {
    toggle.addEventListener('click', () => {
      const opening = !menu.classList.contains('open');
      if (opening) { backdrop.hidden = false; requestAnimationFrame(() => backdrop.classList.add('visible')); }
      else backdrop.classList.remove('visible');
      toggle.classList.toggle('is-open', opening); toggle.setAttribute('aria-expanded', String(opening)); toggle.setAttribute('aria-label', opening ? 'Fechar menu' : 'Abrir menu');
      menu.classList.toggle('open', opening); menu.setAttribute('aria-hidden', String(!opening));
      if (!opening) window.setTimeout(() => { if (!menu.classList.contains('open')) backdrop.hidden = true; }, 300);
    });
    backdrop.addEventListener('click', closeMenu);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  }
  const search = document.querySelector('#site-search');
  if (search) search.addEventListener('keydown', e => {
    if (e.key === 'Enter' && search.value.trim()) {
      const q = search.value.trim().toLocaleLowerCase('pt-BR');
      const cards = [...document.querySelectorAll('.content-card')];
      let found = false;
      cards.forEach(card => { const match = card.innerText.toLocaleLowerCase('pt-BR').includes(q); card.hidden = !match; if (match) found = true; });
      const note = document.querySelector('#search-feedback');
      if (note) note.textContent = found ? 'Resultados filtrados para: ' + search.value : 'Nenhum conteúdo de demonstração encontrado para “' + search.value + '”.';
    }
  });
});
