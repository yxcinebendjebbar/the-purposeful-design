import type { Metadata } from 'next'
import { PageShell, PageHeader, Section, Tag, CTA } from '@/components/ui'

export const metadata: Metadata = {
  title: 'The Problems We Are Solving',
  description:
    'Visual noise, hierarchy collapse, action overload, decorative design, color misuse, information density, and feature obsession — the problems that Purposeful Design addresses.',
}

const problems = [
  {
    id: 'visual-noise',
    tag: '01',
    title: 'Visual Noise',
    what: 'Visual noise is the accumulation of elements that compete for attention without contributing to the user\'s goals. It includes decorative backgrounds, excessive iconography, unsystematic use of color, competing typographic weights, and any design element whose removal would not reduce the information content of the screen.',
    harm: 'Users experience visual noise as cognitive load. Every element on a screen demands a small amount of attention — the brain must process it, categorize it, and decide whether to act on it. Visual noise fills this processing budget with irrelevant input, leaving less capacity for the elements that matter. The result is slower task completion, higher error rates, and a persistent sense of confusion that users may attribute to their own inadequacy rather than to the design.',
    examples:
      'A dashboard where every metric card has a different background color, gradient, and icon combination. A landing page where four different call-to-action buttons compete at the same visual weight. A form where decorative line dividers, background patterns, and icon labels all occupy equal visual prominence.',
    solution:
      'Apply the signal-to-noise ratio as a design metric. For any given screen, ask: what is the information this screen is communicating? Then ask: what percentage of the visual elements contribute to that communication? Every element that contributes to neither the information nor the navigation structure of a screen should be removed or subordinated.',
  },
  {
    id: 'hierarchy-collapse',
    tag: '02',
    title: 'Hierarchy Collapse',
    what: "Hierarchy collapse occurs when a screen's visual structure fails to communicate the relative importance of its elements. Everything appears at approximately the same visual weight, creating a flat plane of information with no clear entry point, no obvious next step, and no natural reading order.",
    harm: "Without hierarchy, users cannot scan. They must read everything to find anything, which is cognitively expensive and often impossible under time pressure. This leads to users missing critical information, taking wrong actions, or abandoning tasks entirely. In business contexts, hierarchy collapse directly reduces conversion, increases support volume, and undermines user confidence.",
    examples:
      'Settings pages where critical warnings sit at the same visual weight as label descriptions. Data tables where the primary value, secondary context, and metadata are rendered in the same font size and weight. Navigation menus where active states, inactive states, and section labels share the same typographic treatment.',
    solution:
      'Establish a maximum of four distinct visual levels per screen and use them consistently: primary (one per screen), secondary (few per screen), supporting (many), and contextual (subordinate metadata). Every element must be assigned a level, and that level must be expressed through typography, spacing, or color — not all three simultaneously.',
  },
  {
    id: 'action-overload',
    tag: '03',
    title: 'Action Overload',
    what: "Action overload is the presence of more interactive elements than the user's context requires. It manifests as toolbars with twelve buttons, modals with four action options, list items with five hover-revealed controls, and dashboards where every piece of data has an attached edit, share, export, and delete action.",
    harm: "Barry Schwartz documented the paradox of choice: more options reliably produce worse decisions and greater dissatisfaction than fewer options. In interface design, this translates directly to user behavior. When users are presented with more actions than they can easily evaluate, they either default to the safest option (inaction), make errors, or experience anxiety about their choices. Action overload also signals an absence of product thinking — it suggests the design team was unable or unwilling to prioritize.",
    examples:
      'A document editor whose toolbar contains thirty-two formatting options at equal prominence. A SaaS dashboard where every row of a data table contains edit, duplicate, archive, share, export, and delete actions. A mobile modal that offers five response options where two would serve the user.',
    solution:
      "Apply the primary/secondary/tertiary action framework. Every view should have at most one primary action — the action the user is most likely to need in this context. Secondary actions should be visually subordinate. Tertiary actions should be accessible but not visible by default. Actions that cannot be classified as primary, secondary, or tertiary should be removed or relocated to a context where they are primary.",
  },
  {
    id: 'decorative-design',
    tag: '04',
    title: 'Decorative Design',
    what: 'Decorative design is the application of visual elements whose purpose is aesthetic enhancement rather than communicative function. It includes background illustrations that do not represent data, icon systems applied to text labels that already communicate the same information, animated elements that do not confirm state changes, and visual treatments applied uniformly regardless of their contextual relevance.',
    harm: 'Decoration has two costs: the direct cost of the attention it draws, and the indirect cost of the communicative signal it removes. When color is used decoratively, it cannot be used semantically. When icons are applied to every label, they cease to function as navigation aids and become visual wallpaper. When every element is dressed up, the dressed-up elements cannot signal their importance.',
    examples:
      "An onboarding flow where every step has a large, colorful illustration that has no relationship to the step's content. A navigation bar where each item has an icon that adds no information beyond what the text already communicates. A success message that has the same visual weight and treatment as an error message because the design team wanted visual consistency.",
    solution:
      'Before adding any decorative element, ask two questions: First, does this element communicate information that is not already present? Second, if it does not, does it create an emotional response that measurably improves the user experience in this context? If neither answer is yes, the element should not exist.',
  },
  {
    id: 'color-misuse',
    tag: '05',
    title: 'Color Misuse',
    what: "Color misuse occurs when color is applied in ways that are inconsistent with its communicative function. This includes using multiple colors for aesthetic variety rather than semantic meaning, using the same color for functionally different elements, using color as the sole differentiator between states, and applying colors that exceed the cognitive bandwidth of the design's audience.",
    harm: 'Color is one of the most powerful communicative tools in an interface designer\'s vocabulary. When it is used correctly, a user can immediately understand the status, type, and urgency of any element. When it is misused, color becomes noise. Users cannot distinguish between "this is red because it is dangerous" and "this is red because the designer liked red." Accessibility suffers. Trust erodes. And when color carries no reliable signal, users must read every element in full to understand it — eliminating one of the most significant advantages of visual design.',
    examples:
      "A dashboard that uses eight different colors in a bar chart where four categories would suffice. A button library where primary, secondary, and destructive actions use arbitrary color choices that have no relationship to the action's nature. A notification system where warnings, errors, and informational messages are all displayed in the same yellow-orange color family because it \"matches the brand.\"",
    solution:
      "Establish a semantic color contract and enforce it. Define precisely what each color in the system communicates: green means success, red means error, amber means warning, blue means information. Then use these colors exclusively for these meanings. Brand colors should not be applied to semantic elements. Decorative colors should not share values with semantic colors. The contract must be legible to users without documentation.",
  },
  {
    id: 'information-density',
    tag: '06',
    title: 'Unmanaged Information Density',
    what: 'Unmanaged information density occurs when a screen presents more information simultaneously than users can reasonably process in their current context. It is distinct from legitimate density — the kind found in professional data tools, code editors, and command-line interfaces where high density serves expert users who have invested in learning the environment.',
    harm: "The problem is not density itself. The problem is density without structure, density without priority, density without a clear model of who the user is and what they need in this moment. When unmanaged density is combined with hierarchy collapse, the result is interfaces that feel overwhelming to new users, are resistant to scanning even for experienced users, and force users to mentally filter large amounts of irrelevant information to find what they need.",
    examples:
      'An analytics dashboard that displays thirty-two metrics simultaneously to users who have come to check three. An account settings page where security settings, notification preferences, billing details, and integration configurations are all presented at the same depth on one scrolling page. A product listing that includes the full technical specification for every item alongside pricing, availability, and purchase options.',
    solution:
      'Model the information hierarchy for each user context. What does this user need to know first? What do they need to know next? What do they need access to but rarely use? Use progressive disclosure: lead with the essential, make the secondary accessible, bury the tertiary. Never show everything at once because you are not confident enough to decide what matters.',
  },
  {
    id: 'feature-obsession',
    tag: '07',
    title: 'Feature Obsession',
    what: "Feature obsession is the pattern of adding capabilities to a product or interface in response to requests, competitive pressure, or the instinct to do more — without systematic evaluation of whether each addition serves the product's core purpose and primary users.",
    harm: "Feature obsession is a product management problem that becomes a design problem. Every feature added to a product requires real estate in the navigation, real estate in onboarding, real estate in support documentation, and real estate in the user's mental model of what the product is. Products that grow by accumulation rather than by design become progressively harder to use, harder to learn, and harder to communicate. They lose their identity. They serve nobody well because they try to serve everybody.",
    examples:
      'A task management tool that adds a mind-mapping feature, a whiteboarding tool, a document editor, and a video conferencing integration until it is indistinguishable from its competitors and mastered by none of its users. A calendar application where fifteen different event types, six different viewing modes, and eleven different sharing options have made the core task — creating an event — a three-step modal with a warning about timezone conflicts.',
    solution:
      "Before adding any feature, define the product's primary purpose in one sentence. Then ask: does this feature serve that purpose, or does it dilute it? If it serves it, ask: does it serve the primary user or a secondary one? If it serves a secondary user, it may deserve a separate product, a power user mode, or an optional integration — not a position in the primary navigation.",
  },
]

export default function ProblemPage() {
  return (
    <PageShell>
      <PageHeader
        label="The Problems"
        title="Modern interfaces suffer from seven systemic failures."
        description="These are not isolated mistakes made by careless designers. They are patterns that emerge from systemic pressures — how design work is evaluated, how product decisions are made, and what incentives shape day-to-day decisions. Understanding the problems is the first step toward building systems that prevent them."
      />

      <div className="space-y-0">
        {problems.map((problem, index) => (
          <section
            key={problem.id}
            id={problem.id}
            className="border-t border-stone-200 py-14 first:border-t-0"
          >
            <div className="mb-8 flex items-baseline gap-4">
              <Tag variant="muted">{problem.tag}</Tag>
              <h2 className="text-2xl font-light tracking-tight text-stone-950">{problem.title}</h2>
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="label mb-3 text-stone-400">What it is</p>
                <p className="text-sm leading-relaxed text-stone-600">{problem.what}</p>
              </div>
              <div>
                <p className="label mb-3 text-stone-400">Why it harms users</p>
                <p className="text-sm leading-relaxed text-stone-600">{problem.harm}</p>
              </div>
              <div>
                <p className="label mb-3 text-stone-400">Examples</p>
                <p className="text-sm leading-relaxed text-stone-600">{problem.examples}</p>
              </div>
              <div>
                <p className="label mb-3 text-stone-400">The Purposeful Design approach</p>
                <p className="text-sm leading-relaxed text-stone-600">{problem.solution}</p>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTA
        title="Read the Manifesto"
        description="The formal statement of what we believe and what we reject."
        href="/manifesto"
        label="READ MANIFESTO"
      />
    </PageShell>
  )
}
