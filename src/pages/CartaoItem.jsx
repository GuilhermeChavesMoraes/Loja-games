
import { useState } from 'react';
import styles from './CartaoItem.module.css';

export function CartaoItem({ jogo }) {
  const [favoritado, setFavoritado] = useState(false);

  return (
    <div className={styles.card}>
      <img src={jogo.imagem} alt={jogo.nome} className={styles.imagem} />
      <div className={styles.conteudo}>
        <span className={`${styles.badge} ${jogo.status === 'Disponível' ? styles.disp : styles.indisp}`}>
          {jogo.status}
        </span>
        <h3 className={styles.titulo}>{jogo.nome}</h3>
        <p className={styles.categoria}>{jogo.categoria}  {jogo.nota}</p>
        <p className={styles.descricao}>{jogo.descricao}</p>
        
        <button 
          onClick={() => setFavoritado(!favoritado)} 
          className={`${styles.botao} ${favoritado ? styles.favoritado : ''}`}
        >
          {favoritado ? " Favoritado" : "  Favoritar"}
        </button>
      </div>
    </div>
  );
}