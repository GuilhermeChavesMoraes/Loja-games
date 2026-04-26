function enviarContatoWhatsApp(event) {
  event.preventDefault();
  const nome    = document.getElementById("fc_nome").value.trim();
  const tel     = document.getElementById("fc_tel").value.trim();
  const produto = document.getElementById("fc_produto").value;
  const cor     = document.getElementById("fc_cor").value.trim();
  const msg     = document.getElementById("fc_msg").value.trim();

  let ok = true;

  const nomeErr = nome ? validators.nome(nome) : "Nome obrigatório";
  if (!setFieldState("fc_nome", "ec_nome", nomeErr)) ok = false;

  const telErr = tel ? validators.tel(tel) : "WhatsApp obrigatório";
  if (!setFieldState("fc_tel", "ec_tel", telErr)) ok = false;

  if (!msg && !produto) {
    const h = document.getElementById("ec_msg");
    h.textContent = "Informe a mensagem ou selecione um produto";
    h.classList.add("show");
    ok = false;
  } else {
    document.getElementById("ec_msg").classList.remove("show");
  }

  if (!ok) { showToast("Preencha os campos obrigatórios", "error"); return; }

  const payload = buildContactPayload({ nome, tel, produto, cor, msg });
  window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(payload)}`, "_blank");
  showToast("✓ Abrindo WhatsApp...", "success");
}
