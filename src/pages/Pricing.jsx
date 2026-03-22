import { Check, Info } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

const plans = [
  {
    name: 'Starter',
    price: '$49',
    cadence: 'per month',
    description: 'For early-stage teams shipping their first release.',
    features: ['1k monthly active users', '3 environments', 'Email support'],
    cta: 'Start free',
  },
  {
    name: 'Growth',
    price: '$189',
    cadence: 'per month',
    description: 'Scale operations with observability and advanced controls.',
    features: ['Unlimited automations', 'Priority support', 'SOC2 report access'],
    popular: true,
    cta: 'Talk to sales',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: 'annual',
    description: 'For global rollouts, custom contracts, and white-label needs.',
    features: ['SSO/SAML', 'Private regions', 'Dedicated CSM'],
    cta: 'Book a demo',
  },
]

function Pricing() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <Badge variant="muted">Pricing</Badge>
        <h1 className="text-4xl font-semibold leading-tight">Predictable plans with room to grow.</h1>
        <p className="max-w-2xl text-muted-foreground">
          Usage-based add-ons, annual discounts, and procurement-friendly terms are built into the billing toolkit
          shown on the homepage.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={plan.popular ? 'border-primary/40 shadow-glow shadow-primary/20' : ''}
          >
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                {plan.popular && <Badge>Most popular</Badge>}
              </div>
              <CardDescription>{plan.description}</CardDescription>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-semibold">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.cadence}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full">
                <Link to="/contact">{plan.cta}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-dashed border-primary/40 bg-primary/[0.04]">
        <CardHeader className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <CardTitle>Need a bespoke plan?</CardTitle>
            <CardDescription>
              We support invoicing, procurement reviews, security questionnaires, and multi-year agreements.
            </CardDescription>
          </div>
          <Button asChild variant="outline">
            <Link to="/contact">
              <Info className="mr-2 h-4 w-4" />
              Talk with us
            </Link>
          </Button>
        </CardHeader>
      </Card>
    </div>
  )
}

export default Pricing
