import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
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
    <section id="hero" className="relative min-h-screen flex items-end justify-start overflow-hidden">

      {/* Full-bleed hero photo */}
      <div className="absolute inset-0">
        <img
          src="/assets/photo-hero.webp"
          alt="Juan Sebastián — atardecer"
          className="w-full h-full object-cover object-center"
        />
        {/* Multi-layer overlay: dark at bottom for text legibility, subtle at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080C10] via-[#080C10]/60 to-[#080C10]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080C10]/80 via-transparent to-transparent" />
      </div>

      {/* Grid pattern over photo */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Content — anchored bottom-left */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 pt-32 w-full">

        {/* Status */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 font-mono text-xs font-semibold tracking-widest uppercase text-emerald-400 border border-emerald-500/25 bg-emerald-500/5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Disponible · Bogotá, Colombia
        </motion.div>

        {/* Name */}
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="font-black leading-[0.95] tracking-tight mb-5"
          style={{ fontSize: 'clamp(3rem, 9vw, 6.5rem)' }}>
          <span className="text-white block drop-shadow-lg">Juan Sebastián</span>
          <span className="gradient-text-animated block">Silva Piñeros</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="flex items-center gap-2 mb-5">
          <span className="font-mono text-lg md:text-xl font-semibold text-slate-300">{displayed}</span>
          <span className="w-[3px] h-6 bg-accent rounded-sm cursor-blink" />
        </motion.div>

        {/* Tagline */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
          className="text-slate-400 text-base max-w-lg mb-10 leading-relaxed">
          Más de <span className="text-orange-400 font-semibold">15 proyectos entregados</span> —
          desde sistemas ERP enterprise hasta herramientas de IA para accesibilidad.
        </motion.p>

        {/* CTAs + Social */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
          className="flex flex-wrap items-center gap-4">
          <a href="#projects" className="btn-primary">Ver proyectos</a>
          <a href={`mailto:${personalInfo.email}`} className="btn-outline">Contactarme</a>
          <div className="flex gap-3 ml-2">
            {[
              { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
              { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="p-2.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-slate-400 hover:text-white hover:border-orange-500/40 hover:bg-orange-500/10 transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="absolute bottom-6 right-8 flex flex-col items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors z-10 group">
        <span className="font-mono text-[10px] tracking-widest uppercase">scroll</span>
        <FiArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
      </motion.a>
    </section>
  )
}
