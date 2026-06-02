/**
 * THE PURPOSEFUL DESIGN — Spacing Tokens
 *
 * Philosophy: Spacing communicates relationship. Elements that are close
 * are related. Elements that are far are separate. Spacing is not decoration —
 * it is structure that the eye reads before the mind processes.
 *
 * Base unit: 4px. All values are multiples of 4.
 * This creates a predictable, grid-aligned system that never requires
 * arbitrary intermediate values.
 *
 * When to deviate: Almost never. If you need a value not in this scale,
 * ask whether the element itself is correctly sized, not whether the scale is wrong.
 */

// ── Raw Scale ─────────────────────────────────────────────────────────────────

export const spacingScale = {
  /** 0px — Used to explicitly reset spacing, not as a default. */
  0:    '0px',
  /** 2px — Sub-pixel optical adjustments. Rarely needed. */
  px:   '1px',
  /** 2px — Icon-to-label gaps, border offsets */
  0.5:  '2px',
  /** 4px — The base unit. Tight icon padding, minimal gaps. */
  1:    '4px',
  /** 6px — Compact element padding. Badges, small tags. */
  1.5:  '6px',
  /** 8px — Default tight spacing. Label-to-input, icon-to-text. */
  2:    '8px',
  /** 10px — Small gaps within components. */
  2.5:  '10px',
  /** 12px — Close related elements. Helper text below inputs. */
  3:    '12px',
  /** 14px — Minor variations. */
  3.5:  '14px',
  /** 16px — Standard component padding. The most common spacing value. */
  4:    '16px',
  /** 20px — Medium gaps. Between form groups. */
  5:    '20px',
  /** 24px — Generous component padding. Card internal spacing. */
  6:    '24px',
  /** 28px */
  7:    '28px',
  /** 32px — Between related sections within a component group. */
  8:    '32px',
  /** 36px */
  9:    '36px',
  /** 40px — Between major component groups on a page. */
  10:   '40px',
  /** 48px — Section-level spacing. */
  12:   '48px',
  /** 56px */
  14:   '56px',
  /** 64px — Between major sections on a page. */
  16:   '64px',
  /** 80px — Between major page regions on desktop. */
  20:   '80px',
  /** 96px — Hero section padding, top-level page whitespace. */
  24:   '96px',
  /** 112px */
  28:   '112px',
  /** 128px — Maximum section padding. Used sparingly. */
  32:   '128px',
} as const

// ── Semantic Spacing Aliases ───────────────────────────────────────────────────
// These describe purpose, not size. Use these in design conversations.

export const spacing = {
  /**
   * COMPONENT SPACING
   * Internal spacing within a single component.
   */
  component: {
    /** Icon-to-label, checkbox-to-label, tightly coupled elements. */
    tight: spacingScale[2],   // 8px
    /** Default internal padding for small components (badge, tag, chip). */
    insetSm: spacingScale[2],  // 8px
    /** Default internal padding for medium components (button, input). */
    insetMd: spacingScale[4],  // 16px
    /** Default internal padding for large components (card, panel). */
    insetLg: spacingScale[6],  // 24px
    /** Between elements in a stack within a single component. */
    stack: spacingScale[3],    // 12px
    /** Between a label and its form field. */
    labelField: spacingScale[2], // 8px
    /** Between a form field and its helper text or error. */
    fieldHelper: spacingScale[1.5], // 6px
  },

  /**
   * LAYOUT SPACING
   * Between components and sections on a page.
   */
  layout: {
    /** Between items in a list or grid of similar components. */
    gap: spacingScale[4],       // 16px
    /** Between distinct groups of related components. */
    group: spacingScale[8],     // 32px
    /** Between named sections on a page. */
    section: spacingScale[16],  // 64px
    /** Between major page regions (hero, content, footer). */
    region: spacingScale[24],   // 96px
    /** Page-level horizontal padding. */
    pagePaddingX: 'clamp(1.25rem, 5vw, 3rem)',
    /** Page-level vertical padding for content pages. */
    pagePaddingY: spacingScale[16], // 64px
  },

  /**
   * CONTENT SPACING
   * Within prose, documentation, and editorial content.
   */
  content: {
    /** Between inline elements in text (icons within sentences). */
    inline: spacingScale[2],   // 8px
    /** Between paragraphs. */
    paragraph: spacingScale[5], // 20px
    /** Between a heading and its following body text. */
    headingBody: spacingScale[3], // 12px
    /** Between a section heading and its preceding content. */
    sectionGap: spacingScale[10], // 40px
  },
} as const

export type SpacingToken = keyof typeof spacingScale
