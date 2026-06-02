/**
 * The Purposeful Design — Core Type Definitions
 *
 * Shared types for design system components and documentation.
 */

// ── Design System Hierarchy ────────────────────────────────────────────────

/** The four visual levels of interface hierarchy */
export type HierarchyLevel = 'primary' | 'secondary' | 'supporting' | 'contextual'

/** The five layers of the Purposeful Design Pyramid */
export type PyramidLayer = 'purpose' | 'content' | 'hierarchy' | 'interaction' | 'visual-style'

// ── Semantic Color Types ─────────────────────────────────────────────────

/** Semantic intent — drives color, icon, and label selection */
export type SemanticIntent = 'success' | 'error' | 'warning' | 'info' | 'neutral'

/** Action classification */
export type ActionType = 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'ghost'

// ── Component Variants ────────────────────────────────────────────────────

export type Size = 'sm' | 'md' | 'lg'

export type Orientation = 'horizontal' | 'vertical'

export type Alignment = 'start' | 'center' | 'end'

export type Placement = 'top' | 'right' | 'bottom' | 'left'

// ── Motion ────────────────────────────────────────────────────────────────

export type MotionDuration = 'fast' | 'base' | 'slow' | 'slower'

export type MotionEasing = 'purposeful' | 'enter' | 'exit' | 'standard'

/** The permitted reasons for adding motion to an interface */
export type MotionPurpose =
  | 'confirm-action'
  | 'show-progress'
  | 'communicate-transition'
  | 'direct-attention'

// ── Anti-Pattern Classification ────────────────────────────────────────────

export type AntiPatternCategory =
  | 'visual-noise'
  | 'hierarchy-collapse'
  | 'action-overload'
  | 'decorative-design'
  | 'color-misuse'
  | 'information-density'
  | 'feature-obsession'

// ── Documentation Types ────────────────────────────────────────────────────

export interface Principle {
  slug: string
  title: string
  definition: string
  reasoning: string
  good: { label: string; example: string }
  bad: { label: string; example: string }
}

export interface Law {
  number: string
  law: string
  explanation: string
}

export interface VocabularyTerm {
  term: string
  category: string
  definition: string
  example: string
  why: string
}

export interface AntiPattern {
  id: string
  name: string
  tagline: string
  description: string
  whyItFails: string
  symptoms: string[]
  betterApproach: string
}

export interface Metric {
  id: string
  name: string
  category: string
  standard: string
  description: string
  howToMeasure: string
  target: string
  warning: string
}
