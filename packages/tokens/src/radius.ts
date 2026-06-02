/**
 * THE PURPOSEFUL DESIGN — Border Radius Tokens
 *
 * Philosophy: Rounding is functional, not decorative.
 * A border radius communicates the affordance of an element:
 * - Sharp corners (none/sm) — structural, document-like, static content
 * - Moderate rounding (md) — interactive, approachable, components
 * - Full rounding (full) — pills, chips, avatars, indicators
 *
 * The Purposeful Design defaults to minimal rounding.
 * Excess rounding makes interfaces feel playful and informal,
 * which is appropriate for consumer apps but rarely for professional tools.
 *
 * Rule: Choose the minimum radius that communicates the correct affordance.
 */

export const radius = {
  /**
   * NONE — 0px
   * Use for: Document-like surfaces, data tables, code blocks,
   * structural dividers, editorial contexts where sharp geometry
   * communicates precision and intentionality.
   *
   * Do NOT use for: Interactive buttons or inputs (sharp edges
   * do not communicate affordance clearly on interactive elements).
   */
  none: '0px',

  /**
   * XS — 2px
   * Use for: Badges within tight spaces, inline code backgrounds,
   * focus rings, very small indicators. Barely perceptible rounding
   * that softens harsh edges without communicating roundness.
   */
  xs: '2px',

  /**
   * SM — 4px
   * Use for: Buttons, inputs, selects, most interactive elements.
   * The default interactive element radius. Communicates interactivity
   * without excessive softness.
   */
  sm: '4px',

  /**
   * MD — 6px
   * Use for: Cards, panels, modals, larger containers.
   * Appropriate when an element has significant visual weight and
   * needs gentle corner softening.
   */
  md: '6px',

  /**
   * LG — 8px
   * Use for: Toast notifications, large cards, sheet components.
   * Reserve for elements with large surface areas where md would look
   * too sharp at the corner-to-edge ratio.
   */
  lg: '8px',

  /**
   * XL — 12px
   * Use for: Floating surfaces, prominent marketing elements.
   * Use sparingly. At this level, rounding becomes a design decision
   * rather than a functional affordance.
   */
  xl: '12px',

  /**
   * FULL — 9999px
   * Use for: Pills, chips, avatar circles, toggle switches, progress bars.
   * Communicates containment and completeness.
   *
   * Do NOT use for: Buttons (in the Purposeful Design system, full-radius
   * buttons imply consumer-app contexts that contradict the professional tone).
   */
  full: '9999px',
} as const

// ── Component Radius Defaults ─────────────────────────────────────────────────
// These defaults enforce the Purposeful Design aesthetic across components.

export const componentRadius = {
  button:    radius.sm,   // 4px — precise, professional
  input:     radius.sm,   // 4px — matches button for visual alignment
  card:      radius.none, // 0px — editorial, structural
  badge:     radius.xs,   // 2px — contained, minimal
  modal:     radius.none, // 0px — architectural, full-screen context
  tooltip:   radius.xs,   // 2px — small, precise
  dropdown:  radius.sm,   // 4px — interactive container
  avatar:    radius.full, // full circle
  tag:       radius.xs,   // 2px — compact label
  alert:     radius.none, // 0px — structural, document-like
} as const

export type RadiusToken = keyof typeof radius
