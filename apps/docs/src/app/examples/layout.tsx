'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { LogIn, Settings, LayoutDashboard } from 'lucide-react'

const exampleLinks = [
  { href: '/examples/login', label: 'Login Page', icon: LogIn },
  { href: '/examples/settings', label: 'Account Settings', icon: Settings },
  { href: '/examples/dashboard', label: 'Dashboard', icon: LayoutDashboard },
]

export default function ExamplesLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Example nav strip */}
      <div className="border-b border-stone-200 bg-white">
        <div className="page-container flex h-10 items-center gap-1">
          <span className="mr-3 text-xs font-medium text-stone-400 uppercase tracking-widest">Examples</span>
          {exampleLinks.map(({ href, label, icon: Icon }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`inline-flex items-center gap-1.5 rounded-sm px-3 py-1 text-xs transition-colors ${
                  active
                    ? 'bg-stone-100 font-medium text-stone-950'
                    : 'text-stone-500 hover:text-stone-950 hover:bg-stone-50'
                }`}
              >
                <Icon size={12} />
                {label}
              </Link>
            )
          })}
        </div>
      </div>
      {children}
    </div>
  )
}
