/**
 * THE PURPOSEFUL DESIGN — Breakpoints
 *
 * Defines the standard viewport breakpoints for responsive layouts.
 */

export const breakpoints = {
  /** Mobile devices */
  sm: '640px',
  /** Tablets */
  md: '768px',
  /** Small laptops / desktops */
  lg: '1024px',
  /** Large laptops / desktops */
  xl: '1280px',
  /** Extra large displays */
  '2xl': '1536px',
} as const

export type BreakpointToken = keyof typeof breakpoints
