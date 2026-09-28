/**
 * KALLOL OF NEW JERSEY — JAVASCRIPT LOGIC
 * Based on https://kallol.com/#about
 */

document.addEventListener('DOMContentLoaded', () => {
  // ── Intro Overlay ──
  const introOverlay = document.getElementById('intro-overlay');
  const skipBtn = document.getElementById('intro-skip-btn');

  function dismissIntro() {
    if (introOverlay && !introOverlay.classList.contains('hidden')) {
      introOverlay.style.opacity = '0';
      setTimeout(() => {
        introOverlay.classList.add('hidden');
      }, 700);
    }
  }

  // Dismiss intro after 3.2 seconds or when skip button is clicked
  if (introOverlay) {
    setTimeout(dismissIntro, 3200);
    if (skipBtn) {
      skipBtn.addEventListener('click', dismissIntro);
    }
  }

  // ── Floating particles for intro ──
  const introParticles = document.getElementById('intro-particles');
  if (introParticles) {
    for (let i = 0; i < 35; i++) {
      const p = document.createElement('div');
      p.className = 'intro-particle';
      const size = Math.random() * 5 + 2;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.bottom = `${Math.random() * 20}%`;
      p.style.background = Math.random() > 0.4 ? 'rgba(212, 149, 106, 0.7)' : 'rgba(255, 255, 255, 0.6)';
      p.style.animationDuration = `${Math.random() * 3 + 2.5}s`;
      p.style.animationDelay = `${Math.random() * 2}s`;
      introParticles.appendChild(p);
    }
  }

  // ── Sticky Elevated Nav ──
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (nav) {
      nav.classList.toggle('elevated', window.scrollY > 20);
    }
  });

  // ── Mobile Menu Toggle ──
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', isOpen);
      menuBtn.innerHTML = isOpen ? '✕' : '☰';
    });

    // Close menu when clicking link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.innerHTML = '☰';
      });
    });
  }

  // ── Scrollspy for active nav link ──
  const sections = document.querySelectorAll('section[id]');
  const allNavLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
        currentId = sec.getAttribute('id');
      }
    });

    allNavLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === `#${currentId}`);
    });
  });

  // ── Scroll Reveal via IntersectionObserver ──
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));

  // ── Dual Tab Event Switcher ──
  window.switchTab = function(type) {
    const panelC = document.getElementById('panel-c');
    const panelS = document.getElementById('panel-s');
    const tabC = document.getElementById('tab-c');
    const tabS = document.getElementById('tab-s');

    if (panelC && panelS && tabC && tabS) {
      if (type === 'c') {
        panelC.classList.add('show');
        panelS.classList.remove('show');
        tabC.className = 'etab active-c';
        tabS.className = 'etab';
      } else {
        panelC.classList.remove('show');
        panelS.classList.add('show');
        tabC.className = 'etab';
        tabS.className = 'etab active-s';

        // Trigger reveal for items in newly revealed tab
        panelS.querySelectorAll('.reveal:not(.visible)').forEach(el => {
          setTimeout(() => el.classList.add('visible'), 50);
        });
      }
      initCarousel(type === 'c' ? 'cc' : 'sc', type === 's');
    }
  };

  // ── Multi-Slide Responsive Carousel ──
  const carousels = {};

  function getVisibleCount() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function initCarousel(id, isGold) {
    const track = document.getElementById(id);
    if (!track) return;

    const slides = track.querySelectorAll('.carousel-slide');
    const total = slides.length;
    const visible = getVisibleCount();
    const maxIndex = Math.max(0, total - visible);

    carousels[id] = { index: 0, total, visible, maxIndex, isGold };
    buildDots(`${id}-dots`, maxIndex + 1, isGold, id);
    goToSlide(id, 0);
  }

  function buildDots(dotsId, count, isGold, carouselId) {
    const dotsEl = document.getElementById(dotsId);
    if (!dotsEl) return;
    dotsEl.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const dot = document.createElement('div');
      dot.className = 'c-dot' + (i === 0 ? (isGold ? ' active active-gold' : ' active') : '');
      dot.addEventListener('click', () => goToSlide(carouselId, i));
      dotsEl.appendChild(dot);
    }
  }

  function updateDots(dotsId, index, isGold) {
    const dots = document.querySelectorAll(`#${dotsId} .c-dot`);
    dots.forEach((dot, i) => {
      dot.className = 'c-dot' + (i === index ? (isGold ? ' active active-gold' : ' active') : '');
    });
  }

  function goToSlide(id, index) {
    const c = carousels[id];
    const track = document.getElementById(id);
    if (!c || !track) return;

    c.index = Math.max(0, Math.min(index, c.maxIndex));
    const firstSlide = track.querySelector('.carousel-slide');
    if (!firstSlide) return;

    const slideWidth = firstSlide.offsetWidth + 24; // 24px gap
    track.style.transform = `translateX(-${c.index * slideWidth}px)`;
    updateDots(`${id}-dots`, c.index, c.isGold);
  }

  window.moveCarousel = function(id, dir) {
    const c = carousels[id];
    if (!c) return;
    goToSlide(id, c.index + dir);
  };

  // Initialize both Cultural & Community carousels
  initCarousel('cc', false);
  initCarousel('sc', true);

  // Recalculate on window resize
  window.addEventListener('resize', () => {
    initCarousel('cc', false);
    initCarousel('sc', true);
  });

  // ── Donation Card Interaction ──
  const amtButtons = document.querySelectorAll('.amt-btn');
  const customInput = document.getElementById('custom-donation-input');
  const freqButtons = document.querySelectorAll('.freq-btn');
  const donateModal = document.getElementById('donation-modal');
  const modalAmtDisplay = document.getElementById('modal-donation-amount');

  let selectedAmount = '100';
  let selectedFrequency = 'one-time';

  amtButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      amtButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedAmount = btn.dataset.amount || '100';
      if (customInput) customInput.value = '';
    });
  });

  if (customInput) {
    customInput.addEventListener('input', (e) => {
      amtButtons.forEach(b => b.classList.remove('active'));
      selectedAmount = e.target.value || '0';
    });
  }

  freqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      freqButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedFrequency = btn.dataset.freq || 'one-time';
    });
  });

  window.openDonationForm = function() {
    if (donateModal) {
      if (modalAmtDisplay) {
        modalAmtDisplay.textContent = `$${selectedAmount || '100'} (${selectedFrequency})`;
      }
      donateModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeDonationForm = function() {
    if (donateModal) {
      donateModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  if (donateModal) {
    donateModal.addEventListener('click', (e) => {
      if (e.target === donateModal) {
        window.closeDonationForm();
      }
    });
  }

  // ── Membership Application Form ──
  const joinForm = document.getElementById('join-form');
  const joinSuccess = document.getElementById('join-success');

  if (joinForm && joinSuccess) {
    joinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = joinForm.querySelector('.form-submit');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Submitting application...';
      }

      setTimeout(() => {
        joinForm.style.display = 'none';
        joinSuccess.style.display = 'block';
      }, 1000);
    });
  }
});
