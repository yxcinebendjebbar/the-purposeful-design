/**
 * THE PURPOSEFUL DESIGN — Typography Tokens
 *
 * Typography is the primary communication tool of Purposeful Design.
 * It establishes hierarchy before any color is applied. A well-set
 * typographic system should communicate the relative importance of every
 * element on the screen through size, weight, and spacing alone.
 *
 * Rules:
 * 1. Each style has exactly one primary purpose.
 * 2. Styles should not be mixed arbitrarily — use the semantic names.
 * 3. Never use a display style for body content.
 * 4. Never use a body style for display content.
 */

// ── Font Families ─────────────────────────────────────────────────────────────

export const fontFamilies = {
  /**
   * Sans — The workhorse. Used for all UI text.
   * Inter provides excellent legibility at small sizes and strong hierarchy
   * through its weight range.
   */
  sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],

  /**
   * Serif — Editorial use only. Large headings, pull quotes, brand moments.
   * DM Serif Display is a transitional serif with strong personality at
   * display sizes. Do not use at body size.
   */
  serif: ['DM Serif Display', 'Georgia', 'Times New Roman', 'serif'],

  /**
   * Mono — Code, technical values, precise data.
   * Used exclusively where character-level precision matters.
   * Never use for UI labels or body copy.
   */
  mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
} as const

// ── Font Weights ──────────────────────────────────────────────────────────────

export const fontWeights = {
  /** Light — Display headings only. Not for body or UI text. */
  light:   300,
  /** Regular — Default body text weight. */
  regular: 400,
  /** Medium — UI labels, nav items, minor emphasis. */
  medium:  500,
  /** Semibold — Strong emphasis within body text. Use sparingly. */
  semibold: 600,
} as const

// ── Type Scale ────────────────────────────────────────────────────────────────
// Each entry specifies: fontSize, lineHeight, letterSpacing, fontWeight, usage.

export const typeScale = {
  /**
   * DISPLAY — Hero headings. Landing pages. Major visual statements.
   * These styles are the visual peak of the hierarchy.
   * Use at most once per page section.
   */
  display2xl: {
    fontSize:      '4.5rem',   // 72px
    lineHeight:    '1',
    letterSpacing: '-0.04em',
    fontWeight:    fontWeights.light,
    usage: 'Hero headlines. One per page.',
  },
  displayXl: {
    fontSize:      '3.75rem',  // 60px
    lineHeight:    '1',
    letterSpacing: '-0.03em',
    fontWeight:    fontWeights.light,
    usage: 'Section hero headings. Used when display2xl is too large.',
  },
  displayLg: {
    fontSize:      '3rem',     // 48px
    lineHeight:    '1.05',
    letterSpacing: '-0.025em',
    fontWeight:    fontWeights.light,
    usage: 'Large section headings. Feature titles.',
  },
  displayMd: {
    fontSize:      '2.25rem',  // 36px
    lineHeight:    '1.1',
    letterSpacing: '-0.02em',
    fontWeight:    fontWeights.regular,
    usage: 'Page titles. Dashboard headers.',
  },
  displaySm: {
    fontSize:      '1.875rem', // 30px
    lineHeight:    '1.2',
    letterSpacing: '-0.015em',
    fontWeight:    fontWeights.regular,
    usage: 'Section titles. Panel headers.',
  },

  /**
   * HEADING — Structural headings within content and components.
   * Headings create the navigable structure of a page.
   */
  headingLg: {
    fontSize:      '1.5rem',   // 24px
    lineHeight:    '1.3',
    letterSpacing: '-0.01em',
    fontWeight:    fontWeights.medium,
    usage: 'H2 equivalent. Major content sections.',
  },
  headingMd: {
    fontSize:      '1.25rem',  // 20px
    lineHeight:    '1.4',
    letterSpacing: '-0.005em',
    fontWeight:    fontWeights.medium,
    usage: 'H3 equivalent. Sub-sections within major sections.',
  },
  headingSm: {
    fontSize:      '1.125rem', // 18px
    lineHeight:    '1.4',
    letterSpacing: '0em',
    fontWeight:    fontWeights.medium,
    usage: 'H4 equivalent. Component section headers.',
  },

  /**
   * BODY — Prose and explanatory text.
   * The most important styles. Most users spend most time reading body text.
   * Optimized for legibility at reading distances.
   */
  bodyLg: {
    fontSize:      '1.125rem', // 18px
    lineHeight:    '1.75',
    letterSpacing: '0em',
    fontWeight:    fontWeights.regular,
    usage: 'Lead paragraphs. Long-form reading content.',
  },
  bodyMd: {
    fontSize:      '1rem',     // 16px
    lineHeight:    '1.625',
    letterSpacing: '0em',
    fontWeight:    fontWeights.regular,
    usage: 'Default body text. The most common text style in the system.',
  },
  bodySm: {
    fontSize:      '0.875rem', // 14px
    lineHeight:    '1.5',
    letterSpacing: '0.01em',
    fontWeight:    fontWeights.regular,
    usage: 'Supporting text. Descriptions, helper text. Not for primary content.',
  },

  /**
   * CAPTION — Fine print, timestamps, metadata.
   * Never use for content the user needs to act on.
   */
  caption: {
    fontSize:      '0.75rem',  // 12px
    lineHeight:    '1.5',
    letterSpacing: '0.01em',
    fontWeight:    fontWeights.regular,
    usage: 'Timestamps, attribution, metadata. Lowest priority content only.',
  },

  /**
   * LABEL — UI labels, navigation, tags.
   * All-caps with wide tracking. Not for prose.
   */
  labelLg: {
    fontSize:      '0.875rem', // 14px
    lineHeight:    '1.25',
    letterSpacing: '0.1em',
    fontWeight:    fontWeights.medium,
    textTransform: 'uppercase' as const,
    usage: 'Section labels, category headers, form group labels.',
  },
  labelSm: {
    fontSize:      '0.75rem',  // 12px
    lineHeight:    '1.25',
    letterSpacing: '0.12em',
    fontWeight:    fontWeights.medium,
    textTransform: 'uppercase' as const,
    usage: 'Navigation items, tag text, compact UI labels.',
  },

  /**
   * CODE — Inline and block code samples.
   * Monospace only. Never mix code and prose typefaces in the same element.
   */
  code: {
    fontSize:      '0.875rem', // 14px
    lineHeight:    '1.7',
    letterSpacing: '0em',
    fontWeight:    fontWeights.regular,
    fontFamily:    'mono',
    usage: 'Code samples, technical values, file paths.',
  },
  codeSm: {
    fontSize:      '0.8125rem', // 13px
    lineHeight:    '1.6',
    letterSpacing: '0em',
    fontWeight:    fontWeights.regular,
    fontFamily:    'mono',
    usage: 'Inline code within prose. Terminal output.',
  },
} as const

// ── Prose Scale ────────────────────────────────────────────────────────────────
// Maximum line lengths. Long lines reduce reading speed and comprehension.

export const proseWidth = {
  /** 45–65ch — Optimal for prose reading. Default for documentation. */
  reading:  '68ch',
  /** 70–80ch — Comfortable for UI descriptions, wider contexts. */
  wide:     '80ch',
  /** No constraint — Only for structured data where line length is irrelevant. */
  full:     'none',
} as const

export type TypeScaleToken = keyof typeof typeScale
