// next.config.js
const path = require('path');

module.exports = {
    // Permitir que Next.js maneje la carpeta public para archivos estáticos
    // Esto es necesario para que Netlify pueda servir archivos estáticos
    // como index.html, styles.css, etc.
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.resolve.alias['public'] = path.join(__dirname, 'public');
        return config;
    },
};