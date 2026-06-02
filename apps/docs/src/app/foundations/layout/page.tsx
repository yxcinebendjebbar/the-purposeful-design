import type { Metadata } from 'next'
import { PageShell, PageHeader, CTA, Callout } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Layout System',
  description: 'Container widths, reading widths, and spatial architecture.',
}

export default function LayoutPage() {
  return (
    <PageShell>
      <PageHeader
        label="Foundations"
        title="Layout System"
        description="Layout creates structure. It provides bounds for content so the eye knows where to look."
      />

      <div className="mb-16">
        <Callout type="law">
          White space is not empty. It is structure. The layout system defines where that structure exists.
        </Callout>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-light">Container Widths</h2>
        <div className="space-y-6">
          <div className="border border-border p-6">
            <h3 className="font-medium text-foreground">Layout Container (max 1200px)</h3>
            <p className="mt-2 text-sm text-foreground-secondary">
              The primary container for standard page content. Prevents the interface from stretching endlessly on ultra-wide displays. Content should naturally balance within this boundary.
            </p>
          </div>
          <div className="border border-border p-6">
            <h3 className="font-medium text-foreground">Prose Width (max 68ch)</h3>
            <p className="mt-2 text-sm text-foreground-secondary">
              Optimal line length for reading. Long-form content, documentation, and blog posts must be constrained to this width to prevent eye fatigue.
            </p>
          </div>
          <div className="border border-border p-6">
            <h3 className="font-medium text-foreground">Full Width</h3>
            <p className="mt-2 text-sm text-foreground-secondary">
              Only used for dashboards, massive data tables, and expert tools where horizontal density is a requirement. Never use for reading.
            </p>
          </div>
        </div>
      </div>

      <CTA
        title="Motion System"
        description="Guidelines for when to use animation, and when not to."
        href="/foundations/motion"
        label="VIEW MOTION"
      />
    </PageShell>
  )
}
