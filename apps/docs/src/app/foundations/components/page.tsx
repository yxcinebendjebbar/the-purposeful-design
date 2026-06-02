import type { Metadata } from 'next'
import { PageShell, PageHeader, CTA } from '@/components/ui'
import { Button, Input, Textarea, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Alert, AlertTitle, AlertDescription, Separator } from '@the-purposeful-design/ui'

export const metadata: Metadata = {
  title: 'Foundation Components',
  description: 'The core primitives demonstrating the token system.',
}

export default function ComponentsPage() {
  return (
    <PageShell>
      <PageHeader
        label="Foundations"
        title="Foundation Components"
        description="These seven primitives are not a fully featured component library. They exist to demonstrate how the token system is applied to interactive elements."
      />

      {/* BUTTONS */}
      <div className="mb-16 border-t border-border pt-16">
        <h2 className="mb-2 text-2xl font-light">Button</h2>
        <p className="mb-8 text-sm text-foreground-secondary">
          Trigger an action. The button system intentionally excludes destructive/success variants to enforce the rule that colors should be reserved for state feedback, not component styling.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Action</Button>
          <Button variant="secondary">Secondary Action</Button>
          <Button variant="ghost">Ghost Action</Button>
        </div>
      </div>

      {/* INPUTS */}
      <div className="mb-16 border-t border-border pt-16">
        <h2 className="mb-2 text-2xl font-light">Input & Textarea</h2>
        <p className="mb-8 text-sm text-foreground-secondary">
          Subtle border that strengthens on focus to communicate active state. Background offset defines the interactive area.
        </p>
        <div className="grid max-w-md gap-4">
          <Input id="demo-email" label="Email address" placeholder="Enter your email address..." />
          <Input id="demo-error" label="Error input" placeholder="Invalid input example" error="This is an error message" />
          <Textarea id="demo-message" label="Message" placeholder="Enter your message..." />
        </div>
      </div>

      {/* CARDS */}
      <div className="mb-16 border-t border-border pt-16">
        <h2 className="mb-2 text-2xl font-light">Card</h2>
        <p className="mb-8 text-sm text-foreground-secondary">
          Cards default to 0px border radius and no shadow. They rely on borders for containment to avoid "Infinite Card Syndrome."
        </p>
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Purposeful Card</CardTitle>
            <CardDescription>Groups related information into a discrete entity.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground-secondary">
              This card uses sharp corners and zero elevation, grounding it securely in the page structure.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" size="sm">Acknowledge</Button>
          </CardFooter>
        </Card>
      </div>

      {/* BADGES */}
      <div className="mb-16 border-t border-border pt-16">
        <h2 className="mb-2 text-2xl font-light">Badge</h2>
        <p className="mb-8 text-sm text-foreground-secondary">
          Displays status or classification. Uses minimal rounding (2px) to communicate containment without looking interactive.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="neutral">Neutral</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>

      {/* ALERTS */}
      <div className="mb-16 border-t border-border pt-16">
        <h2 className="mb-2 text-2xl font-light">Alert</h2>
        <p className="mb-8 text-sm text-foreground-secondary">
          Communicates important messages. Document-like structure (0px radius) relying heavily on semantic color contracts.
        </p>
        <div className="grid max-w-lg gap-4">
          <Alert variant="info">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            <AlertTitle>System Update</AlertTitle>
            <AlertDescription>The system will undergo maintenance at midnight.</AlertDescription>
          </Alert>
          <Alert variant="danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
            <AlertTitle>Payment Failed</AlertTitle>
            <AlertDescription>Your card was declined. Please update your billing info.</AlertDescription>
          </Alert>
        </div>
      </div>

      <Separator />

      <div className="mt-16">
        <CTA
          title="Return to Introduction"
          description="Ready to use Purposeful Design?"
          href="/getting-started"
          label="GET STARTED"
        />
      </div>
    </PageShell>
  )
}
