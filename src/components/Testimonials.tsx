import { motion } from 'framer-motion'
import { FiMessageSquare } from 'react-icons/fi'
import { testimonials } from '../data/portfolio'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="section-subtitle">Recomendaciones</p>
          <h2 className="section-title">Lo que dicen</h2>
          <p className="text-slate-400 mt-2 max-w-xl">
            Cartas de recomendación reales de los equipos con los que trabajé.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {testimonials.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="card flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-accent/10 text-accent">
                  <FiMessageSquare size={18} />
                </div>
                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-accent text-sm">{t.role}</p>
                </div>
                <p className="ml-auto text-slate-600 text-xs font-mono">{t.date}</p>
              </div>
              <blockquote className="text-slate-400 leading-relaxed text-sm italic border-l-2 border-accent/30 pl-4">
                "{t.text}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
