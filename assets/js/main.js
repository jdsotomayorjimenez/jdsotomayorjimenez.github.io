/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*
* Adaptado para el portafolio de Juan Diego Sotomayor Jiménez.
*/

(function() {
  "use strict";

  const header = document.querySelector('#header');
  const headerToggleBtn = document.querySelector('.header-toggle');
  const navBackdrop = document.querySelector('.nav-backdrop');
  const drawerQuery = window.matchMedia('(max-width: 1199.98px)');

  /**
   * Barra lateral: en escritorio es un rail que se expande con hover/focus.
   * Por debajo de 1200px se comporta como panel lateral con botón, fondo y Escape.
   */
  function setDrawerOpen(open) {
    if (!header || !headerToggleBtn) return;

    header.classList.toggle('header-show', open);
    headerToggleBtn.classList.toggle('bi-list', !open);
    headerToggleBtn.classList.toggle('bi-x', open);
    headerToggleBtn.setAttribute('aria-expanded', String(open));
    headerToggleBtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    document.body.classList.toggle('nav-open', open);

    if (navBackdrop) navBackdrop.hidden = !open;
    syncDrawerReachability();

    // Al abrir, el foco entra al panel sin marcar visualmente un enlace concreto
    if (open) {
      header.setAttribute('tabindex', '-1');
      header.focus({ preventScroll: true });
    } else {
      header.removeAttribute('tabindex');
    }
  }

  /**
   * Cuando el panel está cerrado en móvil queda fuera de pantalla:
   * se marca como inerte para que no reciba foco ni lo lean los lectores de pantalla.
   */
  function syncDrawerReachability() {
    if (!header) return;
    const hidden = drawerQuery.matches && !header.classList.contains('header-show');
    header.toggleAttribute('inert', hidden);
    header.setAttribute('aria-hidden', String(hidden));
  }

  if (headerToggleBtn) {
    headerToggleBtn.addEventListener('click', () => {
      setDrawerOpen(!header.classList.contains('header-show'));
    });
  }

  if (navBackdrop) {
    navBackdrop.addEventListener('click', () => setDrawerOpen(false));
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && header && header.classList.contains('header-show')) {
      setDrawerOpen(false);
      if (headerToggleBtn) headerToggleBtn.focus();
    }
  });

  document.querySelectorAll('#navmenu a').forEach(link => {
    link.addEventListener('click', () => {
      if (header && header.classList.contains('header-show')) {
        setDrawerOpen(false);
      }
    });
  });

  drawerQuery.addEventListener('change', () => {
    if (!drawerQuery.matches) setDrawerOpen(false);
    syncDrawerReachability();
  });
  syncDrawerReachability();

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /**
   * Tema claro y oscuro
   * El tema ya viene resuelto por el script en línea del <head>; aquí solo se
   * gestiona el cambio, la persistencia y lo que el CSS no puede tocar.
   */
  const themeToggle = document.querySelector('.theme-toggle');
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const THEME_COLORS = { dark: '#061224', light: '#f7f9fc' };

  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function syncThemeControls() {
    const isLight = currentTheme() === 'light';
    if (themeMeta) themeMeta.setAttribute('content', THEME_COLORS[isLight ? 'light' : 'dark']);
    if (!themeToggle) return;
    themeToggle.setAttribute('aria-label', isLight ? 'Activar tema oscuro' : 'Activar tema claro');
    themeToggle.setAttribute('aria-pressed', String(isLight));
  }

  function setTheme(theme) {
    const root = document.documentElement;

    // La transición solo vive durante el cambio, no en cada hover del sitio
    if (!prefersReducedMotion) {
      root.classList.add('theme-switching');
      window.setTimeout(() => root.classList.remove('theme-switching'), 320);
    }

    root.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch (e) { /* almacenamiento bloqueado: el tema dura lo que la sesión */ }
    syncThemeControls();
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      setTheme(currentTheme() === 'light' ? 'dark' : 'light');
    });
  }

  // Si nunca se eligió tema a mano, el sitio sigue la preferencia del sistema
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (event) => {
    let stored = null;
    try {
      stored = localStorage.getItem('theme');
    } catch (e) { /* sin almacenamiento no hay elección guardada que respetar */ }
    if (stored === 'light' || stored === 'dark') return;
    document.documentElement.setAttribute('data-theme', event.matches ? 'light' : 'dark');
    syncThemeControls();
  });

  syncThemeControls();

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => preloader.remove());
  }

  /**
   * Botón para volver arriba
   */
  const scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      scrollTop.classList.toggle('active', window.scrollY > 100);
    }
  }

  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animaciones al hacer scroll
   */
  function aosInit() {
    if (typeof AOS === 'undefined') return;
    AOS.init({
      duration: prefersReducedMotion ? 0 : 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      disable: prefersReducedMotion
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Contadores de la franja de datos
   * Se calculan desde las tarjetas de proyecto para que nadie tenga que
   * acordarse de subir un número a mano al publicar un proyecto nuevo.
   */
  const projectCards = document.querySelectorAll('.isotope-item[data-materia]');
  const projectCount = projectCards.length;
  const materiaCount = new Set(
    Array.from(projectCards, card => card.getAttribute('data-materia'))
  ).size;

  const NUMEROS = ['cero', 'un', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho',
    'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete',
    'dieciocho', 'diecinueve', 'veinte'];

  function enPalabras(n) {
    return NUMEROS[n] ? NUMEROS[n].charAt(0).toUpperCase() + NUMEROS[n].slice(1) : String(n);
  }

  if (projectCount) {
    document.querySelectorAll('[data-count="proyectos"]').forEach(el => {
      el.setAttribute('data-purecounter-end', String(projectCount));
    });
    document.querySelectorAll('[data-count="materias"]').forEach(el => {
      el.setAttribute('data-purecounter-end', String(materiaCount));
    });
    document.querySelectorAll('[data-project-count]').forEach(el => {
      el.textContent = el.getAttribute('data-project-count') === 'palabra'
        ? enPalabras(projectCount)
        : String(projectCount);
    });
  }

  if (typeof PureCounter !== 'undefined') {
    new PureCounter();
  }

  /**
   * Filtros de proyectos (Isotope), operables con ratón y teclado
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    const layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    const filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    const sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';
    const container = isotopeItem.querySelector('.isotope-container');

    if (!container || typeof Isotope === 'undefined' || typeof imagesLoaded === 'undefined') return;

    let initIsotope;
    imagesLoaded(container, function() {
      initIsotope = new Isotope(container, {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    function applyFilter(button) {
      const active = isotopeItem.querySelector('.isotope-filters .filter-active');
      if (active) {
        active.classList.remove('filter-active');
        active.setAttribute('aria-pressed', 'false');
      }
      button.classList.add('filter-active');
      button.setAttribute('aria-pressed', 'true');
      if (initIsotope) {
        initIsotope.arrange({
          filter: button.getAttribute('data-filter')
        });
      }
    }

    isotopeItem.querySelectorAll('.isotope-filters button').forEach(function(button) {
      button.setAttribute('aria-pressed', String(button.classList.contains('filter-active')));
      button.addEventListener('click', () => applyFilter(button));
    });
  });

  /**
   * Posición correcta al cargar con un hash en la URL
   */
  window.addEventListener('load', function() {
    if (!window.location.hash) return;
    const section = document.querySelector(window.location.hash);
    if (!section) return;

    setTimeout(() => {
      const scrollMarginTop = parseInt(getComputedStyle(section).scrollMarginTop, 10) || 0;
      window.scrollTo({
        top: section.offsetTop - scrollMarginTop,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    }, 100);
  });

  /**
   * Scrollspy del menú
   */
  const navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      const section = document.querySelector(navmenulink.hash);
      if (!section) return;

      const position = window.scrollY + 200;
      const isCurrent = position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight);

      navmenulink.classList.toggle('active', isCurrent);
      if (isCurrent) {
        navmenulink.setAttribute('aria-current', 'true');
        document.querySelectorAll('.navmenu a.active').forEach(link => {
          if (link !== navmenulink) {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
          }
        });
      } else {
        navmenulink.removeAttribute('aria-current');
      }
    });
  }

  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();
