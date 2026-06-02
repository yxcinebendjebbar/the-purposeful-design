import type { Metadata } from 'next'
import {
  Input,
  Button,
  Separator,
  Badge,
  Alert,
} from '@the-purposeful-design/ui'
import { ArrowRight, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Input',
  description: 'Short-form text entry with label, description, validation states, and full accessibility wiring.',
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
    <div className="mb-3 rounded-sm border border-stone-200 bg-white p-6">
      {children}
    </div>
  )
}

export default function InputPage() {
  return (
    <article>
      {/* Header */}
      <header className="mb-10 border-b border-stone-200 pb-8">
        <div className="mb-3 flex items-center gap-3">
          <p className="label text-stone-400">Components</p>
          <span className="text-stone-300">/</span>
          <Badge variant="neutral" size="sm">stable</Badge>
        </div>
        <h1 className="text-4xl font-light tracking-tight text-stone-950">Input</h1>
        <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-stone-500">
          Short-form text entry. The foundation of every form.
          Wired for accessibility, validation, and progressive feedback.
        </p>
      </header>

      {/* Purpose */}
      <Section title="Purpose">
        <div className="space-y-3 text-sm leading-relaxed text-stone-600 max-w-prose">
          <p>
            The Input component solves a deceptively complex problem: giving
            the user a clear, accessible, consistently-behaving text entry field
            that communicates what is expected, what went wrong, and what succeeded.
          </p>
          <p>
            It wraps the raw <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">{`<input>`}</code> in
            a complete <strong className="text-stone-900">field structure</strong>:
            label → input → helper text. Every piece is wired for accessibility automatically.
          </p>
        </div>
      </Section>

      {/* Default */}
      <Section title="Default">
        <Preview>
          <Input
            id="email-demo"
            label="Email address"
            type="email"
            placeholder="you@company.com"
            description="We'll never share your email."
          />
        </Preview>
        <CodeBlock code={`<Input
  id="email"
  label="Email address"
  type="email"
  placeholder="you@company.com"
  description="We'll never share your email."
/>`} />
      </Section>

      {/* Required */}
      <Section title="Required Field">
        <Preview>
          <Input
            id="username-demo"
            label="Username"
            placeholder="johndoe"
            required
            description="Only letters, numbers, and underscores. Min 3 characters."
          />
        </Preview>
        <CodeBlock code={`<Input
  id="username"
  label="Username"
  placeholder="johndoe"
  required
  description="Only letters, numbers, and underscores."
/>`} />
      </Section>

      {/* Error state */}
      <Section title="Error State">
        <Preview>
          <Input
            id="email-error-demo"
            label="Email address"
            type="email"
            defaultValue="not-an-email"
            error="Enter a valid email address. It must include '@' and a domain."
          />
        </Preview>
        <CodeBlock code={`<Input
  id="email"
  label="Email address"
  defaultValue="not-an-email"
  error="Enter a valid email address. It must include '@' and a domain."
/>`} />
        <p className="mt-3 text-sm text-stone-500">
          Error messages must be actionable: tell the user what went wrong and how to fix it.
          Never say "Invalid input." Say what is invalid and why.
        </p>
      </Section>

      {/* Success state */}
      <Section title="Success State">
        <Preview>
          <Input
            id="username-success-demo"
            label="Username"
            defaultValue="purposeful_designer"
            success="Username is available."
          />
        </Preview>
        <CodeBlock code={`<Input
  id="username"
  label="Username"
  defaultValue="purposeful_designer"
  success="Username is available."
/>`} />
      </Section>

      {/* Disabled */}
      <Section title="Disabled State">
        <Preview>
          <Input
            id="email-disabled-demo"
            label="Email address"
            defaultValue="locked@company.com"
            description="Email cannot be changed. Contact support."
            disabled
          />
        </Preview>
        <CodeBlock code={`<Input
  id="email"
  label="Email address"
  defaultValue="locked@company.com"
  description="Email cannot be changed. Contact support."
  disabled
/>`} />
      </Section>

      {/* Multiple fields */}
      <Section title="Form Composition">
        <Preview>
          <div className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Input id="first-name-demo" label="First name" placeholder="Jane" required />
              <Input id="last-name-demo" label="Last name" placeholder="Smith" required />
            </div>
            <Input
              id="email-form-demo"
              label="Work email"
              type="email"
              placeholder="jane@company.com"
              required
            />
            <div className="flex justify-end gap-3 pt-2">
              <Button variant="ghost">Cancel</Button>
              <Button>Create account</Button>
            </div>
          </div>
        </Preview>
        <CodeBlock code={`<div className="grid gap-5 sm:grid-cols-2">
  <Input id="first-name" label="First name" placeholder="Jane" required />
  <Input id="last-name" label="Last name" placeholder="Smith" required />
</div>
<Input id="email" label="Work email" type="email" required />`} />
      </Section>

      {/* Accessibility */}
      <Section title="Accessibility">
        <div className="space-y-2 text-sm text-stone-600 max-w-prose">
          <p>✅ <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">{'<label>'}</code> always associated via <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">htmlFor + id</code>. Never use placeholder as a label replacement.</p>
          <p>✅ <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">aria-describedby</code> connects helper text to the input automatically.</p>
          <p>✅ <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">aria-invalid="true"</code> set on error state.</p>
          <p>✅ <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">aria-required</code> set when <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">required</code> is true.</p>
          <p>✅ Error icons are <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">aria-hidden</code> — meaning carried by error text.</p>
          <p>✅ Focus ring: 2px high-contrast ring. Visible on all background colors.</p>
        </div>
      </Section>

      {/* Anti-Patterns */}
      <Section title="Anti-Patterns">
        <Alert variant="warning" title="Common mistakes" />
        <div className="mt-4 space-y-2 text-sm text-stone-600">
          <p>❌ <strong>Placeholder as label</strong> — placeholder disappears on input. Always show a label.</p>
          <p>❌ <strong>Vague error messages</strong> — "Invalid" tells the user nothing. Be specific.</p>
          <p>❌ <strong>Success on every field</strong> — only show success when it communicates new information (e.g., availability check).</p>
          <p>❌ <strong>Hiding disabled inputs</strong> — show disabled inputs with explanation. Users need to know the field exists.</p>
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
                <th className="py-2 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {[
                ['id', 'string (required)', 'Unique identifier. Required for label association.'],
                ['label', 'string (required)', 'Visible label text. Always required.'],
                ['type', 'string', 'Native input type. Default: "text".'],
                ['description', 'string', 'Helper text shown below the input.'],
                ['error', 'string', 'Error message. Replaces description when set.'],
                ['success', 'string', 'Success message. Shown when field is valid.'],
                ['required', 'boolean', 'Marks field as required. Sets aria-required.'],
                ['disabled', 'boolean', 'Disables the field.'],
                ['state', "'error' | 'success' | 'warning'", 'Explicit state override.'],
              ].map(([prop, type, desc]) => (
                <tr key={prop}>
                  <td className="py-2.5 pr-6 font-mono text-xs text-stone-800">{prop}</td>
                  <td className="py-2.5 pr-6 font-mono text-xs text-stone-500">{type}</td>
                  <td className="py-2.5 text-xs text-stone-600">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Separator className="mb-8" />
      <div className="flex items-center justify-between">
        <a href="/components/button" className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-950 hover:underline">
          <ArrowLeft size={14} /> Button
        </a>
        <a href="/components/textarea" className="inline-flex items-center gap-2 text-sm text-stone-950 hover:underline">
          Textarea <ArrowRight size={14} />
        </a>
      </div>
    </article>
  )
}
