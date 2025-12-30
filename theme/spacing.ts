export const Spacing = {
  // Espaciados básicos (múltiples de 4)
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 40,
  '4xl': 48,
  '5xl': 64,
  '6xl': 80,
  '7xl': 96,
  '8xl': 128,
  
  // Espaciados específicos para componentes
  component: {
    // Padding interno de componentes
    cardPadding: 20,
    formPadding: 30,
    buttonPadding: 15,
    inputPadding: 15,
    
    // Márgenes entre elementos
    sectionMargin: 30,
    elementMargin: 20,
    smallMargin: 10,
    
    // Espaciados específicos
    screenPadding: 20,
    containerPadding: 16,
  },
};

// Dimensiones comunes
export const Dimensions = {
  // Border radius
  borderRadius: {
    none: 0,
    sm: 4,
    base: 8,
    md: 10,
    lg: 15,
    xl: 20,
    '2xl': 25,
    full: 9999, // Para elementos circulares
  },
  
  // Alturas de componentes
  height: {
    input: 50,
    button: 50,
    buttonSmall: 36,
    header: 60,
    tabBar: 80,
  },
  
  // Anchos máximos
  maxWidth: {
    form: 400,
    container: 1200,
    card: 350,
  },
  
  // Tamaños de íconos
  icon: {
    xs: 12,
    sm: 16,
    base: 20,
    md: 24,
    lg: 32,
    xl: 40,
    '2xl': 48,
  },
};

export type SpacingScheme = typeof Spacing;
export type DimensionsScheme = typeof Dimensions;