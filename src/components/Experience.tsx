import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'
import { experiences } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="section-subtitle">Trayectoria</p>
          <h2 className="section-title">Experiencia</h2>
        </motion.div>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div key={exp.company}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="md:pl-16 relative">
                {/* Dot */}
                <div className="absolute left-4 top-6 w-5 h-5 rounded-full border-2 border-accent bg-dark items-center justify-center hidden md:flex">
                  {exp.current && <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />}
                </div>

                <div className={`card group ${exp.current ? 'border-accent/40 shadow-lg shadow-accent/5' : ''}`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <FiBriefcase size={14} className="text-accent" />
                        <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                        {exp.current && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 font-mono">Actual</span>
                        )}
                      </div>
                      <p className="text-accent font-semibold">{exp.company}</p>
                    </div>
                    <p className="text-slate-500 text-sm font-mono shrink-0">{exp.period}</p>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="text-accent mt-1.5 shrink-0">›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="badge text-xs">{tag}</span>
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
