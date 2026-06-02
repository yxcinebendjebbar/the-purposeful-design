import type { Metadata } from 'next'
import { PageShell, PageHeader, CTA } from '@/components/ui'

export const metadata: Metadata = {
  title: 'The Purposeful Design Pyramid',
  description:
    'The five-layer structural model of Purposeful Design — from purpose at the foundation to visual style at the surface.',
}

const layers = [
  {
    level: 1,
    name: 'Purpose',
    color: 'bg-stone-950',
    textColor: 'text-stone-50',
    borderColor: 'border-stone-950',
    definition:
      'The reason the interface exists. The problem it solves. The user it serves. Purpose is not a mission statement — it is a precise, articulable description of why this specific screen, flow, or component needs to exist.',
    questions: [
      'What user problem does this interface solve?',
      'Who is the primary user of this interface?',
      'What does success look like for this user in this context?',
      'What would the user do if this interface did not exist?',
    ],
    why: "Purpose is the foundation because every other layer depends on it. Without a clear purpose, content decisions are arbitrary, hierarchy decisions are aesthetic, and interaction decisions are habitual. The purpose layer asks designers to answer the hardest question before answering any other: why does this need to exist? Teams that skip the purpose layer are not designing — they are decorating.",
    example:
      "The purpose of a password reset flow is not to 'allow users to reset their password.' That is a description of the mechanism. The purpose is to restore a user's access to an account when they have lost their credentials, with minimum frustration, minimum security risk, and maximum confidence that the process will work on the first attempt. This precise purpose definition changes what the flow looks like: it prioritizes clarity over brevity, builds trust through transparency about what is happening, and eliminates all non-essential steps.",
  },
  {
    level: 2,
    name: 'Content',
    color: 'bg-stone-800',
    textColor: 'text-stone-50',
    borderColor: 'border-stone-800',
    definition:
      'The actual substance of the interface — the information, data, text, and values that users came to see, interact with, or act upon. Content is the reason users are present. Everything else exists to serve it.',
    questions: [
      'What information does this user need to accomplish their goal?',
      'What is the minimum viable content for this screen?',
      'Is there content present that the user does not need in this context?',
      'Is any content missing that the user will need before they can proceed?',
    ],
    why: "Content is the second layer because the purpose defines what content is needed, but nothing else should influence that decision yet. Hierarchy, interaction, and visual style should not dictate content — they should serve it. Designers who begin with visual layout before defining content are setting up a system where the content must fit the design. This relationship should be reversed: the design must serve the content.",
    example:
      "For the password reset flow, the content layer establishes what the user needs to know at each step: what they need to enter (their email address), what will happen next (a link will be sent), how long they have (24 hours), and what to do if they do not receive it (check spam, try again, contact support). Only when this content is fully defined should the designer consider how to organize or present it.",
  },
  {
    level: 3,
    name: 'Hierarchy',
    color: 'bg-stone-600',
    textColor: 'text-stone-50',
    borderColor: 'border-stone-600',
    definition:
      'The structure that communicates the relative importance of content. Hierarchy determines what users see first, what they see next, and what they can access but do not need immediately. It is the editor\'s function in the designer\'s work.',
    questions: [
      'What is the single most important piece of information on this screen?',
      'What information must the user process before they can act?',
      'What information supports the primary content but is not primary itself?',
      'What information is contextual — accessible but not requiring prominence?',
    ],
    why: 'Hierarchy is the third layer because it cannot be established until the content is defined. You cannot rank things you have not yet identified. Once the content is complete, hierarchy is the act of making editorial decisions: not what to include, but what to foreground. Strong hierarchy is what separates scannable interfaces from interfaces that require reading. It is the difference between an interface that guides and an interface that presents.',
    example:
      "In the password reset flow, hierarchy establishes that the field label and input come first (the primary action requirement), the explanatory copy about what will be sent comes second (supporting context), the time limit comes third (important but not urgent), and the 'did not receive it?' link comes last (needed by a subset of users who fail the primary flow). This hierarchy is visible in the visual treatment before any color or typeface is chosen.",
  },
  {
    level: 4,
    name: 'Interaction',
    color: 'bg-stone-400',
    textColor: 'text-stone-950',
    borderColor: 'border-stone-400',
    definition:
      'The mechanisms through which users act on the content and navigate the interface. Interaction design defines what users can do, how they do it, and what they experience as a result of their actions.',
    questions: [
      'What actions are available to the user on this screen?',
      'Which action is primary? Which are secondary?',
      'What happens after each action — what does the user see next?',
      'How does the interface communicate the result of each action?',
    ],
    why: "Interaction is the fourth layer because the available interactions are determined by the content and the hierarchy, not by interaction design conventions. The interactions that belong on a screen are the ones that allow users to act on the content they have been shown, in the order the hierarchy has established. Designing interactions before hierarchy leads to action patterns that do not align with the information structure, producing interfaces where users have to look for the action that serves the content they are reading.",
    example:
      "For the password reset flow, interaction design establishes a single primary action (Submit), clear error feedback for invalid email addresses (inline validation with explanatory text), a loading state that confirms the submission is processing, and a success state that confirms delivery without requiring the user to leave the page to verify.",
  },
  {
    level: 5,
    name: 'Visual Style',
    color: 'bg-stone-200',
    textColor: 'text-stone-950',
    borderColor: 'border-stone-200',
    definition:
      'The visual language that expresses the hierarchy, reinforces the interaction patterns, and communicates the character of the product. Visual style includes typography, color, spacing, motion, and all aesthetic decisions.',
    questions: [
      'Does the visual treatment make the hierarchy visible?',
      'Does the color system communicate the semantic meaning of each element?',
      'Does the spacing reinforce the grouping established in the content layer?',
      'Does the motion confirm interactions without performing for its own sake?',
    ],
    why: "Visual style is the last layer because every visual decision should be determined by the layers beneath it. Typography choices should make the hierarchy legible. Color choices should carry the semantic contracts established in the content layer. Spacing choices should reinforce the groupings established in the hierarchy layer. Motion choices should confirm the interactions established in the interaction layer. When visual style is applied before these foundations are in place, it cannot serve them — it can only compete with them.",
    example:
      "For the password reset flow, visual style applies a large, light-weight heading for the title (hierarchy → typography), a standard input component with inline error states (interaction → semantic color), comfortable vertical spacing between the input and supporting copy (hierarchy → spacing), and a brief loading indicator animation that does not distract from the primary focus (interaction → motion). None of these decisions were made for aesthetic reasons — they were made in service of the layers below.",
  },
]

export default function PyramidPage() {
  return (
    <PageShell>
      <PageHeader
        label="The Pyramid"
        title="Build from purpose, not from style."
        description="The Purposeful Design Pyramid is a structural model for making design decisions in the right order. It is not a process checklist — it is a framework for understanding why some decisions depend on other decisions, and what happens when you reverse that dependency."
      />

      {/* Visual Pyramid */}
      <div className="mb-20">
        <div className="mx-auto flex max-w-lg flex-col items-center gap-1">
          {[...layers].reverse().map((layer) => {
            const widths = ['w-full', 'w-10/12', 'w-8/12', 'w-6/12', 'w-4/12']
            const width = widths[layer.level - 1] ?? 'w-full'
            return (
              <div key={layer.level} className={`${width} transition-all duration-250`}>
                <a
                  href={`#layer-${layer.level}`}
                  className={`flex w-full items-center justify-between border px-6 py-3 transition-opacity duration-250 hover:opacity-80 ${layer.color} ${layer.textColor} ${layer.borderColor}`}
                >
                  <span className="label">{layer.name}</span>
                  <span className="label opacity-60">0{layer.level}</span>
                </a>
              </div>
            )
          })}
        </div>
        <p className="mt-6 text-center text-sm text-stone-400">
          Foundation at top — applied last at bottom. Click each layer to explore.
        </p>
      </div>

      {/* Why Order Matters */}
      <div className="mb-20 grid gap-10 border-y border-stone-200 py-16 md:grid-cols-2">
        <div>
          <p className="label mb-4 text-stone-400">Why Order Matters</p>
          <h2 className="text-2xl font-light tracking-tight text-stone-950">
            Every layer depends on the one above it.
          </h2>
        </div>
        <div className="space-y-4 text-sm leading-relaxed text-stone-600">
          <p>
            The pyramid is not a linear process — design is iterative. But it establishes a
            dependency structure: decisions made at lower layers should be determined by decisions
            made at higher layers, not the reverse.
          </p>
          <p>
            When this dependency is reversed — when visual style determines hierarchy, or interaction
            patterns determine content — the design produces interfaces that look intentional but
            function poorly. The visual decisions were made without the informational foundation they
            needed to serve.
          </p>
          <p>
            The most common design process failure is beginning at the bottom. Teams choose a visual
            direction, create a layout, populate it with content, and then try to create hierarchy
            within the visual structure they have already committed to. This produces hierarchy that
            is aesthetic rather than informational — it looks like hierarchy, but it does not
            communicate relative importance.
          </p>
        </div>
      </div>

      {/* Layer Deep Dives */}
      <div className="space-y-0">
        {layers.map((layer) => (
          <section
            key={layer.level}
            id={`layer-${layer.level}`}
            className="border-t border-stone-200 py-16"
          >
            {/* Layer Header */}
            <div className="mb-10 flex items-start gap-6">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center border ${layer.color} ${layer.textColor} ${layer.borderColor}`}
              >
                <span className="label">0{layer.level}</span>
              </div>
              <div>
                <h2 className="text-2xl font-light tracking-tight text-stone-950">{layer.name}</h2>
                <p className="mt-2 max-w-[60ch] text-base leading-relaxed text-stone-500">
                  {layer.definition}
                </p>
              </div>
            </div>

            <div className="grid gap-10 md:grid-cols-3">
              {/* Questions */}
              <div>
                <p className="label mb-4 text-stone-400">Questions to ask at this layer</p>
                <ul className="space-y-3">
                  {layer.questions.map((q, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-stone-600">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-stone-400" />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why */}
              <div>
                <p className="label mb-4 text-stone-400">Why this layer comes here</p>
                <p className="text-sm leading-relaxed text-stone-600">{layer.why}</p>
              </div>

              {/* Example */}
              <div>
                <p className="label mb-4 text-stone-400">
                  Example — password reset flow
                </p>
                <p className="text-sm leading-relaxed text-stone-600">{layer.example}</p>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Closing */}
      <div className="mt-16 border-t border-stone-200 pt-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-light tracking-tight text-stone-950">
              The pyramid is a diagnostic tool.
            </h3>
            <p className="text-sm leading-relaxed text-stone-600">
              When an interface is not working, the pyramid helps identify where the problem
              originated. If users are confused about what to do, the problem is likely in the
              interaction layer. If users cannot find the information they need, the problem is in
              the hierarchy layer. If the interface does not seem to serve the user's actual goal,
              the problem is in the purpose layer.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-light tracking-tight text-stone-950">
              Start at the top. Always.
            </h3>
            <p className="text-sm leading-relaxed text-stone-600">
              The most effective use of the pyramid is as a starting discipline: before opening a
              design tool, define purpose. Before sketching a layout, define content. Before choosing
              typography, define hierarchy. This sequence is uncomfortable for designers who think
              visually and naturally reach for visual tools. It is also the sequence that produces
              the clearest, most purposeful interfaces.
            </p>
          </div>
        </div>
      </div>

      <CTA
        title="Get Started with Purposeful Design"
        description="An introduction to applying the philosophy in your day-to-day design and development work."
        href="/getting-started"
        label="GET STARTED"
      />
    </PageShell>
  )
}
