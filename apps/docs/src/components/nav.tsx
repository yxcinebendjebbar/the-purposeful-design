'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const foundations = [
  { href: '/foundations/colors', label: 'Colors' },
  { href: '/foundations/typography', label: 'Typography' },
  { href: '/foundations/spacing', label: 'Spacing' },
  { href: '/foundations/motion', label: 'Motion' },
]

const components = [
  { href: '/components/button', label: 'Button' },
  { href: '/components/input', label: 'Input' },
  { href: '/components/textarea', label: 'Textarea' },
  { href: '/components/card', label: 'Card' },
  { href: '/components/badge', label: 'Badge' },
  { href: '/components/alert', label: 'Alert' },
  { href: '/components/separator', label: 'Separator' },
]

const philosophy = [
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/principles', label: 'Principles' },
  { href: '/laws', label: 'Laws' },
  { href: '/manifesto', label: 'Manifesto' },
]

const navLinks = [
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/foundations/colors', label: 'Foundations' },
  { href: '/components/button', label: 'Components' },
  { href: '/examples/login', label: 'Examples' },
  { href: '/anti-patterns', label: 'Anti-Patterns' },
]

export function Nav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href.split('/').slice(0, 2).join('/') + '/')

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/95 backdrop-blur-sm">
      <div className="page-container flex h-14 items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="flex items-baseline gap-2 text-sm font-medium tracking-tight text-stone-950 transition-opacity duration-250 hover:opacity-70"
        >
          <span className="text-stone-300">⬛</span>
          <span>The Purposeful Design</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-150 ${active
                    ? 'font-medium text-stone-950'
                    : 'text-stone-500 hover:text-stone-950'
                  }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link
            href="/foundations/getting-started"
            className="hidden items-center h-8 rounded-sm border border-stone-950 bg-stone-950 px-4 text-xs font-medium tracking-wider text-stone-50 transition-all duration-150 hover:bg-transparent hover:text-stone-950 sm:inline-flex"
          >
            Get Started
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-sm text-stone-500 transition-colors hover:text-stone-950 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-stone-200 bg-stone-50 px-6 py-4 md:hidden">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="label mb-3 text-stone-400">Philosophy</p>
              <ul className="space-y-2">
                {philosophy.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm text-stone-600 hover:text-stone-950"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label mb-3 text-stone-400">Components</p>
              <ul className="space-y-2">
                {components.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm text-stone-600 hover:text-stone-950"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
