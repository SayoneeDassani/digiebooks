import { useEffect, useState } from 'react'
import { Mail, Menu, Phone, X } from 'lucide-react'
import { cn } from '../lib/utils'
import dgLogo from '../assets/dglogo.png'

const fallbackSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
]

function TopBar({ sections = fallbackSections, onNavigate, activeSection }) {
  const [open, setOpen] = useState(false)

  const handleNavigate = (id) => {
    if (onNavigate) {
      onNavigate(id)
    } else {
      const el = document.getElementById(id)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 72
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
    setOpen(false)
  }

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="container flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleNavigate('home')}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
            >
              <img src={dgLogo} alt="DigiGeeks logo" className="h-12 w-auto" />
            </button>
          </div>

          <nav className="hidden items-center gap-1 lg:flex">
            {sections
              .filter((item) => item.id !== 'home')
              .map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="rounded-md px-4 py-2 text-sm font-semibold uppercase tracking-wide text-foreground/70 transition-colors hover:text-foreground hover:bg-muted/60"
              >
                {item.label}
              </button>
              ))}
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="rounded-full p-2 text-foreground transition-colors hover:bg-accent"
              aria-label="Toggle navigation"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-b border-border/60 bg-background/95 shadow-lg lg:hidden">
          <div className="container py-4">
            <nav className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-wide">
              {sections
                .filter((item) => item.id !== 'home')
                .map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className="w-full rounded-lg bg-muted/60 px-4 py-3 text-left font-semibold uppercase tracking-wide text-foreground transition-colors hover:bg-primary/10"
                >
                  {item.label}
                </button>
                ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default TopBar
