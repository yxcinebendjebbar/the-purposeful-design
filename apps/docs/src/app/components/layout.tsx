'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

const sidebarLinks = [
  {
    group: 'Overview',
    links: [
      { href: '/components', label: 'Introduction' },
    ],
  },
  {
    group: 'Components',
    links: [
      { href: '/components/button', label: 'Button' },
      { href: '/components/input', label: 'Input' },
      { href: '/components/textarea', label: 'Textarea' },
      { href: '/components/card', label: 'Card' },
      { href: '/components/badge', label: 'Badge' },
      { href: '/components/alert', label: 'Alert' },
      { href: '/components/separator', label: 'Separator' },
    ],
  },
]

export default function ComponentsLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="page-container py-12">
      <div className="flex gap-12">
        {/* Sidebar */}
        <aside className="hidden w-48 shrink-0 lg:block">
          <nav aria-label="Component navigation">
            {sidebarLinks.map((group) => (
              <div key={group.group} className="mb-6">
                <p className="label mb-3 text-stone-400">{group.group}</p>
                <ul className="space-y-0.5">
                  {group.links.map((link) => {
                    const active = pathname === link.href
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={`block rounded-sm px-2 py-1.5 text-sm transition-colors duration-150 ${
                            active
                              ? 'bg-stone-100 font-medium text-stone-950'
                              : 'text-stone-500 hover:text-stone-950 hover:bg-stone-50'
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  )
}
