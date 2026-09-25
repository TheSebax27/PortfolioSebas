import { motion } from 'framer-motion'

// Projects section — placeholder until project selection is finalized
export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="section-subtitle">Trabajo</p>
          <h2 className="section-title">Proyectos</h2>
          <p className="text-slate-500 mt-4 font-mono text-sm">// Próximamente — selección en progreso</p>
        </motion.div>
      </div>
    </section>
  )
}
