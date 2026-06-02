import type { Config } from 'tailwindcss';
import { fontFamilies, fontWeights, typeScale } from './typography';
import { semanticColors, colorVars } from './colors';
import { spacingScale } from './spacing';
import { radius } from './radius';
import { elevation } from './elevation';
import { motion } from './motion';
import { breakpoints } from './breakpoints';
import { zIndex } from './z-index';

/**
 * THE PURPOSEFUL DESIGN — Tailwind Preset
 *
 * This preset configures Tailwind to use the design tokens from the
 * @the-purposeful-design/tokens package. This ensures that any app
 * consuming this preset uses the exact same design language.
 */
export const purposefulDesignPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        // Semantic color variables mapping to CSS custom properties
        foreground: `hsl(var(${colorVars.foreground}))`,
        'foreground-secondary': `hsl(var(${colorVars.foregroundSecondary}))`,
        'foreground-muted': `hsl(var(${colorVars.foregroundMuted}))`,
        'foreground-inverse': `hsl(var(${colorVars.foregroundInverse}))`,

        background: `hsl(var(${colorVars.background}))`,
        surface: `hsl(var(${colorVars.surface}))`,
        'surface-subtle': `hsl(var(${colorVars.surfaceSubtle}))`,
        'surface-raised': `hsl(var(${colorVars.surfaceRaised}))`,
        overlay: `var(${colorVars.overlay})`, // rgba value, not hsl

        border: `hsl(var(${colorVars.border}))`,
        'border-subtle': `hsl(var(${colorVars.borderSubtle}))`,
        'border-strong': `hsl(var(${colorVars.borderStrong}))`,

        primary: `hsl(var(${colorVars.primary}))`,
        'primary-foreground': `hsl(var(${colorVars.primaryForeground}))`,
        'primary-hover': `hsl(var(${colorVars.primaryHover}))`,
        secondary: `hsl(var(${colorVars.secondary}))`,
        'secondary-foreground': `hsl(var(${colorVars.secondaryForeground}))`,
        'secondary-hover': `hsl(var(${colorVars.secondaryHover}))`,
        ghost: `var(${colorVars.ghost})`, // transparent, not hsl
        'ghost-hover': `hsl(var(${colorVars.ghostHover}))`,

        success: `hsl(var(${colorVars.success}))`,
        'success-subtle': `hsl(var(${colorVars.successSubtle}))`,
        'success-foreground': `hsl(var(${colorVars.successForeground}))`,

        warning: `hsl(var(${colorVars.warning}))`,
        'warning-subtle': `hsl(var(${colorVars.warningSubtle}))`,
        'warning-foreground': `hsl(var(${colorVars.warningForeground}))`,

        danger: `hsl(var(${colorVars.danger}))`,
        'danger-subtle': `hsl(var(${colorVars.dangerSubtle}))`,
        'danger-foreground': `hsl(var(${colorVars.dangerForeground}))`,

        info: `hsl(var(${colorVars.info}))`,
        'info-subtle': `hsl(var(${colorVars.infoSubtle}))`,
        'info-foreground': `hsl(var(${colorVars.infoForeground}))`,
      },
      fontFamily: {
        sans: fontFamilies.sans as unknown as string[],
        serif: fontFamilies.serif as unknown as string[],
        mono: fontFamilies.mono as unknown as string[],
      },
      fontWeight: Object.fromEntries(
        Object.entries(fontWeights).map(([k, v]) => [k, String(v)])
      ),
      spacing: spacingScale,
      borderRadius: radius,
      boxShadow: elevation,
      transitionDuration: motion.duration,
      transitionTimingFunction: motion.easing,
      screens: breakpoints,
      zIndex: Object.fromEntries(
        Object.entries(zIndex).map(([k, v]) => [k, String(v)])
      ),
    },
  },
};
