import { Theme } from './index';

/**
 * Hook personalizado para acceder al tema en cualquier componente
 * 
 * @example
 * const theme = useAppTheme();
 * const styles = StyleSheet.create({
 *   container: {
 *     backgroundColor: theme.colors.background.primary,
 *     padding: theme.spacing.md,
 *     borderRadius: theme.dimensions.borderRadius.md,
 *   },
 * });
 */
export const useAppTheme = () => {
  return Theme;
};

/**
 * Helper para crear estilos tipados con el tema
 * 
 * @example
 * const useStyles = createThemedStyles((theme) => ({
 *   container: {
 *     backgroundColor: theme.colors.primary.main,
 *     padding: theme.spacing.lg,
 *   },
 * }));
 * 
 * // En el componente:
 * const styles = useStyles();
 */
export const createThemedStyles = <T>(
  stylesFn: (theme: typeof Theme) => T
) => {
  return () => stylesFn(Theme);
};

export type UseThemeReturn = typeof Theme;