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
