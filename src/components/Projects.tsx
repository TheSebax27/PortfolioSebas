import { motion } from 'framer-motion'
import { FiGlobe, FiSmartphone, FiPackage, FiShoppingCart, FiTruck, FiDroplet, FiHome, FiTool, FiUsers } from 'react-icons/fi'

const companies = [
  {
    name: 'Soluciones Integrales en Sistemas',
    logo: '/assets/logo-sis.png',
    glow: 'rgba(56,189,248,0.15)',
    nameColor: '#38BDF8',
    projects: [
      {
        name: 'VISIONS',
        desc: 'Sistema de facturación empresarial en producción. Módulos de ventas, inventario, clientes y reportes. Integración con impresoras fiscales y servicios externos.',
        tags: ['VB.NET', 'WinForms', 'SQL Server'],
        icon: FiPackage,
      },
      {
        name: 'NEXO ERP / CRM',
        desc: 'ERP/CRM empresarial completo: inventario, facturación electrónica DIAN, módulo RRHH, integración con POS VISIONS y reportes avanzados.',
        tags: ['C#', 'ASP.NET Core', 'Blazor', 'React', 'SQL Server'],
        icon: FiGlobe,
      },
      {
        name: 'TomaPedidos',
        desc: 'Sistema web de toma de pedidos para restaurantes. Gestión de mesas, menú dinámico, pedidos en tiempo real e impresión en cocina.',
        tags: ['ASP.NET Web Forms', 'SQL Server', 'JavaScript'],
        icon: FiShoppingCart,
      },
      {
        name: 'AutoPago',
        desc: 'Kiosco de autopago estilo McDonald\'s. Flujo completo de selección de productos, carrito y pago integrado con datáfono físico.',
        tags: ['ASP.NET Core', 'ADO.NET', 'TEFNET'],
        icon: FiTruck,
      },
      {
        name: 'ParkLink',
        desc: 'App Android/iOS para gestión de parqueadero y autolavado. Registro de vehículos, tarifas e impresión de tiquetes vía Bluetooth ESC/POS.',
        tags: ['.NET MAUI', 'SQLite', 'Bluetooth ESC/POS'],
        icon: FiDroplet,
      },
    ],
  },
  {
    name: 'Rappi S.A.S',
    logo: '/assets/logo-rappi.png',
    glow: 'rgba(249,115,22,0.15)',
    nameColor: '#FB923C',
    projects: [
      {
        name: 'Rappi Web — Colombia · Uruguay · México',
        desc: 'QA sobre la plataforma web de Rappi en tres mercados. Identificación y reporte de bugs críticos en flujos de compra, pagos y experiencia de usuario.',
        tags: ['QA', 'Web', 'Bug Tracking', 'Scrum'],
        icon: FiGlobe,
      },
      {
        name: 'Rappi App — Android & iOS',
        desc: 'Pruebas funcionales y de regresión en la aplicación móvil. Cobertura de flujos de entrega, notificaciones, geolocalización y checkout.',
        tags: ['QA', 'Android', 'iOS', 'Testing'],
        icon: FiSmartphone,
      },
    ],
  },
]

const personalProjects = [
  {
    name: 'AgroCore',
    desc: 'App móvil para administración agropecuaria. Gestión de fincas, inventario de animales, registro de actividades y seguimiento de producción offline.',
    tags: ['.NET MAUI', 'SQLite', 'C#'],
    icon: FiHome,
    color: 'from-emerald-500 to-teal-400',
    glow: 'rgba(16,185,129,0.15)',
  },
  {
    name: 'Ronda',
    desc: 'Sistema de gestión para talleres de carros. Control de órdenes de trabajo, inventario de repuestos, historial de vehículos y facturación.',
    tags: ['React', 'TypeScript', 'Supabase'],
    icon: FiTool,
    color: 'from-amber-500 to-orange-400',
    glow: 'rgba(245,158,11,0.15)',
  },
  {
    name: 'Vanta',
    desc: 'CRM para empresas. Pipeline de oportunidades, gestión de clientes, seguimiento de contactos y reportes de ventas.',
    tags: ['React', 'TypeScript', 'Supabase'],
    icon: FiUsers,
    color: 'from-violet-500 to-purple-400',
    glow: 'rgba(139,92,246,0.15)',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-5 blur-[130px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <span className="label">// 04 · Proyectos</span>
          <h2 className="h2">Trabajo real</h2>
          <p className="text-slate-400 mt-3 max-w-xl">Proyectos en producción, no demos — sistemas que empresas reales usan hoy.</p>
        </motion.div>

        {/* Company projects */}
        <div className="space-y-16">
          {companies.map((co, ci) => (
            <motion.div key={co.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: ci * 0.1 }}>

              {/* Company header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white p-1.5 shrink-0 flex items-center justify-center shadow-lg">
                  <img src={co.logo} alt={co.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="font-black text-lg text-white">{co.name}</p>
                  <p className="text-slate-500 text-xs font-mono">{co.projects.length} proyectos</p>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-2" />
              </div>

              {/* Project cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {co.projects.map((p, pi) => (
                  <motion.div key={p.name}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: ci * 0.1 + pi * 0.07 }}
                    className="glass p-5 flex flex-col gap-3 group">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl shrink-0" style={{ background: co.glow }}>
                        <p.icon size={16} className="text-white" />
                      </div>
                      <h3 className="text-white font-bold text-sm leading-snug pt-0.5">{p.name}</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed flex-1">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                      {p.tags.map(tag => <span key={tag} className="badge text-[11px] py-0.5 px-2.5">{tag}</span>)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Personal projects */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="label mb-0">// Proyectos personales</span>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {personalProjects.map((p, i) => (
              <motion.div key={p.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.09 }}
                className="glass p-5 flex flex-col gap-3 group">
                <div className="flex items-start gap-3">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${p.color} shrink-0`} style={{ background: p.glow }}>
                    <p.icon size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm leading-snug">{p.name}</h3>
                    <span className={`text-[10px] font-mono font-bold bg-gradient-to-r ${p.color} bg-clip-text text-transparent`}>
                      Proyecto personal
                    </span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {p.tags.map(tag => <span key={tag} className="badge text-[11px] py-0.5 px-2.5">{tag}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
