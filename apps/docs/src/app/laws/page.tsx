import type { Metadata } from 'next'
import { PageShell, PageHeader, CTA } from '@/components/ui'

export const metadata: Metadata = {
  title: 'The Laws of Purposeful Design',
  description:
    'Fifteen non-negotiable design laws — concise, memorable, and enforceable constraints that govern every design decision.',
}

const laws = [
  {
    number: '01',
    law: 'If everything is primary, nothing is primary.',
    explanation:
      "Emphasis is a comparative judgment. Something is important relative to something else. When everything receives the same visual weight and the same level of prominence, the concept of importance collapses. There is no signal because there is no contrast. Apply the primary/secondary/tertiary hierarchy to every action, every piece of content, and every interface element.",
  },
  {
    number: '02',
    law: 'Color must communicate information.',
    explanation:
      "Every use of color beyond the base text color must carry a specific semantic payload. Use color when it adds information that would require additional text to convey otherwise. Remove color when its removal does not reduce the information content of the interface. A color that serves no informational purpose is noise that competes with colors that do.",
  },
  {
    number: '03',
    law: 'Visual complexity requires justification.',
    explanation:
      "Complexity is not a feature. It is a cost transferred to the user. Every layer of complexity you add — every additional option, every additional visual treatment, every additional interaction pattern — must be justified by a clear user benefit that exceeds the cost of the complexity. If you cannot state the justification clearly, the complexity is unjustified.",
  },
  {
    number: '04',
    law: 'Every screen has one primary action.',
    explanation:
      "Users can hold one primary goal in focus at a time. When a screen presents multiple primary actions — visually equivalent, equally prominent, equally available — users must mentally evaluate each option before acting. This evaluation is a cognitive cost you are imposing on them. Define the primary action for every screen and make everything else secondary.",
  },
  {
    number: '05',
    law: 'Icons without labels are gambles.',
    explanation:
      "Icon recognition is not universal. Unless an icon has become universally standardized through decades of exposure — the save diskette, the home house, the search magnifying glass — it requires a label to communicate reliably. An unlabeled icon gambles user comprehension against design elegance. In interfaces where user errors carry real cost, this gamble is not acceptable.",
  },
  {
    number: '06',
    law: 'The first thing a user sees should be the thing they most need.',
    explanation:
      "The visual entry point of a screen — the element that receives the most initial attention due to size, position, contrast, or motion — should be the element that is most important to the user in this context. If the first thing users see is a logo, a decorative image, or a navigation bar, the design has failed to apply hierarchy at the level where it matters most: the initial scan.",
  },
  {
    number: '07',
    law: 'Typography is hierarchy before it is style.',
    explanation:
      "The primary function of a typographic system is to communicate the structure of information — to show which text is more important, which is subordinate, and which is contextual. Style — the choice of typeface, weight variation, color application — is secondary to this structural function. A typographic system that is stylistically consistent but hierarchically flat has failed its primary purpose.",
  },
  {
    number: '08',
    law: 'White space is not empty. It is structure.',
    explanation:
      "White space performs three functions: it groups related elements, it separates unrelated elements, and it directs attention to what remains. Removing white space to fit more content destroys all three functions simultaneously. When you collapse white space, you do not add information — you remove the structure that makes existing information legible.",
  },
  {
    number: '09',
    law: 'A design decision you cannot explain is a design decision you cannot defend.',
    explanation:
      "Every element in an interface should be explainable in terms of user benefit. If you cannot explain why an element exists in terms of what it does for the user — not what it does for the design, the brand, or the stakeholder — you cannot defend its presence when it comes time to audit, reduce, or redesign.",
  },
  {
    number: '10',
    law: 'Animations must confirm or communicate, not perform.',
    explanation:
      "Motion is processed pre-attentively — it captures attention before the conscious mind can decide to look away. This makes it one of the most powerful tools in an interface designer's vocabulary, and one of the most easily misused. Use motion when it confirms an action's completion, communicates a state transition, or reveals new information. Remove motion that exists to feel dynamic, to signal technical sophistication, or to fill time during loading.",
  },
  {
    number: '11',
    law: 'Never use color as the sole differentiator between states.',
    explanation:
      "Approximately 8% of males and 0.5% of females experience some form of color vision deficiency. Using color as the only way to distinguish between success and error, between active and inactive, or between selected and unselected excludes these users entirely. Every color-based distinction must be paired with a secondary differentiator: icon, text label, pattern, or positional cue.",
  },
  {
    number: '12',
    law: 'Provide the minimum information required at each step.',
    explanation:
      "Progressive disclosure is not a UX pattern. It is a principle of respect. Users who are completing a task do not need to see all the information that will eventually become relevant — they need to see the information that is relevant now. Presenting future-relevant information alongside present-relevant information forces users to filter, which is cognitive work you are asking them to do on your behalf.",
  },
  {
    number: '13',
    law: 'Error messages must explain what happened and what to do next.',
    explanation:
      "An error message that says only \"Something went wrong\" has transferred the entire burden of resolution to the user. They must figure out what happened, why it happened, whether it is their fault, and what they should do now — all from a five-word message. Error messages are one of the most consequential pieces of copy in any interface. They must be clear, specific, actionable, and non-judgmental.",
  },
  {
    number: '14',
    law: 'Defaults are design decisions.',
    explanation:
      "The default state of every toggle, every form field, every filter, every setting, and every view is a statement about what you believe the user most likely wants. Choose defaults carefully. The default state will be the state that most users experience most of the time. A poorly chosen default causes more friction than any other single design decision, because it affects every user, every time.",
  },
  {
    number: '15',
    law: 'The best interface for most tasks is the most familiar one.',
    explanation:
      "Familiarity is not a failure of creativity. It is a form of respect. Interfaces that use familiar patterns leverage the cognitive investment users have already made in learning other interfaces. This investment is real and has real value. You should spend users' learning budget on the parts of your interface that are genuinely novel — the parts that do something no existing interface does. Spend nothing of it on recreating what already exists.",
  },
]

export default function LawsPage() {
  return (
    <PageShell>
      <PageHeader
        label="The Laws"
        title="Fifteen laws. Non-negotiable."
        description="Where principles are frameworks for thinking, laws are constraints for deciding. These are not guidelines to consider — they are standards to enforce. Every design decision that violates a law carries a documented cost."
      />

      <div className="space-y-0">
        {laws.map((item) => (
          <div
            key={item.number}
            className="group grid gap-6 border-t border-stone-200 py-10 md:grid-cols-[80px_1fr] md:gap-12"
          >
            <span className="label mt-1 text-stone-300">{item.number}</span>
            <div>
              <h2 className="mb-4 text-lg font-medium leading-snug tracking-tight text-stone-950">
                {item.law}
              </h2>
              <p className="max-w-[64ch] text-sm leading-relaxed text-stone-600">
                {item.explanation}
              </p>
            </div>
          </div>
        ))}
      </div>

      <CTA
        title="Explore the Vocabulary"
        description="The official terminology of Purposeful Design — defined with precision."
        href="/vocabulary"
        label="VIEW VOCABULARY"
      />
    </PageShell>
  )
}
