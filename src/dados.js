import cyberpunkImg from "./assets/Cyberpunk.jpg";
import ghostImg from "./assets/Ghost of Tsushima.jpg";
import stellarisImg from "./assets/stellaris.jpg"; 
import deadCellsImg from "./assets/Dead Cells.jpg";
import forzaImg from "./assets/Forza Horizon 5.jpg";
import rotmgImg from "./assets/Realm of the Mad God Exalt.jpg";
import sevenDaysImg from "./assets/days.jpg"; 
import neonWhiteImg from "./assets/Neon White.jpg";

export const gamesData = [
  {
    id: 1,
    nome: "Cyberpunk 2077",
    categoria: "RPG / Sci-Fi",
    plataforma: "PC / PS5 / Xbox",
    nota: 9.2,
    status: "Disponível",
    descricao: "Explore uma metrópole futurista controlada por megacorporações em um RPG imersivo.",
    imagem: cyberpunkImg
  },
  {
    id: 2,
    nome: "Ghost of Tsushima",
    categoria: "Ação / Aventura",
    plataforma: "PS5 / PC",
    nota: 8.9,
    status: "Disponível",
    descricao: "Domine a arte da katana e defenda seu clã contra forças místicas do Japão Feudal.",
    imagem: ghostImg
  },
  {
    id: 3,
    nome: "Stellaris",
    categoria: "Estratégia",
    plataforma: "PC",
    nota: 8.5,
    status: "Disponível",
    descricao: "Construa seu império estelar, colonize novos planetas e negocie com raças alienígenas.",
    imagem: stellarisImg
  },
  {
    id: 4,
    nome: "Dead Cells",
    categoria: "Indie / Roguelike",
    plataforma: "Nintendo Switch / PC",
    nota: 9.0,
    status: "Disponível",
    descricao: "Enfrente masmorras geradas proceduralmente com gráficos em pixel art nostálgicos.",
    imagem: deadCellsImg
  },
  {
    id: 5,
    nome: "Forza Horizon 5", 
    categoria: "Corrida / Simulação", 
    plataforma: "PC / Xbox", 
    nota: 7.8,
    status: "Disponível",
    descricao: "Sinta a adrenalina de pilotar supercarros licenciados nos circuitos mais famosos do mundo.",
    imagem: forzaImg
  },
  {
    id: 6,
    nome: "Realm of the Mad God Exalt", 
    categoria: "MMORPG / Bullet Hell", 
    plataforma: "PC", 
    nota: 8.7,
    status: "Disponível",
    descricao: "Enfrente hordas de monstros, colete equipamentos raros e participe de batalhas cooperativas em um MMORPG de ação com morte permanente.",
    imagem: rotmgImg
  },
  {
    id: 7,
    nome: "7 Days to Die", 
    categoria: "Survival / Horror", 
    plataforma: "PC / Xbox / PS5", 
    nota: 8.0,
    status: "Disponível",
    descricao: "Um jogo de sobrevivência em mundo aberto.",
    imagem: sevenDaysImg
  },   
  {
    id: 8,
    nome: "Neon White", 
    categoria: "Arcade / Shooter", 
    plataforma: "PC / Switch / PlayStation", 
    nota: 8.4,
    status: "Disponível",
    descricao: "Um shooter rítmico frenético com uma trilha sonora synthwave empolgante.",
    imagem: neonWhiteImg
  }
];