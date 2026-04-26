/* ── Cart count badge ── */
function syncCartCount() {
  const el = document.getElementById('cartCount');
  el.textContent = cartCount();
  el.classList.remove('bounce');
  void el.offsetWidth;
  el.classList.add('bounce');
  setTimeout(() => el.classList.remove('bounce'), 600);
}

/* ── Bento card variants (featured section) ── */
function bentoCardHTML(p, variant = 'small') {
  const art = getProductArt(p.id);

  if (variant === 'tall') return `
    <div class="bento-card bento-tall" data-id="${p.id}">
      <div class="bento-art">${art}</div>
      <div class="bento-info">
        ${p.badge ? `<span class="product-badge bento-badge">${p.badge}</span>` : ''}
        <div class="bento-name">${p.name}</div>
        <div class="bento-desc">${p.desc}</div>
        <div class="bento-footer">
          <div class="bento-price">R$ ${p.price.toFixed(2).replace('.', ',')}</div>
          <button class="add-cart" onclick="handleAddToCart(event,${p.id})">🛒 Adicionar</button>
        </div>
      </div>
      <div class="bento-glow"></div>
    </div>`;

  if (variant === 'wide') return `
    <div class="bento-card bento-wide" data-id="${p.id}">
      <div class="bento-art-wide">${art}</div>
      <div class="bento-info-wide">
        ${p.badge ? `<span class="product-badge bento-badge">${p.badge}</span>` : ''}
        <div class="bento-name">${p.name}</div>
        <div class="bento-desc">${p.desc}</div>
        <div class="bento-footer">
          <div class="bento-price">R$ ${p.price.toFixed(2).replace('.', ',')}</div>
          <button class="add-cart" onclick="handleAddToCart(event,${p.id})">🛒 Adicionar</button>
        </div>
      </div>
      <div class="bento-glow"></div>
    </div>`;

  /* small */
  return `
    <div class="bento-card bento-small" data-id="${p.id}">
      <div class="bento-art-sm">${art}</div>
      <div class="bento-info-sm">
        <div class="bento-name-sm">${p.name}</div>
        <div class="bento-footer">
          <div class="bento-price">R$ ${p.price.toFixed(2).replace('.', ',')}</div>
          <button class="add-cart add-cart-sm" onclick="handleAddToCart(event,${p.id})">+ Adicionar</button>
        </div>
      </div>
      <div class="bento-glow"></div>
    </div>`;
}

/* ── Standard catalog card with SVG art ── */
function productCardHTML(p) {
  const art   = getProductArt(p.id);
  const stars = '⭐'.repeat(p.stars);
  return `
    <div class="product-card">
      <div class="product-art-wrap">
        ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
        ${art}
      </div>
      <div class="product-info">
        <div class="stars">${stars}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div class="product-price">R$ ${p.price.toFixed(2).replace('.', ',')}</div>
          <button class="add-cart" onclick="handleAddToCart(event,${p.id})">🛒 Adicionar</button>
        </div>
      </div>
    </div>`;
}

/* ── Render featured bento ── */
function renderDestaques() {
  const featured = allProducts.filter(p => p.stars === 5).slice(0, 4);
  if (featured.length < 4) {
    document.getElementById('destaquesGrid').innerHTML = featured.map(productCardHTML).join('');
    return;
  }
  document.getElementById('destaquesGrid').innerHTML =
    bentoCardHTML(featured[0], 'tall') +
    bentoCardHTML(featured[1], 'wide') +
    bentoCardHTML(featured[2], 'small') +
    bentoCardHTML(featured[3], 'small');
}

/* ── Render catalog ── */
function renderCatalog() {
  const list = state.activeTab === 'todos' ? allProducts : allProducts.filter(p => p.cat === state.activeTab);
  document.getElementById('catalogGrid').innerHTML = list.map(productCardHTML).join('');
}

function renderTabs() {
  document.getElementById('catalogTabs').innerHTML = categories.map(c =>
    `<button class="tab-btn ${c.key === state.activeTab ? 'active' : ''}" onclick="setTab('${c.key}')">${c.label}</button>`
  ).join('');
}

function setTab(key) {
  state.activeTab = key;
  renderTabs();
  renderCatalog();
}

/* ── Toast ── */
function showToast(text, type = '') {
  const stack = document.getElementById('toastStack');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = text;
  stack.appendChild(toast);
  void toast.offsetWidth;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 420);
  }, 2800);
}

/* ── Ripple ── */
function addRipple(event, el) {
  const rect = el.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x    = event.clientX - rect.left - size / 2;
  const y    = event.clientY - rect.top  - size / 2;
  const wave = document.createElement('span');
  wave.className = 'ripple-wave';
  wave.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
  el.appendChild(wave);
  wave.addEventListener('animationend', () => wave.remove());
}
