import { ArrowUpRight, CloudCog, LockKeyhole, Radar, ServerCog, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

const capabilities = [
  {
    title: 'Composable workflows',
    icon: Workflow,
    description: 'Model approvals, SLAs, and data syncs with reusable steps and environment-aware rules.',
  },
  {
    title: 'Observability baked in',
    icon: Radar,
    description: 'Trace every event with OpenTelemetry, export to your APM, and keep customers informed.',
  },
  {
    title: 'Secure by default',
    icon: LockKeyhole,
    description: 'SSO/SAML, granular roles, audit logs, and encryption keys you control.',
  },
  {
    title: 'API-first surface',
    icon: CloudCog,
    description: 'Generated SDKs, webhooks, and versioned endpoints that match the UI experience.',
  },
  {
    title: 'Data residency controls',
    icon: ServerCog,
    description: 'Deploy to any region and keep customer data pinned for compliance-friendly footprints.',
  },
  {
    title: 'Launch-ready templates',
    icon: ArrowUpRight,
    description: 'Pricing, onboarding, support, and status pages built with shadcn/ui primitives.',
  },
]

function Features() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <Badge variant="muted">Feature overview</Badge>
        <h1 className="text-4xl font-semibold leading-tight">Everything you need to run a SaaS business UI.</h1>
        <p className="max-w-3xl text-lg text-muted-foreground">
          Start with production-ready routes—auth, pricing, customer portal, support center—and extend them with the
          same component tokens. Every surface uses the design language shown on this page.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((item) => (
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
                Configure everything in the UI, expose it through the API, and ship it to customers in hours instead
                of weeks.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-primary/30 bg-primary/[0.04]">
        <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <CardTitle>Prebuilt flows for go-to-market teams</CardTitle>
            <CardDescription>
              Lead capture, product tours, usage nux, in-app billing, and release notes without rebuilding the shell.
            </CardDescription>
          </div>
          <Button asChild>
            <Link to="/contact">Request a walkthrough</Link>
          </Button>
        </CardHeader>
      </Card>
    </div>
  )
}

export default Features
