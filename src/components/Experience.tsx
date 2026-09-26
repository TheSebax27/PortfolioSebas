import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'
import { experiences } from '../data/portfolio'

const companyColors: Record<string, string> = {
  'Soluciones Integrales en Sistemas': 'from-sky-500 to-blue-500',
  'Rappi S.A.S': 'from-orange-500 to-red-500',
  'Nova': 'from-amber-500 to-yellow-400',
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative">
      <div className="absolute right-0 bottom-1/3 w-[450px] h-[450px] rounded-full opacity-8 blur-[110px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)' }} />

      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <span className="label">// 03 · Trayectoria</span>
          <h2 className="h2">Experiencia</h2>
        </motion.div>

        <div className="relative">
          {/* Gradient timeline line */}
          <div className="absolute left-6 top-4 bottom-4 w-px hidden md:block"
            style={{ background: 'linear-gradient(180deg, #F97316 0%, #FBBF24 50%, rgba(249,115,22,0.1) 100%)' }} />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div key={exp.company}
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
                className="md:pl-20 relative">

                {/* Timeline dot */}
                <div className="absolute left-3 top-7 hidden md:flex items-center justify-center">
                  <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${companyColors[exp.company] || 'from-orange-500 to-amber-400'} p-0.5 shadow-lg`}
                    style={{ boxShadow: exp.current ? '0 0 20px rgba(249,115,22,0.5)' : 'none' }}>
                    <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
                      <FiBriefcase size={12} className="text-orange-400" />
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div className={`glass p-7 ${exp.current ? 'border-orange-500/25 shadow-lg shadow-orange-500/5' : ''}`}>
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div className="flex items-start gap-4">
                      {/* Company logo */}
                      {(exp as any).logo && (
                        <div className="w-12 h-12 rounded-xl bg-white p-1.5 shrink-0 flex items-center justify-center shadow-sm">
                          <img src={(exp as any).logo} alt={exp.company} className="w-full h-full object-contain" />
                        </div>
                      )}
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-white font-black text-xl">{exp.role}</h3>
                          {exp.current && (
                            <span className="flex items-center gap-1.5 text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Actual
                            </span>
                          )}
                        </div>
                        <p className={`font-bold text-base bg-gradient-to-r ${companyColors[exp.company] || 'from-orange-400 to-amber-400'} bg-clip-text text-transparent`}>
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs font-mono bg-white/3 px-3 py-1.5 rounded-xl border border-white/5">
                      <FiCalendar size={11} />
                      {exp.period}
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="text-orange-400 font-bold shrink-0 mt-0.5">›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="badge">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
