// app.js ফাইলের জন্য সম্পূর্ণ কোড

const canvas = document.createElement('canvas');
canvas.id = 'bg-canvas';
document.body.insertBefore(canvas, document.body.firstChild);

const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = (Math.random() - 0.5) * 0.3;
    this.alpha = Math.random() * 0.8 + 0.2;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
    ctx.shadowColor = 'white';
    ctx.shadowBlur = 4;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const particles = [];
const PARTICLE_COUNT = 150;
for(let i = 0; i < PARTICLE_COUNT; i++){
  particles.push(new Particle());
}

function animate(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}
animate();

// ব্যাকগ্রাউন্ড কালার স্মুথ চেঞ্জ করার ফাংশন

const colors = ['#0d47a1', '#1976d2', '#42a5f5', '#64b5f6', '#90caf9', '#bbdefb'];
let colorIndex = 0;

function lerpColor(a, b, t) {
  const ah = parseInt(a.replace('#',''), 16);
  const bh = parseInt(b.replace('#',''), 16);

  const ar = (ah >> 16) & 0xff;
  const ag = (ah >> 8) & 0xff;
  const ab = ah & 0xff;

  const br = (bh >> 16) & 0xff;
  const bg = (bh >> 8) & 0xff;
  const bb = bh & 0xff;

  const rr = ar + (br - ar) * t;
  const rg = ag + (bg - ag) * t;
  const rb = ab + (bb - ab) * t;

  return `rgb(${Math.round(rr)},${Math.round(rg)},${Math.round(rb)})`;
}

function changeBackgroundColor() {
  const nextIndex = (colorIndex + 1) % colors.length;
  let start = null;

  function animateColor(timestamp) {
    if (!start) start = timestamp;
    const progress = (timestamp - start) / 5000;

    if (progress < 1) {
      document.body.style.backgroundColor = lerpColor(colors[colorIndex], colors[nextIndex], progress);
      requestAnimationFrame(animateColor);
    } else {
      colorIndex = nextIndex;
      setTimeout(changeBackgroundColor, 1000);
    }
  }
  requestAnimationFrame(animateColor);
}

changeBackgroundColor();
