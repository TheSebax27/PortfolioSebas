import { motion } from 'framer-motion'
import {
  SiSharp, SiTypescript, SiJavascript, SiPython, SiPhp, SiDotnet,
  SiReact, SiNodedotjs, SiBootstrap, SiTailwindcss,
  SiMysql, SiSupabase, SiFirebase,
  SiTensorflow, SiOpencv, SiScikitlearn, SiGit, SiGithub,
  SiPostman, SiVite,
} from 'react-icons/si'
import { FiDatabase, FiBox, FiTool, FiEye } from 'react-icons/fi'

const techStack = [
  // Core languages
  { icon: SiSharp, name: 'C#', level: 'Avanzado', color: '#9B4F96', cat: 'lang' },
  { icon: SiTypescript, name: 'TypeScript', level: 'Avanzado', color: '#3178C6', cat: 'lang' },
  { icon: SiJavascript, name: 'JavaScript', level: 'Avanzado', color: '#F7DF1E', cat: 'lang' },
  { icon: SiPython, name: 'Python', level: 'Intermedio', color: '#3776AB', cat: 'lang' },
  { icon: SiPhp, name: 'PHP', level: 'Básico', color: '#777BB4', cat: 'lang' },
  // Frameworks
  { icon: SiDotnet, name: '.NET Core', level: 'Avanzado', color: '#512BD4', cat: 'fw' },
  { icon: SiReact, name: 'React', level: 'Avanzado', color: '#61DAFB', cat: 'fw' },
  { icon: FiBox, name: 'Blazor', level: 'Intermedio', color: '#512BD4', cat: 'fw' },
  { icon: SiNodedotjs, name: 'Node.js', level: 'Intermedio', color: '#339933', cat: 'fw' },
  { icon: SiTailwindcss, name: 'Tailwind', level: 'Avanzado', color: '#06B6D4', cat: 'fw' },
  { icon: SiBootstrap, name: 'Bootstrap', level: 'Avanzado', color: '#7952B3', cat: 'fw' },
  // Databases
  { icon: FiDatabase, name: 'SQL Server', level: 'Avanzado', color: '#CC2927', cat: 'db' },
  { icon: SiMysql, name: 'MySQL', level: 'Intermedio', color: '#4479A1', cat: 'db' },
  { icon: SiSupabase, name: 'Supabase', level: 'Avanzado', color: '#3ECF8E', cat: 'db' },
  { icon: SiFirebase, name: 'Firebase', level: 'Intermedio', color: '#FFCA28', cat: 'db' },
  // AI / CV
  { icon: SiTensorflow, name: 'TensorFlow', level: 'Intermedio', color: '#FF6F00', cat: 'ai' },
  { icon: SiOpencv, name: 'OpenCV', level: 'Intermedio', color: '#5C3EE8', cat: 'ai' },
  { icon: SiScikitlearn, name: 'Scikit-learn', level: 'Básico', color: '#F7931E', cat: 'ai' },
  { icon: FiEye, name: 'MediaPipe', level: 'Intermedio', color: '#00897B', cat: 'ai' },
  // Tools
  { icon: SiGit, name: 'Git', level: '', color: '#F05032', cat: 'tool' },
  { icon: SiGithub, name: 'GitHub', level: '', color: '#E6EDF3', cat: 'tool' },
  { icon: FiTool, name: 'Visual Studio', level: '', color: '#5C2D91', cat: 'tool' },
  { icon: SiPostman, name: 'Postman', level: '', color: '#FF6C37', cat: 'tool' },
  { icon: SiVite, name: 'Vite', level: '', color: '#646CFF', cat: 'tool' },
]

const cats = [
  { key: 'lang', label: 'Lenguajes', gradient: 'from-indigo-500/20 to-violet-500/20 border-indigo-500/20' },
  { key: 'fw', label: 'Frameworks', gradient: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/20' },
  { key: 'db', label: 'Bases de Datos', gradient: 'from-emerald-500/20 to-cyan-500/20 border-emerald-500/20' },
  { key: 'ai', label: 'IA / Visión', gradient: 'from-pink-500/20 to-rose-500/20 border-pink-500/20' },
  { key: 'tool', label: 'Herramientas', gradient: 'from-amber-500/20 to-orange-500/20 border-amber-500/20' },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } }
const item = { hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="absolute left-0 top-1/3 w-[500px] h-[500px] rounded-full opacity-8 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <span className="label">// 02 · Stack</span>
          <h2 className="h2 mb-4">Tecnologías</h2>
          <p className="text-slate-400 text-lg max-w-xl">
            Dominio transversal: del modelo de datos al componente visual, pasando por el backend, APIs y modelos de IA.
          </p>
        </motion.div>

        <div className="space-y-8">
          {cats.map((cat, ci) => (
            <motion.div key={cat.key}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: ci * 0.08 }}>
              <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${cat.gradient.split(' ').slice(0,2).join(' ')}`} />
                {cat.label}
              </p>
              <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="flex flex-wrap gap-3">
                {techStack.filter(t => t.cat === cat.key).map(tech => (
                  <motion.div key={tech.name} variants={item}
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border bg-gradient-to-br ${cat.gradient} glass cursor-default group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                    style={{ '--icon-color': tech.color } as React.CSSProperties}>
                    <tech.icon size={18} style={{ color: tech.color }} className="opacity-90 group-hover:opacity-100 transition-opacity" />
                    <span className="text-slate-300 text-sm font-semibold group-hover:text-white transition-colors">{tech.name}</span>
                    {tech.level && (
                      <span className="text-[10px] font-mono text-slate-600 group-hover:text-slate-400 transition-colors">{tech.level}</span>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Languages + methodology row */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="mt-10 glass p-6 flex flex-wrap items-center gap-8">
          <div>
            <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-3">Idiomas</p>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-white font-semibold text-sm">Español</span>
                <span className="text-slate-500 text-xs">Nativo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                <span className="text-white font-semibold text-sm">Inglés</span>
                <span className="text-slate-500 text-xs">B1 · Docs técnica</span>
              </div>
            </div>
          </div>
          <div className="h-12 w-px bg-white/5 hidden md:block" />
          <div>
            <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-3">Metodologías</p>
            <div className="flex flex-wrap gap-2">
              {['Scrum', 'SOLID', 'QA / Testing', 'REST APIs', 'Git Flow'].map(m => (
                <span key={m} className="badge">{m}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
