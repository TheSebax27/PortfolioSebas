import { motion } from 'framer-motion'
import { FiMessageSquare } from 'react-icons/fi'
import { testimonials } from '../data/portfolio'

const gradients = [
  'from-indigo-500 to-violet-500',
  'from-orange-500 to-red-500',
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <span className="label">// 05 · Referencias</span>
          <h2 className="h2 mb-4">Lo que dicen de mí</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Cartas de recomendación reales — no genéricas. De los equipos con quienes trabajé.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="glow-border group">
              <div className="glass p-8 h-full flex flex-col gap-6 rounded-[20px]">
                {/* Quote icon */}
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center shadow-lg`}>
                  <FiMessageSquare size={18} className="text-white" />
                </div>

                {/* Quote */}
                <blockquote className="text-slate-300 leading-relaxed text-base italic flex-1">
                  "{t.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${gradients[i]} flex items-center justify-center font-bold text-white text-sm shrink-0 shadow-lg`}>
                    {t.name.split(' ').slice(0, 2).map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className={`text-xs font-semibold bg-gradient-to-r ${gradients[i]} bg-clip-text text-transparent`}>{t.role}</p>
                  </div>
                  <span className="ml-auto text-slate-600 font-mono text-xs">{t.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-12 glass p-6 flex flex-wrap items-center justify-center gap-10">
          {[
            { val: '1.5 años', label: 'en Nova' },
            { val: '6 meses', label: 'en Rappi' },
            { val: '1+ año', label: 'en SIS (actual)' },
          ].map(item => (
            <div key={item.val} className="text-center">
              <p className="text-2xl font-black text-gradient">{item.val}</p>
              <p className="text-slate-500 text-xs mt-0.5">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
