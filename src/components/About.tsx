import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCode, FiLayers, FiShield, FiMail } from 'react-icons/fi'
import { personalInfo, education, certifications } from '../data/portfolio'

const stats = [
  { value: 15, suffix: '+', label: 'Proyectos entregados', color: 'text-orange-400' },
  { value: 2, suffix: '+', label: 'Años de experiencia', color: 'text-sky-300' },
  { value: 25, suffix: '+', label: 'Bugs críticos en Rappi', color: 'text-pink-400' },
  { value: 3, suffix: '', label: 'Empresas (Nova · Rappi · SIS)', color: 'text-emerald-400' },
]

const pillars = [
  { icon: FiCode, title: 'Full Stack', desc: 'Frontend con React/Blazor y backend con .NET/Node. APIs REST. De la BD al componente en pantalla.', color: 'text-orange-400 bg-orange-500/10 border-orange-500/20' },
  { icon: FiLayers, title: 'Enterprise', desc: 'ERP/CRM, facturación DIAN, automatización de backups, sistemas de alta disponibilidad.', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
  { icon: FiShield, title: 'QA & Calidad', desc: 'Pruebas funcionales y de regresión en Rappi. Scrum. Reporte y seguimiento de bugs críticos.', color: 'text-sky-400 bg-sky-500/10 border-sky-500/20' },
]

function useCounter(target: number, duration = 1800) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return { ref, count }
}

function StatCard({ value, suffix, label, color, i }: { value: number; suffix: string; label: string; color: string; i: number }) {
  const { ref, count } = useCounter(value)
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ delay: i * 0.09 }}
      className="glass p-6 text-center">
      <div className={`text-4xl font-black mb-1 ${color}`}>
        {count}{suffix}
      </div>
      <p className="text-slate-400 text-sm leading-snug">{label}</p>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="absolute left-0 top-1/2 w-[500px] h-[500px] rounded-full opacity-8 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="label">// 01 · Quién soy</span>
          <h2 className="h2 mb-16">Sobre mí</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Photo col */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="space-y-6">
            {/* Photo */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm">
              <img src="/assets/photo-about.webp" alt="Juan Sebastián Silva Piñeros"
                className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080C10]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold text-lg leading-tight">Juan Sebastián<br />Silva Piñeros</p>
                <p className="text-orange-400 font-mono text-xs mt-1">Full Stack Developer · Bogotá</p>
              </div>
              {/* Accent border */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-orange-500/20" />
            </div>

            {/* Pillars */}
            <div className="space-y-3">
              {pillars.map((p, i) => (
                <motion.div key={p.title}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex gap-3 items-start glass p-4">
                  <div className={`p-2.5 rounded-xl border ${p.color} shrink-0`}>
                    <p.icon size={16} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{p.title}</p>
                    <p className="text-slate-400 text-sm mt-0.5 leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right col */}
          <div className="space-y-6">
            <motion.p initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="text-slate-300 text-lg leading-relaxed">
              {personalInfo.bio}
            </motion.p>

            <motion.p initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-slate-400 leading-relaxed">
              Mi proyecto personal más impactante: un{' '}
              <span className="text-white font-semibold">sistema de traducción de lengua de señas</span>{' '}
              con Python, TensorFlow y visión por computadora. Reconoce señas en tiempo real y las convierte a texto y audio.
              Enfocado en <span className="text-orange-400 font-semibold">accesibilidad e inclusión digital</span>.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s, i) => <StatCard key={s.label} {...s} i={i} />)}
            </div>

            {/* Education */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass p-6">
              <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4">// Educación</p>
              {education.map((e) => (
                <div key={e.institution} className="flex gap-3 mb-4 last:mb-0 items-start">
                  {(e as any).logo ? (
                    <div className="w-9 h-9 rounded-lg bg-white p-1 shrink-0 flex items-center justify-center">
                      <img src={(e as any).logo} alt={e.institution} className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    <div className="dot mt-1.5" />
                  )}
                  <div>
                    <p className="text-white font-semibold text-sm">{e.degree}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{e.institution} · {e.period}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Certs */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="glass p-6">
              <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4">// Certificaciones</p>
              <div className="flex flex-wrap gap-2">
                {certifications.map((c) => <span key={c} className="badge">{c}</span>)}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <a href={`mailto:${personalInfo.email}`} className="btn-primary">
                <FiMail size={15} />
                Solicitar CV completo
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
