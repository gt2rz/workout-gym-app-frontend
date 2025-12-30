import { Platform } from 'react-native';

export const Typography = {
  // Familias de fuentes
  fontFamily: {
    regular: Platform.select({
      ios: 'System',
      android: 'Roboto',
      default: 'System',
    }),
    bold: Platform.select({
      ios: 'System',
      android: 'Roboto',
      default: 'System',
    }),
    mono: 'SpaceMono',
  },
  
  // Pesos de fuente
  fontWeight: {
    light: '300' as const,
    regular: '400' as const,
    medium: '500' as const,
    semiBold: '600' as const,
    bold: '700' as const,
    extraBold: '800' as const,
  },
  
  // Tamaños de fuente
  fontSize: {
    xs: 10,
    sm: 12,
    base: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 32,
    '4xl': 40,
    '5xl': 48,
    '6xl': 60,
  },
  
  // Alturas de línea
  lineHeight: {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.6,
    loose: 1.8,
  },
  
  // Estilos de texto predefinidos
  textStyles: {
    // Títulos
    h1: {
      fontSize: 32,
      fontWeight: '700' as const,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: 24,
      fontWeight: '700' as const,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: 20,
      fontWeight: '600' as const,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: 18,
      fontWeight: '600' as const,
      lineHeight: 1.4,
    },
    
    // Cuerpo de texto
    body: {
      fontSize: 16,
      fontWeight: '400' as const,
      lineHeight: 1.5,
    },
    bodySmall: {
      fontSize: 14,
      fontWeight: '400' as const,
      lineHeight: 1.4,
    },
    
    // Botones
    button: {
      fontSize: 16,
      fontWeight: '700' as const,
      lineHeight: 1.2,
    },
    buttonSmall: {
      fontSize: 14,
      fontWeight: '600' as const,
      lineHeight: 1.2,
    },
    
    // Enlaces
    link: {
      fontSize: 16,
      fontWeight: '500' as const,
      textDecorationLine: 'underline' as const,
    },
    
    // Subtítulos y texto secundario
    subtitle: {
      fontSize: 16,
      fontWeight: '600' as const,
      lineHeight: 1.3,
    },
    caption: {
      fontSize: 12,
      fontWeight: '400' as const,
      lineHeight: 1.3,
    },
    
    // Logo y marcas
    logo: {
      fontSize: 40,
      fontWeight: '700' as const,
      textTransform: 'uppercase' as const,
    },
  },
};

export type TypographyScheme = typeof Typography;