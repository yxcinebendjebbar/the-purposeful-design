import type { Metadata } from 'next'
import { PageShell, PageHeader, CTA, Callout } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Spacing System',
  description: 'Predictable, consistent, and scalable spacing for Purposeful Design.',
}

export default function SpacingPage() {
  return (
    <PageShell>
      <PageHeader
        label="Foundations"
        title="Spacing System"
        description="Spacing communicates relationship. Elements that are close are related. Elements that are far are separate."
      />

      <div className="mb-16">
        <Callout type="law">
          White space is not empty. It is structure. Removing white space to fit more content destroys all grouping and hierarchy functions simultaneously.
        </Callout>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-light">Base-4 Scale</h2>
        <div className="prose max-w-none text-foreground-secondary">
          <p>
            The system uses a strict base-4 scale. This creates a predictable, grid-aligned system that never requires arbitrary intermediate values. 
          </p>
        </div>
        
        <div className="mt-8 space-y-2">
          {[
            { token: '1', size: '4px', usage: 'Tight icon padding, minimal gaps' },
            { token: '2', size: '8px', usage: 'Default tight spacing, label-to-input' },
            { token: '3', size: '12px', usage: 'Close related elements' },
            { token: '4', size: '16px', usage: 'Standard component padding' },
            { token: '5', size: '20px', usage: 'Medium gaps' },
            { token: '6', size: '24px', usage: 'Generous component padding (cards)' },
            { token: '8', size: '32px', usage: 'Between related sections' },
            { token: '10', size: '40px', usage: 'Between major component groups' },
            { token: '16', size: '64px', usage: 'Between major sections on a page' },
            { token: '24', size: '96px', usage: 'Hero section padding, top-level whitespace' },
          ].map((item) => (
            <div key={item.token} className="flex items-center gap-4 border-b border-border-subtle py-3 text-sm">
              <div className="w-16 font-mono text-foreground-muted">{item.token}</div>
              <div className="w-16 font-mono text-foreground">{item.size}</div>
              <div className="flex-1 text-foreground-secondary">{item.usage}</div>
              <div className="w-24">
                <div className="h-4 bg-primary" style={{ width: item.size }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-light">Component Spacing Guidelines</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border border-border p-6">
            <h3 className="mb-2 font-medium text-foreground">Internal Component Spacing</h3>
            <p className="text-sm text-foreground-secondary">
              Use `insetSm` (8px) for badges, `insetMd` (16px) for inputs and buttons, and `insetLg` (24px) for cards. Never arbitrarily change internal padding unless creating a strictly compact variant.
            </p>
          </div>
          <div className="border border-border p-6">
            <h3 className="mb-2 font-medium text-foreground">Form Groups</h3>
            <p className="text-sm text-foreground-secondary">
              Use `labelField` (8px) between a label and input. Use `fieldHelper` (6px) between the input and error text. Maintain a strict `group` spacing (32px) between completely separate form fields.
            </p>
          </div>
        </div>
      </div>

      <CTA
        title="Layout System"
        description="Container widths, grids, and page architecture."
        href="/foundations/layout"
        label="VIEW LAYOUT"
      />
    </PageShell>
  )
}
