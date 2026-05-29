// John Wyatt Media — interactive bits
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- About overlay ----------
  const overlay = document.getElementById('aboutOverlay');
  if (overlay) {
    const aboutLink = document.querySelector('[data-nav="about"]');
    const homeLink = document.querySelector('[data-nav="home"]');

    const openOverlay = () => {
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.classList.add('overlay-open');
      // Reflect active state in the nav
      if (aboutLink) aboutLink.classList.add('is-active');
      if (homeLink) homeLink.classList.remove('is-active');
      // Reflect in URL so the state survives a refresh and is shareable
      if (location.hash !== '#about') history.replaceState(null, '', '#about');
    };

    const closeOverlay = () => {
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('overlay-open');
      if (aboutLink) aboutLink.classList.remove('is-active');
      if (homeLink) homeLink.classList.add('is-active');
      if (location.hash === '#about') history.replaceState(null, '', location.pathname);
    };

    if (aboutLink) {
      aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        openOverlay();
      });
    }

    if (homeLink) {
      homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        closeOverlay();
      });
    }

    // Click outside the inner panel closes
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeOverlay();
    });

    // Esc closes
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeOverlay();
    });

    // Open on load if URL has #about
    if (location.hash === '#about') openOverlay();
  }

  // ---------- Hover-to-play on work tiles ----------
  const tiles = document.querySelectorAll('.work-tile');
  const isTouch = matchMedia('(hover: none)').matches;

  tiles.forEach((tile) => {
    const video = tile.querySelector('video');
    if (!video) return;

    const play = () => {
      tile.classList.add('is-playing');
      const p = video.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    };

    const stop = () => {
      tile.classList.remove('is-playing');
      video.pause();
      video.currentTime = 0;
    };

    if (isTouch) {
      tile.addEventListener('click', (e) => {
        e.preventDefault();
        if (tile.classList.contains('is-playing')) {
          stop();
        } else {
          play();
        }
      });
    } else {
      tile.addEventListener('mouseenter', play);
      tile.addEventListener('mouseleave', stop);
      tile.addEventListener('click', (e) => e.preventDefault());
    }
  });
})();
