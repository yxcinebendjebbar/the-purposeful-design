import type { Metadata } from 'next'
import { PageShell, PageHeader, Section, SectionHeader, Callout, CTA } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Philosophy',
  description:
    'What Purposeful Design means, why it exists, and how it differs from minimalism, aesthetic-driven design, and component-first systems.',
}

export default function PhilosophyPage() {
  return (
    <PageShell>
      <PageHeader
        label="Philosophy"
        title="Design is a discipline of decisions."
        description="The Purposeful Design is not a style. It is a set of convictions about how interfaces should relate to the people who use them."
      />

      <Section>
        <div className="grid gap-16 md:grid-cols-[2fr_3fr]">
          <div>
            <SectionHeader title="What Purposeful Design Means" />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              Purposeful Design is the practice of making design decisions that can be defended by
              their function. Not their appearance, not their novelty, not their consistency with
              industry trends — their function. Every element in an interface either serves the user
              or occupies space that could. There is no neutral ground.
            </p>
            <p>
              This is a harder standard than it sounds. It requires designers and developers to
              constantly ask questions that are uncomfortable to ask: Does this shadow help the user
              understand depth, or does it exist because shadows look professional? Does this
              animation confirm an action, or does it exist because animated interfaces feel modern?
              Does this section of the dashboard serve a user goal, or does it exist because someone
              in a meeting said it would be good to have?
            </p>
            <p>
              Purposeful Design does not answer these questions for you. It requires you to answer
              them yourself — and to be honest about the answers.
            </p>
          </div>
        </div>
      </Section>

      <hr className="divider mb-16" />

      <Section>
        <div className="grid gap-16 md:grid-cols-[2fr_3fr]">
          <div>
            <SectionHeader title="Why It Exists" />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              The Purposeful Design exists because modern digital product design has drifted away from
              its primary obligation: serving users. In its place, we have seen the rise of design
              culture — a system in which interfaces are evaluated by their aesthetic coherence, their
              alignment with current trends, their visual impressiveness in portfolio screenshots and
              Dribbble posts.
            </p>
            <p>
              This drift is not the fault of individual designers. It is a systemic pressure created by
              the way design work is evaluated, shared, and rewarded. Beautiful interfaces get shared.
              Functional interfaces get used. Only one of those outcomes is immediately visible, and
              only one of them makes a compelling thumbnail.
            </p>
            <p>
              The consequences are real. Users are slower, more frustrated, and more likely to make
              errors when operating interfaces that prioritize appearance over clarity. Support tickets
              increase. Conversion rates fall. User trust erodes — not quickly, but steadily, as every
              friction point compounds into a pattern of distrust.
            </p>
            <Callout type="principle">
              The Purposeful Design exists to give designers and developers a framework for resisting
              these pressures. Not by rejecting beauty, but by redefining it.
            </Callout>
          </div>
        </div>
      </Section>

      <hr className="divider mb-16" />

      <Section>
        <SectionHeader
          label="Distinctions"
          title="How Purposeful Design differs from related movements"
          description="Understanding what Purposeful Design is requires understanding what it is not."
        />

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {[
            {
              heading: 'Not Minimalism',
              body: "Minimalism is an aesthetic preference. It values reduction as a visual outcome — fewer elements, more white space, simpler forms. Purposeful Design is not interested in reduction as an end in itself. An interface with twelve elements is not better than one with twenty just because it has fewer. The question is always: are these elements necessary? Minimalism asks, \"can I remove this?\" Purposeful Design asks, \"should this exist at all?\" The first is aesthetic. The second is functional.",
            },
            {
              heading: 'Not Aesthetic-Driven Design',
              body: 'Aesthetic-driven design begins with a visual direction and works backward to justify it. A team decides on a dark, glassmorphic palette because it looks sophisticated, and then applies it everywhere regardless of whether it serves the content. Purposeful Design begins with the content and the user, and only then asks what visual treatment would best serve them. The direction is reversed, and that reversal changes everything.',
            },
            {
              heading: 'Not Trend-Focused Design',
              body: 'Trend-focused design optimizes for what looks current. Neumorphism, glassmorphism, brutalism, Memphis-revival — each of these is a visual treatment that emerged from aesthetic exploration, became fashionable, and then faded as the next trend arrived. Purposeful Design is intended to be timeless. It is concerned with principles that govern effective communication, not visual fashions that govern Instagram feeds.',
            },
            {
              heading: 'Not a Component Library',
              body: 'Most design systems provide components and call that the system. Components are useful. But a library of well-built components does not, by itself, produce purposeful interfaces. A team can use the most carefully engineered component system in the world and still build cluttered, confusing, hierarchically broken interfaces. Purposeful Design provides the thinking that determines how components should be assembled, sequenced, and prioritized — not just the components themselves.',
            },
          ].map((item) => (
            <div key={item.heading} className="border border-stone-200 bg-white p-8">
              <h3 className="mb-4 text-base font-medium text-stone-950">{item.heading}</h3>
              <p className="text-sm leading-relaxed text-stone-500">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <hr className="divider mb-16" />

      <Section>
        <div className="grid gap-16 md:grid-cols-[2fr_3fr]">
          <div>
            <SectionHeader title="The Designer's Obligation" />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              Every designer who puts an element on a screen is making a claim: this element is worth
              the user's attention. That claim carries responsibility. When you add an icon, you are
              claiming that the icon communicates something more efficiently than text could. When you
              add an animation, you are claiming that the motion helps the user understand the
              interface. When you add a color, you are claiming that the color carries information.
            </p>
            <p>
              Most of the time, these claims are made unconsciously. They are the result of habit,
              convention, and the aesthetic instincts that develop over years of practice. Purposeful
              Design asks designers to make these claims consciously — to know, at the moment of each
              decision, what they are claiming and whether they can defend it.
            </p>
            <p>
              This is not a standard that requires perfection. It is a standard that requires honesty.
              Sometimes you will add an element that you cannot fully defend, and that is acceptable —
              provided you know you are doing it, and you remain willing to remove it when you cannot
              justify the cost.
            </p>
          </div>
        </div>
      </Section>

      <CTA
        title="Read the Manifesto"
        description="The formal statement of Purposeful Design beliefs — what we stand for and what we reject."
        href="/manifesto"
        label="READ MANIFESTO"
      />
    </PageShell>
  )
}
