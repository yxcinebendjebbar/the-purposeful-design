import Link from 'next/link'
import { ReactNode } from 'react'

// ── Page Shell ──────────────────────────────────────────────────────────────

interface PageShellProps {
  children: ReactNode
  className?: string
}

export function PageShell({ children, className = '' }: PageShellProps) {
  return (
    <div className={`page-container py-16 md:py-24 ${className}`}>
      {children}
    </div>
  )
}

// ── Page Header ─────────────────────────────────────────────────────────────

interface PageHeaderProps {
  label?: string
  title: string
  description?: string
  serif?: boolean
}

export function PageHeader({ label, title, description, serif = false }: PageHeaderProps) {
  return (
    <header className="mb-16 max-w-[52ch] border-b border-stone-200 pb-12">
      {label && <p className="label mb-5 text-stone-400">{label}</p>}
      <h1
        className={`text-4xl font-light leading-tight tracking-tight text-stone-950 md:text-5xl ${
          serif ? 'font-serif' : ''
        }`}
      >
        {title}
      </h1>
      {description && (
        <p className="mt-6 text-lg leading-relaxed text-stone-500">{description}</p>
      )}
    </header>
  )
}

// ── Section ──────────────────────────────────────────────────────────────────

interface SectionProps {
  children: ReactNode
  className?: string
}

export function Section({ children, className = '' }: SectionProps) {
  return <section className={`mb-16 ${className}`}>{children}</section>
}

// ── Section Header ────────────────────────────────────────────────────────

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      {label && <p className="label mb-3 text-stone-400">{label}</p>}
      <h2 className="text-2xl font-light tracking-tight text-stone-950">{title}</h2>
      {description && (
        <p className="mt-3 max-w-prose text-base text-stone-500">{description}</p>
      )}
    </div>
  )
}

// ── Card ──────────────────────────────────────────────────────────────────

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`border border-stone-200 bg-white p-8 ${className}`}>
      {children}
    </div>
  )
}

// ── Callout ───────────────────────────────────────────────────────────────

interface CalloutProps {
  children: ReactNode
  type?: 'default' | 'principle' | 'warning' | 'law'
}

export function Callout({ children, type = 'default' }: CalloutProps) {
  const styles = {
    default: 'border-l-2 border-stone-200 pl-6 text-stone-600',
    principle: 'border-l-2 border-stone-950 pl-6 text-stone-700 font-medium',
    warning: 'border-l-2 border-stone-400 bg-stone-100 pl-6 pr-6 py-4 text-stone-700',
    law: 'bg-stone-950 text-stone-50 p-6',
  }

  return (
    <div className={`text-base leading-relaxed ${styles[type]}`}>
      {children}
    </div>
  )
}

// ── Tag ──────────────────────────────────────────────────────────────────

interface TagProps {
  children: ReactNode
  variant?: 'default' | 'outline' | 'muted'
}

export function Tag({ children, variant = 'default' }: TagProps) {
  const styles = {
    default: 'bg-stone-950 text-stone-50',
    outline: 'border border-stone-300 text-stone-600',
    muted: 'bg-stone-100 text-stone-500',
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium tracking-wider uppercase ${styles[variant]}`}
    >
      {children}
    </span>
  )
}

// ── CTA Block ────────────────────────────────────────────────────────────

interface CTAProps {
  title: string
  description: string
  href: string
  label: string
}

export function CTA({ title, description, href, label }: CTAProps) {
  return (
    <div className="border-t border-stone-200 pt-16 mt-16">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-medium text-stone-950">{title}</h3>
          <p className="mt-1 text-sm text-stone-500">{description}</p>
        </div>
        <Link
          href={href}
          className="inline-flex h-10 shrink-0 items-center border border-stone-950 px-6 text-xs font-medium tracking-widest text-stone-950 transition-all duration-250 hover:bg-stone-950 hover:text-stone-50"
        >
          {label}
        </Link>
      </div>
    </div>
  )
}
