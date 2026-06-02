/**
 * THE PURPOSEFUL DESIGN — Z-Index Tokens
 *
 * Defines the stacking context levels for the entire system.
 * Keeps z-index manageable and prevents z-index wars.
 */

export const zIndex = {
  /** Base content */
  base: 0,
  /** Raised elements (cards, sticky headers) */
  raised: 10,
  /** Dropdowns, popovers */
  dropdown: 20,
  /** Sticky navigation */
  sticky: 30,
  /** Modal overlays */
  overlay: 40,
  /** Modals and dialogs */
  modal: 50,
  /** Toast notifications */
  notification: 60,
  /** Tooltips */
  tooltip: 70,
} as const

export type ZIndexToken = keyof typeof zIndex
