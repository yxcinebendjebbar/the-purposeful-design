import type { Metadata } from 'next'
import { PageShell, PageHeader, CTA } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Design Anti-Patterns',
  description:
    "A gallery of common interface design mistakes — each described, diagnosed, and resolved. From Rainbow Dashboard to Notification Fatigue.",
}

const antiPatterns = [
  {
    id: 'rainbow-dashboard',
    name: 'Rainbow Dashboard',
    tagline: 'When color systems abandon meaning in favor of visual variety.',
    description:
      "The Rainbow Dashboard uses distinct colors for every metric, category, or card — not because each color communicates specific information, but because multicolor interfaces look dynamic, data-rich, and sophisticated in demonstration contexts. The result is a color system where no individual color carries reliable meaning because no color contract exists.",
    whyItFails:
      "Users who encounter a Rainbow Dashboard cannot read it — they can only look at it. Color that carries no consistent meaning cannot be used to quickly parse data, identify urgency, or track status across views. Users must read every label in full to interpret every element, eliminating one of the primary advantages of visual design: the ability to communicate faster than text.",
    symptoms: [
      'Six or more distinct colors in a single view',
      'Colors assigned by visual balance rather than semantic meaning',
      "The same color appearing in multiple unrelated contexts",
      'No documented color contract in the design system',
    ],
    betterApproach:
      "Establish a four-color semantic contract: success, error, warning, information. Use neutral colors (grays, blacks, whites) for all non-semantic elements. When categorical color is required (in charts, in multi-entity comparisons), use a carefully limited categorical palette of no more than five values, and document what each represents. Every color in the system should have a documented definition.",
  },
  {
    id: 'action-explosion',
    name: 'Action Explosion',
    tagline: "More options than any user needs, at the exact moment they don't need them.",
    description:
      "Action Explosion is the result of applying every possible action to every element, usually in the name of power or flexibility. Every row in a table has six hover-revealed buttons. Every card has a dropdown menu with twelve items. Every item has an edit, duplicate, archive, share, export, delete, move, label, assign, and comment option — all equally visible, all competing for attention.",
    whyItFails:
      "The paradox of choice applies directly to action systems. More options produce slower decisions, more errors, and higher anxiety — especially for users under time pressure or in high-stakes contexts. Action Explosion also signals a failure of product thinking: if you have not decided which actions are primary, secondary, and tertiary, you have delegated that decision to the user. Most users will not make it — they will make the safest available choice, which is often inaction.",
    symptoms: [
      'Four or more actions per list item or card',
      'No clear visual distinction between primary and secondary actions',
      'Destructive and constructive actions at equal visual prominence',
      'Actions that appear only on hover without keyboard access',
    ],
    betterApproach:
      "Classify every action as primary (most users, most of the time), secondary (some users, sometimes), or tertiary (few users, rarely). Show only the primary action by default. Make secondary actions accessible with one additional step (a context menu, a '...' trigger). Move tertiary actions to a dedicated settings or detail view. If an action cannot be classified, it probably should not exist.",
  },
  {
    id: 'hero-without-purpose',
    name: 'Hero Without Purpose',
    tagline: "A large, expensive visual statement that serves the brand and ignores the user.",
    description:
      "The Hero Without Purpose occupies the top of the page — often 60-80% of the above-the-fold viewport — with a large image, a gradient background, and a headline that communicates the product's identity rather than the user's immediate need. It is optimized for first impressions in portfolio screenshots and investor decks, not for returning users who have a task to complete.",
    whyItFails:
      "The hero section of an interface is the most expensive real estate in digital product design. Users form their impression of a product within the first few seconds of a visit, and the hero section dominates those seconds. A hero that communicates brand values rather than user value during those seconds is spending the most valuable attention budget on the least actionable content. For returning users, this is not merely wasteful — it is actively obstructive.",
    symptoms: [
      'Hero occupies more than 50% of initial viewport',
      'Headline communicates brand identity rather than user value',
      'Primary call to action is buried below the hero section',
      'Illustration or image has no relationship to the product functionality',
    ],
    betterApproach:
      "The entry point of any screen should answer the user's first question: what can I do here, and where do I start? For a marketing page, this means communicating the primary user benefit and offering a clear next step. For an application, this means surfacing the user's most recent context and their most likely next action. The visual treatment of this content should serve legibility, not impressiveness.",
  },
  {
    id: 'decorative-icon-abuse',
    name: 'Decorative Icon Abuse',
    tagline: 'Icons applied to every element until they communicate nothing.',
    description:
      "Decorative Icon Abuse is the practice of applying icons to every label, every menu item, every section header, and every card — not because the icons add information, but because icon-accompanied interfaces look more designed. The result is a visual system where icons are so ubiquitous that they function as decoration rather than navigation aids.",
    whyItFails:
      "Icons work as communication tools only when they are distinctive, consistently applied, and universally recognizable in context. When every element has an icon, three things happen: first, the visual signal of any individual icon is diluted by the density of surrounding icons; second, users stop processing icons as information and start treating them as visual texture; third, the maintenance burden of an icon system applied at this scale makes inconsistency and errors inevitable.",
    symptoms: [
      'Every navigation item has an accompanying icon',
      'Section headers have decorative icons that repeat the label',
      'Icons differ in style between sections of the same interface',
      'Icon meanings require a legend or are explained in tooltips',
    ],
    betterApproach:
      "Reserve icons for contexts where they provide genuine value: navigation items in collapsed sidebars where text is unavailable, internationally used interfaces where pictograms cross language barriers, and standardized actions (search, close, menu) where icon recognition is near-universal. In all other contexts, evaluate whether a well-written text label serves the user better. It usually does.",
  },
  {
    id: 'infinite-card-syndrome',
    name: 'Infinite Card Syndrome',
    tagline: 'Everything wrapped in a card until the card loses all meaning.',
    description:
      "Infinite Card Syndrome is the application of card components to every piece of content in an interface, regardless of whether the card's grouping and containment functions serve any purpose. The result is a grid of equal-sized, equal-weight containers that creates visual uniformity without creating visual hierarchy.",
    whyItFails:
      "Cards are a containment pattern with a specific function: they group related items, communicate selectability or interactivity, and create clear separation between discrete entities. When applied universally, they lose all three functions. Equal-weight cards create flat hierarchy. Cards applied to non-interactive content mislead users about interactivity. Cards applied to everything group nothing because grouping requires contrast.",
    symptoms: [
      'All content rendered in cards regardless of content type',
      'Cards used for non-interactive, non-selectable content',
      'Card grid with no visual hierarchy between items',
      'Card borders, shadows, and backgrounds applied uniformly at full strength',
    ],
    betterApproach:
      "Use cards for genuinely discrete entities that are selectable, navigable, or contextually bounded. Use flat sections or prose layout for informational content. Vary card treatment by importance: primary content cards may have borders and backgrounds; secondary content may be rendered as a simpler list. Reserve maximum card emphasis for content that warrants maximum attention.",
  },
  {
    id: 'shadow-addiction',
    name: 'Shadow Addiction',
    tagline: "Shadows applied to everything, communicating nothing.",
    description:
      "Shadow Addiction is the reflexive application of box shadows to every container, card, modal, and interactive element — not to communicate depth or interactivity, but because shadows make surfaces look professional and finished. The result is an interface where depth is a visual texture rather than a meaningful signal.",
    whyItFails:
      "Shadows communicate elevation and interactivity. When a surface has a shadow, it communicates that it sits above other surfaces — that it is foregrounded, important, or interactive. When every surface has a shadow, this communication collapses. Users cannot distinguish a shadow that indicates \"this is a modal dialog that overlays the page\" from a shadow that indicates \"this card has a drop shadow because the designer preferred it.\" The result is a depth system that communicates nothing while adding significant visual noise.",
    symptoms: [
      'All cards have identical box shadows regardless of context',
      'Non-interactive elements have hover shadows identical to interactive ones',
      'Modals, dropdowns, and cards share the same shadow value',
      'Shadow values not documented as semantic tokens in the design system',
    ],
    betterApproach:
      "Create a three-level shadow semantic scale: low (for subtle surface separation), medium (for interactive elements like cards and buttons), and high (for overlaid elements like modals and dropdowns). Apply each level only to the element types it is defined for. For non-interactive informational content, use borders rather than shadows — they are equally effective at grouping and separation without implying interactivity.",
  },
  {
    id: 'notification-fatigue',
    name: 'Notification Fatigue',
    tagline: 'Every system event treated as equally worthy of the user\'s immediate attention.',
    description:
      "Notification Fatigue is the result of a notification system that does not differentiate between events by urgency, relevance, or required action. Every system event — a teammate's comment, a successful background process, an approaching deadline, a failed payment — is communicated through the same visual treatment and the same interruptive delivery mechanism.",
    whyItFails:
      "Notifications work through attention. Users learn to respond to them because they have learned that notifications are worth responding to. When the signal quality of a notification system degrades — when some notifications are urgently actionable and some are purely informational and they are visually identical — users adopt one of two failure modes: they dismiss all notifications without reading them, or they stop reading them entirely. Both outcomes make the notification system worse than useless, because it consumes attention that could have been allocated to genuinely important alerts.",
    symptoms: [
      'Same visual treatment for urgent alerts and informational notices',
      'Notifications for events that required no user action',
      'No mechanism for users to configure notification priority',
      'Notification count badges that accumulate without urgency differentiation',
    ],
    betterApproach:
      "Define a four-tier notification taxonomy: Critical (requires immediate action, high interrupt), Important (requires action, low interrupt), Informational (no action required, passive display), and Activity (background event log, accessible but not surfaced). Apply distinct visual treatments and delivery mechanisms to each tier. Never use the same notification component for critical alerts and background activity. Give users control over which tiers interrupt them.",
  },
  {
    id: 'progressive-disclosure-inversion',
    name: 'Progressive Disclosure Inversion',
    tagline: 'Advanced information first, basic information hidden.',
    description:
      "Progressive Disclosure Inversion occurs when an interface leads with technical, detailed, or advanced information while burying the basic context that users need to make that advanced information meaningful. It is the design equivalent of reading the footnotes before the thesis — technically possible, practically disorienting.",
    whyItFails:
      "Users process information sequentially. They need context before detail, definition before elaboration, goal before method. When an interface provides detail before context, users must hold unprocessed information in working memory while they search for the contextual frame that makes it meaningful. This is cognitively expensive and often results in users abandoning the interaction before they find the context they need.",
    symptoms: [
      'Technical specifications appear before product descriptions',
      'Configuration options appear before the value proposition of the feature',
      'Error details appear without a plain-language explanation of what went wrong',
      'Data tables appear before the question the data is intended to answer',
    ],
    betterApproach:
      "Apply the inverted pyramid model to every screen: lead with the most important information, follow with supporting detail, and place technical specifics last. For any piece of data or configuration, ask: what does the user need to understand first? Provide that understanding before anything else. Advanced information should be discoverable but not prominent unless the user has established they are in an advanced context.",
  },
]

export default function AntiPatternsPage() {
  return (
    <PageShell>
      <PageHeader
        label="Anti-Patterns"
        title="Common failures. Documented and resolved."
        description="Anti-patterns are design decisions that feel reasonable in isolation but produce systematic failures in use. Naming them is the first step toward avoiding them. Understanding why they fail is the second."
      />

      {/* Pattern index */}
      <div className="mb-16 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {antiPatterns.map((pattern) => (
          <a
            key={pattern.id}
            href={`#${pattern.id}`}
            className="group border border-stone-200 bg-white p-4 transition-all duration-250 hover:border-stone-950"
          >
            <p className="text-sm font-medium text-stone-950 group-hover:text-stone-950">
              {pattern.name}
            </p>
            <p className="mt-1 text-xs leading-snug text-stone-400">{pattern.tagline}</p>
          </a>
        ))}
      </div>

      <div className="space-y-0">
        {antiPatterns.map((pattern) => (
          <section
            key={pattern.id}
            id={pattern.id}
            className="border-t border-stone-200 py-16"
          >
            {/* Header */}
            <div className="mb-8">
              <h2 className="mb-2 text-2xl font-light tracking-tight text-stone-950">
                {pattern.name}
              </h2>
              <p className="text-base italic text-stone-400">{pattern.tagline}</p>
            </div>

            {/* Content grid */}
            <div className="grid gap-10 md:grid-cols-3">
              <div>
                <p className="label mb-3 text-stone-400">What it is</p>
                <p className="text-sm leading-relaxed text-stone-600">{pattern.description}</p>
              </div>
              <div>
                <p className="label mb-3 text-stone-400">Why it fails</p>
                <p className="text-sm leading-relaxed text-stone-600">{pattern.whyItFails}</p>
              </div>
              <div>
                <p className="label mb-3 text-stone-400">Better approach</p>
                <p className="text-sm leading-relaxed text-stone-600">{pattern.betterApproach}</p>
              </div>
            </div>

            {/* Symptoms */}
            <div className="mt-8 border-t border-stone-100 pt-8">
              <p className="label mb-4 text-stone-400">Warning Signs</p>
              <ul className="grid gap-2 md:grid-cols-2">
                {pattern.symptoms.map((symptom, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-stone-500">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-300" />
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <CTA
        title="Explore the Design Pyramid"
        description="The structural model that prevents most anti-patterns by enforcing the right order of design decisions."
        href="/pyramid"
        label="VIEW THE PYRAMID"
      />
    </PageShell>
  )
}
