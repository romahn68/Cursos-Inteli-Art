// Configuración de la aplicación
const config = {
  apiBaseUrl: process.env.REACT_APP_API_URL || 'http://localhost:8000',
  environment: process.env.NODE_ENV || 'development',
  version: '1.0.0',
  maxRetries: 3,
  timeout: 10000, // 10 segundos
};

export default config;