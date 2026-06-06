/**
 * Base de dados simulada (Mock) com as informações estruturais da loja,
 * incluindo telefone de contato, produtos e categorias cadastradas.
 */
const PHONE = "5561999639758";

const allProducts = [
  { id:1, emoji:"🌀", name:"Pop Fidget Hexagonal",      desc:"Textura suave com pop sensorial em cada bolha. Ideal para foco e alívio de tensão.", price:39.90, badge:"🔥 Mais vendido", stars:5, cat:"fidget" },
  { id:2, emoji:"🧊", name:"Cubo Infinito Antiestresse", desc:"6 modos de interação em um cubo compacto. Clique, gire, pressione e relaxe.",         price:49.90, badge:"⭐ Destaque",    stars:5, cat:"cubo" },
  { id:3, emoji:"🐚", name:"Caracol Articulado",         desc:"Corpo articulado com movimentos fluidos e hipnóticos. Sensação suave e calmante.",       price:34.90, badge:null,           stars:4, cat:"articulado" },
  { id:4, emoji:"🌸", name:"Mandala Spinner",            desc:"Spinner em formato de mandala com equilíbrio perfeito. Giro silencioso e duradouro.",    price:29.90, badge:"🆕 Novo",       stars:4, cat:"spinner" },
  { id:5, emoji:"🐛", name:"Lagarta Sensorial",          desc:"Segmentos articulados com texturas variadas em cada anel. Ótimo para crianças.",          price:44.90, badge:null,           stars:5, cat:"articulado" },
  { id:6, emoji:"🐉", name:"Dragão Articulado",          desc:"Dragão com corpo totalmente flexível e articulado. Brinquedo sensorial e decorativo.",   price:59.90, badge:"🎁 Presente",   stars:5, cat:"articulado" },
  { id:7, emoji:"🎯", name:"Peg Board Terapêutico",      desc:"Placa de pinos coloridos para organização sensorial e foco. Usado em T.O.",              price:54.90, badge:null,           stars:4, cat:"terapeutico" },
  { id:8, emoji:"🌿", name:"Kit Zen Completo",           desc:"Pop Fidget + Cubo Infinito + Spinner em caixa especial. O kit antiestresse completo.",   price:99.90, badge:"💚 Kit",        stars:5, cat:"kit" },
];

const categories = [
  { key:"todos",       label:"Todos" },
  { key:"fidget",      label:"Fidget" },
  { key:"cubo",        label:"Cubos" },
  { key:"spinner",     label:"Spinners" },
  { key:"articulado",  label:"Articulados" },
  { key:"terapeutico", label:"Terapêuticos" },
  { key:"kit",         label:"Kits" },
];
