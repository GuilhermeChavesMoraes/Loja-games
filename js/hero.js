/* ═══ HERO CANVAS — neural mesh interativo ═══ */
function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H;
  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  /* Mouse / touch tracking */
  const mouse = { x: W * 0.5, y: H * 0.45, active: false };
  canvas.addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
    mouse.active = true;
  }, { passive: true });
  canvas.addEventListener('touchmove', e => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.touches[0].clientX - r.left;
    mouse.y = e.touches[0].clientY - r.top;
    mouse.active = true;
  }, { passive: true });

  /* Particle pool */
  const COUNT     = Math.min(90, Math.floor((W * H) / 13000));
  const LINK_DIST = 140;
  const MOUSE_R   = 180;

  function mkParticle() {
    const isMint = Math.random() > 0.45;
    return {
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * 0.38,
      vy: (Math.random() - 0.5) * 0.38,
      r:  Math.random() * 1.6 + 0.6,
      color: isMint ? [94, 207, 168] : [184, 169, 245],
      pulse: Math.random() * Math.PI * 2,   /* phase offset for glow pulse */
    };
  }

  const particles = Array.from({ length: COUNT }, mkParticle);

  /* Floating geometric shapes (wireframe cubes) */
  function mkShape() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      size: 22 + Math.random() * 32,
      rx: Math.random() * Math.PI * 2,
      ry: Math.random() * Math.PI * 2,
      rz: Math.random() * Math.PI * 2,
      dRx: (Math.random() - 0.5) * 0.008,
      dRy: (Math.random() - 0.5) * 0.010,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.12,
      color: Math.random() > 0.5 ? [94, 207, 168] : [184, 169, 245],
      alpha: 0.12 + Math.random() * 0.14,
    };
  }

  /* Cube vertices (unit cube centred at origin) */
  const CUBE_V = [[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]];
  const CUBE_E = [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];

  /* Octahedron vertices */
  const OCT_V  = [[0,1,0],[0,-1,0],[1,0,0],[-1,0,0],[0,0,1],[0,0,-1]];
  const OCT_E  = [[0,2],[0,3],[0,4],[0,5],[1,2],[1,3],[1,4],[1,5],[2,4],[4,3],[3,5],[5,2]];

  const shapes = Array.from({ length: 6 }, (_, i) => {
    const s = mkShape();
    s.type = i % 2 === 0 ? 'cube' : 'oct';
    return s;
  });

  function rotateVec(v, rx, ry) {
    let [x, y, z] = v;
    // Rotate Y
    let x1 =  x * Math.cos(ry) + z * Math.sin(ry);
    let z1 = -x * Math.sin(ry) + z * Math.cos(ry);
    // Rotate X
    let y2 =  y * Math.cos(rx) - z1 * Math.sin(rx);
    let z2 =  y * Math.sin(rx) + z1 * Math.cos(rx);
    return [x1, y2, z2];
  }

  function project([x, y, z], fov = 320) {
    const s = fov / (fov + z);
    return [x * s, y * s];
  }

  function drawShape(shape, t) {
    const verts = shape.type === 'cube' ? CUBE_V : OCT_V;
    const edges  = shape.type === 'cube' ? CUBE_E : OCT_E;
    const [cr, cg, cb] = shape.color;

    const projected = verts.map(v => {
      const r = rotateVec(v, shape.rx, shape.ry);
      const [px, py] = project(r);
      return [px * shape.size + shape.x, py * shape.size + shape.y];
    });

    const alpha = shape.alpha * (0.8 + 0.2 * Math.sin(t * 0.8 + shape.rx));
    ctx.strokeStyle = `rgba(${cr},${cg},${cb},${alpha})`;
    ctx.lineWidth   = 0.8;

    edges.forEach(([a, b]) => {
      ctx.beginPath();
      ctx.moveTo(projected[a][0], projected[a][1]);
      ctx.lineTo(projected[b][0], projected[b][1]);
      ctx.stroke();
    });

    /* Vertex dots */
    ctx.fillStyle = `rgba(${cr},${cg},${cb},${alpha * 1.4})`;
    projected.forEach(([px, py]) => {
      ctx.beginPath();
      ctx.arc(px, py, 1.2, 0, Math.PI * 2);
      ctx.fill();
    });

    shape.rx += shape.dRx;
    shape.ry += shape.dRy;
    shape.x  += shape.vx;
    shape.y  += shape.vy;
    if (shape.x < -60 || shape.x > W + 60) shape.vx *= -1;
    if (shape.y < -60 || shape.y > H + 60) shape.vy *= -1;
  }

  /* ── Main draw loop ── */
  let frame = 0;
  let raf;

  function draw() {
    raf = requestAnimationFrame(draw);
    const t = frame * 0.016;
    frame++;

    ctx.clearRect(0, 0, W, H);

    /* Draw shapes */
    shapes.forEach(s => drawShape(s, t));

    /* Particle connections */
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d2 = dx * dx + dy * dy;
        if (d2 < LINK_DIST * LINK_DIST) {
          const alpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.16;
          const [cr, cg, cb] = particles[i].color;
          ctx.strokeStyle = `rgba(${cr},${cg},${cb},${alpha})`;
          ctx.lineWidth = 0.55;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }

      /* Mouse attraction lines */
      const mdx = particles[i].x - mouse.x;
      const mdy = particles[i].y - mouse.y;
      const md  = Math.sqrt(mdx * mdx + mdy * mdy);
      if (md < MOUSE_R) {
        const ratio = 1 - md / MOUSE_R;
        ctx.strokeStyle = `rgba(184,169,245,${ratio * 0.45})`;
        ctx.lineWidth = 0.9;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
        /* Attract particle toward mouse */
        particles[i].vx += (mouse.x - particles[i].x) * 0.00018;
        particles[i].vy += (mouse.y - particles[i].y) * 0.00018;
      }
    }

    /* Draw and update particles */
    particles.forEach(p => {
      const glow  = 0.6 + 0.4 * Math.sin(t * 1.5 + p.pulse);
      const [cr, cg, cb] = p.color;
      ctx.fillStyle = `rgba(${cr},${cg},${cb},${glow * 0.75})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;

      /* Soft bounce at edges */
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      /* Speed cap */
      const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (spd > 0.75) { p.vx *= 0.75 / spd; p.vy *= 0.75 / spd; }
    });

    /* Mouse dot */
    if (mouse.active) {
      const glow = 0.7 + 0.3 * Math.sin(t * 2);
      ctx.fillStyle = `rgba(184,169,245,${glow * 0.6})`;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 3.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  draw();

  /* Pause when tab is hidden (battery/performance) */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else draw();
  });
}

/* ═══ 3D TILT on product cards ═══ */
function initCardTilt() {
  const MAX_TILT = 14;
  const SPEED_IN  = 0.08;
  const SPEED_OUT = 0.5;

  function bind(card) {
    if (card._tilt) return;
    card._tilt = true;

    let cx = 0, cy = 0, raf = null;
    let hovering = false;

    function lerp(a, b, t) { return a + (b - a) * t; }
    let curX = 0, curY = 0;

    function animate() {
      const speed = hovering ? SPEED_IN : SPEED_OUT;
      curX = lerp(curX, cx, speed);
      curY = lerp(curY, cy, speed);

      if (hovering) {
        card.style.transform = `perspective(700px) rotateY(${curX}deg) rotateX(${curY}deg) translateY(-8px) scale(1.025)`;
        card.style.boxShadow = `${-curX * 1.2}px ${curY * 0.8 + 16}px 48px rgba(0,0,0,.5), 0 0 0 1px rgba(94,207,168,${0.08 + Math.abs(curX + curY) * 0.006})`;
      } else {
        card.style.transform = `perspective(700px) rotateY(${curX}deg) rotateX(${curY}deg)`;
        if (Math.abs(curX) < 0.1 && Math.abs(curY) < 0.1) {
          card.style.transform = '';
          card.style.boxShadow = '';
          return;
        }
      }
      raf = requestAnimationFrame(animate);
    }

    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      cx = ((e.clientX - rect.left) / rect.width  - 0.5) * MAX_TILT * 2;
      cy = ((e.clientY - rect.top)  / rect.height - 0.5) * -MAX_TILT * 1.6;
    });

    card.addEventListener('mouseenter', () => {
      hovering = true;
      card.style.transition = 'box-shadow .15s';
      cancelAnimationFrame(raf);
      animate();
    });

    card.addEventListener('mouseleave', () => {
      hovering = false;
      cx = 0; cy = 0;
      card.style.transition = 'transform .6s cubic-bezier(0.34,1.56,0.64,1), box-shadow .4s';
    });
  }

  /* Bind existing + dynamically added cards */
  function bindAll() {
    document.querySelectorAll('.product-card, .bento-card').forEach(bind);
  }

  bindAll();

  new MutationObserver(bindAll).observe(document.body, { childList: true, subtree: true });
}
