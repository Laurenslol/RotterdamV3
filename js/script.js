// ===== Rotterdam V3 – Ultra Professional Script =====

// Theme toggle
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
  themeBtn.innerHTML = '🌙';
} else {
  themeBtn.innerHTML = '☀️';
}

themeBtn.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  if (body.classList.contains('light-theme')) {
    themeBtn.innerHTML = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    themeBtn.innerHTML = '☀️';
    localStorage.setItem('theme', 'dark');
  }
});

// Smooth scroll
document.querySelectorAll('.navbar nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// GSAP animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('.hero-content', { duration: 1.5, opacity: 0, y: 50, ease: 'power3.out' });
gsap.from('.over-ons', {
  scrollTrigger: '.over-ons',
  duration: 1.5,
  opacity: 0,
  y: 80,
  ease: 'power2.out'
});
gsap.from('.contact', {
  scrollTrigger: '.contact',
  duration: 1.5,
  opacity: 0,
  y: 80,
  ease: 'power2.out'
});

// Button glow
const buttons = document.querySelectorAll('.btn-primary');
buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => btn.style.boxShadow = '0 0 25px var(--primary)');
  btn.addEventListener('mouseleave', () => btn.style.boxShadow = 'none');
});
