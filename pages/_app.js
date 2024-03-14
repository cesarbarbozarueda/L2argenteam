// pages/_app.js

// Importa la aplicación de Next.js
import App from 'next/app';

// Función que devuelve la aplicación de Next.js
function MyApp({ Component, pageProps }) {
  // Si estás en la ruta raíz, redirige a index.html
  if (typeof window !== 'undefined' && window.location.pathname === '/') {
    window.location.href = '/index.html';
  }

  // Devuelve la aplicación de Next.js normalmente
  return <Component {...pageProps} />;
}

// Exporta la aplicación de Next.js
export default MyApp;
