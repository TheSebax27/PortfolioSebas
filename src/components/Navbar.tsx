import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolio'

const links = ['Sobre mí', 'Skills', 'Experiencia', 'Proyectos', 'Contacto']
const hrefs = ['#about', '#skills', '#experience', '#projects', '#contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 backdrop-blur-md border-b border-border shadow-xl shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-mono text-accent font-semibold text-lg tracking-tight hover:text-indigo-400 transition-colors">
          {personalInfo.shortName}
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <a key={link} href={hrefs[i]} className="text-sm text-slate-400 hover:text-white transition-colors duration-200 font-medium">
              {link}
            </a>
          ))}
          <a href={`mailto:${personalInfo.email}`} className="btn-primary text-sm py-2 px-4">
            Contrátame
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-slate-400 hover:text-white transition-colors">
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-current transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 bg-current transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 bg-current transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-border px-6 py-4 flex flex-col gap-4">
          {links.map((link, i) => (
            <a key={link} href={hrefs[i]} onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-white font-medium transition-colors">
              {link}
            </a>
          ))}
          <a href={`mailto:${personalInfo.email}`} className="btn-primary text-sm text-center">
            Contrátame
          </a>
        </div>
      )}
    </nav>
  )
}
