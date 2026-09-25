import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView as useIOInView } from 'react-intersection-observer'
import { FiCode, FiLayers, FiShield, FiDownload } from 'react-icons/fi'
import { personalInfo, education, certifications } from '../data/portfolio'

const stats = [
  { value: 15, suffix: '+', label: 'Proyectos entregados', color: 'from-indigo-500 to-violet-500' },
  { value: 2, suffix: '+', label: 'Años de experiencia', color: 'from-cyan-500 to-blue-500' },
  { value: 25, suffix: '+', label: 'Bugs críticos en Rappi', color: 'from-violet-500 to-pink-500' },
  { value: 3, suffix: '', label: 'Empresas (Nova · Rappi · SIS)', color: 'from-emerald-500 to-cyan-500' },
]

const pillars = [
  { icon: FiCode, title: 'Full Stack', desc: 'Frontend con React/Blazor y backend con .NET/Node. APIs REST. De la BD al componente en pantalla.', color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' },
  { icon: FiLayers, title: 'Enterprise', desc: 'ERP/CRM, facturación DIAN, automatización de backups, sistemas de alta disponibilidad.', color: 'text-violet-400 bg-violet-500/10 border-violet-500/20' },
  { icon: FiShield, title: 'QA & Calidad', desc: 'Pruebas funcionales y de regresión en Rappi. Scrum. Reporte y seguimiento de bugs críticos.', color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' },
]

function StatCard({ value, suffix, label, color, i }: { value: number; suffix: string; label: string; color: string; i: number }) {
  const { ref, inView } = useIOInView({ triggerOnce: true, threshold: 0.5 })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="glass p-6 text-center group">
      <div className={`text-4xl font-black mb-1 bg-gradient-to-br ${color} bg-clip-text text-transparent`}>
        {inView ? <CountUp end={value} duration={2} suffix={suffix} /> : '0'}
      </div>
      <p className="text-slate-400 text-sm leading-snug">{label}</p>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="absolute right-0 top-1/2 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="label">// 01 · Quién soy</span>
          <h2 className="h2 mb-4">Sobre mí</h2>
          <p className="text-slate-400 max-w-xl text-lg leading-relaxed mb-16">
            Desarrollador colombiano con foco en calidad de código, UX coherente y entrega real de valor.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left col */}
          <div className="space-y-8">
            <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="text-slate-300 text-lg leading-relaxed">
              {personalInfo.bio}
            </motion.p>

            <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-slate-400 leading-relaxed">
              Mi proyecto personal más impactante: un{' '}
              <span className="text-white font-semibold">sistema de traducción de lengua de señas</span>{' '}
              construido con Python, TensorFlow y visión por computadora — reconoce señas en tiempo real y las convierte a texto y audio.
              Enfocado en <span className="text-cyan-400 font-semibold">accesibilidad e inclusión digital</span>.
            </motion.p>

            {/* Pillars */}
            <div className="space-y-3 pt-2">
              {pillars.map((p, i) => (
                <motion.div key={p.title}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex gap-4 items-start glass p-4 group">
                  <div className={`p-2.5 rounded-xl border ${p.color} shrink-0`}>
                    <p.icon size={18} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{p.title}</p>
                    <p className="text-slate-400 text-sm mt-0.5 leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3 pt-2">
              <a href={`mailto:${personalInfo.email}`} className="btn-primary">
                <FiDownload size={15} />
                Solicitar CV
              </a>
            </motion.div>
          </div>

          {/* Right col */}
          <div className="space-y-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => <StatCard key={s.label} {...s} i={i} />)}
            </div>

            {/* Education */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="glass p-6">
              <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4">// Educación</p>
              {education.map((e) => (
                <div key={e.institution} className="flex gap-3 mb-4 last:mb-0">
                  <div className="dot mt-1.5" />
                  <div>
                    <p className="text-white font-semibold text-sm">{e.degree}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{e.institution} · {e.period}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="glass p-6">
              <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4">// Certificaciones</p>
              <div className="flex flex-wrap gap-2">
                {certifications.map((c) => (
                  <span key={c} className="badge">{c}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
