import { Mail, Phone } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'

function Contact() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <Card>
        <CardHeader>
          <CardTitle>Book a demo</CardTitle>
          <CardDescription>Tell us a little about your product and we will tailor the walkthrough.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <Input placeholder="Alex Johnson" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Work email</label>
              <Input type="email" placeholder="alex@company.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Company</label>
            <Input placeholder="Acme Corp" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">What would you like to explore?</label>
            <Textarea rows={4} placeholder="Pricing, migration help, security, custom theme..." />
          </div>
          <Button className="w-full">Send request</Button>
          <p className="text-xs text-muted-foreground">
            By submitting, you agree to be contacted about DigiGeeks products and services. We respect your inbox.
          </p>
        </CardContent>
      </Card>

      <Card className="border-primary/30 bg-primary/[0.05]">
        <CardHeader>
          <CardTitle>Other ways to reach us</CardTitle>
          <CardDescription>Always-available channels for customers and evaluators.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3 rounded-lg bg-white/70 p-3 shadow-sm">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="font-semibold text-foreground">support@digigeeks.cloud</p>
              <p>Support inbox monitored 24/7.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-white/70 p-3 shadow-sm">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <p className="font-semibold text-foreground">+1 (415) 555-0148</p>
              <p>Call us during business hours PST.</p>
            </div>
          </div>
          <p>
            Prefer async? We also maintain a customer Slack shared channel for faster triage and rollout planning.
            Mention it in the form and we will send an invite.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Contact
