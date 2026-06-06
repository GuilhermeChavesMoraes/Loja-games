/* ── Funções de Abertura e Fechamento do Modal de Checkout ── */
function openCheckout() {
  if (state.cart.length === 0) return;
  state.checkout.step    = 1;
  state.checkout.orderId = genOrderId();
  state.checkout.pagamento = "";
  document.querySelectorAll(".payment-opt").forEach(o => o.classList.remove("selected"));
  closeDrawer();
  renderWizardStep();
  document.getElementById("wizardOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCheckout() {
  document.getElementById("wizardOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

/* ── Renderização Visual das Etapas do Wizard ── */
function renderWizardStep() {
  const s = state.checkout.step;

  [1, 2, 3, 4].forEach(n => {
    const dot = document.getElementById(`sd${n}`);
    dot.classList.remove("active", "done");
    if (n === s) dot.classList.add("active");
    if (n < s)   dot.classList.add("done");
  });

  [1, 2, 3].forEach(n => {
    document.getElementById(`sc${n}`).classList.toggle("done", n < s);
  });

  document.querySelectorAll(".step-content").forEach((el, i) => {
    el.classList.toggle("active", i + 1 === s);
  });

  const titles = ["", "👤 Seus Dados", "📍 Endereço", "💳 Pagamento", "✅ Confirmação"];
  document.getElementById("wizardTitle").textContent = titles[s];

  if (s === 4) renderSummary();

  document.getElementById("wizardModal").scrollTop = 0;
}

/* ── Navegação entre as Etapas Lógicas (Avançar e Voltar) ── */
function nextStep() {
  if (!validateStep(state.checkout.step)) return;
  collectStepData(state.checkout.step);
  if (state.checkout.step === 4) { sendToWhatsApp(); return; }
  state.checkout.step++;
  renderWizardStep();
}

function prevStep() {
  if (state.checkout.step === 1) { closeCheckout(); openDrawer(); return; }
  state.checkout.step--;
  renderWizardStep();
}

function collectStepData(step) {
  if (step === 1) {
    state.checkout.nome  = document.getElementById("f_nome").value.trim();
    state.checkout.tel   = document.getElementById("f_tel").value.trim();
    state.checkout.email = document.getElementById("f_email").value.trim();
  }
  if (step === 2) {
    state.checkout.cep         = document.getElementById("f_cep").value.trim();
    state.checkout.rua         = document.getElementById("f_rua").value.trim();
    state.checkout.numero      = document.getElementById("f_numero").value.trim();
    state.checkout.complemento = document.getElementById("f_complemento").value.trim();
    state.checkout.bairro      = document.getElementById("f_bairro").value.trim();
    state.checkout.cidade      = document.getElementById("f_cidade").value.trim();
    state.checkout.uf          = document.getElementById("f_uf").value.trim();
  }
}

/* ── Validação dos Campos Obrigatórios em Cada Etapa ── */
function validateStep(step) {
  let ok = true;

  if (step === 1) {
    [["f_nome","e_nome","nome"],["f_tel","e_tel","tel"],["f_email","e_email","email"]].forEach(([fid,eid,key]) => {
      const val = document.getElementById(fid)?.value || "";
      if (!setFieldState(fid, eid, validators[key]?.(val) ?? null)) ok = false;
    });
  }

  if (step === 2) {
    [["f_cep","e_cep","cep"],["f_rua","e_rua","rua"],["f_numero","e_numero","numero"],
     ["f_bairro","e_bairro","bairro"],["f_cidade","e_cidade","cidade"],["f_uf","e_uf","uf"]].forEach(([fid,eid,key]) => {
      const val = document.getElementById(fid)?.value || "";
      if (!setFieldState(fid, eid, validators[key]?.(val) ?? null)) ok = false;
    });
  }

  if (step === 3) {
    if (!state.checkout.pagamento) {
      const hint = document.getElementById("e_pag");
      hint.textContent = "Selecione uma forma de pagamento";
      hint.classList.add("show");
      ok = false;
    }
  }

  if (!ok && step < 3) showToast("Corrija os campos destacados", "error");
  return ok;
}

/* ── Seleção e Marcação da Forma de Pagamento ── */
function selectPayment(key, el) {
  document.querySelectorAll(".payment-opt").forEach(o => o.classList.remove("selected"));
  el.classList.add("selected");
  state.checkout.pagamento = key;
  const hint = document.getElementById("e_pag");
  if (hint) hint.classList.remove("show");
}

/* ── Busca Automática de Endereço via API Externa (ViaCEP) ── 
   Esta função consome um serviço REST, aguarda a resposta e preenche
   os campos de endereço da etapa 2 de forma automática. 
*/
async function lookupCEP() {
  const raw = document.getElementById("f_cep").value.replace(/\D/g, "");
  if (raw.length !== 8) { showToast("CEP deve ter 8 dígitos", "error"); return; }

  const btn = document.getElementById("cepBtn");
  btn.classList.add("loading");

  try {
    const res  = await fetch(`https://viacep.com.br/ws/${raw}/json/`);
    const data = await res.json();
    if (data.erro) { showToast("CEP não encontrado", "error"); return; }

    ({ f_rua: data.logradouro, f_bairro: data.bairro, f_cidade: data.localidade, f_uf: data.uf });
    const map = { f_rua:data.logradouro, f_bairro:data.bairro, f_cidade:data.localidade, f_uf:data.uf };

    Object.entries(map).forEach(([id, val]) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.value = val || "";
      if (el.tagName === "SELECT") el.classList.toggle("has-value", !!el.value);
      else { el.classList.remove("invalid"); if (val) el.classList.add("valid"); }
    });

    document.getElementById("f_numero").focus();
    showToast("✓ Endereço preenchido!", "success");
  } catch {
    showToast("Erro ao buscar CEP — verifique sua conexão", "error");
  } finally {
    btn.classList.remove("loading");
  }
}

/* ── Renderização Final do Resumo do Pedido (Confirmação) ── */
function renderSummary() {
  const co      = state.checkout;
  const sub     = cartTotal();
  const hasPix  = co.pagamento === "pix";
  const disc    = hasPix ? sub * 0.05 : 0;
  const total   = sub - disc;
  const fmt     = n => n.toFixed(2).replace(".", ",");
  const payLbl  = { pix:"PIX", boleto:"Boleto", cartao:"Cartão", retirada:"Retirada" };

  let html = `<div class="summary-badge">🔖 Pedido <span class="summary-order-id">#${co.orderId}</span></div>`;

  state.cart.forEach(i => {
    html += `<div class="summary-line">
      <span class="summary-line-name">${i.emoji} ${i.name} × ${i.qty}</span>
      <span class="summary-line-val">R$ ${fmt(i.price * i.qty)}</span>
    </div>`;
  });

  if (hasPix) html += `<div class="summary-line summary-discount">
    <span class="summary-line-name">🎁 Desconto PIX (5%)</span>
    <span class="summary-line-val">−R$ ${fmt(disc)}</span>
  </div>`;

  html += `
    <div class="summary-total-row">
      <span class="summary-total-lbl">Total</span>
      <span class="summary-total-val">R$ ${fmt(total)}</span>
    </div>
    <div class="summary-info-box">
      <div class="summary-info-title">👤 ${co.nome}</div>
      <div class="summary-info-body">
        📱 ${co.tel}${co.email ? `<br>✉️ ${co.email}` : ""}<br>
        📍 ${co.rua}, ${co.numero}${co.complemento ? ` — ${co.complemento}` : ""}<br>
        ${co.bairro}, ${co.cidade} — ${co.uf} · CEP ${co.cep}<br>
        💳 ${payLbl[co.pagamento] || co.pagamento}${hasPix ? '<span class="pix-tag">5% off</span>' : ""}
      </div>
    </div>`;

  document.getElementById("summaryContent").innerHTML = html;
}

/* ── Processamento e Envio dos Dados para o Aplicativo WhatsApp ── */
function sendToWhatsApp() {
  const payload = buildCheckoutPayload(state.cart, state.checkout);
  window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(payload)}`, "_blank");
  closeCheckout();
  cartClear();
  syncCartCount();
  showToast("🚀 Pedido enviado! Aguarde nosso contato.", "success");
}
