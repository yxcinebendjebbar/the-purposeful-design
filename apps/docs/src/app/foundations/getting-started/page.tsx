import type { Metadata } from 'next'
import Link from 'next/link'
import { PageShell, PageHeader, Card, CTA } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Getting Started',
  description:
    'An introduction to applying the Purposeful Design philosophy in your day-to-day design and development work.',
}

const steps = [
  {
    step: '01',
    title: 'Read the Philosophy',
    description:
      'Start with the foundational document. Understand why Purposeful Design exists, what problems it addresses, and how it differs from other design approaches you may have used.',
    href: '/philosophy',
    label: 'Read the Philosophy',
    time: '10 min read',
  },
  {
    step: '02',
    title: 'Understand the Problems',
    description:
      'Review the seven interface failures that Purposeful Design exists to prevent. Identify which of these patterns you recognize in your current work.',
    href: '/problem',
    label: 'View the Problems',
    time: '15 min read',
  },
  {
    step: '03',
    title: 'Read the Manifesto',
    description:
      'The twelve principles of the manifesto define what Purposeful Design stands for. Read them not as rules to follow, but as positions to understand and adopt.',
    href: '/manifesto',
    label: 'Read the Manifesto',
    time: '8 min read',
  },
  {
    step: '04',
    title: 'Learn the Pyramid',
    description:
      'The Purposeful Design Pyramid is the central structural model. Apply it to a current project: start at purpose, define content, establish hierarchy, then consider interaction and visual style.',
    href: '/pyramid',
    label: 'Explore the Pyramid',
    time: '12 min read',
  },
  {
    step: '05',
    title: 'Study the Anti-Patterns',
    description:
      "Audit your current interfaces against the documented anti-patterns. Identify which patterns are present in your work. This audit is one of the most valuable exercises in Purposeful Design.",
    href: '/anti-patterns',
    label: 'View Anti-Patterns',
    time: '20 min read',
  },
  {
    step: '06',
    title: 'Apply the Metrics',
    description:
      'Run the Purposeful Design metrics on one screen in your current product. Use the primary action count, the hierarchy recognition test, and the visual noise score as a baseline.',
    href: '/metrics',
    label: 'View the Metrics',
    time: '15 min exercise',
  },
]

const quickRefs = [
  {
    title: 'The Seven Principles',
    description: 'Core decision-making frameworks for daily design work',
    href: '/principles',
  },
  {
    title: 'The Fifteen Laws',
    description: 'Non-negotiable constraints — memorize the ones most relevant to your context',
    href: '/laws',
  },
  {
    title: 'The Vocabulary',
    description: 'Shared terminology for discussing design decisions clearly',
    href: '/vocabulary',
  },
]

export default function GettingStartedPage() {
  return (
    <PageShell>
      <PageHeader
        label="Getting Started"
        title="A philosophy is adopted, not installed."
        description="The Purposeful Design is not a library you configure or a system you implement. It is a way of thinking about design decisions. This guide introduces you to that thinking and shows you where to begin."
      />

      {/* What this is */}
      <div className="mb-20 grid gap-10 border border-stone-200 bg-white p-10 md:grid-cols-2">
        <div>
          <p className="label mb-4 text-stone-400">What The Purposeful Design is</p>
          <ul className="space-y-3">
            {[
              'A philosophy for making design decisions',
              'A framework for evaluating design outcomes',
              'A vocabulary for discussing design with precision',
              'A set of principles that prioritize user benefit',
              'A diagnostic tool for identifying interface failures',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-stone-700">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-stone-950" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label mb-4 text-stone-400">What The Purposeful Design is not</p>
          <ul className="space-y-3">
            {[
              'A component library (not yet)',
              'A CSS framework',
              'A set of visual templates',
              'A replacement for design judgment',
              'A guarantee of good design outcomes',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-stone-400">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-stone-300" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Learning Path */}
      <section className="mb-20">
        <div className="mb-10">
          <p className="label mb-3 text-stone-400">Learning Path</p>
          <h2 className="text-2xl font-light tracking-tight text-stone-950">
            Recommended reading order
          </h2>
          <p className="mt-3 max-w-[52ch] text-base text-stone-500">
            The Purposeful Design is best understood as a system, not a collection of independent
            documents. Each piece builds on the previous. This is the recommended order.
          </p>
        </div>

        <div className="space-y-0">
          {steps.map((step) => (
            <div
              key={step.step}
              className="grid gap-6 border-t border-stone-200 py-8 md:grid-cols-[80px_1fr_auto] md:items-center"
            >
              <span className="label text-stone-300">{step.step}</span>
              <div>
                <h3 className="mb-1 text-base font-medium text-stone-950">{step.title}</h3>
                <p className="text-sm leading-relaxed text-stone-500">{step.description}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="label hidden text-stone-300 lg:block">{step.time}</span>
                <Link
                  href={step.href}
                  className="inline-flex h-9 shrink-0 items-center border border-stone-200 px-5 text-xs font-medium tracking-wider text-stone-700 transition-all duration-250 hover:border-stone-950 hover:text-stone-950"
                >
                  {step.label.toUpperCase()}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* For Designers */}
      <section className="mb-20 grid gap-10 border-t border-stone-200 pt-16 md:grid-cols-2">
        <div>
          <p className="label mb-4 text-stone-400">For Designers</p>
          <h2 className="mb-6 text-xl font-light tracking-tight text-stone-950">
            Start with the pyramid. Apply it to one screen.
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-stone-600">
            <p>
              Take one screen from your current project. Open it alongside the Purposeful Design
              Pyramid. Work through each layer from the top: can you state the purpose of this screen
              in one sentence? Is all the content visible on this screen necessary? Is the hierarchy
              strong enough that a user can identify the primary element within five seconds?
            </p>
            <p>
              This exercise will reveal where most of the design problems are concentrated. In most
              interfaces, they are in the hierarchy and content layers — too much content at equal
              weight, without a clear primary element.
            </p>
            <p>
              Then audit the screen against the anti-patterns list. Identify any that are present.
              Do not try to fix everything at once. Prioritize the pattern that most directly
              obstructs the screen's stated purpose.
            </p>
          </div>
        </div>
        <div>
          <p className="label mb-4 text-stone-400">For Developers</p>
          <h2 className="mb-6 text-xl font-light tracking-tight text-stone-950">
            Start with the laws. Apply them in code review.
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-stone-600">
            <p>
              The fifteen laws of Purposeful Design are directly applicable to code review. Several
              of them can be evaluated programmatically: how many primary action buttons exist in
              this view? How many semantic colors are defined in the token system? Are error messages
              specific and actionable?
            </p>
            <p>
              Begin by introducing the Purposeful Design vocabulary into your team's design review
              process. When a design is presented, ask questions using the shared terminology: what
              is the signal-to-noise ratio of this screen? What is the primary action? Is the
              hierarchy legible without color?
            </p>
            <p>
              These questions do not require design expertise to ask. They require only the shared
              vocabulary and the shared willingness to evaluate design against functional standards
              rather than aesthetic ones.
            </p>
          </div>
        </div>
      </section>

      {/* For Teams */}
      <section className="mb-20 border border-stone-950 bg-stone-950 p-10 text-stone-50">
        <p className="label mb-4 text-stone-500">For Teams</p>
        <h2 className="mb-6 text-xl font-light tracking-tight">
          Adopting Purposeful Design as a shared standard
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'Week 1: Read & Discuss',
              body: "Have every team member read the Philosophy, Manifesto, and Anti-Patterns documents. Discuss as a team which anti-patterns you recognize in your current product. Do not try to fix anything yet.",
            },
            {
              title: 'Week 2: Audit',
              body: "Run the Purposeful Design metrics on five key screens in your product. Document the results. Identify the three most common failures across those screens. Prioritize them by impact on user task completion.",
            },
            {
              title: 'Week 3: Standards',
              body: "Establish team-level agreements on the standards you will enforce going forward: maximum primary actions per view, semantic color contracts, hierarchy review criteria. Document these as design system standards, not as suggestions.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="mb-3 text-sm font-medium">{item.title}</h3>
              <p className="text-sm leading-relaxed text-stone-400">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Reference */}
      <section className="mb-20">
        <p className="label mb-6 text-stone-400">Quick Reference</p>
        <div className="grid gap-4 md:grid-cols-3">
          {quickRefs.map((ref) => (
            <Link
              key={ref.href}
              href={ref.href}
              className="group flex flex-col justify-between border border-stone-200 bg-white p-6 transition-all duration-250 hover:border-stone-950"
            >
              <div>
                <h3 className="mb-2 text-base font-medium text-stone-950">{ref.title}</h3>
                <p className="text-sm leading-relaxed text-stone-500">{ref.description}</p>
              </div>
              <span className="mt-6 text-sm text-stone-400 transition-colors group-hover:text-stone-950">
                View →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Version note */}
      <div className="border-t border-stone-200 pt-10">
        <div className="flex items-start gap-4 rounded-sm border border-stone-200 bg-stone-50 p-6">
          <div>
            <p className="label mb-2 text-stone-400">Version 0.1 — Week 1 Foundation</p>
            <p className="text-sm leading-relaxed text-stone-600">
              This is the foundational philosophical release of The Purposeful Design. It contains
              the complete philosophy, principles, laws, vocabulary, metrics, anti-patterns, and
              pyramid documentation. Component implementations will follow in subsequent releases,
              built directly on this philosophical foundation.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
