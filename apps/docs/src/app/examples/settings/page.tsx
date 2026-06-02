'use client'

import type { Metadata } from 'next'
import {
  Button, Input, Textarea, Separator, Alert, Badge,
  Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter, CardDivider,
} from '@the-purposeful-design/ui'
import { User, Bell, Shield, CreditCard, LogOut, Trash2 } from 'lucide-react'


/**
 * EXAMPLE: ACCOUNT SETTINGS PAGE
 *
 * Demonstrates:
 * — Information hierarchy through typography and spacing, not color
 * — Grouped settings via Card components (each card = one settings domain)
 * — Danger zone isolated at the bottom — physically distant from safe actions
 * — Destructive actions use ghost variant + confirmation mental model
 * — Badge communicates plan status without visual noise
 * — Alert communicates verification state persistently at top of relevant section
 */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="label mb-4 text-stone-400">{children}</p>
  )
}

export default function SettingsPage() {
  return (
    <div className="page-container py-12">
      <div className="max-w-2xl mx-auto">

        {/* Page header */}
        <header className="mb-10">
          <h1 className="text-3xl font-light tracking-tight text-stone-950">
            Account Settings
          </h1>
          <p className="mt-2 text-sm text-stone-500">
            Manage your profile, security, and billing preferences.
          </p>
        </header>

        <div className="flex flex-col gap-8">

          {/* ── Profile ──────────────────────────────────────────────────── */}
          <section>
            <SectionLabel>Profile</SectionLabel>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Input
                      id="settings-first-name"
                      label="First name"
                      defaultValue="Jane"
                    />
                    <Input
                      id="settings-last-name"
                      label="Last name"
                      defaultValue="Smith"
                    />
                  </div>
                  <Input
                    id="settings-display-name"
                    label="Display name"
                    defaultValue="janesmith"
                    description="Visible to other users. Letters, numbers, and underscores only."
                  />
                  <Textarea
                    id="settings-bio"
                    label="Bio"
                    defaultValue="Design systems engineer. Thinking about hierarchy, intention, and clarity."
                    maxLength={200}
                    rows={3}
                    description="Appears on your public profile."
                  />
                </div>
              </CardContent>
              <CardDivider />
              <CardFooter className="justify-end">
                <Button variant="ghost" size="sm">Discard</Button>
                <Button size="sm">Save profile</Button>
              </CardFooter>
            </Card>
          </section>

          {/* ── Email & Notifications ──────────────────────────────────── */}
          <section>
            <SectionLabel>Email & Notifications</SectionLabel>
            <Card>
              <CardContent className="pt-6">
                <Alert
                  variant="warning"
                  title="Email not verified"
                  description="Verify your email address to receive notifications and recover your account."
                  action={
                    <Button variant="secondary" size="sm">Resend verification</Button>
                  }
                  className="mb-5"
                />
                <div className="flex flex-col gap-5">
                  <Input
                    id="settings-email"
                    label="Email address"
                    type="email"
                    defaultValue="jane@company.com"
                    required
                  />
                  <Separator />
                  {[
                    {
                      id: 'notif-product',
                      label: 'Product updates',
                      desc: 'New features, releases, and changelogs.',
                    },
                    {
                      id: 'notif-security',
                      label: 'Security alerts',
                      desc: 'Sign-ins, password changes, and suspicious activity.',
                    },
                    {
                      id: 'notif-billing',
                      label: 'Billing notifications',
                      desc: 'Invoices, renewals, and payment failures.',
                    },
                  ].map((n) => (
                    <label key={n.id} className="flex cursor-pointer items-start gap-3">
                      <input
                        id={n.id}
                        type="checkbox"
                        defaultChecked={n.id !== 'notif-product'}
                        className="mt-0.5 h-4 w-4 rounded-xs border-stone-300 accent-stone-950"
                      />
                      <div>
                        <p className="text-sm font-medium text-stone-950">{n.label}</p>
                        <p className="text-xs text-stone-500">{n.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </CardContent>
              <CardDivider />
              <CardFooter className="justify-end">
                <Button size="sm">Save preferences</Button>
              </CardFooter>
            </Card>
          </section>

          {/* ── Security ──────────────────────────────────────────────── */}
          <section>
            <SectionLabel>Security</SectionLabel>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-5">
                  <Input
                    id="settings-current-password"
                    label="Current password"
                    type="password"
                    placeholder="••••••••"
                  />
                  <Input
                    id="settings-new-password"
                    label="New password"
                    type="password"
                    placeholder="••••••••"
                    description="Must be at least 12 characters with one uppercase letter and one number."
                  />
                  <Input
                    id="settings-confirm-password"
                    label="Confirm new password"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>
              </CardContent>
              <CardDivider />
              <CardFooter className="justify-end">
                <Button size="sm">Update password</Button>
              </CardFooter>
            </Card>
          </section>

          {/* ── Billing ───────────────────────────────────────────────── */}
          <section>
            <SectionLabel>Billing</SectionLabel>
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Pro Plan</CardTitle>
                    <CardDescription>$29 / month · Renews July 2, 2026</CardDescription>
                  </div>
                  <Badge variant="success" dot>Active</Badge>
                </div>
              </CardHeader>
              <CardDivider />
              <CardContent className="pt-6">
                <div className="grid gap-3 sm:grid-cols-3 text-sm">
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wider font-medium mb-1">Projects</p>
                    <p className="font-medium text-stone-950">Unlimited</p>
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wider font-medium mb-1">Storage</p>
                    <p className="font-medium text-stone-950">50 GB</p>
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wider font-medium mb-1">Team members</p>
                    <p className="font-medium text-stone-950">25</p>
                  </div>
                </div>
              </CardContent>
              <CardDivider />
              <CardFooter>
                <Button variant="secondary" size="sm" icon={<CreditCard size={14} />}>
                  Manage billing
                </Button>
                <Button variant="ghost" size="sm">Change plan</Button>
              </CardFooter>
            </Card>
          </section>

          {/* ── Danger Zone ───────────────────────────────────────────── */}
          <section>
            <SectionLabel>Danger Zone</SectionLabel>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-stone-950">Sign out of all devices</p>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Terminates all active sessions except the current one.
                      </p>
                    </div>
                    <Button
                      variant="secondary"
                      size="sm"
                      icon={<LogOut size={14} />}
                      className="shrink-0"
                    >
                      Sign out all
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-stone-950">Delete account</p>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Permanently deletes your account and all associated data. This cannot be undone.
                      </p>
                    </div>
                    <Button
                      variant="danger"
                      size="sm"
                      icon={<Trash2 size={14} />}
                      className="shrink-0"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

        </div>
      </div>
    </div>
  )
}
