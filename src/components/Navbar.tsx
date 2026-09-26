import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '../data/portfolio'

const links = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-dark/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/50' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-xl overflow-hidden bg-white/5 border border-orange-500/20 group-hover:border-orange-500/50 transition-colors shadow-lg flex items-center justify-center">
            <img src="/favicon.png" alt="Logo" className="w-6 h-6 object-contain" />
          </div>
          <span className="font-mono font-bold text-white/90 text-sm tracking-tight group-hover:text-white transition-colors">
            {personalInfo.shortName}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(link => (
            <a key={link.label} href={link.href}
              className="px-4 py-2 text-sm text-white/80 hover:text-white font-semibold transition-colors rounded-xl hover:bg-white/10 drop-shadow-sm">
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a href={`mailto:${personalInfo.email}`}
            className="hidden md:flex btn-primary py-2 px-5 text-sm">
            Contrátame
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 bg-dark/95 backdrop-blur-2xl overflow-hidden">
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map(link => (
                <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 text-slate-300 hover:text-white font-medium rounded-xl hover:bg-white/5 transition-colors">
                  {link.label}
                </a>
              ))}
              <a href={`mailto:${personalInfo.email}`} className="btn-primary mt-2 justify-center">
                Contrátame
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
