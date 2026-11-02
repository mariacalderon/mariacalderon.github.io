// Ilustración neutra para el slot "image" de las tarjetas (sustituye la foto real, que no está en el repo).
export const foto = `
<svg slot="image" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#bfe0f2"/><stop offset="1" stop-color="#f4e9d2"/>
    </linearGradient>
  </defs>
  <rect width="400" height="240" fill="url(#sky)"/>
  <circle cx="300" cy="78" r="30" fill="#ffe7a3"/>
  <path d="M0 160 Q90 110 180 150 T400 135 V240 H0Z" fill="#9cc7a4"/>
  <path d="M0 185 Q120 150 230 180 T400 170 V240 H0Z" fill="#6fae86"/>
  <path d="M170 240 L205 170 L215 170 L270 240Z" fill="#d9d2c2"/>
  <path d="M208 240 L210 205 M211 195 L212 180" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
</svg>`;
