/**
 * THE PURPOSEFUL DESIGN — Elevation Tokens
 *
 * Philosophy: Purposeful Design minimizes unnecessary shadows.
 * Elevation (shadows) should communicate hierarchy and spatial
 * relationships, not serve as decoration.
 *
 * Levels:
 * 0: Ground (No shadow)
 * 1: Slightly raised (Subtle interaction)
 * 2: Elevated (Overlays, dropdowns)
 * 3: Floating (Modals, critical dialogs)
 */

export const elevation = {
  /**
   * Level 0 — Ground
   * Usage: Default for almost everything. Content blocks, forms, static cards.
   * Rationale: Flat surfaces are easier to read and do not compete for attention.
   */
  0: 'none',

  /**
   * Level 1 — Raised
   * Usage: Interactive cards on hover, subtle floating elements.
   * Value: A very soft, diffuse shadow that separates the element from the ground.
   */
  1: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',

  /**
   * Level 2 — Elevated
   * Usage: Dropdowns, popovers, navigation menus.
   * Value: A deeper shadow that clearly indicates the element sits above other content
   * and will dismiss when interacted outside.
   */
  2: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',

  /**
   * Level 3 — Floating
   * Usage: Modals, dialogs, critical alerts that block interaction with the ground layer.
   * Value: A large, soft shadow combined with an overlay backdrop (defined in colors)
   * to focus user attention entirely on this surface.
   */
  3: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
} as const

export type ElevationToken = keyof typeof elevation
