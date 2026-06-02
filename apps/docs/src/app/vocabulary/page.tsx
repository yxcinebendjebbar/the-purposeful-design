import type { Metadata } from 'next'
import { PageShell, PageHeader, CTA } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Design Vocabulary',
  description:
    'The official terminology of The Purposeful Design — precisely defined terms for discussing design decisions with clarity and shared meaning.',
}

const terms = [
  {
    term: 'Purpose',
    category: 'Foundational',
    definition:
      'The specific, articulable reason an interface element exists. Not a general justification ("it provides context") but a precise statement of user benefit ("it tells the user whether their session will expire before they finish the form").',
    example:
      'The purpose of a progress indicator in a multi-step form is to prevent users from abandoning the process because they are uncertain how much remains. A progress indicator without a clear count of remaining steps does not fully serve this purpose.',
    why:
      'Without a precise definition of purpose, design decisions cannot be evaluated, defended, or iterated upon. "It looks good" is not a purpose. "It reduces user abandonment by communicating progress" is.',
  },
  {
    term: 'Signal',
    category: 'Communication',
    definition:
      'Any design element that carries specific, intentional information. A signal communicates something the user needs to know in order to accomplish their goal, make a decision, or understand their context.',
    example:
      'A red border on an invalid form field is a signal: it tells the user exactly which field has an error. A red background on a card section used purely for visual contrast is not a signal — it is decoration that has borrowed the vocabulary of a signal.',
    why:
      'Distinguishing signal from noise is the fundamental act of interface design. Every element should be clearly signal or clearly removed. Ambiguous elements — those that might be signals or might be decoration — create cognitive confusion.',
  },
  {
    term: 'Noise',
    category: 'Communication',
    definition:
      'Any design element that occupies visual space, draws attention, and competes with signals without contributing information or aiding navigation. Noise may be decorative, redundant, or vestigial (remaining from a previous design that no longer applies).',
    example:
      'An icon placed beside every navigation label is noise if the icon adds no information beyond what the label already communicates. A background texture applied to all cards is noise if it creates visual complexity without aiding grouping or categorization.',
    why:
      'The signal-to-noise ratio is a practical metric for evaluating interface clarity. High-noise interfaces require more cognitive effort from users because the brain cannot efficiently filter relevant from irrelevant visual input.',
  },
  {
    term: 'Intent',
    category: 'Foundational',
    definition:
      "The designer's explicit, documented decision to place an element and the reasoning behind that decision. Intent distinguishes purposeful design decisions from habitual, conventional, or arbitrary ones.",
    example:
      "Intent means being able to answer \"why is this here?\" with precision. \"Because all dashboards have a sidebar\" is habit. \"Because users in testing consistently needed access to their project list while reviewing individual tasks\" is intent.",
    why:
      "Documented intent makes design systems auditable and improvable. When a design decision fails — when users ignore an element, misuse it, or express confusion about it — intent documentation tells you whether the failure was in the execution or in the assumption.",
  },
  {
    term: 'Focus',
    category: 'Attention',
    definition:
      "The state in which a user's attention is directed toward a specific element or task without competing demands from surrounding elements. Focus is both a user cognitive state and a design outcome.",
    example:
      "A modal dialog that disables interaction with background content creates focus. A modal dialog that leaves the background fully visible and interactive at normal opacity does not create focus — it creates a competing visual context.",
    why:
      "Interfaces that cannot create focus cannot guide user behavior. If users must decide where to look and what to do next at every moment, the interface is not navigating them — they are navigating it.",
  },
  {
    term: 'Hierarchy',
    category: 'Structure',
    definition:
      "The visual and informational structure that communicates the relative importance of elements on a screen. Hierarchy tells users what to see first, what to see next, and what is subordinate or contextual.",
    example:
      "In a notification component, hierarchy means the notification title is at display weight, the message body is at body weight, the timestamp is at caption weight with muted color, and the dismiss button is placed peripherally. Every element's treatment communicates its relative importance.",
    why:
      "Without hierarchy, users cannot scan. Scanning is the primary reading mode for digital interfaces. If users must read every element to find what they need, the interface has failed to do its primary job: directing attention efficiently.",
  },
  {
    term: 'Progression',
    category: 'Structure',
    definition:
      "The deliberate sequencing of information and interactions so that users receive what they need at the moment they need it, and are not presented with information before its context has been established.",
    example:
      "An account creation flow that asks for basic information (name, email, password) before asking for preferences (notification settings, theme choice) before asking for configuration (team setup, integrations) is following progression. Presenting all of these simultaneously is not.",
    why:
      "Progression respects the user's cognitive state at each moment in their journey. It acknowledges that context matters — a user setting up their account for the first time cannot make meaningful integration configuration decisions until they understand what the product does.",
  },
  {
    term: 'Context',
    category: 'Understanding',
    definition:
      "The set of circumstances surrounding a user's interaction with an interface: their current task, their knowledge state, their environment, their emotional state, and the prior interactions that brought them to this moment.",
    example:
      "A user arriving at an error page after attempting to complete a payment is in a different context than a user browsing documentation. The first user needs immediate resolution guidance. The second needs comprehensive information. Showing both the same interface would serve neither well.",
    why:
      "Interface design that ignores context produces interfaces that serve an abstract user in an abstract situation. Context-aware design serves real users in the situations where the interface actually matters.",
  },
  {
    term: 'Meaning',
    category: 'Communication',
    definition:
      "The specific information that a design element communicates, distinct from its visual properties. Meaning is the content of the signal — what the element tells the user, not how it looks while telling them.",
    example:
      "A red color has no inherent meaning. In a form validation context, red means \"this field has an error.\" In a sports application context, red means \"this team.\" In a financial context, red means \"this value represents a loss.\" The meaning is determined by context and contract, not by the color itself.",
    why:
      "Separating meaning from visual properties allows designers to evaluate whether a visual choice serves its communicative purpose. When meaning is conflated with visual properties, it is impossible to evaluate whether a red button \"feels\" more urgent or actually communicates urgency more effectively.",
  },
  {
    term: 'Attention',
    category: 'Attention',
    definition:
      "The finite cognitive resource that users allocate to processing interface elements. Attention is the primary resource that interface design manages — every element demands some, and the total available is limited.",
    example:
      "On a checkout page, attention spent reading marketing copy about product quality is attention not available for completing the purchase form. On a settings page, attention spent parsing decorative background textures is attention not available for understanding the setting being configured.",
    why:
      "Treating attention as a finite resource changes how designers evaluate every element. The question is not just \"is this element good?\" but \"is this element worth the attention it will cost, relative to the other elements on this screen?\"",
  },
  {
    term: 'Chrome',
    category: 'Structure',
    definition:
      "The structural, navigational, and decorative elements of an interface that surround and frame the primary content. Chrome includes headers, sidebars, footers, navigation bars, breadcrumbs, toolbars, and status bars.",
    example:
      "A reading application's chrome might include a navigation bar with the user's library, a reading progress indicator, and a settings button. Minimal chrome allocates maximum space to the text. Excessive chrome compresses the reading area with controls the user needs rarely.",
    why:
      "Chrome is necessary but secondary. It exists to serve content, not to compete with it. Monitoring chrome size and visual weight is a practical way to ensure that the interface's supporting structure does not overwhelm its primary purpose.",
  },
  {
    term: 'Density',
    category: 'Structure',
    definition:
      "The amount of information presented per unit of visual space. Density is neither good nor bad — it is appropriate or inappropriate for the user's context, expertise level, and task requirements.",
    example:
      "A professional trading terminal appropriately uses high density: experienced traders need to monitor many data points simultaneously and have invested in learning the environment. A consumer banking app appropriately uses low density: most users visit infrequently, need specific information quickly, and have not invested in learning the environment.",
    why:
      "Density decisions must be made relative to the user, not relative to aesthetic preference. The same information density that is efficient for an expert user is overwhelming for a novice. Design systems that ignore user expertise level in their density decisions serve neither group well.",
  },
]

export default function VocabularyPage() {
  return (
    <PageShell>
      <PageHeader
        label="Vocabulary"
        title="Shared language for shared decisions."
        description="Precise terminology is not pedantry — it is the foundation of productive conversation. When a design team uses the same words with the same meanings, they can discuss decisions with clarity and reach alignment without misunderstanding."
      />

      {/* Alphabet index */}
      <div className="mb-16 flex flex-wrap gap-2">
        {['Foundational', 'Communication', 'Attention', 'Structure', 'Understanding'].map((cat) => (
          <span
            key={cat}
            className="inline-flex items-center border border-stone-200 px-3 py-1 text-xs font-medium tracking-wider text-stone-500 uppercase"
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="space-y-0">
        {terms.map((item) => (
          <div
            key={item.term}
            id={item.term.toLowerCase()}
            className="grid gap-8 border-t border-stone-200 py-12 md:grid-cols-[200px_1fr]"
          >
            {/* Term */}
            <div>
              <h2 className="text-xl font-medium tracking-tight text-stone-950">{item.term}</h2>
              <span className="label mt-2 block text-stone-400">{item.category}</span>
            </div>

            {/* Content */}
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <p className="label mb-3 text-stone-400">Definition</p>
                <p className="text-sm leading-relaxed text-stone-600">{item.definition}</p>
              </div>
              <div>
                <p className="label mb-3 text-stone-400">Example</p>
                <p className="text-sm leading-relaxed text-stone-600">{item.example}</p>
              </div>
              <div>
                <p className="label mb-3 text-stone-400">Why it matters</p>
                <p className="text-sm leading-relaxed text-stone-600">{item.why}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CTA
        title="Measure Purposeful Design"
        description="Practical metrics for evaluating whether your interfaces meet the standard."
        href="/metrics"
        label="VIEW METRICS"
      />
    </PageShell>
  )
}
