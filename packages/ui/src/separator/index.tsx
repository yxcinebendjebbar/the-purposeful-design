import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cn } from '../utils';

/**
 * THE PURPOSEFUL DESIGN — Separator
 *
 * ── Why this component exists ───────────────────────────────────────────────
 * Content groups need to be separated without adding visual weight.
 * The Separator provides a precise, semantic boundary between sections.
 *
 * ── What user problem it solves ─────────────────────────────────────────────
 * Without separators, content sections blur together. The eye cannot
 * determine where one group ends and the next begins. Spacing alone is
 * often insufficient when content is dense.
 *
 * ── How it reduces cognitive load ───────────────────────────────────────────
 * A 1px rule costs the user zero cognitive effort to process. It is the
 * lowest-cost way to communicate a boundary. Margin and padding require
 * the eye to measure distance; a line requires no measurement.
 *
 * ── Accessibility ───────────────────────────────────────────────────────────
 * - decorative={true} by default: sets role="none" for visual-only rules
 * - decorative={false}: sets role="separator" with aria-orientation
 * - Use decorative={false} only when the separator marks a meaningful
 *   semantic boundary (e.g., between navigation sections)
 *
 * ── Usage Guidelines ────────────────────────────────────────────────────────
 * ✅ Between major content sections
 * ✅ Between list items when spacing alone is insufficient
 * ✅ Vertical: in toolbars and nav items
 * ❌ Do not use to create padding/spacing — use margin instead
 * ❌ Do not stack multiple separators
 */

export interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  /**
   * decorative — Whether the separator is purely visual.
   *
   * true (default): role="none" — screen readers ignore it.
   * false: role="separator" + aria-orientation — screen readers announce it.
   *
   * Use false only when the separator marks a meaningful semantic boundary.
   */
  decorative?: boolean;
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    {
      className,
      orientation = 'horizontal',
      decorative = true,
      ...props
    },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
