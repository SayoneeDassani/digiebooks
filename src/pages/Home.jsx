import { ArrowRight, BarChart3, Gauge, Layers, ShieldCheck, Sparkles, Timer } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

const featureCards = [
  {
    icon: Sparkles,
    title: 'Automations without code',
    description:
      'Drag-and-drop playbooks that orchestrate every part of your revenue and ops stack with guardrails built in.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade security',
    description:
      'SSO, audit trails, row-level permissions, and data residency controls that ship on day one.',
  },
  {
    icon: Gauge,
    title: 'Real-time telemetry',
    description:
      'Streaming dashboards that surface live health signals and let teams intervene before KPIs slip.',
  },
]

const stats = [
  { label: 'Faster onboarding', value: '3.5x' },
  { label: 'Uptime last 12 months', value: '99.99%' },
  { label: 'Avg. ROI in year one', value: '$412k' },
  { label: 'Integrations ready', value: '180+' },
]

const highlights = [
  'Modern architecture built on Vite + React Router + Tailwind + shadcn/ui.',
  'Opinionated defaults for B2B SaaS: pricing tiers, usage metering stubs, and customer portal entry points.',
  'Composable UI tokens so you can swap themes without rewriting components.',
]

function Home() {
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/60 p-10 shadow-lg">
        <div className="pointer-events-none absolute inset-0 bg-mesh" aria-hidden="true" />
        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <Badge variant="muted" className="w-fit bg-white/70 text-primary">
              Built for modern SaaS teams
            </Badge>
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Ship, sell, and scale your software faster with DigiGeeks Cloud.
              </h1>
              <p className="text-lg text-muted-foreground">
                We pair a beautiful React UI kit with secure, production-ready patterns so your team can focus on
                the business logic—not boilerplate.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  Book a live demo
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/features">See the product</Link>
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Timer className="h-4 w-4" />
                <span>Onboard in under 10 minutes</span>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="relative border-primary/20 bg-white/80 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Layers className="h-5 w-5 text-primary" />
                Unified control tower
              </CardTitle>
              <CardDescription>Every environment, release, and customer workspace in one place.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-lg bg-muted/50 p-3">
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="text-xl font-semibold">{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-dashed border-primary/30 bg-primary/5 p-4">
                <p className="text-xs uppercase tracking-wide text-primary">Live signal</p>
                <div className="mt-2 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Deploy pipeline</p>
                    <p className="font-semibold">Green · Region: us-east-1</p>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <Sparkles className="h-5 w-5" />
                    <span className="text-sm font-medium">Auto-healing</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Built with shadcn/ui components, so you can swap icons, colors, or layouts without touching business
                logic.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {featureCards.map((item) => (
          <Card key={item.title} className="h-full">
            <CardHeader>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0 text-sm text-muted-foreground">
              <p>
                Ship faster with reusable UI tokens, typed API clients, and ready-to-wire webhooks. Our design system
                keeps your product cohesive across every page and device.
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-8 rounded-3xl border border-border/70 bg-card/80 p-8 shadow-sm lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Why customers switch</p>
          <h2 className="text-3xl font-semibold leading-tight">A product surface that markets itself.</h2>
          <p className="text-muted-foreground">
            Give your buyers a frictionless experience: transparent pricing, self-serve onboarding, and a support hub
            powered by the same components we use on this page.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-white/70 p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">Time to first value</p>
              <p className="text-2xl font-semibold">7 minutes</p>
              <p className="text-xs text-muted-foreground">From sign-up to first automation shipped.</p>
            </div>
            <div className="rounded-xl border border-border bg-white/70 p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">Service-level options</p>
              <p className="text-2xl font-semibold">24/7 global</p>
              <p className="text-xs text-muted-foreground">Follow-the-sun support baked into the app shell.</p>
            </div>
          </div>
          <Button asChild variant="outline" size="lg" className="w-fit">
            <Link to="/pricing">Review plans</Link>
          </Button>
        </div>
        <Card className="border-primary/30 bg-white/80 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BarChart3 className="h-5 w-5 text-primary" />
              Usage & billing snapshot
            </CardTitle>
            <CardDescription>Ready-to-use UI blocks for metering, billing, and renewals.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-center justify-between rounded-lg bg-muted/60 p-3">
              <span>Monthly active workspaces</span>
              <span className="font-semibold">1,842</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-muted/60 p-3">
              <span>Credits consumed</span>
              <span className="font-semibold">72,144</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-muted/60 p-3">
              <span>Forecast MRR</span>
              <span className="font-semibold">$182,400</span>
            </div>
            <Button asChild className="w-full">
              <Link to="/solutions">Explore the billing kit</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

export default Home
