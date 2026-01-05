export const Colors = {
  // Colores principales
  primary: {
    main: '#3498db',
    light: '#74b9ff',
    dark: '#0984e3',
    contrast: '#ffffff',
  },
  
  // Colores secundarios (verde para registro/success)
  secondary: {
    main: '#27ae60',
    light: '#00b894',
    dark: '#00a085',
    contrast: '#ffffff',
  },
  
  // Colores de acento (amarillo/dorado)
  accent: {
    main: '#c5b013', // rgba(197, 176, 19, 1)
    light: '#ced817ff',
    dark: '#f39c12',
    contrast: '#2c3e50',
  },
  
  // Colores de fondo
  background: {
    primary: '#f8f9fa',
    secondary: '#ffffff',
    dark: '#11221a',
    overlay: 'rgba(15, 23, 43, 0.7)',
    transparent: 'transparent',
  },
  
  // Colores de texto
  text: {
    primary: '#2c3e50',
    secondary: '#7f8c8d',
    light: '#ffffff',
    muted: '#999999',
    accent: '#c4c7acff',
    link: '#ced817ff',
    copyright: '#888888',
  },
  
  // Estados (success, warning, error)
  status: {
    success: '#27ae60',
    warning: '#f39c12',
    error: '#e74c3c',
    info: '#3498db',
  },
  
  // Bordes y divisores
  border: {
    light: '#dddddd',
    medium: '#bdc3c7',
    dark: '#95a5a6',
  },
  
  // Sombras
  shadow: {
    color: '#000000',
    light: 'rgba(0, 0, 0, 0.1)',
    medium: 'rgba(0, 0, 0, 0.25)',
    dark: 'rgba(0, 0, 0, 0.5)',
  },
};

export type ColorScheme = typeof Colors;