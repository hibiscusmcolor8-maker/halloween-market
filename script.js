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
let marchingFrame = 0;
const updateMarchingBands = () => {
  marchingFrame = 0;
  const viewport = window.innerHeight;
  marchingBands.forEach((band) => {
    const rect = band.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (viewport - rect.top) / (viewport + rect.height)));
    const direction = band.classList.contains('marching-band-bottom') ? -1 : 1;
    const distance = Math.max(180, window.innerWidth * 0.72);
    band.style.setProperty('--march-x', `${(progress * 2 - 1) * distance * direction}px`);
    band.style.setProperty('--march-y', `${Math.sin(progress * Math.PI) * -8}px`);
    const points = Array.from({ length: 9 }, (_, index) => {
      const x = index * 12.5;
      const wave = Math.sin((index * 1.35) + progress * Math.PI * 2) * 5;
      const base = band.classList.contains('marching-band-bottom') ? 10 : 12;
      return `${x}% ${Math.max(1, base + wave)}%`;
    });
    band.style.clipPath = `polygon(${points.join(',')},100% 100%,0 100%)`;
  });
};
const requestMarchingUpdate = () => {
  if (!marchingFrame) marchingFrame = window.requestAnimationFrame(updateMarchingBands);
};
window.addEventListener('scroll', requestMarchingUpdate, { passive: true });
window.addEventListener('resize', requestMarchingUpdate);
requestMarchingUpdate();
