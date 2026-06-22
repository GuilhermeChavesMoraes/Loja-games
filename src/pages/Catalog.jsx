// src/pages/Catalog.jsx
import { useState } from 'react';
import { gamesData } from '../dados';
import { CartaoItem } from './CartaoItem';
import styles from './Catalog.module.css';

export function Catalog() {
  const [busca, setBusca] = useState('');

  // Filtragem dinâmica por input de busca
  const gamesFiltrados = gamesData.filter(jogo => 
    jogo.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Pixel Vault Games</h1>
        <div className={styles.videoWrapper}>
          {/* Requisito: Vídeo Embed no cabeçalho */}
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Trailer" 
            frameBorder="0" 
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

      {/* Renderização dinâmica usando o .map() */}
      <main className={styles.grid}>
        {gamesFiltrados.map((jogo) => (
          <CartaoItem key={jogo.id} jogo={jogo} />
        ))}
      </main>
    </div>
  );
}
