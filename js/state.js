/**
 * Objeto global de Estado (State) da aplicação.
 * Centraliza todos os dados dinâmicos do carrinho de compras e formulários preenchidos.
 */
const state = {
  cart:      [],
  activeTab: "todos",
  checkout: {
    step:        1,
    nome:        "",
    tel:         "",
    email:       "",
    cep:         "",
    rua:         "",
    numero:      "",
    complemento: "",
    bairro:      "",
    cidade:      "",
    uf:          "",
    pagamento:   "",
    orderId:     "",
  },
};
