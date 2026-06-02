import type { Metadata } from 'next'
import { Badge, Separator, Alert, Button } from '@the-purposeful-design/ui'
import { ArrowRight, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Badge',
  description: 'Status communication. Classifies items at a glance with a documented semantic contract per variant.',
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="overflow-x-auto rounded-sm border border-stone-200 bg-stone-50 p-4 text-xs leading-relaxed text-stone-700">
      <code>{code}</code>
    </pre>
  )
}
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="mb-5 text-lg font-medium text-stone-950">{title}</h2>
      {children}
    </section>
  )
}
function Preview({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex flex-wrap items-center gap-3 rounded-sm border border-stone-200 bg-white p-6">
      {children}
    </div>
  )
}

export default function BadgePage() {
  return (
    <article>
      <header className="mb-10 border-b border-stone-200 pb-8">
        <div className="mb-3 flex items-center gap-3">
          <p className="label text-stone-400">Components</p>
          <span className="text-stone-300">/</span>
          <Badge variant="neutral" size="sm">stable</Badge>
        </div>
        <h1 className="text-4xl font-light tracking-tight text-stone-950">Badge</h1>
        <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-stone-500">
          Status communication. Not decoration.
          Each variant carries a documented semantic contract.
        </p>
      </header>

      <Section title="Purpose">
        <p className="text-sm leading-relaxed text-stone-600 max-w-prose">
          Badges exist to classify items during scanning. A user reading a list of
          projects needs to know which are active, which are pending, and which have
          failed — without opening each one. The badge carries that signal inline.
          Its power depends entirely on consistent use. The moment "success" appears
          decoratively, the system's classification contract breaks.
        </p>
      </Section>

      <Section title="Variants">
        <Preview>
          <Badge variant="neutral">Neutral</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="outline">Outline</Badge>
        </Preview>
        <CodeBlock code={`<Badge variant="neutral">Neutral</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="outline">Outline</Badge>`} />
      </Section>

      <Section title="With Status Dot">
        <Preview>
          <Badge variant="success" dot>Active</Badge>
          <Badge variant="warning" dot>Pending</Badge>
          <Badge variant="danger" dot>Failed</Badge>
          <Badge variant="neutral" dot>Draft</Badge>
        </Preview>
        <CodeBlock code={`<Badge variant="success" dot>Active</Badge>
<Badge variant="warning" dot>Pending</Badge>
<Badge variant="danger" dot>Failed</Badge>
<Badge variant="neutral" dot>Draft</Badge>`} />
        <p className="mt-3 text-sm text-stone-500">
          The dot reinforces status with shape as well as color — useful for users
          with color vision deficiencies.
        </p>
      </Section>

      <Section title="Sizes">
        <Preview>
          <Badge variant="success" size="sm">Small</Badge>
          <Badge variant="success" size="md">Medium</Badge>
        </Preview>
        <CodeBlock code={`<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>  {/* default */}`} />
      </Section>

      <Section title="Semantic Contracts">
        <p className="mb-4 text-sm text-stone-500">
          Every variant has a single defined meaning. Using a variant outside its contract
          destroys the system's legibility.
        </p>
        <div className="divide-y divide-stone-200 border border-stone-200 text-sm">
          {[
            {
              variant: 'neutral' as const,
              label: 'Neutral',
              use: 'Categories, labels, counts, classifications with no status meaning.',
              avoid: 'Status without meaning. "Default" styling.',
            },
            {
              variant: 'success' as const,
              label: 'Success',
              use: 'Active, published, verified, complete, healthy.',
              avoid: '"New feature" labels. Promotional badges. Decorative green.',
            },
            {
              variant: 'warning' as const,
              label: 'Warning',
              use: 'Pending, expiring, incomplete, needs review, approaching limit.',
              avoid: 'Items that are not actually at risk. General emphasis.',
            },
            {
              variant: 'danger' as const,
              label: 'Danger',
              use: 'Failed, expired, blocked, error, requires immediate action.',
              avoid: 'Low-priority items. "Red" for visual variety.',
            },
            {
              variant: 'info' as const,
              label: 'Info',
              use: 'New, updated, beta, in-progress, experimental.',
              avoid: 'Error states. Warning states. Success states.',
            },
          ].map((item) => (
            <div key={item.label} className="flex gap-4 p-4">
              <div className="w-20 shrink-0 pt-0.5">
                <Badge variant={item.variant}>{item.label}</Badge>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-stone-700 mb-0.5">Use for</p>
                <p className="text-xs text-stone-500 mb-2">{item.use}</p>
                <p className="text-xs font-medium text-stone-700 mb-0.5">Not for</p>
                <p className="text-xs text-stone-400">{item.avoid}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="In Context">
        <Preview>
          <div className="w-full divide-y divide-stone-200 border border-stone-200">
            {[
              { name: 'Brand identity design', status: 'success' as const, label: 'Active' },
              { name: 'Annual report layout', status: 'warning' as const, label: 'Review' },
              { name: 'Website redesign', status: 'danger' as const, label: 'Blocked' },
              { name: 'Icon system', status: 'neutral' as const, label: 'Draft' },
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between px-4 py-3">
                <p className="text-sm text-stone-950">{item.name}</p>
                <Badge variant={item.status} dot size="sm">{item.label}</Badge>
              </div>
            ))}
          </div>
        </Preview>
      </Section>

      <Section title="Anti-Patterns">
        <Alert variant="warning" title="Common mistakes" />
        <div className="mt-4 space-y-2 text-sm text-stone-600">
          <p>❌ <strong>Long badge text</strong> — over 3 words. Badges are labels, not sentences.</p>
          <p>❌ <strong>Multiple status variants in the same list</strong> — use one status dimension per list.</p>
          <p>❌ <strong>"success" for new features</strong> — "New" is info, not success.</p>
          <p>❌ <strong>Decorative badges</strong> — every badge must carry semantic information.</p>
          <p>❌ <strong>Clickable badges</strong> — badges are not actions. Use a Button.</p>
        </div>
      </Section>

      <Separator className="mb-8" />
      <div className="flex items-center justify-between">
        <a href="/components/card" className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-950 hover:underline">
          <ArrowLeft size={14} /> Card
        </a>
        <a href="/components/alert" className="inline-flex items-center gap-2 text-sm text-stone-950 hover:underline">
          Alert <ArrowRight size={14} />
        </a>
      </div>
    </article>
  )
}
