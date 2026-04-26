function openDrawer() {
  renderDrawer();
  document.getElementById("drawerBackdrop").classList.add("open");
  document.getElementById("cartDrawer").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  document.getElementById("drawerBackdrop").classList.remove("open");
  document.getElementById("cartDrawer").classList.remove("open");
  document.body.style.overflow = "";
}

function renderDrawer() {
  const container = document.getElementById("drawerItems");
  const btn       = document.getElementById("btnCheckout");

  if (state.cart.length === 0) {
    container.innerHTML = `<div class="drawer-empty"><div class="drawer-empty-icon">🛒</div><p>Seu carrinho está vazio</p></div>`;
    btn.disabled = true;
    document.getElementById("drawerTotal").textContent = "R$ 0,00";
    return;
  }

  container.innerHTML = state.cart.map(item => `
    <div class="drawer-item">
      <div class="drawer-item-emoji">${item.emoji}</div>
      <div class="drawer-item-info">
        <div class="drawer-item-name">${item.name}</div>
        <div class="drawer-item-price">R$ ${(item.price * item.qty).toFixed(2).replace(".", ",")} (${item.qty}×)</div>
      </div>
      <div class="qty-ctrl">
        <button class="qty-btn" onclick="drawerChangeQty(${item.id},-1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="drawerChangeQty(${item.id},1)">+</button>
      </div>
      <button class="item-remove" onclick="drawerRemove(${item.id})" title="Remover">🗑</button>
    </div>`).join("");

  document.getElementById("drawerTotal").textContent = `R$ ${cartTotal().toFixed(2).replace(".", ",")}`;
  btn.disabled = false;
}

function drawerChangeQty(id, delta) {
  cartChangeQty(id, delta);
  syncCartCount();
  renderDrawer();
}

function drawerRemove(id) {
  cartRemove(id);
  syncCartCount();
  renderDrawer();
}
