import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  FolderGit2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import TopBar from './components/TopBar'
import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { cn } from './lib/utils'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
]

const stats = [
  { label: 'Launch outcomes', value: 'Products shipped with confidence' },
  { label: 'Feedback cadence', value: 'Weekly demos and open threads' },
  { label: 'Quality bar', value: 'Production-ready by default' },
  { label: 'Partnership style', value: 'Hands-on, founder-friendly' },
]

const values = [
  {
    title: 'Shared project roadmap',
    description: 'Weekly updates in plain language, so you always know what’s shipping next.',
  },
  {
    title: 'Transparent code access',
    description: 'Review progress anytime with shared development access where it helps your team.',
  },
  {
    title: 'Craft over hype',
    description: 'Clean architecture, thoughtful UX, and maintainable systems over buzzwords.',
  },
]

const services = [
  {
    icon: Sparkles,
    title: 'AI solutions',
    description: 'Operational AI that works the way your team works—assistants, insights, and automation with safeguards baked in.',
  },
  {
    icon: ShieldCheck,
    title: 'Custom software',
    description: 'Foundational platforms shaped around your workflows, built alongside you to stay clean, scalable, and secure.',
  },
  {
    icon: FolderGit2,
    title: 'Web apps',
    description: 'Fast, reliable web apps your customers enjoy—instrumented for uptime, clarity, and calm support.',
  },
  {
    icon: Briefcase,
    title: 'Mobile apps',
    description: 'Premium cross-platform apps with rock-solid sync, offline care, and releases you can trust.',
  },
]

const portfolio = [
  {
    name: 'AI PM tool',
    summary: 'Decision support for product leads—automated briefs, impact estimates, and rollout checklists that stay in sync.',
    tags: ['AI', 'Product ops', 'Delivery'],
    metric: 'Faster product decisions',
  },
  {
    name: 'Player transfer portal PWA',
    summary: 'Progressive web app for scouts and agents with offline capture, real-time eligibility checks, and clear next actions.',
    tags: ['PWA', 'Sports tech', 'Offline-first'],
    metric: 'Seamless field workflows',
  },
  {
    name: 'CRM rebuild',
    summary: 'Revenue team workspace with clear roles, faster search, and automated follow-ups that feel personal.',
    tags: ['CRM', 'Revops', 'Security'],
    metric: 'Cleaner pipeline visibility',
  },
]

const contactMethods = [
  { icon: Phone, label: 'Call (UK)', value: '+44 7552 550062' },
  { icon: Mail, label: 'Email', value: 'sam@digigeeks.co.uk' },
  { icon: MapPin, label: 'HQ', value: 'United Kingdom' },
]

function SectionHeading({ eyebrow, title, description, badgeClassName = '' }) {
  return (
    <div className="space-y-2">
      {eyebrow && (
        <Badge
          variant="default"
          className={cn(
            'border border-primary/60 bg-primary text-background shadow-sm px-3 py-1 text-xs font-semibold tracking-wide',
            badgeClassName,
          )}
        >
          {eyebrow}
        </Badge>
      )}
      <h2 className="text-3xl font-semibold leading-tight">{title}</h2>
      {description && <p className="max-w-3xl text-muted-foreground">{description}</p>}
    </div>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const offset = window.innerWidth >= 768 ? 24 : 72
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.32, rootMargin: '-10% 0px -10% 0px' },
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <TopBar sections={sections} onNavigate={scrollToSection} activeSection={activeSection} />
      <div className="container relative pb-16 pt-24 md:pt-16">
        <main className="space-y-20 md:space-y-28">
          <section
            id="home"
            className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/80 p-8 shadow-lg sm:p-12"
          >
            <div className="relative space-y-8">
              <SectionHeading
                title="Turning complex ideas into scalable reality."
                description="DigiGeeks is the founders’ team to call for AI solutions, custom software, web apps, and mobile apps—built with clear plans, clean code, and zero fluff."
              />
              <div className="flex flex-wrap items-center gap-3">
                <Button size="lg" onClick={() => scrollToSection('services')}>
                  View services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
                  Book a call
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <Card key={stat.label} className="border-border/60 bg-muted/30">
                    <CardHeader className="pb-2">
                      <CardDescription className="text-xs uppercase tracking-wide text-muted-foreground">
                        {stat.label}
                      </CardDescription>
                      <CardTitle className="text-2xl font-semibold">{stat.value}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="about" className="space-y-8 rounded-3xl border border-border/70 bg-card/70 p-8 shadow-sm">
            <SectionHeading
              eyebrow="About us"
              title="We’re a remote-first, craft-focused extension of your team."
              description="We pair with you inside your tools, keep progress shared in plain language, and sweat the details so your product stays intentional, performant, and reliable."
            />
            <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
              <Card className="border-dashed border-primary/30 bg-muted/15 text-foreground">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Sparkles className="h-5 w-5 text-primary" />
                    How we work
                  </CardTitle>
                  <CardDescription>
                    Transparent from day one: a shared project roadmap, weekly demos, and transparent code access where it helps. Every decision comes with the rationale in plain English.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-foreground/80">
                  <p>We run discovery, UX, and engineering in the same cadence so ideas turn into working software fast.</p>
                  <p>Security, QA, and documentation ship with the features, not after them.</p>
                  <p>Observability and performance budgets are baked in, so the app stays healthy as it grows.</p>
                </CardContent>
              </Card>
              <div className="grid gap-4">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="flex gap-3 rounded-xl border border-border/40 bg-background/40 p-4 text-foreground"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">{value.title}</p>
                      <p className="text-sm text-foreground/80">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="services" className="space-y-8">
            <SectionHeading
              eyebrow="Services"
              title="Build the thing—without the noise."
              description="AI solutions, custom software, web apps, and mobile apps—shipped by a senior team that moves with you."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <Card key={service.title} className="h-full border-border/60 bg-muted/30">
                  <CardHeader className="space-y-2">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>
                      Dedicated leads, sprint planning, QA, and handoff docs included. We plug into Slack, Linear, and your
                      cloud of choice.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="portfolio" className="space-y-8 rounded-3xl border border-border/70 bg-card/70 p-8 shadow-sm">
            <SectionHeading
              eyebrow="Portfolio"
              title="Selected work"
              description="Recent launches across AI, sports tech, and revenue teams."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {portfolio.map((project) => (
                <Card key={project.name} className="border-border/60 bg-muted/30">
                  <CardHeader className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <FolderGit2 className="h-4 w-4 text-primary" />
                      <span>{project.metric}</span>
                    </div>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>{project.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-muted px-3 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="contact" className="space-y-8 rounded-3xl border border-border/80 bg-card/80 p-8 shadow-lg">
            <SectionHeading
              eyebrow="Contact"
              title="Tell us what you’re vision!"
              description="Reach us directly for any software needs."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {contactMethods.map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/30 p-4">
                  <item.icon className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
      <Footer onNavigate={scrollToSection} />
    </div>
  )
}

function Footer({ onNavigate }) {
  return (
    <footer className="border-t border-border/70 bg-card/70">
      <div className="container flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">© 2026 All Rights Reserved.</p>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          {sections
            .filter((item) => item.id !== 'home')
            .map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="rounded-full px-3 py-1 transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </button>
            ))}
        </div>
      </div>
    </footer>
  )
}

export default App
