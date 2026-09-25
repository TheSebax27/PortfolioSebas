import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none overflow-hidden">
        <div className="w-[800px] h-[400px] rounded-full opacity-10 blur-[120px] mb-0"
          style={{ background: 'radial-gradient(ellipse, #6366F1 0%, #8B5CF6 50%, transparent 100%)' }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <span className="label">// 06 · Contacto</span>
          <h2 className="h2 mb-4">¿Construimos algo juntos?</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Disponible para roles full-time, contratos y proyectos freelance.
            Respondo en menos de 24 horas.
          </p>
        </motion.div>

        {/* CTA banner */}
        <motion.a href={`mailto:${personalInfo.email}`}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="block mb-12 group">
          <div className="relative overflow-hidden rounded-3xl p-px"
            style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6, #06B6D4)' }}>
            <div className="bg-dark rounded-3xl px-8 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-2xl md:text-3xl font-black text-white mb-1">silvasebastian2703@gmail.com</p>
                <p className="text-slate-400">Escríbeme directamente · respuesta garantizada</p>
              </div>
              <div className="btn-primary shrink-0 group-hover:scale-105 transition-transform">
                <FiMail size={18} />
                Enviar email
                <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </motion.a>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: FiPhone, label: 'Teléfono', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
            { icon: FiMapPin, label: 'Ubicación', value: 'Bogotá, Colombia', href: null, color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' },
            { icon: FiGithub, label: 'GitHub', value: 'TheSebax27', href: personalInfo.github, color: 'text-slate-300 bg-white/5 border-white/10' },
          ].map(({ icon: Icon, label, value, href, color }) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass p-6 flex gap-4 items-center group">
              <div className={`p-3 rounded-2xl border ${color} shrink-0`}>
                <Icon size={20} />
              </div>
              <div>
                <p className="text-slate-500 text-xs font-mono uppercase tracking-wider">{label}</p>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    className="text-white font-semibold text-sm hover:text-accent transition-colors">{value}</a>
                ) : (
                  <p className="text-white font-semibold text-sm">{value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3 glass rounded-2xl text-slate-400 hover:text-white hover:border-white/20 font-semibold text-sm transition-all hover:-translate-y-1">
            <FiGithub size={18} /> GitHub · TheSebax27
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3 glass rounded-2xl text-slate-400 hover:text-blue-400 hover:border-blue-500/30 font-semibold text-sm transition-all hover:-translate-y-1">
            <FiLinkedin size={18} /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  )
}
