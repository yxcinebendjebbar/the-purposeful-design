import type { Metadata } from 'next'
import { PageShell, PageHeader, Card, CTA } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Measuring Purposeful Design',
  description:
    'Practical metrics for evaluating interface clarity — from primary action counts and semantic color limits to hierarchy recognition tests and visual noise scoring.',
}

const metrics = [
  {
    id: 'primary-action-count',
    name: 'Primary Action Count',
    category: 'Action Clarity',
    standard: 'Maximum 1 per view',
    description:
      "Count the number of visually primary actions on any given screen. A primary action is any button or interactive element rendered at the highest visual prominence — typically the largest, most saturated, or most contrasting interactive element. Every screen should have exactly one. If a screen has zero, users have no clear path forward. If it has two or more, the design has failed to make a prioritization decision.",
    howToMeasure:
      "Open the screen and ask five users: 'Without looking closely, what is the first action you would take on this screen?' If answers vary significantly, the primary action is not visually clear. In design review, count buttons rendered at your system's highest button hierarchy and flag any screen with more than one.",
    target: '1 primary action per view',
    warning: '2+ primary actions requires immediate hierarchy review',
  },
  {
    id: 'semantic-color-count',
    name: 'Semantic Color Count',
    category: 'Color Discipline',
    standard: 'Maximum 4 semantic colors',
    description:
      "Count the number of distinct colors used in your interface to communicate information (as opposed to brand colors in fixed surfaces like logos). Include every color used to signal status, category, urgency, or type. A well-disciplined color system uses no more than four semantic colors: one for success, one for error, one for warning, and one for information. Every color beyond these four must carry a precisely defined, documented meaning that does not overlap with any other.",
    howToMeasure:
      "Review your design tokens or CSS custom properties. List every color that appears on data, labels, badges, status indicators, and interactive elements. Exclude base text, background, and border colors. Count the remaining colors. Each one should have a definition document. Any color without a documented semantic contract is decorative and should be removed.",
    target: '4 semantic colors maximum',
    warning: '6+ semantic colors indicates a color system audit is needed',
  },
  {
    id: 'hierarchy-recognition',
    name: 'Hierarchy Recognition Test',
    category: 'Visual Hierarchy',
    standard: '5 seconds to identify the primary element',
    description:
      "Show a screenshot of your interface to a user for exactly five seconds, then hide it. Ask them: 'What was the most important thing on that screen?' and 'What was the first action you would take?' The answers should match the designer's intent without hesitation. If users cannot identify the primary element in five seconds, the hierarchy is not strong enough for real-world scanning speeds.",
    howToMeasure:
      "Conduct this test with a minimum of five users who have not seen the specific screen before. Record their responses. A passing score is 80%+ alignment between user responses and designer intent. Below 80%, the hierarchy needs strengthening through typography, spacing, or contrast adjustments.",
    target: '80%+ alignment between user identification and designer intent',
    warning: 'Below 60% requires a hierarchy redesign',
  },
  {
    id: 'information-priority',
    name: 'Information Priority Score',
    category: 'Content Hierarchy',
    standard: 'Top 3 user needs visible without scrolling',
    description:
      "For each screen, document the top three pieces of information a user needs to accomplish their goal in this context. Then evaluate the design: are all three of these pieces visible without scrolling? Are they rendered at an appropriate prominence relative to each other? Are they closer to the visual top than secondary information? A screen that fails this test is providing information in the wrong order.",
    howToMeasure:
      "Define the primary user goal for each screen. List the information required to accomplish that goal, ordered by importance. Map this list against the visual hierarchy of the design. Score each screen: 3 points if all top-three items are above the fold at appropriate prominence, 2 if two are, 1 if one is, 0 if none are.",
    target: '3/3 — all primary information visible without scrolling',
    warning: '1/3 or below requires a content hierarchy redesign',
  },
  {
    id: 'visual-noise-score',
    name: 'Visual Noise Score',
    category: 'Visual Clarity',
    standard: 'Signal-to-noise ratio ≥ 70%',
    description:
      "For any given screen, count the total number of visible elements and classify each as Signal (contributes information the user needs), Structure (contributes to navigation or grouping), or Noise (neither contributes information nor aids navigation). Calculate the ratio of Signal + Structure elements to total elements. A well-designed screen should have a signal-to-noise ratio of at least 70%.",
    howToMeasure:
      "In a design review, draw a box around every visible element. For each element, ask: 'If I removed this, would the user lose information or navigational ability?' If yes, it is Signal or Structure. If no, it is Noise. Count all categories. If Noise exceeds 30% of total elements, the screen requires a visual audit.",
    target: 'Noise ≤ 30% of total visual elements',
    warning: 'Noise > 40% requires an immediate visual audit',
  },
  {
    id: 'component-necessity',
    name: 'Component Necessity Score',
    category: 'Component Discipline',
    standard: 'Every component used has a documented purpose',
    description:
      "For each component in your design system, document: what user problem it solves, in what contexts it should appear, and in what contexts it should not. Before adding a component to a screen, verify that the documented purpose applies to this context. This prevents the most common form of component misuse: applying components because they exist in the library, not because they serve the user in this situation.",
    howToMeasure:
      "Create a component audit spreadsheet with columns: Component Name, Documented Purpose, Contexts Where Appropriate, Contexts Where Inappropriate. During design review, verify that every component used on a screen matches a documented appropriate context. Flag any component used outside its documented context for discussion.",
    target: '100% of components have documented purposes and context guidelines',
    warning: 'Undocumented components indicate the system needs a governance audit',
  },
  {
    id: 'reading-level',
    name: 'Interface Reading Level',
    category: 'Copy Clarity',
    standard: 'Grade 8 or below for consumer products',
    description:
      "Measure the reading level of all interface copy using the Flesch-Kincaid grade level scale. Error messages, labels, instructions, and empty states should all be readable by a user with an eighth-grade reading level for consumer products. Professional tools for expert users may go higher, but only when the complexity is inherent to the domain, not to the writing.",
    howToMeasure:
      "Collect all interface copy for a given screen or flow into a text document. Run it through a readability analyzer (Hemingway Editor, Readable.com, or the built-in tool in Microsoft Word). Review any sentence that scores above Grade 8 for simplification. Passive voice, long sentences, and technical jargon are the most common causes of elevated reading levels in interface copy.",
    target: 'Grade 8 or below for consumer applications, Grade 10 or below for professional tools',
    warning: 'Grade 12+ in consumer applications requires a full copy review',
  },
  {
    id: 'task-completion',
    name: 'Unassisted Task Completion Rate',
    category: 'Functional Clarity',
    standard: '≥ 85% of users complete primary task without assistance',
    description:
      "The ultimate metric for interface clarity. Ask users to complete the primary task of a screen or flow without any guidance, documentation reference, or help from team members. Record the percentage who complete the task successfully. This metric exposes clarity failures that internal team testing always misses — because internal teams know the product and cannot un-know it.",
    howToMeasure:
      "Run moderated or unmoderated usability tests with at least five users who represent your target audience. Define success criteria for the primary task before testing begins. Do not offer hints or corrections during the test. Calculate the percentage of users who complete the task without assistance. Analyze the failure patterns of users who do not complete it.",
    target: '≥ 85% unassisted task completion on primary user flows',
    warning: 'Below 70% indicates a clarity problem that requires immediate redesign',
  },
]

export default function MetricsPage() {
  return (
    <PageShell>
      <PageHeader
        label="Metrics"
        title="Purposeful Design is measurable."
        description="Philosophy without measurement is aspiration. These metrics transform the principles and laws of Purposeful Design into standards you can test, track, and improve. They are not perfect proxies — no metric is — but they are honest ones."
      />

      {/* Category overview */}
      <div className="mb-16 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {['Action Clarity', 'Color Discipline', 'Visual Hierarchy', 'Content Hierarchy', 'Visual Clarity', 'Component Discipline', 'Copy Clarity', 'Functional Clarity'].map((cat) => (
          <div key={cat} className="border border-stone-200 bg-white px-4 py-3">
            <p className="text-xs font-medium text-stone-600">{cat}</p>
          </div>
        ))}
      </div>

      <div className="space-y-0">
        {metrics.map((metric) => (
          <section
            key={metric.id}
            id={metric.id}
            className="border-t border-stone-200 py-14"
          >
            {/* Header */}
            <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto]">
              <div>
                <span className="label mb-2 block text-stone-400">{metric.category}</span>
                <h2 className="text-2xl font-light tracking-tight text-stone-950">{metric.name}</h2>
              </div>
              <div className="flex flex-col items-start gap-2 md:items-end">
                <div className="border border-stone-950 bg-stone-950 px-4 py-2">
                  <p className="label text-stone-50">{metric.standard}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <p className="label mb-3 text-stone-400">What it measures</p>
                <p className="text-sm leading-relaxed text-stone-600">{metric.description}</p>
              </div>
              <div>
                <p className="label mb-3 text-stone-400">How to measure it</p>
                <p className="text-sm leading-relaxed text-stone-600">{metric.howToMeasure}</p>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-stone-950 pl-4">
                  <p className="label mb-1 text-stone-400">Target</p>
                  <p className="text-sm font-medium text-stone-700">{metric.target}</p>
                </div>
                <div className="border-l-2 border-stone-300 pl-4">
                  <p className="label mb-1 text-stone-400">Warning</p>
                  <p className="text-sm text-stone-500">{metric.warning}</p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTA
        title="Identify the Anti-Patterns"
        description="The common mistakes that these metrics are designed to catch — described and diagnosed."
        href="/anti-patterns"
        label="VIEW ANTI-PATTERNS"
      />
    </PageShell>
  )
}
