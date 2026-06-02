import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils';

/**
 * THE PURPOSEFUL DESIGN — Badge
 *
 * ── Why this component exists ───────────────────────────────────────────────
 * Status must be communicated inline, alongside content, without
 * interrupting the reading flow. A badge carries a classification signal
 * in a contained, scannable format.
 *
 * ── What user problem it solves ─────────────────────────────────────────────
 * Users need to classify items quickly (active/inactive, new/draft, high
 * priority/low) without opening each item. Badges communicate status at a
 * glance during scanning.
 *
 * ── What happens if it does not exist ───────────────────────────────────────
 * Developers use raw colored spans. The system loses semantic meaning,
 * accessibility, and visual consistency. Status becomes decoration.
 *
 * ── How it reduces cognitive load ───────────────────────────────────────────
 * Each variant maps to a single semantic meaning defined in the design
 * system contract. Users learn the color language once and apply it
 * universally. No decoding required.
 *
 * ── Anti-Patterns ───────────────────────────────────────────────────────────
 * ❌ Using `success` for non-status content ("New Feature!")
 * ❌ Using `danger` for low-priority items (cry-wolf effect)
 * ❌ Using `neutral` for status (it communicates nothing)
 * ❌ More than one badge variant in the same context (breaks the signal)
 * ❌ Long badge text (over 3 words loses badge legibility)
 */

// ── Variants ─────────────────────────────────────────────────────────────────

export const badgeVariants = cva(
  [
    'inline-flex items-center gap-1',
    'rounded-xs px-2 py-0.5',
    'text-xs font-medium leading-none',
    'transition-colors duration-fast',
    'border',
  ],
  {
    variants: {
      variant: {
        /**
         * neutral — No status signal. Use for categories, labels, counts.
         * This is NOT a status indicator.
         */
        neutral:
          'bg-secondary text-secondary-foreground border-border',

        /**
         * success — Positive state: active, published, verified, complete.
         * Contract: Only use when the state is genuinely positive.
         */
        success:
          'bg-success-subtle text-success-foreground border-success/25',

        /**
         * warning — Attention state: pending, expiring, incomplete, review needed.
         * Contract: Only use when the state requires attention but is not blocking.
         */
        warning:
          'bg-warning-subtle text-warning-foreground border-warning/25',

        /**
         * danger — Critical state: failed, expired, blocked, error.
         * Contract: Only use for genuinely problematic states.
         */
        danger:
          'bg-danger-subtle text-danger-foreground border-danger/25',

        /**
         * info — Informational: new, updated, beta, in-progress.
         * Contract: For neutral-positive information, not status.
         */
        info:
          'bg-info-subtle text-info-foreground border-info/25',

        /**
         * outline — No background emphasis. For secondary classifications.
         */
        outline:
          'text-foreground-secondary border-border bg-transparent',
      },
      size: {
        sm: 'px-1.5 py-px text-[10px]',
        md: 'px-2 py-0.5 text-xs',
      },
    },
    defaultVariants: {
      variant: 'neutral',
      size: 'md',
    },
  }
);

// ── Types ─────────────────────────────────────────────────────────────────────

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * dot — Show a status dot before the badge label.
   * Use to reinforce status with both color and shape.
   */
  dot?: boolean;
}

// ── Component ─────────────────────────────────────────────────────────────────

function Badge({ className, variant, size, dot, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {dot && (
        <span
          className={cn(
            'inline-block h-1.5 w-1.5 rounded-full',
            variant === 'success' ? 'bg-success' :
            variant === 'warning' ? 'bg-warning' :
            variant === 'danger'  ? 'bg-danger'  :
            variant === 'info'    ? 'bg-info'     :
            'bg-foreground-muted'
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}

export { Badge };
