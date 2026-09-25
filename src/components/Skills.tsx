import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'

const categories = [
  { label: 'Lenguajes', items: skills.languages, color: 'from-violet-500/20 to-accent/20 border-accent/30 text-accent' },
  { label: 'Frameworks & Librerías', items: skills.frameworks, color: 'from-sky-500/20 to-cyan/20 border-cyan/30 text-cyan' },
  { label: 'Bases de Datos', items: skills.databases, color: 'from-emerald-500/20 to-green-400/20 border-emerald-500/30 text-emerald-400' },
  { label: 'IA / Visión por Computadora', items: skills.ai, color: 'from-pink-500/20 to-rose-400/20 border-pink-500/30 text-pink-400' },
  { label: 'Herramientas', items: skills.tools, color: 'from-amber-500/20 to-yellow-400/20 border-amber-500/30 text-amber-400' },
  { label: 'Metodologías', items: skills.methodologies, color: 'from-slate-500/20 to-slate-400/20 border-slate-500/30 text-slate-300' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="section-subtitle">Tecnologías</p>
          <h2 className="section-title">Stack & Habilidades</h2>
          <p className="text-slate-400 mt-2 max-w-xl">
            Dominio transversal: desde la lógica de negocio en el backend hasta el componente en pantalla, pasando por la base de datos y los modelos de IA.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {categories.map((cat, catIdx) => (
            <motion.div key={cat.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.08 }}
              className="bg-surface border border-border rounded-2xl p-6 hover:border-accent/30 transition-colors duration-300">
              <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-4">{cat.label}</p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item}
                    className={`text-xs font-medium px-3 py-1 rounded-full border bg-gradient-to-br ${cat.color}`}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Language level */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-10 card flex flex-wrap gap-8 items-center">
          <div>
            <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-1">Idiomas</p>
            <div className="flex gap-6 mt-2">
              <div>
                <p className="text-white font-semibold">Español</p>
                <p className="text-slate-400 text-sm">Nativo</p>
              </div>
              <div>
                <p className="text-white font-semibold">Inglés</p>
                <p className="text-slate-400 text-sm">Intermedio (B1) · documentación técnica</p>
              </div>
            </div>
          </div>
          <div className="ml-auto flex gap-2 flex-wrap">
            {['Git', 'GitHub', 'Postman', 'Swagger', 'VS Code', 'Visual Studio 2022'].map((t) => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
