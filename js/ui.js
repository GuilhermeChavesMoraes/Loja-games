/* ── Cart count badge ── */
function syncCartCount() {
  const el = document.getElementById("cartCount");
  el.textContent = cartCount();
  el.classList.remove("bounce");
  void el.offsetWidth;
  el.classList.add("bounce");
  setTimeout(() => el.classList.remove("bounce"), 600);
}

/* ── Product card HTML ── */
function productCardHTML(p) {
  return `
    <div class="product-card">
      <div class="product-img" style="background:linear-gradient(135deg,rgba(94,207,168,.12),rgba(184,169,245,.09))">
        ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ""}
        <span>${p.emoji}</span>
      </div>
      <div class="product-info">
        <div class="stars">${"⭐".repeat(p.stars)}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div class="product-price">R$ ${p.price.toFixed(2).replace(".", ",")}</div>
          <button class="add-cart" onclick="handleAddToCart(event,${p.id})">🛒 Adicionar</button>
        </div>
      </div>
    </div>`;
}

/* ── Render grids ── */
function renderDestaques() {
  document.getElementById("destaquesGrid").innerHTML =
    allProducts.filter(p => p.stars === 5).slice(0, 4).map(productCardHTML).join("");
}

function renderCatalog() {
  const list = state.activeTab === "todos" ? allProducts : allProducts.filter(p => p.cat === state.activeTab);
  document.getElementById("catalogGrid").innerHTML = list.map(productCardHTML).join("");
}

function renderTabs() {
  document.getElementById("catalogTabs").innerHTML = categories.map(c =>
    `<button class="tab-btn ${c.key === state.activeTab ? "active" : ""}" onclick="setTab('${c.key}')">${c.label}</button>`
  ).join("");
}

function setTab(key) {
  state.activeTab = key;
  renderTabs();
  renderCatalog();
}

/* ── Toast ── */
function showToast(text, type = "") {
  const stack = document.getElementById("toastStack");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = text;
  stack.appendChild(toast);
  void toast.offsetWidth;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 420);
  }, 2800);
}

/* ── Ripple ── */
function addRipple(event, el) {
  const rect = el.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x    = event.clientX - rect.left - size / 2;
  const y    = event.clientY - rect.top  - size / 2;
  const wave = document.createElement("span");
  wave.className = "ripple-wave";
  wave.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
  el.appendChild(wave);
  wave.addEventListener("animationend", () => wave.remove());
}
