import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="section-subtitle">Contacto</p>
          <h2 className="section-title">Hablemos</h2>
          <p className="text-slate-400 mt-2 max-w-xl">
            Disponible para proyectos freelance, oportunidades laborales y colaboraciones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="space-y-6">
            {[
              { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: FiPhone, label: 'Teléfono', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              { icon: FiMapPin, label: 'Ubicación', value: personalInfo.location, href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-mono uppercase tracking-wider">{label}</p>
                  {href ? (
                    <a href={href} className="text-white font-medium hover:text-accent transition-colors">{value}</a>
                  ) : (
                    <p className="text-white font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-4 flex gap-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium">
                <FiGithub /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium">
                <FiLinkedin /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:${personalInfo.email}` }}
            className="card space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-slate-500 text-xs font-mono uppercase tracking-wider block mb-1.5">Nombre</label>
                <input type="text" placeholder="Tu nombre" required
                  className="w-full bg-dark border border-border rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-accent/60 transition-colors text-sm" />
              </div>
              <div>
                <label className="text-slate-500 text-xs font-mono uppercase tracking-wider block mb-1.5">Email</label>
                <input type="email" placeholder="tu@email.com" required
                  className="w-full bg-dark border border-border rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-accent/60 transition-colors text-sm" />
              </div>
            </div>
            <div>
              <label className="text-slate-500 text-xs font-mono uppercase tracking-wider block mb-1.5">Asunto</label>
              <input type="text" placeholder="¿En qué puedo ayudarte?" required
                className="w-full bg-dark border border-border rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-accent/60 transition-colors text-sm" />
            </div>
            <div>
              <label className="text-slate-500 text-xs font-mono uppercase tracking-wider block mb-1.5">Mensaje</label>
              <textarea rows={4} placeholder="Cuéntame sobre tu proyecto..." required
                className="w-full bg-dark border border-border rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-accent/60 transition-colors text-sm resize-none" />
            </div>
            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
              <FiSend size={16} />
              Enviar mensaje
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
