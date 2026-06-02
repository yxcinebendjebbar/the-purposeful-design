'use client';

import * as React from 'react';
import { cn } from '../utils';

/**
 * THE PURPOSEFUL DESIGN — Card
 *
 * ── Why this component exists ───────────────────────────────────────────────
 * Related information must be grouped to reduce the cognitive cost of
 * scanning. Without containment, content blurs into undifferentiated noise.
 *
 * ── What user problem it solves ─────────────────────────────────────────────
 * Cards create a visual boundary that tells users: "these items belong
 * together." They define the unit of information in a layout.
 *
 * ── What happens if it does not exist ───────────────────────────────────────
 * Teams resort to ad-hoc padding, margins, and dividers to group content.
 * The result is inconsistent spacing and broken information hierarchy.
 *
 * ── How it reduces cognitive load ───────────────────────────────────────────
 * The card creates a "chunk" in the user's mental model. One card = one idea.
 * This is a fundamental principle of Gestalt psychology (Law of Proximity).
 *
 * ── How it aligns with Purposeful Design ────────────────────────────────────
 * Purposeful Design cards use borders, not shadows, to define containment.
 * Shadows imply depth that is not meaningful — they are visual noise.
 * Border = boundary. Shadow = elevation. Cards are boundaries, not platforms.
 *
 * ── Anti-Patterns ───────────────────────────────────────────────────────────
 * ❌ Cards within cards (nesting creates visual confusion)
 * ❌ Cards with gradients or images as backgrounds (decoration, not function)
 * ❌ Cards for single-item content (use a simple div)
 * ❌ Cards without a CardHeader or CardTitle (unlabelled containers)
 * ❌ More than one primary action in a CardFooter
 */

// ── Card ──────────────────────────────────────────────────────────────────────

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    /**
     * interactive — Applies hover and focus styles for clickable cards.
     * Only use when the entire card is a single action target.
     */
    interactive?: boolean;
  }
>(({ className, interactive = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-none border border-border bg-surface text-foreground',
      interactive &&
        'cursor-pointer transition-colors duration-fast hover:border-border-strong hover:bg-surface-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-strong focus-visible:ring-offset-2',
      className
    )}
    tabIndex={interactive ? 0 : undefined}
    role={interactive ? 'button' : undefined}
    {...props}
  />
));
Card.displayName = 'Card';

// ── CardHeader ────────────────────────────────────────────────────────────────

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col gap-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

// ── CardTitle ─────────────────────────────────────────────────────────────────

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & {
    /** Semantic heading level. Defaults to h3. */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  }
>(({ className, as: Comp = 'h3', ...props }, ref) => (
  <Comp
    ref={ref as React.Ref<HTMLHeadingElement>}
    className={cn(
      'text-heading-md font-medium leading-none tracking-tight text-foreground',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

// ── CardDescription ───────────────────────────────────────────────────────────

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-body-sm text-foreground-secondary leading-relaxed', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

// ── CardContent ───────────────────────────────────────────────────────────────

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

// ── CardFooter ────────────────────────────────────────────────────────────────

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex items-center gap-3 p-6 pt-0',
      className
    )}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

// ── CardDivider ───────────────────────────────────────────────────────────────
// Thin rule between card sections. Extends full width, ignores padding.

const CardDivider = React.forwardRef<
  HTMLHRElement,
  React.HTMLAttributes<HTMLHRElement>
>(({ className, ...props }, ref) => (
  <hr
    ref={ref}
    className={cn('border-none border-t border-border -mx-0 my-0 h-px bg-border', className)}
    {...props}
  />
));
CardDivider.displayName = 'CardDivider';

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardDivider,
};
