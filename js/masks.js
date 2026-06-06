/**
 * Aplica uma máscara de formatação para números de telefone/WhatsApp dinamicamente.
 * Lida de forma inteligente tanto com telefones antigos (10 dígitos) quanto 
 * celulares modernos com dígito 9 adicional (11 dígitos).
 * Formato final: (XX) XXXX-XXXX ou (XX) XXXXX-XXXX
 */
function maskPhone(e) {
  let v = e.target.value.replace(/\D/g, "").slice(0, 11);
  if (v.length > 10) {
    v = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
  } else if (v.length > 6) {
    v = `(${v.slice(0, 2)}) ${v.slice(2, 6)}-${v.slice(6)}`;
  } else if (v.length > 2) {
    v = `(${v.slice(0, 2)}) ${v.slice(2)}`;
  } else if (v.length > 0) {
    v = `(${v}`;
  }
  e.target.value = v;
}

/**
 * Aplica máscara de CEP separando os 5 primeiros dígitos dos 3 finais.
 * Formato final: XXXXX-XXX
 */
function maskCEP(e) {
  let v = e.target.value.replace(/\D/g, "").slice(0, 8);
  if (v.length > 5) v = v.slice(0, 5) + "-" + v.slice(5);
  e.target.value = v;
}
