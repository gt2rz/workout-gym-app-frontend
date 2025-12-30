import { Colors, type ColorScheme } from './colors';
import { Overlays, Shadows, type OverlaysScheme, type ShadowsScheme } from './effects';
import { Dimensions, Spacing, type DimensionsScheme, type SpacingScheme } from './spacing';
import { Typography, type TypographyScheme } from './typography';

// Tema principal
export const Theme = {
  colors: Colors,
  typography: Typography,
  spacing: Spacing,
  dimensions: Dimensions,
  shadows: Shadows,
  overlays: Overlays,
} as const;

// Tipo del tema completo
export type ThemeType = {
  colors: ColorScheme;
  typography: TypographyScheme;
  spacing: SpacingScheme;
  dimensions: DimensionsScheme;
  shadows: ShadowsScheme;
  overlays: OverlaysScheme;
};

// Exportaciones individuales por si las necesitas
export { Colors, Dimensions, Overlays, Shadows, Spacing, Typography };
export type { ColorScheme, DimensionsScheme, OverlaysScheme, ShadowsScheme, SpacingScheme, TypographyScheme };

// Hook personalizado para usar el tema (opcional, para futuras expansiones)
export const useTheme = () => Theme;

// Función helper para crear estilos con el tema
export const createStyles = <T>(stylesFn: (theme: typeof Theme) => T): T => {
  return stylesFn(Theme);
};

// Constantes útiles
export const THEME_CONSTANTS = {
  // Breakpoints para responsive design (si los necesitas en el futuro)
  breakpoints: {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
  },
  
  // Duraciones de animación
  animations: {
    fast: 150,
    normal: 300,
    slow: 500,
  },
  
  // Z-indexes
  zIndex: {
    background: -1,
    normal: 0,
    overlay: 10,
    modal: 100,
    toast: 1000,
  },
} as const;