function genOrderId() {
  return "SP-" + Date.now().toString(36).toUpperCase();
}

function buildCheckoutPayload(cart, checkout) {
  const { nome, tel, email, cep, rua, numero, complemento, bairro, cidade, uf, pagamento, orderId } = checkout;
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const hasPix   = pagamento === "pix";
  const discount = hasPix ? subtotal * 0.05 : 0;
  const total    = subtotal - discount;
  const fmt      = n => n.toFixed(2).replace(".", ",");
  const payLabel = { pix:"PIX ✅", boleto:"Boleto Bancário", cartao:"Cartão de Crédito", retirada:"Retirada no Local" };
  const now      = new Date();
  const ts       = now.toLocaleDateString("pt-BR") + " às " + now.toLocaleTimeString("pt-BR", { hour:"2-digit", minute:"2-digit" });

  let msg = `🛒 *NOVO PEDIDO — SensoPrint*\n🔖 Pedido *#${orderId}*\n\n`;
  msg    += `━━━━━━━━━━━━━━━━━━\n📦 *ITENS DO PEDIDO:*\n━━━━━━━━━━━━━━━━━━\n`;

  cart.forEach(i => {
    msg += `• ${i.emoji} ${i.name} × ${i.qty}\n`;
    msg += `   ↳ R$ ${fmt(i.price)} × ${i.qty} = *R$ ${fmt(i.price * i.qty)}*\n`;
  });

  msg += `\n💰 Subtotal: R$ ${fmt(subtotal)}`;
  if (hasPix) msg += `\n🎁 Desconto PIX (5%): -R$ ${fmt(discount)}`;
  msg += `\n━━━━━━━━━━━━━━━━━━\n💵 *TOTAL: R$ ${fmt(total)}*\n━━━━━━━━━━━━━━━━━━\n\n`;
  msg += `👤 *DADOS DO CLIENTE:*\n• Nome: ${nome}\n• WhatsApp: ${tel}\n`;
  if (email) msg += `• E-mail: ${email}\n`;
  msg += `\n📍 *ENDEREÇO DE ENTREGA:*\n• CEP: ${cep}\n• ${rua}, ${numero}`;
  if (complemento) msg += ` — ${complemento}`;
  msg += `\n• Bairro: ${bairro}\n• ${cidade} — ${uf}\n`;
  msg += `\n💳 *PAGAMENTO:* ${payLabel[pagamento] || pagamento}\n\n`;
  msg += `✅ Confirmo o pedido acima e aguardo instruções!\n🕐 Gerado em: ${ts}`;
  return msg;
}

function buildContactPayload(data) {
  const { nome, tel, produto, cor, msg } = data;
  let m = `📋 *CONSULTA — SensoPrint*\n\n`;
  m    += `👤 *Cliente:* ${nome}\n📱 *WhatsApp:* ${tel}\n`;
  if (produto) m += `\n🎁 *Produto:* ${produto}\n`;
  if (cor)     m += `🎨 *Cor:* ${cor}\n`;
  if (msg)     m += `\n💬 *Mensagem:*\n${msg}\n`;
  m    += `\n✅ Aguardo retorno para confirmação!`;
  return m;
}
