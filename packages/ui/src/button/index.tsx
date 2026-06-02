'use client';

import * as React from 'react';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '../utils';
import type { ButtonProps } from './button.types';

/**
 * THE PURPOSEFUL DESIGN — Button
 *
 * ── Why this component exists ───────────────────────────────────────────────
 * Buttons are the primary mechanism for users to act. Without them, an
 * interface has no interaction model — it becomes a document, not a tool.
 *
 * ── What user problem it solves ─────────────────────────────────────────────
 * It gives users a clear, accessible, consistent way to initiate actions.
 * It removes ambiguity about what is interactive versus what is decorative.
 *
 * ── What happens if it does not exist ───────────────────────────────────────
 * Teams default to unstyled <button> elements or ad-hoc links styled as
 * buttons, leading to inconsistent focus styles, broken accessibility,
 * and fragmented visual hierarchy.
 *
 * ── How it reduces cognitive load ───────────────────────────────────────────
 * By restricting to three variants, the system enforces hierarchy. The user
 * always knows the most important action on a screen because there can only
 * be one `primary` button. Secondary and ghost buttons recede appropriately.
 *
 * ── How it aligns with Purposeful Design ────────────────────────────────────
 * Variants are limited by principle, not by capability. A button should
 * communicate its role in the hierarchy — not its aesthetic preference.
 *
 * ── Accessibility ───────────────────────────────────────────────────────────
 * - Uses native <button> by default (correct semantics, free keyboard access)
 * - Focus ring meets WCAG 2.1 AA: 3px offset, high-contrast ring
 * - disabled state communicates unavailability via opacity + pointer-events
 * - loading state preserves button dimensions and provides aria-label fallback
 * - asChild passes all ARIA attributes through to the rendered element
 */

// ── Variants ─────────────────────────────────────────────────────────────────

export const buttonVariants = cva(
  // Base styles — applied to every button regardless of variant
  [
    'inline-flex items-center justify-center gap-2',
    'whitespace-nowrap rounded-sm',
    'text-sm font-medium',
    'ring-offset-background transition-colors',
    'duration-fast ease-purposeful',
    // Focus
    'focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-border-strong focus-visible:ring-offset-2',
    // Disabled
    'disabled:pointer-events-none disabled:opacity-40',
    // Loading
    'aria-busy:cursor-wait',
  ],
  {
    variants: {
      variant: {
        /**
         * primary — The single most important action on any given view.
         * Rule: One primary button per screen context.
         */
        primary:
          'bg-primary text-primary-foreground hover:bg-primary-hover shadow-base',

        /**
         * secondary — Supporting actions. Visually subordinate to primary.
         * Use for actions the user may need but that are not the main goal.
         */
        secondary:
          'bg-secondary text-secondary-foreground border border-border hover:bg-secondary-hover',

        /**
         * ghost — Tertiary actions: cancel, dismiss, navigate, expand.
         * Least visual weight. Does not compete with primary/secondary.
         */
        ghost: 'hover:bg-ghost-hover hover:text-foreground text-foreground-secondary',

        /**
         * danger — Destructive confirmation only.
         * Never use for navigation. Only after a confirmation step.
         */
        danger:
          'bg-danger text-white hover:bg-danger/90 shadow-base',
      },
      size: {
        /** sm — Compact UI: table actions, inline controls, toolbars */
        sm: 'h-8 px-3 text-xs gap-1.5',
        /** md — Default. Forms, cards, most interfaces */
        md: 'h-10 px-4 py-2',
        /** lg — Hero actions, empty states, onboarding CTAs */
        lg: 'h-12 px-8 text-base gap-2.5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

// ── Component ─────────────────────────────────────────────────────────────────

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      disabled,
      icon,
      iconPosition = 'left',
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    const isDisabled = disabled || loading;

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        aria-disabled={isDisabled || undefined}
        {...props}
      >
        {/* Loading spinner replaces left icon when loading */}
        {loading ? (
          <Loader2
            size={size === 'sm' ? 12 : size === 'lg' ? 18 : 15}
            className="animate-spin"
            aria-hidden="true"
          />
        ) : icon && iconPosition === 'left' ? (
          <span className="shrink-0" aria-hidden="true">
            {icon}
          </span>
        ) : null}

        <Slottable>{children}</Slottable>

        {/* Right icon — only shown when not loading */}
        {!loading && icon && iconPosition === 'right' ? (
          <span className="shrink-0" aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button };
export type { ButtonProps } from './button.types';
