export const Colors = {
  // Colores principales
  primary: {
    main: '#14ec81',
    light: '#09f27eff',
    dark: '#36a16bff',
    contrast: '#ffffff',
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
    main: '#14ec81',
    light: '#09f27eff',
    dark: '#36a16bff',
    contrast: '#ffffff',
  },
  
  // Colores de fondo
  background: {
    primary: '#102318',
    secondary: '#0f3422',
    dark: '#08140dff',
    overlay: 'rgba(17, 34, 26, 0.7)',
    transparent: 'transparent',
    light: '#246946ff',
  },

  // Superficies (para tarjetas y elementos elevados)
  surface: {
    primary: '#193326',
    secondary: '#103624',
    dark: '#1c2f25ff',
  },

  inputs: {
    background: '#193326',
    border: '#287752ff',
    placeholder: '#517865',
    text: '#ffffff',
  },
  
  // Colores de texto
  text: {
    primary: '#ddf9e4ff',
    secondary: '#80b298',
    light: '#ffffff',
    muted: '#9eaf9cff',
    accent: '#13ea80',
    link: '#14ec81',
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
    light: '#21432e',
    medium: '#163b27',
    dark: '#0b1f14',
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