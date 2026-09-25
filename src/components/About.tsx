import { motion } from 'framer-motion'
import { FiDownload, FiCode, FiLayers, FiShield } from 'react-icons/fi'
import { personalInfo, education, certifications } from '../data/portfolio'

const stats = [
  { value: '15+', label: 'Proyectos entregados' },
  { value: '2+', label: 'Años de experiencia' },
  { value: '25+', label: 'Bugs críticos cerrados en Rappi' },
  { value: '3', label: 'Empresas (Nova, Rappi, SIS)' },
]

const pillars = [
  { icon: FiCode, title: 'Full Stack', desc: 'Frontend con React/Blazor y backend con .NET/Node, conectados por APIs REST.' },
  { icon: FiLayers, title: 'Enterprise', desc: 'ERP, CRM, facturación electrónica DIAN y sistemas de alta disponibilidad.' },
  { icon: FiShield, title: 'Calidad', desc: 'QA en Rappi: pruebas funcionales, de regresión y seguimiento de bugs bajo Scrum.' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="section-subtitle">Quién soy</p>
          <h2 className="section-title">Sobre mí</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mt-12">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-slate-400 leading-relaxed">
              Mi proyecto más diferenciador es un <span className="text-white font-medium">sistema de traducción de lengua de señas</span> con IA y visión por computadora — construido desde cero para mejorar la accesibilidad de personas sordomudas.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href={`mailto:${personalInfo.email}`} className="btn-primary flex items-center gap-2">
                <FiDownload size={16} />
                Descargar CV
              </a>
            </div>

            {/* Education */}
            <div className="pt-4">
              <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-3">Educación</p>
              {education.map((e) => (
                <div key={e.institution} className="flex items-start gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">{e.degree}</p>
                    <p className="text-slate-500 text-xs">{e.institution} · {e.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <div className="space-y-6">
            {/* Stats */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="card text-center">
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-cyan">{s.value}</p>
                  <p className="text-slate-400 text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Pillars */}
            <div className="space-y-4">
              {pillars.map((p, i) => (
                <motion.div key={p.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex gap-4 items-start card">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                    <p.icon size={20} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{p.title}</p>
                    <p className="text-slate-400 text-sm mt-0.5">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications strip */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="mt-16 card">
          <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-4">Certificaciones</p>
          <div className="flex flex-wrap gap-3">
            {certifications.map((c) => (
              <span key={c} className="badge">{c}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
