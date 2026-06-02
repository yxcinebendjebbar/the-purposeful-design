/**
 * THE PURPOSEFUL DESIGN — Color Tokens
 *
 * Architecture: CSS custom properties defined as HSL channels.
 * This allows both light and dark themes to swap values without
 * duplicating property names. Tailwind reads these via hsl(var(--color-*)).
 *
 * Rule: Every color must communicate information.
 * Colors without a documented semantic contract do not belong here.
 */

// ── Raw Palette ──────────────────────────────────────────────────────────────
// These are not used directly in the UI. They feed the semantic layer below.

export const palette = {
  // Neutral — The foundation. Typography, borders, backgrounds.
  neutral: {
    0:   '#ffffff',
    50:  '#fafaf9',
    100: '#f5f5f4',
    150: '#eeeceb',
    200: '#e7e5e4',
    300: '#d6d3d1',
    400: '#a8a29e',
    500: '#78716c',
    600: '#57534e',
    700: '#44403c',
    800: '#292524',
    900: '#1c1917',
    950: '#0c0a09',
    1000: '#000000',
  },

  // Semantic palette — raw values, not for direct use
  green: {
    50:  '#f0fdf4',
    100: '#dcfce7',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  amber: {
    50:  '#fffbeb',
    100: '#fef3c7',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  red: {
    50:  '#fef2f2',
    100: '#fee2e2',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  blue: {
    50:  '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
} as const

// ── Semantic Color Tokens ─────────────────────────────────────────────────────
// These are the tokens used in components. Every value has a documented purpose.

export const semanticColors = {
  // ── Foreground ──────────────────────────────────────────────────────────
  /** Primary text. Headings, body copy, labels. High contrast. */
  foreground: {
    light: palette.neutral[950],
    dark:  palette.neutral[50],
  },
  /** Secondary text. Supporting copy, descriptions, subtitles. */
  foregroundSecondary: {
    light: palette.neutral[600],
    dark:  palette.neutral[400],
  },
  /** Tertiary text. Timestamps, metadata, disabled labels. Do not use for body copy. */
  foregroundMuted: {
    light: palette.neutral[400],
    dark:  palette.neutral[600],
  },
  /** Text on dark/filled backgrounds — buttons, badges, inverted surfaces. */
  foregroundInverse: {
    light: palette.neutral[50],
    dark:  palette.neutral[950],
  },

  // ── Background ───────────────────────────────────────────────────────────
  /** Page background. The lowest layer. */
  background: {
    light: palette.neutral[50],
    dark:  palette.neutral[950],
  },
  /** Surface. Cards, sidebars, panels that sit above the background. */
  surface: {
    light: palette.neutral[0],
    dark:  palette.neutral[900],
  },
  /** Subtle surface. Alternate row backgrounds, code blocks, input fills. */
  surfaceSubtle: {
    light: palette.neutral[100],
    dark:  palette.neutral[800],
  },
  /** Raised surface. Dropdowns, tooltips, popovers. Sits above surface. */
  surfaceRaised: {
    light: palette.neutral[0],
    dark:  palette.neutral[800],
  },
  /** Overlay. Modal backdrops. Semi-transparent. */
  overlay: {
    light: 'rgba(12, 10, 9, 0.5)',
    dark:  'rgba(12, 10, 9, 0.7)',
  },

  // ── Border ───────────────────────────────────────────────────────────────
  /** Default border. Dividers, input borders, card borders. */
  border: {
    light: palette.neutral[200],
    dark:  palette.neutral[700],
  },
  /** Subtle border. Used sparingly — must not compete with content. */
  borderSubtle: {
    light: palette.neutral[100],
    dark:  palette.neutral[800],
  },
  /** Strong border. Active inputs, focused components. */
  borderStrong: {
    light: palette.neutral[950],
    dark:  palette.neutral[50],
  },

  // ── Interactive ──────────────────────────────────────────────────────────
  /** Primary interactive. The most emphasized action on any given screen. Use once per view. */
  primary: {
    light: palette.neutral[950],
    dark:  palette.neutral[50],
  },
  primaryForeground: {
    light: palette.neutral[50],
    dark:  palette.neutral[950],
  },
  primaryHover: {
    light: palette.neutral[800],
    dark:  palette.neutral[200],
  },
  /** Secondary interactive. Supporting actions. Visually subordinate to primary. */
  secondary: {
    light: palette.neutral[100],
    dark:  palette.neutral[800],
  },
  secondaryForeground: {
    light: palette.neutral[900],
    dark:  palette.neutral[100],
  },
  secondaryHover: {
    light: palette.neutral[200],
    dark:  palette.neutral[700],
  },
  /** Ghost interactive. Least prominent. Navigation, tertiary actions. */
  ghost: {
    light: 'transparent',
    dark:  'transparent',
  },
  ghostHover: {
    light: palette.neutral[100],
    dark:  palette.neutral[800],
  },

  // ── Semantic Signal Colors ────────────────────────────────────────────────
  // Rule: Use these ONLY for their defined meanings. Never for decoration.

  /**
   * SUCCESS — Operation completed. Validation passed. Status positive.
   * Do NOT use for: "go" actions, brand expression, decorative accents.
   */
  success: {
    light: palette.green[600],
    dark:  palette.green[500],
  },
  successSubtle: {
    light: palette.green[50],
    dark:  palette.green[900],
  },
  successForeground: {
    light: palette.green[800],
    dark:  palette.green[100],
  },

  /**
   * WARNING — Requires attention. Approaching a limit. Reversible risk.
   * Do NOT use for: general emphasis, "caution" styling without a real risk, decoration.
   */
  warning: {
    light: palette.amber[600],
    dark:  palette.amber[500],
  },
  warningSubtle: {
    light: palette.amber[50],
    dark:  palette.amber[900],
  },
  warningForeground: {
    light: palette.amber[800],
    dark:  palette.amber[100],
  },

  /**
   * DANGER — Operation failed. Destructive action. Validation error. Irreversible risk.
   * Do NOT use for: "stop" styling, general negatives, decorative accents in red.
   */
  danger: {
    light: palette.red[600],
    dark:  palette.red[500],
  },
  dangerSubtle: {
    light: palette.red[50],
    dark:  palette.red[900],
  },
  dangerForeground: {
    light: palette.red[800],
    dark:  palette.red[100],
  },

  /**
   * INFO — Contextual help. Neutral notification. System message requiring no action.
   * Do NOT use for: primary communication, brand color, general emphasis.
   */
  info: {
    light: palette.blue[600],
    dark:  palette.blue[500],
  },
  infoSubtle: {
    light: palette.blue[50],
    dark:  palette.blue[900],
  },
  infoForeground: {
    light: palette.blue[800],
    dark:  palette.blue[100],
  },
} as const

// ── CSS Custom Property Names ─────────────────────────────────────────────────
// These are the variable names used in Tailwind config and CSS.

export const colorVars = {
  foreground:          '--color-foreground',
  foregroundSecondary: '--color-foreground-secondary',
  foregroundMuted:     '--color-foreground-muted',
  foregroundInverse:   '--color-foreground-inverse',

  background:     '--color-background',
  surface:        '--color-surface',
  surfaceSubtle:  '--color-surface-subtle',
  surfaceRaised:  '--color-surface-raised',
  overlay:        '--color-overlay',

  border:       '--color-border',
  borderSubtle: '--color-border-subtle',
  borderStrong: '--color-border-strong',

  primary:            '--color-primary',
  primaryForeground:  '--color-primary-foreground',
  primaryHover:       '--color-primary-hover',
  secondary:          '--color-secondary',
  secondaryForeground:'--color-secondary-foreground',
  secondaryHover:     '--color-secondary-hover',
  ghost:              '--color-ghost',
  ghostHover:         '--color-ghost-hover',

  success:           '--color-success',
  successSubtle:     '--color-success-subtle',
  successForeground: '--color-success-foreground',

  warning:           '--color-warning',
  warningSubtle:     '--color-warning-subtle',
  warningForeground: '--color-warning-foreground',

  danger:           '--color-danger',
  dangerSubtle:     '--color-danger-subtle',
  dangerForeground: '--color-danger-foreground',

  info:           '--color-info',
  infoSubtle:     '--color-info-subtle',
  infoForeground: '--color-info-foreground',
} as const

export type ColorToken = keyof typeof semanticColors
