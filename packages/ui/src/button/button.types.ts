import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { buttonVariants } from './index';

// ── Button Variants ───────────────────────────────────────────────────────────

/**
 * The three tiers of action hierarchy in Purposeful Design.
 *
 * primary   — The single most important action on the view. Use once per screen.
 * secondary — Supporting actions. Subordinate to primary, but clearly interactive.
 * ghost     — Tertiary actions, navigation, cancel/dismiss. Least visual weight.
 * danger    — Destructive confirmation only. Never for navigation or general use.
 */
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';

/**
 * Three sizes map to three contexts:
 *
 * sm — Compact UI: table actions, inline controls, toolbars.
 * md — Default. Forms, cards, most interfaces.
 * lg — Hero actions, empty states, onboarding.
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

// ── Button Props ──────────────────────────────────────────────────────────────

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * asChild — Render the button's styles on a child element instead.
   *
   * Use this when you need a link styled as a button, or any other element
   * that must receive button styles without rendering a <button> tag.
   *
   * @example
   * <Button asChild variant="primary">
   *   <a href="/dashboard">Go to dashboard</a>
   * </Button>
   */
  asChild?: boolean;

  /**
   * loading — Shows a spinner and disables interaction.
   *
   * The button remains visible and sized during loading to prevent layout
   * shift. The label is preserved for screen readers via aria-label.
   *
   * @example
   * <Button loading>Save changes</Button>
   */
  loading?: boolean;

  /**
   * icon — Render an icon before the button label.
   *
   * Accepts any React node. Lucide icons at size 16 are the standard.
   * The icon inherits the button's color automatically.
   *
   * @example
   * <Button icon={<Plus size={16} />}>Add item</Button>
   */
  icon?: React.ReactNode;

  /**
   * iconPosition — Control whether the icon appears before or after the label.
   * @default 'left'
   */
  iconPosition?: 'left' | 'right';
}
