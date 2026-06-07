// CURSOR
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

(function animCursor() {
  cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
  rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(animCursor);
})();

document.querySelectorAll('a,button,.company-card,.app-card').forEach(el => {
  el.addEventListener('mouseenter', () => { ring.style.width = '48px'; ring.style.height = '48px'; ring.style.borderColor = 'rgba(0,229,255,0.5)'; });
  el.addEventListener('mouseleave', () => { ring.style.width = '30px'; ring.style.height = '30px'; ring.style.borderColor = 'rgba(0,229,255,0.15)'; });
});

// SCROLL REVEAL for cards
const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }, i * 90);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.company-card,.app-card').forEach(c => {
  c.style.opacity = '0';
  c.style.transform = 'translateY(24px)';
  c.style.transition = 'opacity 0.55s ease, transform 0.55s ease, background 0.35s ease';
  obs.observe(c);
});
