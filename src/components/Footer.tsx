import { personalInfo } from '../data/portfolio'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
            <span className="text-white font-black text-[10px]">JS</span>
          </div>
          <span className="text-slate-500 text-sm font-mono">© 2026 {personalInfo.shortName}</span>
        </div>
        <p className="text-slate-600 text-xs font-mono">
          Built with React · Vite · Tailwind · Framer Motion
        </p>
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
