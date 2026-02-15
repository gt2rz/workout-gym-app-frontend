export const Colors = {
  // Colores principales (Sky Blue on Slate)
  primary: {
    main: '#38bdf8', // slate-400 equivalent for primary
    light: '#7dd3fc',
    dark: '#0ea5e9',
    contrast: '#ffffff',
    muted: '#38bdf844',
  },

  // Colores secundarios (Slate tones)
  secondary: {
    main: '#64748b', // slate-500
    light: '#94a3b8', // slate-400
    dark: '#475569', // slate-600
    contrast: '#ffffff',
  },

  // Colores de acento
  accent: {
    main: '#38bdf8',
    light: '#7dd3fc',
    dark: '#0ea5e9',
    contrast: '#ffffff',
  },

  // Colores de fondo (Tailwind Slate hierarchy)
  background: {
    primary: '#0f172a', // slate-900
    secondary: '#1e293b', // slate-800
    dark: '#020617', // slate-950
    overlay: 'rgba(2, 6, 23, 0.85)',
    transparent: 'transparent',
    light: '#334155', // slate-700
  },

  // Superficies (Tarjetas y elementos elevados)
  surface: {
    primary: '#1e293b', // slate-800
    secondary: '#334155', // slate-700
    dark: '#0f172a', // slate-900
  },

  inputs: {
    background: '#1e293b',
    border: '#334155',
    placeholder: '#64748b',
    text: '#f1f5f9',
  },

  // Colores de texto
  text: {
    primary: '#f1f5f9', // slate-100
    secondary: '#94a3b8', // slate-400
    light: '#ffffff',
    muted: '#64748b', // slate-500
    accent: '#38bdf8',
    link: '#7dd3fc',
    dark: '#020617',
  },

  // Estados
  status: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#38bdf8',
  },

  // Bordes y divisores
  border: {
    light: '#1e293b',
    medium: '#334155',
    dark: '#0f172a',
  },

  // Sombras
  shadow: {
    color: '#000000',
    light: 'rgba(0, 0, 0, 0.4)',
    medium: 'rgba(0, 0, 0, 0.6)',
    dark: 'rgba(0, 0, 0, 0.8)',
  },
};

export type ColorScheme = typeof Colors;