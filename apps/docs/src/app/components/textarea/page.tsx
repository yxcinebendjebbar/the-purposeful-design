import type { Metadata } from 'next'
import { Textarea, Button, Separator, Badge, Alert } from '@the-purposeful-design/ui'
import { ArrowRight, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Textarea',
  description: 'Long-form text entry with character counter, validation states, and accessibility.',
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

export default function TextareaPage() {
  return (
    <article>
      <header className="mb-10 border-b border-stone-200 pb-8">
        <div className="mb-3 flex items-center gap-3">
          <p className="label text-stone-400">Components</p>
          <span className="text-stone-300">/</span>
          <Badge variant="neutral" size="sm">stable</Badge>
        </div>
        <h1 className="text-4xl font-light tracking-tight text-stone-950">Textarea</h1>
        <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-stone-500">
          Long-form text entry. Same field structure as Input — label, textarea,
          helper text — with an additional character counter for constrained fields.
        </p>
      </header>

      <Section title="Purpose">
        <p className="text-sm leading-relaxed text-stone-600 max-w-prose">
          When users need to write more than a single line, the Input is insufficient.
          The Textarea extends the field pattern with a resizable area, character counting,
          and progressive feedback as limits are approached. Users should never be surprised
          by a character limit — they should see it before they hit it.
        </p>
      </Section>

      <Section title="Default">
        <Preview>
          <Textarea
            id="bio-demo"
            label="Bio"
            placeholder="Tell us about yourself..."
            description="Appears on your public profile."
            rows={4}
          />
        </Preview>
        <CodeBlock code={`<Textarea
  id="bio"
  label="Bio"
  placeholder="Tell us about yourself..."
  description="Appears on your public profile."
  rows={4}
/>`} />
      </Section>

      <Section title="With Character Counter">
        <Preview>
          <Textarea
            id="tweet-demo"
            label="Post content"
            placeholder="What's on your mind?"
            maxLength={280}
            rows={3}
          />
        </Preview>
        <CodeBlock code={`<Textarea
  id="post"
  label="Post content"
  placeholder="What's on your mind?"
  maxLength={280}
  rows={3}
/>`} />
        <p className="mt-3 text-sm text-stone-500">
          The counter shifts to <strong>amber</strong> at 80% capacity and <strong>red</strong> at 95%.
          Users can plan content before hitting the limit.
        </p>
      </Section>

      <Section title="Validation States">
        <Preview>
          <div className="flex flex-col gap-5">
            <Textarea
              id="error-demo"
              label="Description"
              defaultValue="Too short"
              error="Description must be at least 50 characters."
            />
            <Textarea
              id="success-demo"
              label="Description"
              defaultValue="This is a well-written description that provides enough detail for the user to understand the purpose of this field without being overwhelming."
              success="Looks good."
            />
          </div>
        </Preview>
        <CodeBlock code={`<Textarea
  id="desc"
  label="Description"
  error="Description must be at least 50 characters."
/>

<Textarea
  id="desc"
  label="Description"
  defaultValue="A well-written description..."
  success="Looks good."
/>`} />
      </Section>

      <Section title="Required with Counter">
        <Preview>
          <Textarea
            id="feedback-demo"
            label="Feedback"
            placeholder="Describe your experience in detail..."
            description="Be specific. Vague feedback is not actionable."
            required
            maxLength={500}
            rows={5}
          />
        </Preview>
        <CodeBlock code={`<Textarea
  id="feedback"
  label="Feedback"
  description="Be specific. Vague feedback is not actionable."
  required
  maxLength={500}
  rows={5}
/>`} />
      </Section>

      <Section title="Accessibility">
        <div className="space-y-2 text-sm text-stone-600 max-w-prose">
          <p>✅ Label always associated via <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">htmlFor + id</code>.</p>
          <p>✅ Character counter uses <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">aria-live="polite"</code> for screen reader updates.</p>
          <p>✅ <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">aria-describedby</code> connects both helper text and counter to the textarea.</p>
          <p>✅ <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">aria-invalid</code> set on error state.</p>
          <p>✅ Counter provides accessible label: "X characters remaining".</p>
        </div>
      </Section>

      <Section title="Anti-Patterns">
        <Alert variant="warning" title="Common mistakes" />
        <div className="mt-4 space-y-2 text-sm text-stone-600">
          <p>❌ <strong>No character counter when there is a limit</strong> — users hit the wall without warning.</p>
          <p>❌ <strong>Fixed height textareas</strong> — allow resize unless layout strictly requires fixed height.</p>
          <p>❌ <strong>Using Textarea for structured data</strong> — use multiple Input fields instead.</p>
          <p>❌ <strong>Placeholder as the only instruction</strong> — always show a label and description.</p>
        </div>
      </Section>

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
                ['id', 'string (required)', 'Unique identifier for label association.'],
                ['label', 'string (required)', 'Visible label text.'],
                ['description', 'string', 'Helper text below the textarea.'],
                ['error', 'string', 'Validation error message.'],
                ['success', 'string', 'Validation success message.'],
                ['required', 'boolean', 'Marks field as required.'],
                ['maxLength', 'number', 'Shows character counter when set.'],
                ['rows', 'number', 'Minimum visible rows. Default: 3.'],
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
        <a href="/components/input" className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-950 hover:underline">
          <ArrowLeft size={14} /> Input
        </a>
        <a href="/components/card" className="inline-flex items-center gap-2 text-sm text-stone-950 hover:underline">
          Card <ArrowRight size={14} />
        </a>
      </div>
    </article>
  )
}
