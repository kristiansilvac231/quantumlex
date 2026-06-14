const canvas = document.getElementById('quantum-canvas');
const ctx = canvas.getContext('2d');
let W, H, pts, mouse = { x: -999, y: -999 };

function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }

function init() {
  pts = [];
  const n = Math.floor((W * H) / 15000);
  for (let i = 0; i < n; i++) pts.push({
    x: Math.random() * W, y: Math.random() * H,
    vx: (Math.random() - .5) * .28, vy: (Math.random() - .5) * .28,
    r: Math.random() * 1.2 + .4,
    pulse: Math.random() * Math.PI * 2
  });
}

let t = 0;
function draw() {
  ctx.clearRect(0, 0, W, H);
  t += 0.016;
  pts.forEach((p, i) => {
    p.pulse += 0.018;
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
    if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

    const dx = p.x - mouse.x, dy = p.y - mouse.y;
    const d = Math.sqrt(dx * dx + dy * dy);
    if (d < 110) { const f = (110 - d) / 110 * .7; p.vx += (dx / d) * f * .08; p.vy += (dy / d) * f * .08; }
    p.vx *= .992; p.vy *= .992;

    const a = (.3 + .2 * Math.sin(p.pulse));
    ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(160,133,90,${a * 0.35})`; ctx.fill();

    for (let j = i + 1; j < pts.length; j++) {
      const q = pts[j];
      const ddx = p.x - q.x, ddy = p.y - q.y;
      const dd = Math.sqrt(ddx * ddx + ddy * ddy);
      if (dd < 110) {
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = `rgba(160,133,90,${(1 - dd / 110) * .07})`;
        ctx.lineWidth = .5; ctx.stroke();
      }
    }
  });

  if (mouse.x > 0) {
    for (let r = 0; r < 3; r++) {
      const rad = ((t * 55 + r * 75) % 220);
      const wa = Math.max(0, 1 - rad / 220) * .04;
      ctx.beginPath(); ctx.arc(mouse.x, mouse.y, rad, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(160,133,90,${wa})`; ctx.lineWidth = 1; ctx.stroke();
    }
  }
  requestAnimationFrame(draw);
}

document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
window.addEventListener('resize', () => { resize(); init(); });
resize(); init(); draw();
