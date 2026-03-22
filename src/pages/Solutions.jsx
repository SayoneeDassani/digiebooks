import { Building2, Globe2, Headset, Rocket, ShieldCheck } from 'lucide-react'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

const solutions = [
  {
    title: 'Product-led growth',
    icon: Rocket,
    description: 'Self-serve signup, guided onboarding, usage metering, and upgrade nudges in one cohesive UI.',
    outcomes: ['Higher activation rates', 'Transparent usage-based pricing', 'In-app upgrade moments'],
  },
  {
    title: 'Enterprise readiness',
    icon: ShieldCheck,
    description: 'Access controls, data residency, dedicated regions, and audit-ready logging baked in.',
    outcomes: ['Shorter security reviews', 'Safe multi-tenant defaults', 'Compliant change history'],
  },
  {
    title: 'Global teams',
    icon: Globe2,
    description: 'Multi-region deploys, localized copy tokens, and uptime storytelling via a status surface.',
    outcomes: ['Follow-the-sun reliability', 'Regional routing', 'Localized experiences'],
  },
  {
    title: 'Customer operations',
    icon: Headset,
    description: 'Give success teams a console with account context, runbooks, and safe remote actions.',
    outcomes: ['Faster resolutions', 'Fewer escalations', 'Happier customers'],
  },
  {
    title: 'Partner ecosystems',
    icon: Building2,
    description: 'An integration gallery, sandbox keys, and webhook debugging views ready to white-label.',
    outcomes: ['More integrations shipped', 'Cleaner partner onboarding', 'Co-marketing ready'],
  },
]

function Solutions() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <Badge variant="muted">Solutions</Badge>
        <h1 className="text-4xl font-semibold leading-tight">Templates tailored to common SaaS motions.</h1>
        <p className="max-w-3xl text-muted-foreground">
          Mix and match these blueprints to match your business model. Every component is token-driven so you can keep
          your brand intact.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {solutions.map((item) => (
          <Card key={item.title} className="h-full">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground">What changes when you implement this pack:</p>
              <ul className="mt-3 space-y-2 text-sm text-foreground">
                {item.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Solutions
