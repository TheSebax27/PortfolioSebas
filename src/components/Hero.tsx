import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiCode, FiZap } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio'

const roles = ['Full Stack Developer', 'C# & .NET Engineer', 'React / TypeScript Dev', 'Python & AI Builder']


export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = roles[phraseIndex]
    if (!deleting && displayed.length < target.length) {
      const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70)
      return () => clearTimeout(t)
    }
    if (!deleting && displayed.length === target.length) {
      const t = setTimeout(() => setDeleting(true), 2200)
      return () => clearTimeout(t)
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      return () => clearTimeout(t)
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false)
      setPhraseIndex(i => (i + 1) % roles.length)
    }
  }, [displayed, deleting, phraseIndex])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">

      {/* Orbs */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full opacity-15 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)' }} />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full opacity-10 blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }} />

      {/* Ring decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full border border-indigo-500/5 animate-spin-slow" />
        <div className="absolute w-[500px] h-[500px] rounded-full border border-violet-500/8" style={{ animation: 'spin-slow 20s linear infinite reverse' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Status chip */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-10 font-mono text-xs font-semibold tracking-widest uppercase text-emerald-400 border border-emerald-500/20 bg-emerald-500/5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Disponible para proyectos · Bogotá, Colombia
        </motion.div>

        {/* Name */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <h1 className="font-black leading-[0.95] tracking-tight mb-6" style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)' }}>
            <span className="text-white block">Juan Sebastián</span>
            <span className="gradient-text-animated block">Silva Piñeros</span>
          </h1>
        </motion.div>

        {/* Typewriter role */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="flex items-center justify-center gap-2 mb-6">
          <FiCode className="text-accent" size={18} />
          <span className="font-mono text-xl md:text-2xl font-semibold text-slate-200">{displayed}</span>
          <span className="w-[3px] h-7 bg-accent rounded-sm cursor-blink" />
        </motion.div>

        {/* Bio */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
          className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Construyo aplicaciones web y de escritorio de alto impacto —
          desde <span className="text-indigo-400 font-semibold">sistemas ERP enterprise</span> hasta{' '}
          <span className="text-cyan-400 font-semibold">herramientas de IA para accesibilidad</span>.
          +15 proyectos entregados.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
          className="flex flex-wrap gap-4 justify-center mb-14">
          <a href="#projects" className="btn-primary">
            <FiZap size={16} />
            Ver proyectos
          </a>
          <a href={`mailto:${personalInfo.email}`} className="btn-outline">
            <FiMail size={16} />
            Contactarme
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
          className="flex items-center justify-center gap-4">
          {[
            { icon: FiGithub, href: personalInfo.github, label: 'GitHub', color: 'hover:border-slate-400 hover:text-slate-200' },
            { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:border-blue-400 hover:text-blue-400' },
            { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email', color: 'hover:border-indigo-400 hover:text-indigo-400' },
          ].map(({ icon: Icon, href, label, color }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className={`p-3.5 rounded-2xl border border-white/8 bg-white/3 text-slate-500 transition-all duration-300 hover:bg-white/8 hover:-translate-y-1 hover:shadow-lg ${color}`}>
              <Icon size={20} />
            </a>
          ))}
          <div className="h-6 w-px bg-white/10 mx-1" />
          <span className="text-slate-600 font-mono text-xs">TheSebax27</span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors group">
          <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
          <FiArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
        </motion.a>
      </div>
    </section>
  )
}
