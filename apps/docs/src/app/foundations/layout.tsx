import { ReactNode } from 'react';

export default function FoundationsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Foundation Sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-border md:block">
        <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto p-6">
          <p className="label mb-4 text-foreground-muted">Foundations</p>
          <nav className="space-y-2">
            {[
              ['Getting Started', '/foundations/getting-started'],
              ['Color System', '/foundations/colors'],
              ['Typography', '/foundations/typography'],
              ['Spacing', '/foundations/spacing'],
              ['Layout', '/foundations/layout'],
              ['Motion', '/foundations/motion'],
              ['Accessibility', '/foundations/accessibility'],
              ['Components', '/foundations/components'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="block rounded-sm px-3 py-1.5 text-sm font-medium text-foreground-secondary transition-colors hover:bg-surface-subtle hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {children}
      </div>
    </div>
  );
}
