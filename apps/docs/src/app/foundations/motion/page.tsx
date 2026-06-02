import type { Metadata } from 'next'
import { PageShell, PageHeader, CTA, Callout } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Motion System',
  description: 'Motion must confirm or communicate, not perform.',
}

export default function MotionPage() {
  return (
    <PageShell>
      <PageHeader
        label="Foundations"
        title="Motion System"
        description="Purposeful Design uses motion sparingly. Motion should improve understanding, not serve as distraction."
      />

      <div className="mb-16">
        <Callout type="law">
          Animations must confirm or communicate, not perform. Purposeless motion is noise that users experience as distraction.
        </Callout>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-light">Rules of Motion</h2>
        <div className="grid gap-6 md:grid-cols-2">
          
          <div className="border border-border p-6">
            <h3 className="mb-4 font-medium text-foreground text-success">When to use animation</h3>
            <ul className="list-inside list-disc space-y-2 text-sm text-foreground-secondary">
              <li>To confirm a state change (e.g., button click, success).</li>
              <li>To show progress of a background task.</li>
              <li>To communicate spatial transitions (e.g., modal entering from bottom).</li>
              <li>To direct attention to a critical error.</li>
            </ul>
          </div>

          <div className="border border-border p-6">
            <h3 className="mb-4 font-medium text-foreground text-danger">When to avoid animation</h3>
            <ul className="list-inside list-disc space-y-2 text-sm text-foreground-secondary">
              <li>Decoration or "delight" without functional purpose.</li>
              <li>Staggering list items purely for visual effect.</li>
              <li>Showing off technical capability.</li>
              <li>Hover effects on non-interactive elements.</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-light">Motion Tokens</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 border-b border-border-subtle py-3 text-sm">
            <div className="w-24 font-mono text-foreground-muted">fast</div>
            <div className="w-24 font-mono text-foreground">150ms</div>
            <div className="text-foreground-secondary">Micro-interactions: hover states, toggle switches.</div>
          </div>
          <div className="flex items-center gap-4 border-b border-border-subtle py-3 text-sm">
            <div className="w-24 font-mono text-foreground-muted">base</div>
            <div className="w-24 font-mono text-foreground">250ms</div>
            <div className="text-foreground-secondary">Standard transitions: modals, expanding accordions.</div>
          </div>
          <div className="flex items-center gap-4 border-b border-border-subtle py-3 text-sm">
            <div className="w-24 font-mono text-foreground-muted">slow</div>
            <div className="w-24 font-mono text-foreground">400ms</div>
            <div className="text-foreground-secondary">Page-level changes or deliberate emphasis.</div>
          </div>
        </div>
      </div>

      <CTA
        title="Accessibility Standards"
        description="Review how to implement reduced motion effectively."
        href="/foundations/accessibility"
        label="VIEW ACCESSIBILITY"
      />
    </PageShell>
  )
}
