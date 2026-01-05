export const Colors = {
  // Colores principales
  primary: {
    main: '#13ec80',
    light: '#10B981',
    dark: '#0fb360',
    contrast: '#11221a',
  },
  
  // Colores secundarios (verde para registro/success)
  secondary: {
    main: '#10B981',
    light: '#13ec80',
    dark: '#0fb360',
    contrast: '#ffffff',
  },
  
  // Colores de acento (amarillo/dorado)
  accent: {
    main: '#c5b013',
    light: '#ced817ff',
    dark: '#f39c12',
    contrast: '#2c3e50',
  },
  
  // Colores de fondo
  background: {
    primary: '#f8f9fa',
    secondary: '#ffffff',
    dark: '#11221a',
    overlay: 'rgba(17, 34, 26, 0.7)',
    transparent: 'transparent',
  },

  // Superficies (para tarjetas y elementos elevados)
  surface: {
    primary: '#193326',
    secondary: '#ffffff',
    dark: '#193326',
  },
  
  // Colores de texto
  text: {
    primary: '#2c3e50',
    secondary: '#92c9ad',
    light: '#ffffff',
    muted: '#999999',
    accent: '#c4c7acff',
    link: '#13ec80',
    copyright: '#888888',
  },
  
  // Estados (success, warning, error)
  status: {
    success: '#13ec80',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
  
  // Bordes y divisores
  border: {
    light: '#dddddd',
    medium: '#32674d',
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