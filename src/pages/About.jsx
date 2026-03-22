import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

function About() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <Badge variant="muted">About DigiGeeks</Badge>
        <h1 className="text-4xl font-semibold leading-tight">We build the boring parts so you can build the magic.</h1>
        <p className="max-w-2xl text-muted-foreground">
          DigiGeeks is a distributed team of product engineers and designers obsessed with great SaaS experiences. We
          ship opinionated UI, infra patterns, and go-to-market tools so teams can move with confidence.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Global-first</CardTitle>
            <CardDescription>Teammates across 5 countries, building 24/7.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            From London to San Francisco, we design for a world where every customer expects uptime and polish.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Hands-on partners</CardTitle>
            <CardDescription>We pair with your team during rollout.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Architects, designers, and success leads join your workspace to configure the first playbooks together.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Customer-led roadmap</CardTitle>
            <CardDescription>Public changelog and transparent release cadence.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            We ship weekly improvements and keep status, release notes, and feature flags accessible in-app.
          </CardContent>
        </Card>
      </div>

      <Card className="border-dashed border-primary/40 bg-primary/[0.04]">
        <CardHeader>
          <CardTitle>Culture code</CardTitle>
          <CardDescription>Values that guide how we build and support you.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold">Craft over clutter.</p>
            <p className="text-sm text-muted-foreground">
              Every component is purposeful, accessible, and documented so your team can extend it fearlessly.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Bias for clarity.</p>
            <p className="text-sm text-muted-foreground">
              We favor transparent pricing, clear roadmaps, and honest incident communication.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Security by default.</p>
            <p className="text-sm text-muted-foreground">
              Least-privilege permissions, audit logging, and data protections are table stakes—not add-ons.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Outcome focused.</p>
            <p className="text-sm text-muted-foreground">
              We measure success by your activation, retention, and expansion metrics—not vanity counters.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default About
