import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Components',
  description: 'Production-ready components that implement the Purposeful Design philosophy. Every component exists for a reason.',
}

const componentList = [
  {
    name: 'Button',
    href: '/components/button',
    description: 'The primary mechanism for user action. Three variants enforcing visual hierarchy.',
    status: 'stable',
  },
  {
    name: 'Input',
    href: '/components/input',
    description: 'Short-form text entry with label, description, and validation states.',
    status: 'stable',
  },
  {
    name: 'Textarea',
    href: '/components/textarea',
    description: 'Long-form text entry with character counter and validation.',
    status: 'stable',
  },
  {
    name: 'Card',
    href: '/components/card',
    description: 'Information container. Groups related content into a discrete entity.',
    status: 'stable',
  },
  {
    name: 'Badge',
    href: '/components/badge',
    description: 'Status communication. Communicates classification at a glance.',
    status: 'stable',
  },
  {
    name: 'Alert',
    href: '/components/alert',
    description: 'System-level communication. Info, success, warning, and danger states.',
    status: 'stable',
  },
  {
    name: 'Separator',
    href: '/components/separator',
    description: 'Horizontal and vertical rules for content group separation.',
    status: 'stable',
  },
]

export default function ComponentsIndexPage() {
  return (
    <div>
      <header className="mb-12 border-b border-stone-200 pb-10">
        <p className="label mb-4 text-stone-400">Alpha — v0.3.0</p>
        <h1 className="text-4xl font-light tracking-tight text-stone-950">
          Components
        </h1>
        <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-stone-500">
          Seven primitives. Each one exists for a documented reason.
          None of them are decoration.
        </p>
      </header>

      <div className="mb-8">
        <p className="text-sm font-medium text-stone-950 mb-1">Week 3 Alpha</p>
        <p className="text-sm text-stone-500 max-w-prose">
          This is the first public alpha of <code className="rounded bg-stone-100 px-1.5 py-0.5 text-xs">@the-purposeful-design/ui</code>.
          Every component answers five questions: why it exists, what it solves,
          what happens without it, how it reduces cognitive load, and how it
          aligns with the philosophy.
        </p>
      </div>

      <div className="divide-y divide-stone-200 border border-stone-200">
        {componentList.map((component) => (
          <Link
            key={component.href}
            href={component.href}
            className="flex items-center justify-between p-5 transition-colors duration-150 hover:bg-stone-50 group"
          >
            <div>
              <p className="text-sm font-medium text-stone-950 group-hover:underline">
                {component.name}
              </p>
              <p className="mt-0.5 text-sm text-stone-500">{component.description}</p>
            </div>
            <span className="shrink-0 ml-4 inline-flex items-center rounded-xs border border-stone-200 bg-stone-50 px-2 py-0.5 text-[10px] font-medium text-stone-500">
              {component.status}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
