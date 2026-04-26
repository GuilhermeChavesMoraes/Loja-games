const validators = {
  nome:  v => v.trim().length >= 3  ? null : "Nome deve ter ao menos 3 caracteres",
  tel:   v => /^\(\d{2}\)\s\d\s\d{4}-\d{4}$/.test(v) ? null : "Formato: (61) 9 1234-5678",
  email: v => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : "E-mail inválido",
  cep:   v => /^\d{5}-?\d{3}$/.test(v.trim()) ? null : "CEP inválido (ex: 70000-000)",
  rua:   v => v.trim().length >= 4  ? null : "Informe a rua / avenida",
  numero:v => v.trim().length >= 1  ? null : "Informe o número",
  bairro:v => v.trim().length >= 2  ? null : "Informe o bairro",
  cidade:v => v.trim().length >= 2  ? null : "Informe a cidade",
  uf:    v => v.trim().length === 2 ? null : "Selecione o estado",
};

function setFieldState(inputId, errorId, error) {
  const input = document.getElementById(inputId);
  const hint  = document.getElementById(errorId);
  if (!input) return !error;
  if (error) {
    input.classList.remove("valid"); input.classList.add("invalid");
    if (hint) { hint.textContent = error; hint.classList.add("show"); }
    return false;
  }
  input.classList.remove("invalid"); input.classList.add("valid");
  if (hint) hint.classList.remove("show");
  return true;
}
