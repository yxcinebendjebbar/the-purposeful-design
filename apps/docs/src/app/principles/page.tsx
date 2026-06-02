import type { Metadata } from 'next'
import { PageShell, PageHeader, CTA } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Design Principles',
  description:
    'The seven core principles of Purposeful Design — each with definition, reasoning, and examples of good and bad application.',
}

const principles = [
  {
    slug: 'purpose-before-decoration',
    title: 'Purpose Before Decoration',
    definition:
      'Every design element should serve the user before it serves the aesthetic. When purpose and decoration conflict, purpose wins.',
    reasoning:
      "Decoration is the element of design that is most immediately visible and most habitually applied. Designers reach for visual enrichment — shadows, gradients, illustrations, textures — as instinctively as writers reach for adjectives. The problem is not that these tools are bad. It is that they are applied before the question of purpose has been answered. When you decorate before you define purpose, you make it significantly harder to evaluate what the interface actually needs. You are now emotionally invested in elements that may not serve the user, and removing them feels like loss rather than improvement. Purpose first means that decoration, if it arrives at all, arrives after the foundational questions have been answered. It earns its place or it does not appear.",
    good: {
      label: 'Good',
      example:
        'A checkout confirmation page that uses a single green checkmark icon to confirm success. The icon is the only decoration present because the designer first asked what the user needs to know in this moment (that the transaction succeeded), and then asked what visual element could communicate that most immediately (a semantic success indicator).',
    },
    bad: {
      label: 'Bad',
      example:
        "A checkout confirmation page that features a large illustrated graphic of a person receiving a package, a confetti animation, a hero background gradient, and three social sharing prompts — none of which the user asked for, and all of which delay their access to the order confirmation number they actually need.",
    },
  },
  {
    slug: 'hierarchy-before-density',
    title: 'Hierarchy Before Density',
    definition:
      'Before deciding how much information to show, decide which information matters most. Hierarchy is the prerequisite of legible density.',
    reasoning:
      "The failure mode of information-dense interfaces is almost never that they contain too much information in absolute terms — it is that the information is presented without a clear order of importance. A data table with strong hierarchy is scannable. The same data without hierarchy is a wall. The designer's job is not to reduce information but to rank it. The ranking then determines the visual treatment: primary information receives primary treatment, secondary information receives secondary treatment, and so on. This creates a visual structure that users can scan at their natural reading speed without having to evaluate every element to determine its importance.",
    good: {
      label: 'Good',
      example:
        'A user profile page that leads with the user\'s name at display size, follows with their role and organization in heading size, then provides contact information and metadata in body size. A user scanning this page knows within one second who this person is and what their primary role is. Everything else is accessible but does not compete for initial attention.',
    },
    bad: {
      label: 'Bad',
      example:
        "A user profile page where the user's name, role, organization, join date, last active timestamp, follower count, and post count are all presented in the same font size and weight, arranged in a uniform grid. Users must read every field to find the information they came for.",
    },
  },
  {
    slug: 'meaning-before-color',
    title: 'Meaning Before Color',
    definition:
      'Establish what each color communicates before applying it. Color that carries no meaning is noise that competes with color that does.',
    reasoning:
      "Color is one of the fastest-processed visual signals the human brain encounters. It is capable of communicating urgency, status, category, and identity faster than any other design element. This speed makes color enormously powerful and enormously easy to misuse. When color is applied without a semantic contract — when it is used for variety, for brand consistency, for aesthetic preference — it loses its ability to communicate anything reliably. Users cannot distinguish meaningful color use from decorative color use, so they default to reading all color as decorative. This destroys the communicative potential of the entire color system.",
    good: {
      label: 'Good',
      example:
        'A form validation system that uses red exclusively for error states, green exclusively for successful validation, and amber exclusively for warnings. Users learn this contract quickly. After a few interactions, they understand the color system without reading any labels — the color itself communicates the information.',
    },
    bad: {
      label: 'Bad',
      example:
        'A dashboard that uses eight colors in its data visualization because "the charts look more dynamic," uses red for both error states and the "Premium" account tier label, and uses green for both success states and the marketing team\'s section header. No user can reliably interpret any of these colors because the contract is contradictory.',
    },
  },
  {
    slug: 'content-before-chrome',
    title: 'Content Before Chrome',
    definition:
      "Chrome — the structural, navigational, and decorative elements surrounding content — should never compete with the content it frames. The interface's job is to present content, not to present itself.",
    reasoning:
      "Interface chrome includes headers, sidebars, footers, navigation bars, breadcrumbs, toolbars, and any other structural element that is not the primary content. Chrome is necessary — it provides orientation and enables navigation. But chrome is not the reason users are present. No user opens a web application to admire its navigation bar. The navigation bar exists so that the user can get to their content quickly and return easily. When chrome becomes prominent — through height, visual weight, color, animation, or decoration — it competes with the content it is supposed to serve. This is one of the most common failures in enterprise software, where navigation systems have grown to consume 40% of the viewport without anyone noticing the accumulation.",
    good: {
      label: 'Good',
      example:
        "A documentation site with a fixed navigation sidebar that uses small, light typographic treatment and allocates the remaining 75% of the viewport to the reading content. The sidebar disappears visually when you are reading — it reappears as soon as you need to navigate. You are always aware that navigation exists. You are never distracted by it.",
    },
    bad: {
      label: 'Bad',
      example:
        'A SaaS application with a 240px wide colored sidebar navigation, a 64px fixed header with logo, breadcrumbs, search, notification bell, and avatar controls, and a 48px contextual action bar — leaving approximately 50% of a standard laptop viewport for the actual content the user came to interact with.',
    },
  },
  {
    slug: 'clarity-before-creativity',
    title: 'Clarity Before Creativity',
    definition:
      "An interface that users cannot easily understand has failed, regardless of how creative it is. Clarity is the prerequisite of everything else an interface might achieve.",
    reasoning:
      "Creative interfaces are exciting to design and exciting to encounter — for the first few seconds. After that initial encounter, users need to accomplish something, and creative interfaces often make that harder. Unconventional navigation patterns require learning. Unexpected interactions require investigation. Clever visual metaphors require interpretation. All of this costs time and attention that the user would rather spend on their actual goal. Clarity does not preclude creativity. The most creative design challenges are those that require you to make something genuinely difficult to understand into something obviously intuitive. That is much harder than making something novel. It is also more valuable.",
    good: {
      label: 'Good',
      example:
        "A file organization system that uses a conventional folder metaphor because users already understand it, and invests its creative effort in surfacing intelligent suggestions, predictive search, and thoughtful empty states — features that genuinely make the user's experience better without requiring them to learn a new mental model.",
    },
    bad: {
      label: 'Bad',
      example:
        "A project management tool that replaces the conventional list/board/calendar views with a \"spatial canvas\" metaphor where projects float in 2D space and are navigated by dragging. The metaphor is creative. It is also learnable only through exploration, difficult to use at scale, impossible to use with a keyboard alone, and fundamentally worse for users who need to manage more than eight projects.",
    },
  },
  {
    slug: 'consistency-before-novelty',
    title: 'Consistency Before Novelty',
    definition:
      'Consistent interfaces are learnable interfaces. Novel interaction patterns are only justified when they solve a problem that consistency cannot.',
    reasoning:
      "Consistency has two forms in interface design: internal consistency (the system behaves the same way across its own surfaces) and external consistency (the system behaves the same way as other systems users already know). Both forms reduce cognitive load. When a user encounters a behavior they recognize — a button that looks like a button, a link that looks like a link, a form that submits when you press Enter — they do not have to spend attention on the interface. They spend it on their task. Novelty is justified when the existing convention is genuinely inadequate — when users need to do something that the standard patterns cannot accommodate. It is not justified when the existing convention is merely uninspiring.",
    good: {
      label: 'Good',
      example:
        'A table component that uses the established conventions — sortable column headers indicated by chevrons, row selection indicated by checkboxes, bulk actions appearing when rows are selected — because users who have used any data table before will be immediately competent with this one.',
    },
    bad: {
      label: 'Bad',
      example:
        'A table component that uses double-click to select rows (instead of the standard single-click or checkbox), requires right-click to access actions (instead of the standard action column or hover controls), and sorts columns by clicking on the data cells (instead of the column headers). Each of these choices is novel. None of them are better than the established conventions they replace.',
    },
  },
  {
    slug: 'focus-before-features',
    title: 'Focus Before Features',
    definition:
      "A product that does fewer things exceptionally well is more valuable than a product that does many things adequately. Focus is a product decision that must be enforced at the design level.",
    reasoning:
      "Feature creep is the most common cause of interface degradation in mature products. Features are added one at a time, each with a reasonable justification, until the sum total of features exceeds the coherence of the product. At some point, every new feature either disrupts an existing workflow or requires the interface to accommodate one more thing. The interface accommodates it, and the product becomes slightly harder to use, slightly harder to explain, and slightly less valuable to the primary user who came for the core use case. Focus means that the product has a clear definition of what it does and who it does it for — and that this definition is enforced in design decisions. Features that do not serve the defined purpose are rejected, deferred, or made optional.",
    good: {
      label: 'Good',
      example:
        "A team inbox tool that does three things excellently: receives messages, assigns them to team members, and tracks their resolution. It does not have a built-in knowledge base, a team directory, a product roadmap view, or an OKR tracker — because those are different products, and adding them would require the team inbox to do all things reasonably instead of a few things excellently.",
    },
    bad: {
      label: 'Bad',
      example:
        "A team inbox tool that, after eighteen months of feature requests, also has a knowledge base, a team directory, a product roadmap, an OKR tracker, a file storage system, a meeting scheduler, and a status page builder — and whose original three functions (receive, assign, resolve) are now buried in a navigation menu alongside fourteen other categories that weren't there at launch.",
    },
  },
]

export default function PrinciplesPage() {
  return (
    <PageShell>
      <PageHeader
        label="Principles"
        title="Seven principles. Each a decision filter."
        description="These are not style guidelines. They are frameworks for making design decisions — especially the difficult ones where two good options compete, or where aesthetic preferences conflict with functional requirements."
      />

      {/* Quick reference */}
      <div className="mb-16 grid grid-cols-2 gap-3 md:grid-cols-4">
        {principles.map((p, i) => (
          <a
            key={p.slug}
            href={`#${p.slug}`}
            className="group flex items-start gap-3 border border-stone-200 bg-white p-4 text-sm transition-all duration-250 hover:border-stone-950"
          >
            <span className="label text-stone-300">{String(i + 1).padStart(2, '0')}</span>
            <span className="font-medium leading-snug text-stone-700 group-hover:text-stone-950">
              {p.title}
            </span>
          </a>
        ))}
      </div>

      <div className="space-y-0">
        {principles.map((principle, index) => (
          <section
            key={principle.slug}
            id={principle.slug}
            className="border-t border-stone-200 py-16"
          >
            {/* Header */}
            <div className="mb-8 flex items-baseline gap-4">
              <span className="label text-stone-300">{String(index + 1).padStart(2, '0')}</span>
              <h2 className="text-2xl font-light tracking-tight text-stone-950">
                {principle.title}
              </h2>
            </div>

            {/* Definition */}
            <div className="mb-10 max-w-[64ch] border-l-2 border-stone-950 pl-6">
              <p className="text-base font-medium leading-relaxed text-stone-800">
                {principle.definition}
              </p>
            </div>

            {/* Reasoning */}
            <div className="mb-10">
              <p className="label mb-4 text-stone-400">Reasoning</p>
              <p className="max-w-[68ch] text-sm leading-relaxed text-stone-600">
                {principle.reasoning}
              </p>
            </div>

            {/* Examples */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border border-stone-200 bg-white p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-stone-950 text-xs text-white">
                    ✓
                  </span>
                  <span className="label text-stone-500">Purposeful Application</span>
                </div>
                <p className="text-sm leading-relaxed text-stone-600">{principle.good.example}</p>
              </div>
              <div className="border border-stone-200 bg-stone-50 p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-stone-300 text-xs text-white">
                    ✕
                  </span>
                  <span className="label text-stone-400">Anti-Pattern</span>
                </div>
                <p className="text-sm leading-relaxed text-stone-500">{principle.bad.example}</p>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTA
        title="Read The Laws"
        description="Fifteen non-negotiable constraints — more specific and enforceable than principles."
        href="/laws"
        label="VIEW THE LAWS"
      />
    </PageShell>
  )
}
