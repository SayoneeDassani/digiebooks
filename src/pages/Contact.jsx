import { Mail, MapPin, Phone } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

function Contact() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      <Card className="border-primary/30 bg-primary/[0.05]">
        <CardHeader>
          <CardTitle>Talk with us</CardTitle>
          <CardDescription>UK-based team. Quick responses, straight answers.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3 rounded-lg bg-white/70 p-3 shadow-sm">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="font-semibold text-foreground">hello@digiegeeks.com</p>
              <p>Direct line to the founders.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-white/70 p-3 shadow-sm">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <p className="font-semibold text-foreground">07552 550062</p>
              <p>UK number — call or WhatsApp.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-white/70 p-3 shadow-sm">
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <p className="font-semibold text-foreground">HQ: United Kingdom</p>
              <p>Serving clients across UK, EU, and US.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Contact
