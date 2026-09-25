import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio'

const phrases = [
  'Full Stack Developer',
  'C# & .NET Engineer',
  'React / TypeScript Dev',
  'Python & AI Builder',
  'QA & Systems Analyst',
]

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = phrases[phraseIndex]
    if (!deleting && displayed.length < target.length) {
      const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80)
      return () => clearTimeout(t)
    }
    if (!deleting && displayed.length === target.length) {
      const t = setTimeout(() => setDeleting(true), 2000)
      return () => clearTimeout(t)
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      return () => clearTimeout(t)
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false)
      setPhraseIndex((i) => (i + 1) % phrases.length)
    }
  }, [displayed, deleting, phraseIndex])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Terminal badge */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-2 mb-8 font-mono text-sm text-slate-400">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span>Disponible para nuevos proyectos</span>
        </motion.div>

        {/* Name */}
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight">
          Juan Sebastián
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan">Silva Piñeros</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="font-mono text-xl md:text-2xl text-slate-300 mb-6 h-8 flex items-center justify-center gap-1">
          <span>{displayed}</span>
          <span className="w-0.5 h-6 bg-accent animate-blink" />
        </motion.div>

        {/* Subtitle */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Bogotá, Colombia · +2 años de experiencia · 15+ proyectos entregados
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center mb-14">
          <a href="#projects" className="btn-primary">Ver proyectos</a>
          <a href={`mailto:${personalInfo.email}`} className="btn-outline">Contactarme</a>
        </motion.div>

        {/* Social links */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="flex gap-6 justify-center text-slate-500">
          {[
            { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
            { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
            { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="p-3 rounded-xl border border-border hover:border-accent/50 hover:text-accent transition-all duration-200 hover:bg-accent/5">
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 animate-bounce">
          <FiArrowDown size={22} />
        </motion.div>
      </div>
    </section>
  )
}
