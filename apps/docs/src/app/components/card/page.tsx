import type { Metadata } from 'next'
import {
  Card, CardHeader, CardTitle, CardDescription,
  CardContent, CardFooter, CardDivider,
  Button, Badge, Separator, Alert,
} from '@the-purposeful-design/ui'
import { ArrowRight, ArrowLeft, Settings, User, CreditCard } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Card',
  description: 'Information container. Groups related content into a discrete, scannable entity.',
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
    <div className="mb-3 rounded-sm border border-stone-200 bg-stone-50 p-6">
      {children}
    </div>
  )
}

export default function CardPage() {
  return (
    <article>
      <header className="mb-10 border-b border-stone-200 pb-8">
        <div className="mb-3 flex items-center gap-3">
          <p className="label text-stone-400">Components</p>
          <span className="text-stone-300">/</span>
          <Badge variant="neutral" size="sm">stable</Badge>
        </div>
        <h1 className="text-4xl font-light tracking-tight text-stone-950">Card</h1>
        <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-stone-500">
          An information container. Groups related content into a discrete entity
          with a clear boundary. One card = one idea.
        </p>
      </header>

      <Section title="Purpose">
        <p className="text-sm leading-relaxed text-stone-600 max-w-prose">
          Cards exist to group. When information is grouped, users can scan
          a page by card instead of by line — a fundamental reduction in cognitive load.
          Purposeful Design cards use <strong>borders, not shadows</strong>,
          because borders define boundaries without implying false elevation.
        </p>
      </Section>

      <Section title="Anatomy">
        <Preview>
          <Card className="max-w-sm">
            <CardHeader>
              <CardTitle>Account overview</CardTitle>
              <CardDescription>Your current plan and usage summary.</CardDescription>
            </CardHeader>
            <CardDivider />
            <CardContent className="pt-6">
              <p className="text-sm text-stone-500">Content goes here.</p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" size="sm">View details</Button>
            </CardFooter>
          </Card>
        </Preview>
        <CodeBlock code={`<Card>
  <CardHeader>
    <CardTitle>Account overview</CardTitle>
    <CardDescription>Your current plan and usage summary.</CardDescription>
  </CardHeader>
  <CardDivider />
  <CardContent>
    <p>Content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button variant="secondary" size="sm">View details</Button>
  </CardFooter>
</Card>`} />
      </Section>

      <Section title="Simple Card">
        <Preview>
          <Card className="max-w-sm">
            <CardHeader>
              <CardTitle>Simple heading</CardTitle>
              <CardDescription>This card has no footer or divider.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-stone-500 leading-relaxed">
                Use the simple form when there is no primary action — the card
                is informational only.
              </p>
            </CardContent>
          </Card>
        </Preview>
      </Section>

      <Section title="Interactive Card">
        <Preview>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { icon: User, label: 'Profile', desc: 'Manage your identity' },
              { icon: Settings, label: 'Settings', desc: 'Configure preferences' },
              { icon: CreditCard, label: 'Billing', desc: 'Plans and invoices' },
            ].map(({ icon: Icon, label, desc }) => (
              <Card key={label} interactive>
                <CardContent className="pt-6">
                  <Icon size={18} className="mb-3 text-stone-400" />
                  <p className="text-sm font-medium text-stone-950">{label}</p>
                  <p className="mt-0.5 text-xs text-stone-500">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Preview>
        <CodeBlock code={`<Card interactive>
  <CardContent className="pt-6">
    <User size={18} className="mb-3 text-stone-400" />
    <p className="text-sm font-medium">Profile</p>
    <p className="text-xs text-stone-500">Manage your identity</p>
  </CardContent>
</Card>`} />
        <p className="mt-3 text-sm text-stone-500">
          Use <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">interactive</code> only when
          the entire card is a single action target. Add <code className="rounded bg-stone-100 px-1 py-0.5 text-xs">aria-label</code> for screen reader clarity.
        </p>
      </Section>

      <Section title="With Badge in Header">
        <Preview>
          <Card className="max-w-sm">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>Pro Plan</CardTitle>
                  <CardDescription className="mt-1">$29 / month</CardDescription>
                </div>
                <Badge variant="success" dot>Active</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-stone-500">Unlimited projects, 50GB storage, priority support.</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm">Change plan</Button>
            </CardFooter>
          </Card>
        </Preview>
      </Section>

      <Section title="Anti-Patterns">
        <Alert variant="warning" title="Common mistakes" />
        <div className="mt-4 space-y-2 text-sm text-stone-600">
          <p>❌ <strong>Cards within cards</strong> — creates visual confusion and broken hierarchy.</p>
          <p>❌ <strong>Card as decoration</strong> — every card must contain a meaningful information group.</p>
          <p>❌ <strong>No CardHeader</strong> — unlabelled containers are inaccessible and confusing.</p>
          <p>❌ <strong>Multiple primary actions in CardFooter</strong> — one primary action maximum per card.</p>
          <p>❌ <strong>Gradient or image card backgrounds</strong> — cards are boundaries, not canvases.</p>
        </div>
      </Section>

      <Separator className="mb-8" />
      <div className="flex items-center justify-between">
        <a href="/components/textarea" className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-950 hover:underline">
          <ArrowLeft size={14} /> Textarea
        </a>
        <a href="/components/badge" className="inline-flex items-center gap-2 text-sm text-stone-950 hover:underline">
          Badge <ArrowRight size={14} />
        </a>
      </div>
    </article>
  )
}
