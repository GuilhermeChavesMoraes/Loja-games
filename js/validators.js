/**
 * Coleção de funções puras de validação.
 * Cada chave testa um valor específico e retorna nulo (null) se estiver tudo certo, 
 * ou uma string descritiva com a mensagem de erro a ser exibida ao usuário.
 */
const validators = {
  nome:  v => v.trim().length >= 3  ? null : "Nome deve ter ao menos 3 caracteres",
  tel:   v => /^\(\d{2}\)\s?\d?\s?\d{5}-\d{4}$/.test(v.trim()) ? null : "Formato: (61) 91234-5678",
  email: v => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : "E-mail inválido",
  cep:   v => /^\d{5}-?\d{3}$/.test(v.trim()) ? null : "CEP inválido (ex: 70000-000)",
  rua:   v => v.trim().length >= 4  ? null : "Informe a rua / avenida",
  numero:v => v.trim().length >= 1  ? null : "Informe o número",
  bairro:v => v.trim().length >= 2  ? null : "Informe o bairro",
  cidade:v => v.trim().length >= 2  ? null : "Informe a cidade",
  uf:    v => v.trim().length === 2 ? null : "Selecione o estado",
};

/**
 * Atualiza o visual de um input HTML para exibir erros ao usuário.
 * @param {string} inputId O ID do campo que foi digitado
 * @param {string} errorId O ID da tag <span>/<div> que guardará a mensagem
 * @param {string|null} error A mensagem de erro gerada pelo validador
 */
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
