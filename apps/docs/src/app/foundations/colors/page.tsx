import type { Metadata } from 'next'
import { PageShell, PageHeader, CTA, Callout } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Color System',
  description: 'The Purposeful Design color system. Black and white first. Colors must communicate meaning.',
}

export default function ColorsPage() {
  return (
    <PageShell>
      <PageHeader
        label="Foundations"
        title="Color System"
        description="Every color must communicate meaning. Avoid decorative color usage."
      />

      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-light">Black and White First</h2>
        <div className="prose max-w-none text-foreground-secondary">
          <p>
            Purposeful Design is inherently monochromatic. A black and white foundation ensures that when color is introduced, it stands out and conveys specific intent.
          </p>
          <Callout type="principle">
            Color used for decoration alone is noise. Color earns its place by carrying meaning — status, urgency, category, action. If you can remove a color without losing information, you should.
          </Callout>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-light">Semantic Tokens</h2>
        <div className="grid gap-6 md:grid-cols-2">
          
          <div className="border border-border p-6">
            <div className="mb-4 flex items-center gap-4">
              <div className="h-10 w-10 rounded-xs bg-success" />
              <div>
                <h3 className="font-medium text-foreground">Success</h3>
                <p className="text-sm text-foreground-muted">Operation completed.</p>
              </div>
            </div>
            <p className="text-sm text-foreground-secondary">
              Use for valid states, successful submissions, and positive confirmations. Do NOT use for "go" actions or brand expression.
            </p>
          </div>

          <div className="border border-border p-6">
            <div className="mb-4 flex items-center gap-4">
              <div className="h-10 w-10 rounded-xs bg-warning" />
              <div>
                <h3 className="font-medium text-foreground">Warning</h3>
                <p className="text-sm text-foreground-muted">Requires attention.</p>
              </div>
            </div>
            <p className="text-sm text-foreground-secondary">
              Use for approaching limits or reversible risks. Do NOT use for general emphasis or decoration.
            </p>
          </div>

          <div className="border border-border p-6">
            <div className="mb-4 flex items-center gap-4">
              <div className="h-10 w-10 rounded-xs bg-danger" />
              <div>
                <h3 className="font-medium text-foreground">Danger</h3>
                <p className="text-sm text-foreground-muted">Operation failed.</p>
              </div>
            </div>
            <p className="text-sm text-foreground-secondary">
              Use for destructive actions, irreversible risks, and validation errors. Do NOT use for "stop" styling or general negatives.
            </p>
          </div>

          <div className="border border-border p-6">
            <div className="mb-4 flex items-center gap-4">
              <div className="h-10 w-10 rounded-xs bg-info" />
              <div>
                <h3 className="font-medium text-foreground">Info</h3>
                <p className="text-sm text-foreground-muted">Contextual help.</p>
              </div>
            </div>
            <p className="text-sm text-foreground-secondary">
              Use for neutral notifications and system messages requiring no action. Do NOT use for primary communication or brand color.
            </p>
          </div>

        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-light">Surface & Foreground</h2>
        <div className="prose max-w-none text-foreground-secondary">
          <p>
            The neutral palette provides structure without stealing attention. It relies on contrast to establish hierarchy.
          </p>
          <ul className="list-inside list-disc space-y-2 text-sm">
            <li><strong>Foreground:</strong> Primary text, high contrast.</li>
            <li><strong>Foreground Secondary:</strong> Supporting copy and descriptions.</li>
            <li><strong>Foreground Muted:</strong> Timestamps and metadata. Not for body copy.</li>
            <li><strong>Surface:</strong> Cards, sidebars, panels.</li>
            <li><strong>Surface Subtle:</strong> Alternate row backgrounds, code blocks, input fills.</li>
          </ul>
        </div>
      </div>

      <CTA
        title="Typography"
        description="The primary communication tool of Purposeful Design."
        href="/foundations/typography"
        label="VIEW TYPOGRAPHY"
      />
    </PageShell>
  )
}
