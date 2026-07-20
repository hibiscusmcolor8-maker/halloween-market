const isAndroid = /Android/i.test(navigator.userAgent);
if (isAndroid) {
  document.documentElement.classList.add('is-android');
  const heroImage = document.querySelector('.hero-bg');
  if (heroImage) heroImage.src = 'assets/hero-mobile.png';
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const marchingBands = document.querySelectorAll('.marching-band');
if ('IntersectionObserver' in window) {
  const marchingObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.15 });
  marchingBands.forEach((band) => marchingObserver.observe(band));
} else {
  marchingBands.forEach((band) => band.classList.add('is-visible'));
}
