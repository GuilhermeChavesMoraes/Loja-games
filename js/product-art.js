/* SVG art único por produto — substitui emojis nos cards */
const productArt = {

  /* Pop Fidget Hexagonal — grade de bolhas */
  1: `<svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="pa1bg" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#5ECFA8" stop-opacity=".18"/>
        <stop offset="100%" stop-color="#B8A9F5" stop-opacity=".05"/>
      </radialGradient>
    </defs>
    <rect width="160" height="160" fill="url(#pa1bg)" rx="16"/>
    <g stroke-width="1.8" fill-opacity=".12">
      <!-- Row 1 -->
      <circle cx="30" cy="38" r="17" stroke="#5ECFA8" fill="#5ECFA8"/>
      <circle cx="68" cy="38" r="17" stroke="#B8A9F5" fill="#B8A9F5"/>
      <circle cx="106" cy="38" r="17" stroke="#5ECFA8" fill="#5ECFA8"/>
      <circle cx="144" cy="38" r="17" stroke="#FFB085" fill="#FFB085"/>
      <!-- Row 2 (offset) -->
      <circle cx="11"  cy="72" r="17" stroke="#B8A9F5" fill="#B8A9F5"/>
      <circle cx="49"  cy="72" r="17" stroke="#5ECFA8" fill="#5ECFA8"/>
      <circle cx="87"  cy="72" r="17" stroke="#FF8585" fill="#FF8585"/>
      <circle cx="125" cy="72" r="17" stroke="#B8A9F5" fill="#B8A9F5"/>
      <!-- Row 3 -->
      <circle cx="30"  cy="106" r="17" stroke="#FFB085" fill="#FFB085"/>
      <circle cx="68"  cy="106" r="17" stroke="#5ECFA8" fill="#5ECFA8"/>
      <circle cx="106" cy="106" r="17" stroke="#85CFFF" fill="#85CFFF"/>
      <circle cx="144" cy="106" r="17" stroke="#5ECFA8" fill="#5ECFA8"/>
      <!-- Row 4 (offset) -->
      <circle cx="49"  cy="140" r="17" stroke="#B8A9F5" fill="#B8A9F5"/>
      <circle cx="87"  cy="140" r="17" stroke="#FFB085" fill="#FFB085"/>
      <circle cx="125" cy="140" r="17" stroke="#5ECFA8" fill="#5ECFA8"/>
    </g>
    <!-- Pressed bubbles (inner dot) -->
    <circle cx="68"  cy="38"  r="6" fill="#B8A9F5" opacity=".9"/>
    <circle cx="87"  cy="72"  r="6" fill="#FF8585" opacity=".9"/>
    <circle cx="106" cy="106" r="6" fill="#85CFFF" opacity=".9"/>
  </svg>`,

  /* Cubo Infinito — isométrico com gradiente */
  2: `<svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pa2top" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#5ECFA8" stop-opacity=".55"/>
        <stop offset="100%" stop-color="#5ECFA8" stop-opacity=".2"/>
      </linearGradient>
      <linearGradient id="pa2left" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#85CFFF" stop-opacity=".4"/>
        <stop offset="100%" stop-color="#85CFFF" stop-opacity=".12"/>
      </linearGradient>
      <linearGradient id="pa2right" x1="1" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#B8A9F5" stop-opacity=".5"/>
        <stop offset="100%" stop-color="#B8A9F5" stop-opacity=".15"/>
      </linearGradient>
      <filter id="pa2glow"><feGaussianBlur in="SourceGraphic" stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <!-- Top face -->
    <polygon points="80,28 128,55 80,82 32,55" fill="url(#pa2top)" stroke="#5ECFA8" stroke-width="1.5" stroke-linejoin="round"/>
    <!-- Left face -->
    <polygon points="32,55 80,82 80,132 32,105" fill="url(#pa2left)" stroke="#85CFFF" stroke-width="1.5" stroke-linejoin="round"/>
    <!-- Right face -->
    <polygon points="80,82 128,55 128,105 80,132" fill="url(#pa2right)" stroke="#B8A9F5" stroke-width="1.5" stroke-linejoin="round"/>
    <!-- Inner wireframe (infinite effect) -->
    <g stroke-dasharray="5,4" stroke-width=".9" opacity=".6" filter="url(#pa2glow)">
      <line x1="80" y1="82" x2="80" y2="28" stroke="#5ECFA8"/>
      <line x1="80" y1="82" x2="32" y2="55" stroke="#85CFFF"/>
      <line x1="80" y1="82" x2="128" y2="55" stroke="#B8A9F5"/>
    </g>
    <!-- Glow dots on vertices -->
    <circle cx="80"  cy="28"  r="3.5" fill="#5ECFA8" opacity=".9"/>
    <circle cx="128" cy="55"  r="3"   fill="#B8A9F5" opacity=".8"/>
    <circle cx="32"  cy="55"  r="3"   fill="#85CFFF" opacity=".8"/>
    <circle cx="80"  cy="132" r="3"   fill="#5ECFA8" opacity=".6"/>
  </svg>`,

  /* Caracol Articulado — espiral com segmentos */
  3: `<svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pa3g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#5ECFA8"/>
        <stop offset="50%" stop-color="#85CFFF"/>
        <stop offset="100%" stop-color="#B8A9F5"/>
      </linearGradient>
    </defs>
    <!-- Spiral path -->
    <path d="M80,80 C80,68 92,56 104,56 C120,56 136,68 136,84 C136,108 116,128 92,132 C60,138 28,118 20,88 C10,50 36,14 76,8 C122,2 156,34 158,80"
      stroke="url(#pa3g)" stroke-width="3.5" stroke-linecap="round" opacity=".85"/>
    <!-- Segment circles along the spiral -->
    <circle cx="80"  cy="80"  r="6"   fill="#5ECFA8"  opacity=".9"/>
    <circle cx="104" cy="56"  r="5"   fill="#85CFFF"  opacity=".8"/>
    <circle cx="136" cy="84"  r="4.5" fill="#B8A9F5"  opacity=".8"/>
    <circle cx="92"  cy="132" r="4"   fill="#5ECFA8"  opacity=".7"/>
    <circle cx="20"  cy="88"  r="4"   fill="#FFB085"  opacity=".7"/>
    <circle cx="76"  cy="8"   r="3.5" fill="#85CFFF"  opacity=".6"/>
    <!-- Inner glow center -->
    <circle cx="80" cy="80" r="12" fill="#5ECFA8" opacity=".08"/>
    <circle cx="80" cy="80" r="4"  fill="#5ECFA8" opacity=".7"/>
  </svg>`,

  /* Mandala Spinner — 8 pétalas geométricas */
  4: `<svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pa4g1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#B8A9F5" stop-opacity=".6"/>
        <stop offset="100%" stop-color="#B8A9F5" stop-opacity=".1"/>
      </linearGradient>
      <linearGradient id="pa4g2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#5ECFA8" stop-opacity=".5"/>
        <stop offset="100%" stop-color="#5ECFA8" stop-opacity=".1"/>
      </linearGradient>
    </defs>
    <!-- Outer ring -->
    <circle cx="80" cy="80" r="68" stroke="rgba(184,169,245,.25)" stroke-width="1"/>
    <circle cx="80" cy="80" r="52" stroke="rgba(94,207,168,.2)"   stroke-width="1"/>
    <!-- 8 petals (rotate 45deg each) -->
    <g transform="translate(80,80)">
      <ellipse rx="14" ry="38" fill="url(#pa4g1)" transform="rotate(0)"   opacity=".8"/>
      <ellipse rx="14" ry="38" fill="url(#pa4g2)" transform="rotate(45)"  opacity=".7"/>
      <ellipse rx="14" ry="38" fill="url(#pa4g1)" transform="rotate(90)"  opacity=".8"/>
      <ellipse rx="14" ry="38" fill="url(#pa4g2)" transform="rotate(135)" opacity=".7"/>
      <ellipse rx="14" ry="38" fill="url(#pa4g1)" transform="rotate(180)" opacity=".8"/>
      <ellipse rx="14" ry="38" fill="url(#pa4g2)" transform="rotate(225)" opacity=".7"/>
      <ellipse rx="14" ry="38" fill="url(#pa4g1)" transform="rotate(270)" opacity=".8"/>
      <ellipse rx="14" ry="38" fill="url(#pa4g2)" transform="rotate(315)" opacity=".7"/>
    </g>
    <!-- Center -->
    <circle cx="80" cy="80" r="14" fill="rgba(184,169,245,.2)" stroke="rgba(184,169,245,.7)" stroke-width="1.5"/>
    <circle cx="80" cy="80" r="5"  fill="#B8A9F5" opacity=".9"/>
    <!-- Inner 8 diamonds -->
    <g transform="translate(80,80)" stroke="rgba(94,207,168,.5)" stroke-width="1" fill="none">
      <polygon points="0,-28 8,-20 0,-12 -8,-20" transform="rotate(0)"/>
      <polygon points="0,-28 8,-20 0,-12 -8,-20" transform="rotate(45)"/>
      <polygon points="0,-28 8,-20 0,-12 -8,-20" transform="rotate(90)"/>
      <polygon points="0,-28 8,-20 0,-12 -8,-20" transform="rotate(135)"/>
    </g>
  </svg>`,

  /* Lagarta Sensorial — corrente de segmentos coloridos */
  5: `<svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="pa5s"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity=".3"/></filter>
    </defs>
    <!-- Caterpillar body — S-curve of colored spheres -->
    <!-- Connectors -->
    <path d="M22,110 Q50,90 60,80 Q75,65 90,70 Q110,78 120,68 Q135,55 148,50" stroke="rgba(255,255,255,.1)" stroke-width="8" stroke-linecap="round"/>
    <!-- Segments (back to front for z-order) -->
    <circle cx="22"  cy="110" r="18" fill="#FF8585"  filter="url(#pa5s)" opacity=".9"/>
    <circle cx="45"  cy="98"  r="17" fill="#FFB085"  filter="url(#pa5s)" opacity=".9"/>
    <circle cx="66"  cy="84"  r="17" fill="#B8A9F5"  filter="url(#pa5s)" opacity=".9"/>
    <circle cx="87"  cy="74"  r="17" fill="#5ECFA8"  filter="url(#pa5s)" opacity=".9"/>
    <circle cx="108" cy="68"  r="17" fill="#85CFFF"  filter="url(#pa5s)" opacity=".9"/>
    <circle cx="130" cy="57"  r="17" fill="#5ECFA8"  filter="url(#pa5s)" opacity=".9"/>
    <circle cx="148" cy="44"  r="15" fill="#B8A9F5"  filter="url(#pa5s)" opacity=".9"/>
    <!-- Eyes on head -->
    <circle cx="142" cy="38" r="4.5" fill="#fff" opacity=".9"/>
    <circle cx="155" cy="40" r="4.5" fill="#fff" opacity=".9"/>
    <circle cx="143" cy="38" r="2"   fill="#1E1E2E"/>
    <circle cx="156" cy="40" r="2"   fill="#1E1E2E"/>
    <!-- Texture dots -->
    <circle cx="22"  cy="110" r="5" fill="rgba(255,255,255,.25)"/>
    <circle cx="66"  cy="84"  r="5" fill="rgba(255,255,255,.25)"/>
    <circle cx="108" cy="68"  r="5" fill="rgba(255,255,255,.25)"/>
  </svg>`,

  /* Dragão Articulado — escamas em arco */
  6: `<svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pa6g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"   stop-color="#5ECFA8"/>
        <stop offset="50%"  stop-color="#85CFFF"/>
        <stop offset="100%" stop-color="#B8A9F5"/>
      </linearGradient>
      <filter id="pa6glow"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <!-- Dragon spine S-curve -->
    <path d="M20,140 C40,110 60,90 80,80 C100,70 120,70 140,50 C150,40 155,28 150,20"
      stroke="url(#pa6g)" stroke-width="4" stroke-linecap="round" filter="url(#pa6glow)" opacity=".8"/>
    <!-- Scales (overlapping arcs along the path) -->
    <g fill-opacity=".25" stroke-width="1.2">
      <ellipse cx="32"  cy="128" rx="16" ry="10" fill="#5ECFA8" stroke="#5ECFA8" transform="rotate(-35 32 128)"/>
      <ellipse cx="48"  cy="112" rx="16" ry="10" fill="#5ECFA8" stroke="#5ECFA8" transform="rotate(-45 48 112)"/>
      <ellipse cx="64"  cy="96"  rx="16" ry="10" fill="#85CFFF" stroke="#85CFFF" transform="rotate(-50 64 96)"/>
      <ellipse cx="80"  cy="80"  rx="16" ry="10" fill="#85CFFF" stroke="#85CFFF" transform="rotate(-55 80 80)"/>
      <ellipse cx="96"  cy="68"  rx="15" ry="9"  fill="#B8A9F5" stroke="#B8A9F5" transform="rotate(-60 96 68)"/>
      <ellipse cx="112" cy="58"  rx="15" ry="9"  fill="#B8A9F5" stroke="#B8A9F5" transform="rotate(-65 112 58)"/>
      <ellipse cx="128" cy="44"  rx="14" ry="8"  fill="#5ECFA8" stroke="#5ECFA8" transform="rotate(-70 128 44)"/>
      <ellipse cx="144" cy="32"  rx="12" ry="7"  fill="#5ECFA8" stroke="#5ECFA8" transform="rotate(-75 144 32)"/>
    </g>
    <!-- Dragon head -->
    <ellipse cx="150" cy="20" rx="12" ry="10" fill="rgba(94,207,168,.3)" stroke="#5ECFA8" stroke-width="1.5" transform="rotate(-30 150 20)"/>
    <circle cx="153" cy="15" r="2.5" fill="#5ECFA8" opacity=".9"/>
    <!-- Glow dots on joints -->
    <circle cx="80" cy="80" r="4" fill="#85CFFF" opacity=".8" filter="url(#pa6glow)"/>
    <circle cx="48" cy="112" r="3" fill="#5ECFA8" opacity=".7"/>
  </svg>`,

  /* Peg Board Terapêutico — grade de pinos coloridos */
  7: `<svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="pa7bg" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stop-color="#1E1E30" stop-opacity=".8"/>
        <stop offset="100%" stop-color="#0D0D18" stop-opacity=".3"/>
      </radialGradient>
      <filter id="pa7s"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity=".4"/></filter>
    </defs>
    <rect width="160" height="160" fill="url(#pa7bg)" rx="12"/>
    <!-- 5x5 grid of colorful pegs -->
    <g filter="url(#pa7s)">
      <!-- Row 1 -->
      <rect x="17" y="15" width="14" height="20" rx="7" fill="#5ECFA8" opacity=".9"/>
      <rect x="41" y="12" width="14" height="23" rx="7" fill="#FF8585" opacity=".9"/>
      <rect x="65" y="17" width="14" height="18" rx="7" fill="#B8A9F5" opacity=".9"/>
      <rect x="89" y="11" width="14" height="24" rx="7" fill="#FFB085" opacity=".9"/>
      <rect x="113" y="16" width="14" height="19" rx="7" fill="#85CFFF" opacity=".9"/>
      <rect x="137" y="14" width="14" height="21" rx="7" fill="#5ECFA8" opacity=".9"/>
      <!-- Row 2 -->
      <rect x="17" y="47" width="14" height="22" rx="7" fill="#B8A9F5" opacity=".9"/>
      <rect x="41" y="44" width="14" height="25" rx="7" fill="#5ECFA8" opacity=".9"/>
      <rect x="65" y="49" width="14" height="20" rx="7" fill="#FF8585" opacity=".9"/>
      <rect x="89" y="43" width="14" height="26" rx="7" fill="#85CFFF" opacity=".9"/>
      <rect x="113" y="48" width="14" height="21" rx="7" fill="#B8A9F5" opacity=".9"/>
      <rect x="137" y="46" width="14" height="23" rx="7" fill="#FFB085" opacity=".9"/>
      <!-- Row 3 -->
      <rect x="17" y="80" width="14" height="19" rx="7" fill="#FFB085" opacity=".9"/>
      <rect x="41" y="77" width="14" height="22" rx="7" fill="#B8A9F5" opacity=".9"/>
      <rect x="65" y="82" width="14" height="17" rx="7" fill="#5ECFA8" opacity=".9"/>
      <rect x="89" y="76" width="14" height="23" rx="7" fill="#FF8585" opacity=".9"/>
      <rect x="113" y="81" width="14" height="18" rx="7" fill="#FFB085" opacity=".9"/>
      <rect x="137" y="79" width="14" height="20" rx="7" fill="#85CFFF" opacity=".9"/>
      <!-- Row 4 -->
      <rect x="17" y="110" width="14" height="21" rx="7" fill="#85CFFF" opacity=".85"/>
      <rect x="41" y="108" width="14" height="23" rx="7" fill="#5ECFA8" opacity=".85"/>
      <rect x="65" y="113" width="14" height="18" rx="7" fill="#B8A9F5" opacity=".85"/>
      <rect x="89" y="107" width="14" height="24" rx="7" fill="#FFB085" opacity=".85"/>
      <rect x="113" y="112" width="14" height="19" rx="7" fill="#5ECFA8" opacity=".85"/>
      <rect x="137" y="109" width="14" height="22" rx="7" fill="#FF8585" opacity=".85"/>
      <!-- Row 5 -->
      <rect x="17" y="142" width="14" height="15" rx="7" fill="#5ECFA8"  opacity=".7"/>
      <rect x="41" y="140" width="14" height="17" rx="7" fill="#B8A9F5"  opacity=".7"/>
      <rect x="65" y="144" width="14" height="13" rx="7" fill="#FFB085"  opacity=".7"/>
      <rect x="89" y="139" width="14" height="18" rx="7" fill="#5ECFA8"  opacity=".7"/>
      <rect x="113" y="143" width="14" height="14" rx="7" fill="#85CFFF" opacity=".7"/>
      <rect x="137" y="141" width="14" height="16" rx="7" fill="#B8A9F5" opacity=".7"/>
    </g>
    <!-- Base board -->
    <rect x="10" y="152" width="140" height="6" rx="3" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.15)" stroke-width="1"/>
  </svg>`,

  /* Kit Zen Completo — composição dos 3 produtos */
  8: `<svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="pa8bg" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stop-color="#5ECFA8" stop-opacity=".1"/>
        <stop offset="100%" stop-color="#B8A9F5" stop-opacity=".05"/>
      </radialGradient>
      <filter id="pa8g"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <circle cx="80" cy="80" r="74" fill="url(#pa8bg)" stroke="rgba(94,207,168,.12)" stroke-width="1"/>
    <!-- Mini cubo (top-left) -->
    <g transform="translate(22,20) scale(0.48)">
      <polygon points="45,5 80,22 45,39 10,22" fill="rgba(94,207,168,.25)" stroke="#5ECFA8" stroke-width="2" stroke-linejoin="round"/>
      <polygon points="10,22 45,39 45,74 10,57" fill="rgba(133,207,255,.2)" stroke="#85CFFF" stroke-width="2" stroke-linejoin="round"/>
      <polygon points="45,39 80,22 80,57 45,74" fill="rgba(184,169,245,.25)" stroke="#B8A9F5" stroke-width="2" stroke-linejoin="round"/>
    </g>
    <!-- Mini fidget (top-right) -->
    <g transform="translate(98,16) scale(.36)">
      <circle cx="20" cy="24" r="14" stroke="#5ECFA8" stroke-width="2" fill="rgba(94,207,168,.12)"/>
      <circle cx="54" cy="24" r="14" stroke="#B8A9F5" stroke-width="2" fill="rgba(184,169,245,.12)"/>
      <circle cx="37" cy="48" r="14" stroke="#FFB085" stroke-width="2" fill="rgba(255,176,133,.12)"/>
      <circle cx="71" cy="48" r="14" stroke="#5ECFA8" stroke-width="2" fill="rgba(94,207,168,.12)"/>
      <circle cx="20" cy="72" r="14" stroke="#FF8585" stroke-width="2" fill="rgba(255,133,133,.12)"/>
      <circle cx="54" cy="72" r="14" stroke="#85CFFF" stroke-width="2" fill="rgba(133,207,255,.12)"/>
    </g>
    <!-- Mini mandala (bottom center) -->
    <g transform="translate(80,90)">
      <g fill-opacity=".2" stroke-width="1">
        <ellipse rx="9" ry="22" fill="#B8A9F5" stroke="#B8A9F5" transform="rotate(0)"/>
        <ellipse rx="9" ry="22" fill="#5ECFA8" stroke="#5ECFA8" transform="rotate(45)"/>
        <ellipse rx="9" ry="22" fill="#B8A9F5" stroke="#B8A9F5" transform="rotate(90)"/>
        <ellipse rx="9" ry="22" fill="#5ECFA8" stroke="#5ECFA8" transform="rotate(135)"/>
      </g>
      <circle r="6" fill="rgba(184,169,245,.5)" stroke="#B8A9F5" stroke-width="1.2"/>
      <circle r="2.5" fill="#B8A9F5"/>
    </g>
    <!-- Glow connections between icons -->
    <path d="M55,55 Q80,70 80,85" stroke="rgba(94,207,168,.25)" stroke-width="1.5" stroke-dasharray="4,4"/>
    <path d="M108,55 Q92,68 80,85" stroke="rgba(184,169,245,.25)" stroke-width="1.5" stroke-dasharray="4,4"/>
    <!-- Center glow -->
    <circle cx="80" cy="80" r="30" fill="rgba(94,207,168,.04)" filter="url(#pa8g)"/>
  </svg>`,
};

function getProductArt(id) {
  return productArt[id] || `<div style="font-size:4rem;display:flex;align-items:center;justify-content:center;height:100%">${(allProducts.find(p=>p.id===id)||{}).emoji||'🎯'}</div>`;
}
