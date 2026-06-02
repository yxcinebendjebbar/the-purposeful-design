import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Purposeful Design — Build interfaces that communicate, not decorate',
  description:
    'A design philosophy and component ecosystem for building interfaces where every element justifies its existence. Minimal. Intentional. Focused.',
}

const laws = [
  {
    number: '01',
    law: 'If everything is primary, nothing is primary.',
    description:
      'Emphasis is a finite resource. The more you use it, the less it means. Every call to action you label "primary" dilutes the ones that actually matter.',
  },
  {
    number: '02',
    law: 'Color must communicate information.',
    description:
      'Color used for decoration alone is noise. Color earns its place by carrying meaning — status, urgency, category, action. If you can remove a color without losing information, you should.',
  },
  {
    number: '03',
    law: 'Visual complexity requires justification.',
    description:
      'Every layer of complexity you add to an interface transfers cognitive cost to your user. That cost must be paid with clear value. If the value is unclear, the complexity is unjustified.',
  },
]

const pyramidLayers = [
  {
    level: 5,
    name: 'Visual Style',
    description: 'Color, spacing, motion, texture. The last layer applied, not the first.',
    width: 'w-full',
  },
  {
    level: 4,
    name: 'Interaction',
    description: 'How users move through, operate, and complete tasks within the interface.',
    width: 'w-10/12',
  },
  {
    level: 3,
    name: 'Hierarchy',
    description: 'The structure that guides attention. What comes first. What supports it.',
    width: 'w-8/12',
  },
  {
    level: 2,
    name: 'Content',
    description: 'The actual substance — the words, data, and information users came for.',
    width: 'w-6/12',
  },
  {
    level: 1,
    name: 'Purpose',
    description: 'Why this interface exists. What problem it solves. Who it serves.',
    width: 'w-4/12',
  },
]

const philosophy = [
  {
    title: 'Purpose Before Decoration',
    body: 'Every design decision begins with a question: what is this for? Decoration that serves no communicative function is a liability, not an asset. It competes for attention, adds visual weight, and ultimately obscures what matters.',
  },
  {
    title: 'Hierarchy Before Density',
    body: "Users don't read interfaces — they scan. Strong visual hierarchy ensures that scanning finds what it needs instantly. Density without hierarchy is a wall of equal-weight information that exhausts rather than informs.",
  },
  {
    title: 'Clarity Before Creativity',
    body: "Clever interfaces feel good to design and bad to use. Clarity is not the absence of creativity — it is the highest form of creative discipline. Making something obvious takes more skill than making it interesting.",
  },
]

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="border-b border-stone-200">
        <div className="page-container py-24 md:py-36">
          <div className="max-w-[640px]">
            <p className="label mb-8 text-stone-400">The Purposeful Design — Version 0.1</p>
            <h1 className="text-5xl font-light leading-[1.05] tracking-[-0.04em] text-stone-950 md:text-7xl">
              Build interfaces that
              <br />
              <em className="font-serif not-italic text-stone-400">communicate,</em>
              <br />
              not decorate.
            </h1>
            <p className="mt-10 max-w-[52ch] text-lg leading-relaxed text-stone-500">
              The Purposeful Design is a design philosophy and component ecosystem for teams who
              believe that every element must justify its existence. Clarity is a feature. Simplicity
              is a product decision.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/getting-started"
                className="inline-flex h-11 items-center border border-stone-950 bg-stone-950 px-8 text-sm font-medium tracking-wider text-stone-50 transition-all duration-250 hover:bg-transparent hover:text-stone-950"
              >
                READ THE PHILOSOPHY
              </Link>
              <Link
                href="/manifesto"
                className="inline-flex h-11 items-center px-8 text-sm font-medium text-stone-500 transition-colors duration-250 hover:text-stone-950"
              >
                View the Manifesto →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission Statement ─────────────────────────────────────────── */}
      <section className="border-b border-stone-200 bg-stone-950 text-stone-50">
        <div className="page-container py-20 md:py-28">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="label mb-6 text-stone-500">Our Position</p>
              <h2 className="text-3xl font-light leading-snug tracking-tight md:text-4xl">
                Modern interfaces suffer from a clarity crisis.
              </h2>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <p className="text-base leading-relaxed text-stone-400">
                Dashboards with forty action buttons. Color systems where every shade carries a
                different arbitrary meaning. Navigation menus that require three clicks to reach
                something the user needs in three seconds. Interfaces designed to impress stakeholders
                rather than serve users.
              </p>
              <p className="text-base leading-relaxed text-stone-400">
                The Purposeful Design exists as a response. Not as a rejection of beauty, but as a
                redefinition of what beautiful interface design actually means. Beautiful design
                communicates clearly. It respects user attention. It serves its purpose without asking
                for admiration in return.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Philosophy ───────────────────────────────────────────── */}
      <section className="border-b border-stone-200">
        <div className="page-container py-20 md:py-28">
          <div className="mb-14">
            <p className="label mb-4 text-stone-400">Core Philosophy</p>
            <h2 className="text-3xl font-light tracking-tight text-stone-950 md:text-4xl">
              Three principles. Non-negotiable.
            </h2>
          </div>

          <div className="grid gap-0 divide-y divide-stone-200 md:grid-cols-3 md:divide-x md:divide-y-0">
            {philosophy.map((item, i) => (
              <div key={i} className="p-8 md:p-10">
                <p className="label mb-4 text-stone-300">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mb-4 text-lg font-medium tracking-tight text-stone-950">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone-500">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-end">
            <Link
              href="/principles"
              className="text-sm text-stone-500 transition-colors hover:text-stone-950"
            >
              View all seven principles →
            </Link>
          </div>
        </div>
      </section>

      {/* ── The Three Laws ────────────────────────────────────────────── */}
      <section className="border-b border-stone-200 bg-stone-100">
        <div className="page-container py-20 md:py-28">
          <div className="mb-14">
            <p className="label mb-4 text-stone-400">The Laws</p>
            <h2 className="text-3xl font-light tracking-tight text-stone-950 md:text-4xl">
              Some rules cannot be negotiated.
            </h2>
            <p className="mt-4 max-w-[52ch] text-base text-stone-500">
              The Laws of Purposeful Design are non-negotiable constraints. They are not suggestions.
              Every design that violates them pays a cost — in user confusion, in misplaced attention,
              in reduced trust.
            </p>
          </div>

          <div className="space-y-0 divide-y divide-stone-200">
            {laws.map((item) => (
              <div
                key={item.number}
                className="group grid gap-4 py-8 md:grid-cols-[80px_1fr_2fr] md:gap-12 md:py-10"
              >
                <span className="label text-stone-300">{item.number}</span>
                <p className="text-base font-medium leading-snug tracking-tight text-stone-950 md:text-lg">
                  {item.law}
                </p>
                <p className="text-sm leading-relaxed text-stone-500 md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-end">
            <Link
              href="/laws"
              className="text-sm text-stone-500 transition-colors hover:text-stone-950"
            >
              View all fifteen laws →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Design Pyramid ────────────────────────────────────────────── */}
      <section className="border-b border-stone-200">
        <div className="page-container py-20 md:py-28">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            {/* Pyramid Visual */}
            <div className="flex flex-col items-center justify-center gap-2">
              {[...pyramidLayers].reverse().map((layer) => (
                <div key={layer.level} className={`${layer.width} flex items-center justify-center`}>
                  <div
                    className="flex w-full items-center justify-center border border-stone-200 bg-white py-4 text-center"
                    style={{ opacity: 0.4 + layer.level * 0.12 }}
                  >
                    <span className="text-xs font-medium uppercase tracking-widest text-stone-600">
                      {layer.name}
                    </span>
                  </div>
                </div>
              ))}
              <p className="mt-4 text-center text-xs text-stone-400">
                Foundation at top — applied last at bottom
              </p>
            </div>

            {/* Explanation */}
            <div>
              <p className="label mb-4 text-stone-400">The Pyramid</p>
              <h2 className="mb-6 text-3xl font-light tracking-tight text-stone-950 md:text-4xl">
                Build from purpose,
                <br />
                not from style.
              </h2>
              <p className="mb-8 text-base leading-relaxed text-stone-500">
                Most design processes begin at the bottom of the pyramid — choosing colors, picking
                fonts, arranging layouts. The Purposeful Design inverts this. Every design decision
                begins with a single question: what is the purpose of this interface?
              </p>
              <div className="space-y-4">
                {pyramidLayers
                  .slice()
                  .reverse()
                  .map((layer) => (
                    <div key={layer.level} className="flex gap-4">
                      <span className="label mt-0.5 shrink-0 text-stone-300">0{layer.level}</span>
                      <div>
                        <p className="text-sm font-medium text-stone-950">{layer.name}</p>
                        <p className="text-sm text-stone-500">{layer.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="mt-10">
                <Link
                  href="/pyramid"
                  className="text-sm text-stone-500 transition-colors hover:text-stone-950"
                >
                  Explore the full pyramid →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="border-b border-stone-200">
        <div className="page-container py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="label mb-6 text-stone-400">Start Here</p>
              <h2 className="text-4xl font-light leading-tight tracking-tight text-stone-950 md:text-5xl">
                Design with purpose.
                <br />
                Not with habit.
              </h2>
              <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-stone-500">
                The Purposeful Design is not a component library. It is a way of thinking about
                interfaces. Begin with the philosophy. Understand the problems. Learn the principles.
                Then build.
              </p>
            </div>

            <div className="flex flex-col justify-end gap-4 md:items-end">
              <div className="grid w-full gap-3 md:max-w-[320px]">
                <Link
                  href="/philosophy"
                  className="flex items-center justify-between border border-stone-200 bg-white px-6 py-4 text-sm font-medium text-stone-950 transition-all duration-250 hover:border-stone-950"
                >
                  <span>Read the Philosophy</span>
                  <span className="text-stone-400">→</span>
                </Link>
                <Link
                  href="/problem"
                  className="flex items-center justify-between border border-stone-200 bg-white px-6 py-4 text-sm font-medium text-stone-950 transition-all duration-250 hover:border-stone-950"
                >
                  <span>The Problems We Solve</span>
                  <span className="text-stone-400">→</span>
                </Link>
                <Link
                  href="/manifesto"
                  className="flex items-center justify-between border border-stone-200 bg-white px-6 py-4 text-sm font-medium text-stone-950 transition-all duration-250 hover:border-stone-950"
                >
                  <span>The Manifesto</span>
                  <span className="text-stone-400">→</span>
                </Link>
                <Link
                  href="/anti-patterns"
                  className="flex items-center justify-between border border-stone-200 bg-white px-6 py-4 text-sm font-medium text-stone-950 transition-all duration-250 hover:border-stone-950"
                >
                  <span>Common Anti-Patterns</span>
                  <span className="text-stone-400">→</span>
                </Link>
                <Link
                  href="/getting-started"
                  className="flex items-center justify-between border border-stone-950 bg-stone-950 px-6 py-4 text-sm font-medium text-stone-50 transition-all duration-250 hover:bg-stone-800"
                >
                  <span>Getting Started</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote ─────────────────────────────────────────────────────── */}
      <section>
        <div className="page-container py-20 md:py-28">
          <blockquote className="mx-auto max-w-[52ch] text-center">
            <p className="font-serif text-3xl font-light leading-snug tracking-tight text-stone-950 md:text-4xl">
              "Every element should have a reason to exist. If you cannot state that reason clearly,
              the element should not exist."
            </p>
            <footer className="mt-6 text-sm text-stone-400">
              — The Purposeful Design Manifesto
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  )
}
