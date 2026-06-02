import type { Metadata } from 'next'
import { Alert, AlertTitle, AlertDescription, Badge, Button, Separator } from '@the-purposeful-design/ui'
import { ArrowRight, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Alert',
  description: 'System-level communication. Info, success, warning, and danger states with icon, title, description, and action slots.',
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
    <div className="mb-3 flex flex-col gap-3 rounded-sm border border-stone-200 bg-stone-50 p-6">
      {children}
    </div>
  )
}

export default function AlertPage() {
  return (
    <article>
      <header className="mb-10 border-b border-stone-200 pb-8">
        <div className="mb-3 flex items-center gap-3">
          <p className="label text-stone-400">Components</p>
          <span className="text-stone-300">/</span>
          <Badge variant="neutral" size="sm">stable</Badge>
        </div>
        <h1 className="text-4xl font-light tracking-tight text-stone-950">Alert</h1>
        <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-stone-500">
          System-level messages that interrupt the flow with purpose.
          Four variants, each with a documented semantic contract.
        </p>
      </header>

      <Section title="Purpose">
        <p className="text-sm leading-relaxed text-stone-600 max-w-prose">
          Alerts communicate the state of the system to the user. They answer
          the question: <em>"What just happened, and what should I do?"</em>
          Unlike badges (which classify items) and toasts (which are transient),
          alerts are persistent messages that remain until the condition is resolved.
        </p>
      </Section>

      <Section title="All Variants">
        <Preview>
          <Alert
            variant="info"
            title="New version available"
            description="Version 2.0 includes breaking changes. Review the migration guide before upgrading."
          />
          <Alert
            variant="success"
            title="Changes saved"
            description="Your profile has been updated successfully."
          />
          <Alert
            variant="warning"
            title="Storage limit approaching"
            description="You've used 85% of your 5GB storage. Upgrade your plan to avoid service interruption."
          />
          <Alert
            variant="danger"
            title="Payment failed"
            description="Your card ending in 4242 was declined. Update your payment method to restore access."
          />
        </Preview>
        <CodeBlock code={`<Alert variant="info" title="New version available"
  description="Review the migration guide before upgrading." />

<Alert variant="success" title="Changes saved"
  description="Your profile has been updated successfully." />

<Alert variant="warning" title="Storage limit approaching"
  description="You've used 85% of your 5GB storage." />

<Alert variant="danger" title="Payment failed"
  description="Your card was declined. Update your payment method." />`} />
      </Section>

      <Section title="With Action">
        <Preview>
          <Alert
            variant="warning"
            title="Email not verified"
            description="Some features are restricted until you verify your email address."
            action={
              <Button variant="secondary" size="sm">Resend verification email</Button>
            }
          />
          <Alert
            variant="danger"
            title="Account suspended"
            description="Your account has been suspended due to a billing issue."
            action={
              <div className="flex gap-2">
                <Button variant="secondary" size="sm">Update billing</Button>
                <Button variant="ghost" size="sm">Contact support</Button>
              </div>
            }
          />
        </Preview>
        <CodeBlock code={`<Alert
  variant="warning"
  title="Email not verified"
  description="Some features are restricted."
  action={
    <Button variant="secondary" size="sm">
      Resend verification email
    </Button>
  }
/>`} />
      </Section>

      <Section title="Without Icon">
        <Preview>
          <Alert
            variant="info"
            showIcon={false}
            title="Scheduled maintenance"
            description="The service will be unavailable on Sunday, June 8 from 2:00–4:00 AM UTC."
          />
        </Preview>
        <CodeBlock code={`<Alert
  variant="info"
  showIcon={false}
  title="Scheduled maintenance"
  description="The service will be unavailable on Sunday, June 8 from 2:00–4:00 AM UTC."
/>`} />
      </Section>

      <Section title="Composition API">
        <Preview>
          <Alert variant="danger">
            <AlertTitle>Your session is expiring</AlertTitle>
            <AlertDescription>
              You will be logged out in <strong>5 minutes</strong> due to inactivity.
              Save any unsaved work now.
            </AlertDescription>
          </Alert>
        </Preview>
        <CodeBlock code={`// Use the composition API for rich content in the description
<Alert variant="danger">
  <AlertTitle>Your session is expiring</AlertTitle>
  <AlertDescription>
    You will be logged out in <strong>5 minutes</strong> due to inactivity.
  </AlertDescription>
</Alert>`} />
      </Section>

      <Section title="Accessibility">
        <div className="space-y-2 text-sm text-stone-600 max-w-prose">
          <p>✅ <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">role="alert"</code> on <strong>danger</strong> and <strong>warning</strong> — assertive announcement.</p>
          <p>✅ <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">role="status"</code> on <strong>info</strong> and <strong>success</strong> — polite announcement.</p>
          <p>✅ Icons are <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">aria-hidden</code> — meaning is always in the text.</p>
          <p>✅ Dismiss button has an accessible label: "Dismiss alert".</p>
          <p>✅ <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">aria-live="polite"</code> set on status alerts for late-rendered content.</p>
        </div>
      </Section>

      <Section title="Anti-Patterns">
        <Alert variant="warning" title="Common mistakes" />
        <div className="mt-4 space-y-2 text-sm text-stone-600">
          <p>❌ <strong>Alerts for every form error</strong> — use Input's error prop for field-level errors. Use Alert for form-level errors only.</p>
          <p>❌ <strong>Danger for non-critical states</strong> — cry-wolf effect. Danger must mean danger.</p>
          <p>❌ <strong>Alert without a title</strong> — always name the type of alert. Color alone is insufficient.</p>
          <p>❌ <strong>Multiple alerts stacked</strong> — consolidate to one alert with a list, or prioritize.</p>
          <p>❌ <strong>Dismissible danger alerts</strong> — critical information should not be dismissible.</p>
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
                ['variant', "'default' | 'info' | 'success' | 'warning' | 'danger'", 'Alert type. Default: "default".'],
                ['title', 'string', 'Bold summary. Always required for accessibility.'],
                ['description', 'string', 'Supporting detail. What happened and what to do.'],
                ['action', 'ReactNode', 'Action(s) rendered below description.'],
                ['showIcon', 'boolean', 'Whether to show the leading icon. Default: true.'],
                ['dismissible', 'boolean', 'Whether the alert can be dismissed.'],
                ['onDismiss', '() => void', 'Callback when dismiss button is clicked.'],
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
        <a href="/components/badge" className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-950 hover:underline">
          <ArrowLeft size={14} /> Badge
        </a>
        <a href="/components/separator" className="inline-flex items-center gap-2 text-sm text-stone-950 hover:underline">
          Separator <ArrowRight size={14} />
        </a>
      </div>
    </article>
  )
}
