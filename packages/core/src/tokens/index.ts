/**
 * The Purposeful Design — Core Design Tokens
 *
 * These tokens are the single source of truth for all design decisions.
 * They are exported as JavaScript values so they can be consumed by
 * Tailwind config, CSS-in-JS solutions, and documentation.
 */

// ── Color Palette ──────────────────────────────────────────────────────────

export const colors = {
  // Base — Monochromatic stone palette
  stone: {
    50: '#fafaf9',
    100: '#f5f5f4',
    200: '#e7e5e4',
    300: '#d6d3d1',
    400: '#a8a29e',
    500: '#78716c',
    600: '#57534e',
    700: '#44403c',
    800: '#292524',
    900: '#1c1917',
    950: '#0c0a09',
  },

  // Semantic — These values communicate meaning. Use only for their defined purpose.
  semantic: {
    /** Success: operation completed, validation passed, status positive */
    success: '#16a34a',
    successSubtle: '#dcfce7',

    /** Error: operation failed, validation error, destructive state */
    error: '#dc2626',
    errorSubtle: '#fee2e2',

    /** Warning: requires attention, approaching limit, reversible risk */
    warning: '#ca8a04',
    warningSubtle: '#fef9c3',

    /** Information: contextual help, neutral notification, system message */
    info: '#2563eb',
    infoSubtle: '#dbeafe',
  },

  // Foreground/Background aliases
  foreground: '#0c0a09',
  background: '#fafaf9',
  muted: '#78716c',
  mutedForeground: '#57534e',
  border: '#e7e5e4',
  borderSubtle: '#f5f5f4',
} as const

// ── Typography ──────────────────────────────────────────────────────────────

export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    serif: ['DM Serif Display', 'Georgia', 'serif'],
    mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
  },

  // Type scale — each size has a precisely defined role
  scale: {
    'display-2xl': { size: '4.5rem', lineHeight: '1', letterSpacing: '-0.04em', weight: 300 },
    'display-xl': { size: '3.75rem', lineHeight: '1', letterSpacing: '-0.03em', weight: 300 },
    'display-lg': { size: '3rem', lineHeight: '1.05', letterSpacing: '-0.025em', weight: 300 },
    'display-md': { size: '2.25rem', lineHeight: '1.1', letterSpacing: '-0.02em', weight: 400 },
    'display-sm': { size: '1.875rem', lineHeight: '1.2', letterSpacing: '-0.015em', weight: 400 },
    'heading-lg': { size: '1.5rem', lineHeight: '1.3', letterSpacing: '-0.01em', weight: 500 },
    'heading-md': { size: '1.25rem', lineHeight: '1.4', letterSpacing: '-0.005em', weight: 500 },
    'heading-sm': { size: '1.125rem', lineHeight: '1.4', letterSpacing: '0em', weight: 500 },
    'body-lg': { size: '1.125rem', lineHeight: '1.75', letterSpacing: '0em', weight: 400 },
    'body-md': { size: '1rem', lineHeight: '1.625', letterSpacing: '0em', weight: 400 },
    'body-sm': { size: '0.875rem', lineHeight: '1.5', letterSpacing: '0.01em', weight: 400 },
    'label-lg': { size: '0.875rem', lineHeight: '1.25', letterSpacing: '0.1em', weight: 500 },
    'label-sm': { size: '0.75rem', lineHeight: '1.25', letterSpacing: '0.12em', weight: 500 },
  },
} as const

// ── Spacing ─────────────────────────────────────────────────────────────────

export const spacing = {
  /** Base unit: 4px */
  unit: 4,

  scale: {
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
    20: '80px',
    24: '96px',
    32: '128px',
  },

  // Semantic spacing aliases
  semantic: {
    /** Spacing between tightly related elements (label + input) */
    tight: '8px',
    /** Spacing between related elements (input + helper text) */
    close: '12px',
    /** Spacing between elements in the same group */
    near: '16px',
    /** Spacing between groups within a section */
    section: '32px',
    /** Spacing between sections on a page */
    page: '64px',
    /** Spacing between major page regions */
    region: '96px',
  },
} as const

// ── Motion ──────────────────────────────────────────────────────────────────

export const motion = {
  duration: {
    /** Micro-interactions: state changes, hover effects */
    fast: '150ms',
    /** Standard transitions: modals, drawers, expanding sections */
    base: '250ms',
    /** Emphasis transitions: page-level changes, onboarding */
    slow: '400ms',
    /** Very slow: deliberate emphasis, loading sequences */
    slower: '600ms',
  },

  easing: {
    /** Default: smooth deceleration — use for most transitions */
    purposeful: 'cubic-bezier(0.25, 0, 0, 1)',
    /** Enter: items appearing from outside the viewport */
    enter: 'cubic-bezier(0, 0, 0.3, 1)',
    /** Exit: items leaving the viewport */
    exit: 'cubic-bezier(0.3, 0, 1, 1)',
    /** Standard easing */
    standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Motion rules: when to use motion
  rules: {
    /** Use motion for: state confirmations, navigation transitions, data updates */
    use: ['confirm-action', 'show-progress', 'communicate-transition', 'direct-attention'],
    /** Do not use motion for: decoration, entertainment, performance demonstration */
    avoid: ['decoration', 'entertainment', 'impressiveness', 'empty-states'],
  },
} as const

// ── Breakpoints ──────────────────────────────────────────────────────────────

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

// ── Layer System (Z-index) ───────────────────────────────────────────────────

export const layers = {
  base: 0,
  raised: 10,
  dropdown: 20,
  sticky: 30,
  overlay: 40,
  modal: 50,
  notification: 60,
  tooltip: 70,
} as const

// ── Border Radius ────────────────────────────────────────────────────────────

export const radius = {
  none: '0px',
  sm: '2px',
  base: '4px',
  md: '6px',
  lg: '8px',
  full: '9999px',
} as const

// ── Shadow ────────────────────────────────────────────────────────────────────

/**
 * Shadow semantic scale:
 * - sm: Surface separation (cards on background)
 * - base: Interactive elements (raised buttons, active cards)
 * - lg: Elevated surfaces (dropdowns, popovers)
 * - xl: Floating elements (modals, dialogs)
 */
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  lg: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  xl: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
} as const
