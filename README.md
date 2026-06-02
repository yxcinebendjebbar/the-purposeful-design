# The Purposeful Design

> Build interfaces that communicate, not decorate.

The Purposeful Design is a design philosophy and component ecosystem for teams who believe that every element must justify its existence. Clarity is a feature. Simplicity is a product decision.

## Version 0.1 — Week 1 Foundation

This release establishes the complete philosophical and documentation foundation. It contains:

- **Philosophy** — What Purposeful Design means and why it exists
- **Problem** — Seven systemic failures in modern interface design
- **Manifesto** — Twelve non-negotiable beliefs
- **Principles** — Seven core decision-making frameworks
- **Laws** — Fifteen enforceable design constraints
- **Vocabulary** — Shared terminology for design discussions
- **Metrics** — Eight measurable design standards
- **Anti-Patterns** — Eight documented failure modes with resolutions
- **Pyramid** — The five-layer structural model

Component implementations follow in subsequent releases, built on this foundation.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Monorepo | Turborepo |
| Package Manager | PNPM |
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Content | MDX |

---

## Repository Structure

```
the-purposeful-design/
├── apps/
│   └── docs/                    # Documentation website
│       ├── src/
│       │   ├── app/             # Next.js App Router pages
│       │   │   ├── page.tsx              # Landing page
│       │   │   ├── philosophy/page.tsx   # Philosophy
│       │   │   ├── problem/page.tsx      # The Problems
│       │   │   ├── manifesto/page.tsx    # Manifesto
│       │   │   ├── principles/page.tsx   # Principles
│       │   │   ├── laws/page.tsx         # The Laws
│       │   │   ├── vocabulary/page.tsx   # Vocabulary
│       │   │   ├── metrics/page.tsx      # Metrics
│       │   │   ├── anti-patterns/page.tsx # Anti-Patterns
│       │   │   ├── pyramid/page.tsx      # The Pyramid
│       │   │   └── getting-started/page.tsx # Getting Started
│       │   └── components/      # Shared UI components
│       │       ├── nav.tsx       # Navigation
│       │       ├── footer.tsx    # Footer
│       │       └── ui.tsx        # Shared primitives
│       ├── tailwind.config.ts   # Design token system
│       └── next.config.ts
└── packages/
    └── core/                    # Shared tokens and types
        └── src/
            ├── tokens/          # Design tokens as JS constants
            └── types/           # Shared TypeScript types
```

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Run the development server
pnpm dev

# Build all packages
pnpm build
```

The docs site will be available at [http://localhost:3000](http://localhost:3000).

---

## Design Philosophy

The Purposeful Design is guided by one core belief:

> Users should only see what they need.

This belief is implemented through five principles:

1. **Every element must justify its existence** — presence requires a user benefit
2. **Hierarchy before density** — what matters most must be most visible
3. **Color communicates** — color that carries no meaning should not be used
4. **Purpose before decoration** — function precedes form
5. **Clarity before creativity** — obvious interfaces beat clever ones

---

## The Design Pyramid

```
Purpose          ← Define this first
  Content        ← Then this
    Hierarchy    ← Then this
      Interaction ← Then this
        Visual Style ← Apply this last
```

---

## Roadmap

- **Week 1** ✅ — Philosophical foundation and documentation
- **Week 2** — Design token system and Tailwind preset
- **Week 3** — Core primitive components (Button, Input, Label, Select)
- **Week 4** — Layout components (Card, Dialog, Sheet, Popover)
- **Week 5** — Data components (Table, List, Badge, Tag)
- **Week 6** — Navigation components (Nav, Breadcrumb, Tabs, Sidebar)
- **Week 7** — Feedback components (Toast, Alert, Progress, Skeleton)
- **Week 8** — First public beta release

---

## License

MIT © The Purposeful Design
