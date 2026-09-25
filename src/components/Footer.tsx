import { personalInfo } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 text-center">
      <p className="text-slate-600 text-sm font-mono">
        © 2026 <span className="text-accent">{personalInfo.shortName}</span> · Hecho con React + Vite + Tailwind
      </p>
      <p className="text-slate-700 text-xs mt-1">{personalInfo.location}</p>
    </footer>
  )
}
