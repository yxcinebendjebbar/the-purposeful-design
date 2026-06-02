import type { Metadata } from 'next'
import { PageShell, PageHeader, CTA, Callout } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Accessibility Standards',
  description: 'Accessibility is a standard, not an accommodation.',
}

export default function AccessibilityPage() {
  return (
    <PageShell>
      <PageHeader
        label="Foundations"
        title="Accessibility Standards"
        description="Accessibility is not an afterthought. It is a non-negotiable requirement of Purposeful Design."
      />

      <div className="mb-16">
        <Callout type="law">
          Accessibility is not an accommodation. It is a standard. The measure of good design is whether it works for the full range of people who need it.
        </Callout>
      </div>

      <div className="mb-16 grid gap-6 md:grid-cols-2">
        <div className="border border-border p-6">
          <h3 className="mb-2 font-medium text-foreground">Contrast</h3>
          <p className="text-sm text-foreground-secondary">
            All text must meet WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text). Our monochromatic core palette naturally supports high contrast. Never sacrifice legibility for a "softer" look.
          </p>
        </div>

        <div className="border border-border p-6">
          <h3 className="mb-2 font-medium text-foreground">Keyboard Navigation</h3>
          <p className="text-sm text-foreground-secondary">
            Every interactive element must be reachable and operable via keyboard. Focus states must be highly visible (using a strong 2px ring offset). Do not rely solely on hover states for functionality.
          </p>
        </div>

        <div className="border border-border p-6">
          <h3 className="mb-2 font-medium text-foreground">Color Blindness</h3>
          <p className="text-sm text-foreground-secondary">
            Never use color as the sole differentiator between states. Every color-based distinction (like a red error input) must be paired with a secondary indicator (like an error icon and descriptive text).
          </p>
        </div>

        <div className="border border-border p-6">
          <h3 className="mb-2 font-medium text-foreground">Motion Reduction</h3>
          <p className="text-sm text-foreground-secondary">
            Respect the user's OS-level motion preferences (`prefers-reduced-motion`). Disable non-essential transitions when this flag is active.
          </p>
        </div>
      </div>

      <CTA
        title="Components"
        description="Foundation components built on these rules."
        href="/foundations/components"
        label="VIEW COMPONENTS"
      />
    </PageShell>
  )
}
