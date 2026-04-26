function cartAdd(id) {
  const product = allProducts.find(p => p.id === id);
  if (!product) return;
  const existing = state.cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else state.cart.push({ ...product, qty: 1 });
}

function cartRemove(id) {
  state.cart = state.cart.filter(i => i.id !== id);
}

function cartChangeQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cartRemove(id);
}

function cartTotal() {
  return state.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function cartCount() {
  return state.cart.reduce((sum, i) => sum + i.qty, 0);
}

function cartClear() {
  state.cart = [];
}
