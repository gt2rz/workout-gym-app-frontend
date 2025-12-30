# 🎨 Sistema de Temas - GymApp

Este sistema de temas te permite mantener consistencia visual en toda tu aplicación y facilita futuros cambios de diseño.

## 📁 Estructura

```
theme/
├── colors.ts      # Paleta de colores
├── typography.ts  # Fuentes y estilos de texto
├── spacing.ts     # Espaciados y dimensiones
├── effects.ts     # Sombras y overlays
├── index.ts       # Tema principal
├── useTheme.ts    # Hooks personalizados
└── README.md      # Esta documentación
```

## 🚀 Uso Básico

### Opción 1: Importación directa
```tsx
import { Theme } from '@/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.background.primary,
    padding: Theme.spacing.lg,
    borderRadius: Theme.dimensions.borderRadius.md,
  },
});
```

### Opción 2: Hook personalizado
```tsx
import { useAppTheme } from '@/theme/useTheme';

const MyComponent = () => {
  const theme = useAppTheme();
  
  const styles = StyleSheet.create({
    button: {
      backgroundColor: theme.colors.primary.main,
      ...theme.shadows.combined.medium,
    },
  });
  
  return <TouchableOpacity style={styles.button}>...</TouchableOpacity>;
};
```

### Opción 3: Estilos tipados
```tsx
import { createThemedStyles } from '@/theme/useTheme';

const useStyles = createThemedStyles((theme) => ({
  title: {
    ...theme.typography.textStyles.h1,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.lg,
  },
  card: {
    backgroundColor: theme.colors.background.secondary,
    padding: theme.spacing.component.cardPadding,
    borderRadius: theme.dimensions.borderRadius.lg,
    ...theme.shadows.combined.medium,
  },
}));

// En el componente:
const styles = useStyles();
```

## 🎯 Ejemplos Prácticos

### Botones
```tsx
// Botón primario
{
  backgroundColor: theme.colors.primary.main,
  color: theme.colors.primary.contrast,
  padding: theme.spacing.component.buttonPadding,
  borderRadius: theme.dimensions.borderRadius.base,
  ...theme.typography.textStyles.button,
}

// Botón secundario
{
  backgroundColor: theme.colors.secondary.main,
  color: theme.colors.secondary.contrast,
  ...theme.shadows.combined.small,
}
```

### Inputs
```tsx
{
  borderColor: theme.colors.border.light,
  padding: theme.spacing.component.inputPadding,
  borderRadius: theme.dimensions.borderRadius.sm,
  backgroundColor: theme.colors.background.primary,
  ...theme.typography.textStyles.body,
}
```

### Cards/Contenedores
```tsx
{
  backgroundColor: theme.overlays.custom.formBackground,
  padding: theme.spacing.component.formPadding,
  borderRadius: theme.dimensions.borderRadius.lg,
  ...theme.shadows.combined.medium,
}
```

## 🔧 Personalización

Para agregar nuevos colores, simplemente edita `colors.ts`:
```tsx
export const Colors = {
  // ... colores existentes
  custom: {
    newColor: '#your-color',
  },
};
```

Para nuevos estilos de texto, edita `typography.ts`:
```tsx
textStyles: {
  // ... estilos existentes
  myCustomText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#custom',
  },
}
```

## 📱 Responsive Design

El tema incluye breakpoints para futuro uso:
```tsx
import { THEME_CONSTANTS } from '@/theme';

// Para responsive design futuro
if (screenWidth > THEME_CONSTANTS.breakpoints.tablet) {
  // Estilos para tablet/desktop
}
```

## ✅ Ventajas

- ✨ **Consistencia**: Todos los componentes usan los mismos valores
- 🔄 **Reutilizable**: Define una vez, usa en cualquier lugar  
- 🎨 **Fácil personalización**: Cambia un color y se actualiza en toda la app
- 📱 **Responsive**: Preparado para diferentes tamaños de pantalla
- 🔧 **TypeScript**: Completamente tipado para mejor DX
- 🚀 **Performance**: Sin re-renders innecesarios

## 🔄 Migración

Para migrar componentes existentes:

1. Reemplaza valores hardcodeados:
   ```tsx
   // Antes
   backgroundColor: '#3498db',
   
   // Después  
   backgroundColor: theme.colors.primary.main,
   ```

2. Usa espaciados del tema:
   ```tsx
   // Antes
   padding: 20,
   
   // Después
   padding: theme.spacing.lg,
   ```

3. Aplica estilos de texto:
   ```tsx
   // Antes
   fontSize: 16,
   fontWeight: 'bold',
   
   // Después
   ...theme.typography.textStyles.button,
   ```