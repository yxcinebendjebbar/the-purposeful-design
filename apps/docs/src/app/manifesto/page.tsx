import type { Metadata } from 'next'
import { PageShell, PageHeader, CTA } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Manifesto',
  description:
    'The formal statement of Purposeful Design beliefs — ten principles that define what we stand for and what we reject.',
}

const principles = [
  {
    number: '01',
    title: 'Every element must justify its existence.',
    body: "We will not place an element on a screen because it looks good, because it is consistent with current trends, or because a stakeholder asked for it. We will place elements when they serve users. The burden of proof is on presence, not absence. An interface with ten well-justified elements is superior to an interface with thirty decorative ones. We accept the discomfort of removing things that took effort to create. Removal is not failure. It is discipline.",
  },
  {
    number: '02',
    title: 'Clarity is a product decision, not a design preference.',
    body: "When a user cannot understand an interface, we do not describe that as a design taste difference. We describe it as a product failure. Clarity is not one option among many. It is the foundational requirement from which everything else follows. We reject the notion that interfaces should reward users for their patience, their willingness to explore, or their tolerance for ambiguity. Users owe us nothing. We owe them clarity.",
  },
  {
    number: '03',
    title: 'Hierarchy is the designer\'s primary obligation.',
    body: "Before we choose a color, before we select a typeface, before we decide on spacing — we establish hierarchy. We decide what matters most on this screen, and we make that decision visible. The most important element receives the most attention. The second most important receives the second most. We do not create hierarchy by making everything prominent. We create hierarchy by accepting that most things are not.",
  },
  {
    number: '04',
    title: 'Color communicates. When it does not, it should not be used.',
    body: "We have a precise and limited vocabulary of color. Each value in that vocabulary carries a specific meaning that we apply consistently and exclusively. Green means success. Red means error. Amber means warning. These contracts are not broken for aesthetic reasons, for brand alignment, or for seasonal variation. When a color does not communicate a specific piece of information that text cannot communicate more efficiently, we use no color.",
  },
  {
    number: '05',
    title: 'Interfaces should be obvious to new users and efficient for experienced ones.',
    body: "Discoverability and efficiency are not in conflict. An interface can be learnable on first encounter and powerful in repeated use. We achieve this by making the primary path obvious, making secondary paths accessible, and making advanced paths available to those who seek them. We do not hide complexity to appear simple. We manage complexity so that it does not obstruct simplicity.",
  },
  {
    number: '06',
    title: 'Simplicity is not the absence of features. It is the presence of focus.',
    body: "We are not minimalists. We do not believe fewer features are always better. We believe that every feature must serve a clear purpose for a clearly defined user. An interface that does one thing perfectly is not limited — it is disciplined. When products grow, they must grow along a defined axis that does not compromise their core purpose. Accumulation is not progress.",
  },
  {
    number: '07',
    title: 'We design for users, not for design awards.',
    body: "Our standards of success are measured in user outcomes: task completion rates, error rates, time-on-task, satisfaction scores, and return rates. We do not optimize for visual impressiveness in screenshots, for trend alignment in design publications, or for the approval of peers who evaluate work aesthetically. We value the opinion of a user who struggles with an interface more than the opinion of a designer who admires it.",
  },
  {
    number: '08',
    title: 'Consistency is infrastructure, not constraint.',
    body: "Consistent interfaces are learnable interfaces. When a user understands how one part of a system works, consistency ensures that understanding transfers. We maintain consistency not because it makes design easier — though it does — but because it reduces the cognitive cost of learning a new part of a system users already use. We break consistency only when breaking it communicates something important that consistency cannot.",
  },
  {
    number: '09',
    title: 'Motion must earn its place.',
    body: "We use animation when it helps users understand what has changed, what is about to change, or where they are in a process. We do not use animation to demonstrate technical capability, to signal that the interface is modern, or to entertain during loading states. Purposeless motion is noise that users experience as distraction. Purposeful motion is communication. We know the difference, and we apply only the latter.",
  },
  {
    number: '10',
    title: 'Accessibility is not an accommodation. It is a standard.',
    body: 'We build interfaces that work for users with different abilities, different contexts, and different devices. Not because we are required to, and not as a post-implementation checklist item, but because the measure of good design is whether it works for the full range of people who need it. An interface that excludes users is not well-designed. It is partially designed. We do not consider partial design acceptable.',
  },
  {
    number: '11',
    title: 'Documentation is part of the design.',
    body: "An undocumented design system is a design system that will be misused. When we create patterns, we describe them. When we establish rules, we explain why they exist. When we make exceptions, we record the reasoning. Documentation does not follow design — it is concurrent with it. A decision that cannot be documented is a decision that probably should not be made.",
  },
  {
    number: '12',
    title: 'The purpose of a component is not to exist. It is to serve.',
    body: "Components are means, not ends. A design system that produces well-built components that are then assembled into purposeless interfaces has failed. We evaluate components not by their technical quality in isolation, but by the quality of the interfaces they enable. The measure of a component is whether it makes it easier to build purposeful interfaces and harder to build purposeless ones.",
  },
]

export default function ManifestoPage() {
  return (
    <PageShell>
      <PageHeader
        label="The Manifesto"
        title="What we believe. What we reject."
        description="The Purposeful Design Manifesto is a formal statement of the convictions that guide this work. It is not a list of best practices. It is a declaration of principles that we hold to be non-negotiable in the design of digital products."
        serif
      />

      {/* Opening Statement */}
      <div className="mb-16 max-w-[60ch] border-l-2 border-stone-950 pl-8">
        <p className="text-lg leading-relaxed text-stone-600">
          We believe that design has an obligation to the people it serves. Not to impress them. Not
          to entertain them. Not to demonstrate the skill of its creators. Its obligation is to serve
          them — to make their goals achievable with the minimum possible friction, the maximum
          possible clarity, and the deepest possible respect for their attention.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-stone-600">
          We have watched the design industry drift from this obligation. We have seen interfaces
          valued for their visual sophistication, their trend alignment, and their impressiveness in
          portfolio screenshots — while the people who use those interfaces daily experience
          confusion, frustration, and the quiet erosion of trust.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-stone-600">
          The Purposeful Design is our response. These are our beliefs.
        </p>
      </div>

      {/* Principles */}
      <div className="space-y-0">
        {principles.map((principle, index) => (
          <div
            key={principle.number}
            className="grid gap-6 border-t border-stone-200 py-12 md:grid-cols-[100px_1fr]"
          >
            <span className="label text-stone-300">{principle.number}</span>
            <div>
              <h2 className="mb-5 text-xl font-medium leading-snug tracking-tight text-stone-950 md:text-2xl">
                {principle.title}
              </h2>
              <p className="max-w-[68ch] text-base leading-relaxed text-stone-600">
                {principle.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Closing */}
      <div className="mt-16 border-t border-stone-200 pt-16">
        <div className="max-w-[60ch]">
          <p className="text-base leading-relaxed text-stone-600">
            These are not rules imposed from outside. They are commitments we make to ourselves and
            to the users of every interface we build. They are the standard against which we measure
            our own work, and the framework through which we evaluate the work of others.
          </p>
          <p className="mt-5 text-base leading-relaxed text-stone-600">
            The Purposeful Design is a living philosophy. It will be refined as we learn. What will
            not change is its direction: toward clarity, toward function, toward the people who use
            what we build.
          </p>
        </div>
      </div>

      <CTA
        title="Explore the Principles"
        description="The seven core principles explained in full — with definitions, reasoning, and examples."
        href="/principles"
        label="VIEW PRINCIPLES"
      />
    </PageShell>
  )
}
