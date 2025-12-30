export const Shadows = {
  // Sombras para iOS (shadowColor, shadowOffset, shadowOpacity, shadowRadius)
  ios: {
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 20,
    },
  },
  
  // Elevación para Android
  android: {
    small: { elevation: 2 },
    medium: { elevation: 5 },
    large: { elevation: 10 },
  },
  
  // Sombras combinadas (funciona en ambas plataformas)
  combined: {
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 20,
      elevation: 10,
    },
  },
};

// Efectos de overlay y transparencias
export const Overlays = {
  dark: {
    light: 'rgba(0, 0, 0, 0.3)',
    medium: 'rgba(0, 0, 0, 0.5)',
    heavy: 'rgba(0, 0, 0, 0.7)',
  },
  light: {
    light: 'rgba(255, 255, 255, 0.3)',
    medium: 'rgba(255, 255, 255, 0.5)',
    heavy: 'rgba(255, 255, 255, 0.7)',
  },
  custom: {
    loginOverlay: 'rgba(15, 23, 43, 0.7)',
    formBackground: 'rgba(255, 255, 255, 0.9)',
  },
};

export type ShadowsScheme = typeof Shadows;
export type OverlaysScheme = typeof Overlays;