import type { Metadata } from 'next'
import { PageShell, PageHeader, CTA, Callout } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Typography System',
  description: 'Typography is the primary communication tool of Purposeful Design.',
}

export default function TypographyPage() {
  return (
    <PageShell>
      <PageHeader
        label="Foundations"
        title="Typography System"
        description="Typography establishes hierarchy before any color or decoration is applied."
      />

      <div className="mb-16">
        <Callout type="law">
          Typography is hierarchy before it is style. The primary function of a typographic system is to communicate the structure of information.
        </Callout>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-light">Type Scale</h2>
        <div className="space-y-8">
          
          <div className="border-b border-border pb-8">
            <p className="label mb-4 text-foreground-muted">Display</p>
            <div className="space-y-4">
              <div>
                <h1 className="text-display-2xl font-light tracking-tight">Display 2XL</h1>
                <p className="mt-2 text-sm text-foreground-secondary">Hero headlines. One per page. (72px)</p>
              </div>
              <div>
                <h2 className="text-display-xl font-light tracking-tight">Display XL</h2>
                <p className="mt-2 text-sm text-foreground-secondary">Section hero headings. (60px)</p>
              </div>
              <div>
                <h3 className="text-display-lg font-light tracking-tight">Display LG</h3>
                <p className="mt-2 text-sm text-foreground-secondary">Large section headings. (48px)</p>
              </div>
              <div>
                <h4 className="text-display-md font-regular tracking-tight">Display MD</h4>
                <p className="mt-2 text-sm text-foreground-secondary">Page titles. Dashboard headers. (36px)</p>
              </div>
            </div>
          </div>

          <div className="border-b border-border pb-8">
            <p className="label mb-4 text-foreground-muted">Heading</p>
            <div className="space-y-4">
              <div>
                <h2 className="text-heading-lg font-medium">Heading LG</h2>
                <p className="mt-2 text-sm text-foreground-secondary">H2 equivalent. Major content sections. (24px)</p>
              </div>
              <div>
                <h3 className="text-heading-md font-medium">Heading MD</h3>
                <p className="mt-2 text-sm text-foreground-secondary">H3 equivalent. Sub-sections. (20px)</p>
              </div>
              <div>
                <h4 className="text-heading-sm font-medium">Heading SM</h4>
                <p className="mt-2 text-sm text-foreground-secondary">H4 equivalent. Component section headers. (18px)</p>
              </div>
            </div>
          </div>

          <div className="border-b border-border pb-8">
            <p className="label mb-4 text-foreground-muted">Body</p>
            <div className="space-y-4">
              <div>
                <p className="text-body-lg font-regular">Body LG: The quick brown fox jumps over the lazy dog.</p>
                <p className="mt-2 text-sm text-foreground-secondary">Lead paragraphs. Long-form reading content. (18px)</p>
              </div>
              <div>
                <p className="text-body-md font-regular">Body MD: The quick brown fox jumps over the lazy dog.</p>
                <p className="mt-2 text-sm text-foreground-secondary">Default body text. The most common text style. (16px)</p>
              </div>
              <div>
                <p className="text-body-sm font-regular">Body SM: The quick brown fox jumps over the lazy dog.</p>
                <p className="mt-2 text-sm text-foreground-secondary">Supporting text. Descriptions, helper text. (14px)</p>
              </div>
            </div>
          </div>

          <div>
            <p className="label mb-4 text-foreground-muted">Specialty</p>
            <div className="space-y-4">
              <div>
                <p className="text-caption font-regular">CAPTION: 2026-06-02 10:45 AM</p>
                <p className="mt-2 text-sm text-foreground-secondary">Timestamps, metadata. (12px)</p>
              </div>
              <div>
                <p className="text-label-lg font-medium">LABEL LG</p>
                <p className="mt-2 text-sm text-foreground-secondary">Section labels, category headers. (14px, uppercase, tracked)</p>
              </div>
              <div>
                <p className="text-label-sm font-medium">LABEL SM</p>
                <p className="mt-2 text-sm text-foreground-secondary">Navigation items, tags. (12px, uppercase, tracked)</p>
              </div>
              <div>
                <p className="text-code font-regular">const purposeful = true;</p>
                <p className="mt-2 text-sm text-foreground-secondary">Code samples, technical values. (14px, monospace)</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <CTA
        title="Spacing System"
        description="Spacing communicates relationship and structure."
        href="/foundations/spacing"
        label="VIEW SPACING"
      />
    </PageShell>
  )
}
