import { personalInfo } from '../data/portfolio'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiReact, SiVite, SiTailwindcss, SiFramer } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg overflow-hidden bg-white/5 border border-orange-500/20 flex items-center justify-center">
            <img src="/favicon.png" alt="Logo" className="w-5 h-5 object-contain" />
          </div>
          <span className="text-slate-500 text-sm font-mono">© 2026 {personalInfo.shortName}</span>
        </div>
        <div className="flex items-center gap-3 text-slate-600">
          <SiReact size={16} className="text-sky-400/70" title="React" />
          <SiVite size={16} className="text-violet-400/70" title="Vite" />
          <SiTailwindcss size={16} className="text-cyan-400/70" title="Tailwind" />
          <SiFramer size={16} className="text-pink-400/70" title="Framer Motion" />
          <span className="text-xs font-mono text-slate-600 ml-1">React · Vite · Tailwind · Framer</span>
        </div>
        <div className="flex gap-3">
          {[
            { icon: FiGithub, href: personalInfo.github },
            { icon: FiLinkedin, href: personalInfo.linkedin },
            { icon: FiMail, href: `mailto:${personalInfo.email}` },
          ].map(({ icon: Icon, href }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-300 hover:bg-white/5 transition-all">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
