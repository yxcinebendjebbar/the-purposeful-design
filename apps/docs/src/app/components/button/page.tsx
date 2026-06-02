import type { Metadata } from 'next'
import {
  Button,
  Separator,
  Badge,
  Alert,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@the-purposeful-design/ui'
import { ArrowRight, Plus, Download, Trash2, Save } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Button',
  description: 'The primary mechanism for user action. Three variants, three sizes, full accessibility.',
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

export default function ButtonPage() {
  return (
    <article>
      {/* Header */}
      <header className="mb-10 border-b border-stone-200 pb-8">
        <div className="mb-3 flex items-center gap-3">
          <p className="label text-stone-400">Components</p>
          <span className="text-stone-300">/</span>
          <Badge variant="neutral" size="sm">stable</Badge>
        </div>
        <h1 className="text-4xl font-light tracking-tight text-stone-950">Button</h1>
        <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-stone-500">
          Triggers an action. The single most important interactive element in any interface.
        </p>
      </header>

      {/* Purpose */}
      <Section title="Purpose">
        <div className="space-y-3 text-sm leading-relaxed text-stone-600 max-w-prose">
          <p>
            Buttons are the primary mechanism for users to act. Without them,
            an interface has no interaction model — it becomes a document, not a tool.
          </p>
          <p>
            Purposeful Design limits buttons to <strong className="text-stone-900">three variants</strong> by principle.
            This forces hierarchy. There can only be one primary action per screen context,
            which means the user always knows what to do next.
          </p>
        </div>
      </Section>

      {/* Variants */}
      <Section title="Variants">
        <Preview>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </Preview>
        <CodeBlock code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>`} />

        <div className="mt-4 grid gap-3 text-sm text-stone-600 sm:grid-cols-2">
          <div className="border border-stone-200 p-4">
            <p className="font-medium text-stone-900 mb-1">primary</p>
            <p>The most important action on the screen. Use once per view context. Never stack two primary buttons.</p>
          </div>
          <div className="border border-stone-200 p-4">
            <p className="font-medium text-stone-900 mb-1">secondary</p>
            <p>Supporting actions. Visually subordinate. Can appear multiple times, but prefer fewer.</p>
          </div>
          <div className="border border-stone-200 p-4">
            <p className="font-medium text-stone-900 mb-1">ghost</p>
            <p>Tertiary actions: cancel, dismiss, navigate, expand. Least visual weight.</p>
          </div>
          <div className="border border-stone-200 p-4">
            <p className="font-medium text-stone-900 mb-1">danger</p>
            <p>Destructive confirmation only. Never use for navigation. Always pair with confirmation.</p>
          </div>
        </div>
      </Section>

      {/* Sizes */}
      <Section title="Sizes">
        <Preview>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </Preview>
        <CodeBlock code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>  {/* default */}
<Button size="lg">Large</Button>`} />
        <div className="mt-3 grid gap-2 text-xs text-stone-500 sm:grid-cols-3">
          <p><strong className="text-stone-700">sm</strong> — Compact UI: table actions, toolbars, inline controls</p>
          <p><strong className="text-stone-700">md</strong> — Default. Forms, cards, most interfaces</p>
          <p><strong className="text-stone-700">lg</strong> — Hero CTAs, empty states, onboarding</p>
        </div>
      </Section>

      {/* Icons */}
      <Section title="With Icons">
        <Preview>
          <Button icon={<Plus size={15} />}>Add item</Button>
          <Button variant="secondary" icon={<Download size={15} />}>Export</Button>
          <Button variant="ghost" icon={<ArrowRight size={15} />} iconPosition="right">Continue</Button>
        </Preview>
        <CodeBlock code={`<Button icon={<Plus size={15} />}>Add item</Button>
<Button variant="secondary" icon={<Download size={15} />}>Export</Button>
<Button variant="ghost" icon={<ArrowRight size={15} />} iconPosition="right">
  Continue
</Button>`} />
      </Section>

      {/* Loading */}
      <Section title="Loading State">
        <Preview>
          <Button loading>Saving...</Button>
          <Button variant="secondary" loading>Uploading</Button>
        </Preview>
        <CodeBlock code={`<Button loading>Saving...</Button>
<Button variant="secondary" loading>Uploading</Button>`} />
        <p className="mt-3 text-sm text-stone-500">
          Loading preserves button dimensions to prevent layout shift. Interaction is disabled.
          The spinner replaces the left icon slot.
        </p>
      </Section>

      {/* asChild */}
      <Section title="asChild Pattern">
        <Preview>
          <Button asChild variant="primary">
            <a href="#aschild-example">Link styled as button</a>
          </Button>
        </Preview>
        <CodeBlock code={`// Use when you need a link (<a>) with button styles.
// Passes all props to the child element.
<Button asChild variant="primary">
  <a href="/dashboard">Go to dashboard</a>
</Button>

// Works with Next.js Link:
<Button asChild>
  <Link href="/dashboard">Dashboard</Link>
</Button>`} />
      </Section>

      {/* Disabled */}
      <Section title="Disabled State">
        <Preview>
          <Button disabled>Disabled primary</Button>
          <Button variant="secondary" disabled>Disabled secondary</Button>
        </Preview>
        <CodeBlock code={`<Button disabled>Disabled primary</Button>`} />
        <p className="mt-3 text-sm text-stone-500">
          Disabled buttons use 40% opacity. Prefer showing <em>why</em> a button is disabled
          via a tooltip or description rather than hiding the action entirely.
        </p>
      </Section>

      {/* Accessibility */}
      <Section title="Accessibility">
        <div className="space-y-2 text-sm text-stone-600 max-w-prose">
          <p>✅ Uses native <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">{`<button>`}</code> — keyboard accessible by default.</p>
          <p>✅ Focus ring: 2px, 2px offset, high-contrast. Meets WCAG 2.1 AA.</p>
          <p>✅ <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">aria-busy</code> set during loading state.</p>
          <p>✅ <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">aria-disabled</code> set when disabled or loading.</p>
          <p>✅ Icons are <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">aria-hidden</code> — meaning carried by label text.</p>
          <p>✅ <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">asChild</code> passes ARIA attributes to the child element.</p>
        </div>
      </Section>

      {/* Anti-Patterns */}
      <Section title="Anti-Patterns">
        <Alert variant="warning" title="Common mistakes" description="These patterns violate Purposeful Design principles." />
        <div className="mt-4 space-y-3 text-sm text-stone-600">
          <p>❌ <strong>Two primary buttons</strong> — defeats hierarchy. One context, one primary action.</p>
          <p>❌ <strong>Icon-only buttons without aria-label</strong> — inaccessible. Always label icon buttons.</p>
          <p>❌ <strong>Danger for non-destructive actions</strong> — cry-wolf effect. Reserve for genuine destruction.</p>
          <p>❌ <strong>Ghost for the main action</strong> — communicates the opposite of its intent.</p>
          <p>❌ <strong>Long button labels</strong> — buttons should fit one clear verb phrase. Max 4–5 words.</p>
        </div>
      </Section>

      {/* API */}
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
                ['variant', "'primary' | 'secondary' | 'ghost' | 'danger'", "'primary'", 'Visual hierarchy tier'],
                ['size', "'sm' | 'md' | 'lg'", "'md'", 'Spatial scale'],
                ['loading', 'boolean', 'false', 'Shows spinner, disables interaction'],
                ['disabled', 'boolean', 'false', 'Disables the button'],
                ['asChild', 'boolean', 'false', 'Render styles on child element'],
                ['icon', 'ReactNode', '—', 'Icon rendered in icon slot'],
                ['iconPosition', "'left' | 'right'", "'left'", 'Icon placement'],
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

      {/* Next */}
      <Separator className="mb-8" />
      <div className="flex items-center justify-between">
        <span className="text-sm text-stone-400">Components</span>
        <a href="/components/input" className="inline-flex items-center gap-2 text-sm text-stone-950 hover:underline">
          Input <ArrowRight size={14} />
        </a>
      </div>
    </article>
  )
}
