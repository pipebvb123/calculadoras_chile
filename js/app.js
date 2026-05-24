/* CalculadorasChile.cl — Shared App JS */

(function() {
  // ─── HAMBURGER MENU ────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const mainNav   = document.getElementById('main-nav');

  if (hamburger && mainNav) {
    hamburger.addEventListener('click', function() {
      mainNav.classList.toggle('open');
      hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', mainNav.classList.contains('open'));
    });
    // Close on outside click
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.site-header')) {
        mainNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ─── ACTIVE NAV LINK ──────────────────────────────────────
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath ||
        link.getAttribute('href') === '/' + currentPath) {
      link.classList.add('active');
    }
  });

  // ─── FAQ ACCORDION ────────────────────────────────────────
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const isOpen = answer.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
      document.querySelectorAll('.faq-q').forEach(b => { b.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); });
      // Open clicked if it was closed
      if (!isOpen) {
        answer.classList.add('open');
        this.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ─── SMOOTH SCROLL ────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();

// ─── SHARED FORMAT UTILITIES ──────────────────────────────────
function formatCLP(n) {
  return '$' + Math.round(n).toLocaleString('es-CL');
}
function formatCLPFull(n) {
  return '$' + n.toLocaleString('es-CL', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}
function formatUF(n, dec) {
  dec = dec !== undefined ? dec : 4;
  return n.toLocaleString('es-CL', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + ' UF';
}
function parseNum(v) {
  if (typeof v === 'number') return v;
  return parseFloat(String(v).replace(/\./g, '').replace(',', '.')) || 0;
}
function formatInput(el) {
  const raw = el.value.replace(/\D/g, '');
  el.value = raw ? parseInt(raw, 10).toLocaleString('es-CL') : '';
}
