import type { Metadata } from 'next'
import {
  Button, Badge, Alert, Separator,
  Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter, CardDivider,
} from '@the-purposeful-design/ui'
import {
  ArrowUpRight, ArrowDownRight, Minus,
  FileText, Users, Activity, Settings,
  AlertCircle, CheckCircle2, Clock
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dashboard — Example',
  description: 'A minimal dashboard demonstrating Purposeful Design hierarchy, data presentation, and meaningful actions.',
}

/**
 * EXAMPLE: MINIMAL DASHBOARD
 *
 * Demonstrates:
 * — Data presented with minimum decoration
 * — Status communicated via Badge, not color-washing entire rows
 * — One primary action per section
 * — Alert for system status at top, not buried
 * — Typography hierarchy does the heavy lifting: metric → label → supporting detail
 * — Cards as information units: each card answers one question
 */

interface MetricCardProps {
  label: string
  value: string
  change: string
  trend: 'up' | 'down' | 'flat'
}

function MetricCard({ label, value, change, trend }: MetricCardProps) {
  const TrendIcon =
    trend === 'up' ? ArrowUpRight :
    trend === 'down' ? ArrowDownRight :
    Minus

  const trendColor =
    trend === 'up' ? 'text-success' :
    trend === 'down' ? 'text-danger' :
    'text-stone-400'

  return (
    <Card>
      <CardContent className="pt-6 pb-5">
        <p className="text-xs font-medium uppercase tracking-widest text-stone-400 mb-2">
          {label}
        </p>
        <p className="text-3xl font-light tracking-tight text-stone-950">{value}</p>
        <div className={`mt-2 flex items-center gap-1 text-xs ${trendColor}`}>
          <TrendIcon size={13} />
          <span>{change} vs last month</span>
        </div>
      </CardContent>
    </Card>
  )
}

const recentActivity = [
  {
    id: '1',
    name: 'Brand identity project',
    status: 'success' as const,
    statusLabel: 'Complete',
    time: '2 hours ago',
    user: 'Jane S.',
  },
  {
    id: '2',
    name: 'Website redesign',
    status: 'warning' as const,
    statusLabel: 'Review',
    time: '5 hours ago',
    user: 'Tom K.',
  },
  {
    id: '3',
    name: 'Annual report layout',
    status: 'danger' as const,
    statusLabel: 'Blocked',
    time: 'Yesterday',
    user: 'Sarah M.',
  },
  {
    id: '4',
    name: 'Icon system v2',
    status: 'neutral' as const,
    statusLabel: 'Draft',
    time: 'Yesterday',
    user: 'Jane S.',
  },
  {
    id: '5',
    name: 'Design system tokens',
    status: 'info' as const,
    statusLabel: 'In progress',
    time: '2 days ago',
    user: 'You',
  },
]

const teamMembers = [
  { name: 'Jane Smith', role: 'Lead Designer', status: 'success' as const, projects: 4 },
  { name: 'Tom Kennedy', role: 'UI Designer', status: 'success' as const, projects: 3 },
  { name: 'Sarah Müller', role: 'Design Engineer', status: 'warning' as const, projects: 2 },
  { name: 'Alex Chen', role: 'Researcher', status: 'neutral' as const, projects: 1 },
]

export default function DashboardPage() {
  return (
    <div className="page-container py-10">

      {/* System alert — always at top when present */}
      <Alert
        variant="info"
        title="Scheduled maintenance tonight"
        description="The service will be unavailable from 2:00–3:00 AM UTC. No action required."
        dismissible
        className="mb-8"
      />

      {/* Page header */}
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-light tracking-tight text-stone-950">
            Overview
          </h1>
          <p className="mt-1 text-sm text-stone-500">
            Monday, 2 June 2026
          </p>
        </div>
        <Button icon={<FileText size={15} />} size="sm">
          New project
        </Button>
      </div>

      {/* Metric cards */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard label="Active projects" value="12" change="+2" trend="up" />
        <MetricCard label="Team members" value="8" change="±0" trend="flat" />
        <MetricCard label="Completed this month" value="6" change="+3" trend="up" />
        <MetricCard label="Blocked" value="2" change="+1" trend="down" />
      </div>

      {/* Main two-column */}
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent activity</CardTitle>
              <Button variant="ghost" size="sm">View all</Button>
            </div>
          </CardHeader>
          <CardDivider />
          <div className="divide-y divide-stone-100">
            {recentActivity.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between px-6 py-4"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-stone-950">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-xs text-stone-400">
                    {item.user} · {item.time}
                  </p>
                </div>
                <Badge variant={item.status} dot size="sm" className="ml-4 shrink-0">
                  {item.statusLabel}
                </Badge>
              </div>
            ))}
          </div>
          <CardDivider />
          <CardFooter>
            <Button variant="secondary" size="sm" className="w-full">
              View all projects
            </Button>
          </CardFooter>
        </Card>

        {/* Sidebar: Team */}
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Team</CardTitle>
                <Button variant="ghost" size="sm" icon={<Users size={14} />}>Manage</Button>
              </div>
              <CardDescription>8 members · 3 active now</CardDescription>
            </CardHeader>
            <CardDivider />
            <div className="divide-y divide-stone-100">
              {teamMembers.map((member) => (
                <div key={member.name} className="flex items-center justify-between px-6 py-3">
                  <div>
                    <p className="text-sm font-medium text-stone-950">{member.name}</p>
                    <p className="text-xs text-stone-400">{member.role}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant={member.status} size="sm" dot>
                      {member.status === 'success' ? 'Active' :
                       member.status === 'warning' ? 'Away' : 'Offline'}
                    </Badge>
                    <p className="mt-0.5 text-xs text-stone-400">
                      {member.projects} project{member.projects !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick actions</CardTitle>
            </CardHeader>
            <CardDivider />
            <CardContent className="pt-4 pb-4">
              <div className="flex flex-col gap-2">
                {[
                  { label: 'View all projects', icon: FileText },
                  { label: 'Team activity', icon: Activity },
                  { label: 'Account settings', icon: Settings },
                ].map(({ label, icon: Icon }) => (
                  <button
                    key={label}
                    className="flex w-full items-center gap-3 rounded-sm px-3 py-2 text-sm text-stone-600 transition-colors hover:bg-stone-50 hover:text-stone-950"
                  >
                    <Icon size={14} className="text-stone-400" />
                    {label}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
