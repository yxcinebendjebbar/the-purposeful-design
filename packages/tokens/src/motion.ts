/**
 * THE PURPOSEFUL DESIGN — Motion Tokens
 *
 * Philosophy: Purposeful Design uses motion sparingly.
 * Motion should improve understanding, not serve as distraction.
 *
 * Use motion to:
 * - Confirm actions
 * - Show relationships between states
 * - Draw attention to critical changes
 *
 * Do not use motion to:
 * - Entertain
 * - Decorate
 * - Show off technical capability
 */

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

export type MotionDuration = keyof typeof motion.duration
export type MotionEasing = keyof typeof motion.easing
