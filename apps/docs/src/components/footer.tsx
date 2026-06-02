import Link from 'next/link'

const footerLinks = {
  Philosophy: [
    { label: 'Why It Exists', href: '/philosophy' },
    { label: 'The Problems', href: '/problem' },
    { label: 'The Manifesto', href: '/manifesto' },
  ],
  Principles: [
    { label: 'Core Principles', href: '/principles' },
    { label: 'The Laws', href: '/laws' },
    { label: 'Design Pyramid', href: '/pyramid' },
  ],
  Reference: [
    { label: 'Vocabulary', href: '/vocabulary' },
    { label: 'Metrics', href: '/metrics' },
    { label: 'Anti-Patterns', href: '/anti-patterns' },
  ],
  Start: [
    { label: 'Getting Started', href: '/foundations/getting-started' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="page-container py-16">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-sm font-medium text-stone-950">
              The Purposeful Design
            </Link>
            <p className="mt-3 max-w-[22ch] text-sm leading-relaxed text-stone-500">
              Build interfaces that communicate, not decorate.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="label mb-4">{section}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone-500 transition-colors duration-250 hover:text-stone-950"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-stone-200 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-stone-400">
            © 2025 The Purposeful Design. Released under the MIT License.
          </p>
          <p className="text-sm text-stone-400">
            Version 0.1.0 — Week 1 Foundation
          </p>
        </div>
      </div>
    </footer>
  )
}
