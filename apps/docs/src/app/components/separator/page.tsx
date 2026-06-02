import type { Metadata } from 'next'
import { Separator, Badge, Alert } from '@the-purposeful-design/ui'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Separator',
  description: 'Horizontal and vertical rules for separating content groups. Semantic with aria-orientation support.',
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

export default function SeparatorPage() {
  return (
    <article>
      <header className="mb-10 border-b border-stone-200 pb-8">
        <div className="mb-3 flex items-center gap-3">
          <p className="label text-stone-400">Components</p>
          <span className="text-stone-300">/</span>
          <Badge variant="neutral" size="sm">stable</Badge>
        </div>
        <h1 className="text-4xl font-light tracking-tight text-stone-950">Separator</h1>
        <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-stone-500">
          A 1px rule. The lowest-cost way to communicate a boundary.
          Horizontal and vertical. Decorative or semantic.
        </p>
      </header>

      <Section title="Purpose">
        <p className="text-sm leading-relaxed text-stone-600 max-w-prose">
          The Separator exists to reduce the effort of perceiving content group boundaries.
          A 1px line costs the eye zero processing time. Whitespace alone requires the
          eye to measure distance — a separator removes that measurement.
          Use sparingly: overuse destroys hierarchy by creating too many perceived groups.
        </p>
      </Section>

      <Section title="Horizontal (Default)">
        <div className="mb-3 rounded-sm border border-stone-200 bg-white p-6">
          <p className="text-sm text-stone-950 mb-4">Section A</p>
          <Separator />
          <p className="text-sm text-stone-950 mt-4">Section B</p>
        </div>
        <CodeBlock code={`<p>Section A</p>
<Separator />
<p>Section B</p>`} />
      </Section>

      <Section title="Vertical">
        <div className="mb-3 rounded-sm border border-stone-200 bg-white p-6">
          <div className="flex h-8 items-center gap-4">
            <span className="text-sm text-stone-950">Home</span>
            <Separator orientation="vertical" />
            <span className="text-sm text-stone-950">Projects</span>
            <Separator orientation="vertical" />
            <span className="text-sm text-stone-950">Settings</span>
          </div>
        </div>
        <CodeBlock code={`<div className="flex h-8 items-center gap-4">
  <span>Home</span>
  <Separator orientation="vertical" />
  <span>Projects</span>
  <Separator orientation="vertical" />
  <span>Settings</span>
</div>`} />
      </Section>

      <Section title="Decorative vs Semantic">
        <div className="space-y-3 text-sm text-stone-600 max-w-prose">
          <p>
            <strong className="text-stone-900">decorative={String(true)} (default)</strong> — sets <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">role="none"</code>.
            Screen readers ignore it. Use for visual separation only.
          </p>
          <p>
            <strong className="text-stone-900">decorative={String(false)}</strong> — sets <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">role="separator"</code> with <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">aria-orientation</code>.
            Screen readers announce it. Use when the boundary is semantically meaningful
            (e.g., between navigation regions).
          </p>
        </div>
        <div className="mt-4">
          <CodeBlock code={`{/* Visual only — screen readers skip it */}
<Separator decorative />

{/* Semantic — screen readers announce "separator" */}
<Separator decorative={false} orientation="horizontal" />`} />
        </div>
      </Section>

      <Section title="Spacing Guidance">
        <div className="divide-y divide-stone-200 border border-stone-200 text-sm">
          {[
            { context: 'Between card sections', spacing: 'None (use CardDivider instead)' },
            { context: 'Between form sections', spacing: 'mt-8 mb-6' },
            { context: 'Between page sections', spacing: 'my-12' },
            { context: 'In toolbars (vertical)', spacing: 'mx-2' },
            { context: 'In breadcrumbs (vertical)', spacing: 'mx-1' },
          ].map((row) => (
            <div key={row.context} className="flex justify-between px-4 py-3">
              <span className="text-stone-700">{row.context}</span>
              <code className="text-xs text-stone-500">{row.spacing}</code>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Anti-Patterns">
        <Alert variant="warning" title="Common mistakes" />
        <div className="mt-4 space-y-2 text-sm text-stone-600">
          <p>❌ <strong>Using Separator as a spacer</strong> — use margin/padding. A separator implies a boundary.</p>
          <p>❌ <strong>Stacking multiple separators</strong> — one boundary, one line.</p>
          <p>❌ <strong>Separator inside a Card body</strong> — use <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">{'<CardDivider>'}</code> instead.</p>
          <p>❌ <strong>Colored separators</strong> — colored lines imply meaning. Use border-color tokens if semantics are needed.</p>
        </div>
      </Section>

      <Section title="API Reference">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-stone-200">
                <th className="py-2 pr-6 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Prop</th>
                <th className="py-2 pr-6 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Type</th>
                <th className="py-2 pr-6 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Default</th>
                <th className="py-2 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {[
                ['orientation', "'horizontal' | 'vertical'", "'horizontal'", 'Direction of the separator.'],
                ['decorative', 'boolean', 'true', 'If true, role="none". If false, role="separator".'],
              ].map(([prop, type, def, desc]) => (
                <tr key={prop}>
                  <td className="py-2.5 pr-6 font-mono text-xs text-stone-800">{prop}</td>
                  <td className="py-2.5 pr-6 font-mono text-xs text-stone-500">{type}</td>
                  <td className="py-2.5 pr-6 font-mono text-xs text-stone-400">{def}</td>
                  <td className="py-2.5 text-xs text-stone-600">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Separator className="mb-8" />
      <div className="flex items-center">
        <a href="/components/alert" className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-950 hover:underline">
          <ArrowLeft size={14} /> Alert
        </a>
      </div>
    </article>
  )
}
