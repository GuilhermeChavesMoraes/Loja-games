import { useState } from 'react';
import { gamesData } from '../dados';
import { CartaoItem } from './CartaoItem';
import styles from './Catalog.module.css';

export function Catalog() {
  const [busca, setBusca] = useState('');

  const gamesFiltrados = gamesData.filter(jogo => 
    jogo.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Pixel Vault Games</h1>
        
        <div className={styles.videoWrapper}>
          <iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/RkC0l4iekYo" 
  title="Trailer" 
  style={{ border: 0 }}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowFullScreen
></iframe>
        </div>

        <input 
          type="text" 
          placeholder="Buscar jogo no catálogo..." 
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className={styles.buscaInput}
        />
      </header>

      <main className={styles.grid}>
        {gamesFiltrados.map((jogo) => (
          <CartaoItem key={jogo.id} jogo={jogo} />
        ))}
      </main>
    </div>
  );
}