export const personalInfo = {
  name: 'Juan Sebastián Silva Piñeros',
  shortName: 'TheSebax27',
  title: 'Full Stack Developer',
  location: 'Bogotá, Colombia',
  email: 'silvasebastian2703@gmail.com',
  phone: '+57 301 170 8855',
  github: 'https://github.com/TheSebax27',
  linkedin: 'https://linkedin.com/in/juan-sebastian-silva-piñeros-7672ab313',
  bio: 'Desarrollador Full Stack con experiencia en desarrollo web, escritorio y QA. Enfocado en construir soluciones reales — desde sistemas ERP enterprise hasta herramientas de accesibilidad con IA. Más de 15 proyectos entregados, con dominio de C#, .NET, React y Python.',
}

export const skills = {
  languages: ['C#', 'TypeScript', 'JavaScript', 'Python', 'SQL', 'Java', 'PHP'],
  frameworks: ['.NET Core', 'ASP.NET', 'React', 'Blazor', 'Node.js', 'Deno.js', 'Bootstrap', 'Tailwind'],
  databases: ['SQL Server', 'MySQL', 'Supabase', 'Firebase'],
  ai: ['TensorFlow', 'Keras', 'OpenCV', 'MediaPipe', 'Scikit-learn'],
  tools: ['Git / GitHub', 'Visual Studio 2022', 'VS Code', 'Postman', 'Swagger', 'XAMPP'],
  methodologies: ['Scrum', 'SOLID', 'QA / Testing', 'REST APIs', 'CI/CD'],
}

export const experiences = [
  {
    role: 'Desarrollador Full Stack',
    company: 'Soluciones Integrales en Sistemas',
    period: 'Junio 2026 – Actualidad',
    current: true,
    bullets: [
      'Desarrollo de aplicaciones web empresariales con ASP.NET Core, C#, React, Blazor y TypeScript.',
      'Diseño, administración y optimización de bases de datos en SQL Server y Supabase.',
      'Automatización de backups y tareas de mantenimiento en servidores de producción.',
      'Participación en proyecto de validación de pagos y folios para la DIAN.',
      'Desarrollo de sistema ERP/CRM profesional para gestión empresarial.',
      'Integración de APIs REST entre frontend, backend y servicios externos.',
    ],
    tags: ['C#', 'React', 'Blazor', 'SQL Server', 'ASP.NET Core'],
  },
  {
    role: 'QA / Analista de Calidad de Software',
    company: 'Rappi S.A.S',
    period: 'Agosto 2025 – Febrero 2026',
    current: false,
    bullets: [
      'Identificación, reporte y seguimiento de ~25 bugs críticos en aplicaciones web y móviles.',
      'Colaboración activa en el área de desarrollo para corrección de errores reportados.',
      'Ejecución de pruebas funcionales y de regresión bajo metodologías ágiles (Scrum).',
    ],
    tags: ['QA', 'Scrum', 'Testing', 'Bug Tracking'],
  },
  {
    role: 'Desarrollador de Software',
    company: 'Nova',
    period: 'Marzo 2024 – Julio 2025',
    current: false,
    bullets: [
      'Entrega de un promedio de 15 proyectos de software: web, escritorio y móviles.',
      'Desarrollo con .NET, Firebase, SQL Server, Supabase, Deno y React con TypeScript.',
      'Diseño y modelado de bases de datos relacionales.',
      'Integración de APIs para la conexión entre frontend y backend.',
      'Levantamiento de requerimientos bajo metodologías ágiles (Scrum).',
    ],
    tags: ['.NET', 'React', 'TypeScript', 'Firebase', 'Supabase'],
  },
]

export const projects = [
  {
    title: 'Sistema de Traducción Lengua de Señas',
    description: 'Sistema de reconocimiento de lenguaje de señas mediante visión por computadora, con conversión a texto y audio en tiempo real. Enfoque de accesibilidad e inclusión digital para personas sordomudas.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'MediaPipe', 'Keras'],
    period: 'Mar 2025 – Jun 2026',
    highlight: true,
    icon: '🤟',
    github: 'https://github.com/TheSebax27',
  },
  {
    title: 'NEXO ERP / CRM',
    description: 'Sistema ERP/CRM empresarial completo con gestión de inventario, facturación electrónica DIAN, módulo RRHH, integración con POS y reportes avanzados.',
    tags: ['C#', 'Blazor', 'React', 'SQL Server', 'ASP.NET Core'],
    period: '2026 – Actualidad',
    highlight: true,
    icon: '🏢',
    github: 'https://github.com/TheSebax27',
  },
  {
    title: 'Princess Mile',
    description: 'Aplicación e-commerce con catálogo de productos, carrito de compras y panel de administración. Desplegada en producción.',
    tags: ['React', 'Vite', 'TypeScript', 'Supabase'],
    period: '2025',
    highlight: false,
    icon: '🛒',
    github: 'https://github.com/TheSebax27',
  },
  {
    title: 'ParkLink',
    description: 'App Android/iOS para gestión de parqueaderos con impresión BT ESC/POS, SQLite local e integración con sistema POS.',
    tags: ['.NET MAUI', 'SQLite', 'C#', 'Bluetooth'],
    period: '2026',
    highlight: false,
    icon: '🅿️',
    github: 'https://github.com/TheSebax27',
  },
  {
    title: 'SebasWeb',
    description: 'Plataforma de gestión de módulos con galería de fotos integrada con Google Drive.',
    tags: ['React', 'Vite', 'Supabase', 'Google Drive API'],
    period: '2025',
    highlight: false,
    icon: '🌐',
    github: 'https://github.com/TheSebax27',
  },
  {
    title: 'Cruquim',
    description: 'Catálogo de productos de limpieza con panel de administración en ruta protegida.',
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind', 'Supabase'],
    period: '2025',
    highlight: false,
    icon: '🧹',
    github: 'https://github.com/TheSebax27',
  },
]

export const testimonials = [
  {
    name: 'Sergio Alejandro Jiménez Bernal',
    role: 'Gerente General — Nova',
    text: 'Juan Sebastián demostró competencias técnicas sólidas, capacidad analítica y orientación a resultados. Se destacó por su cumplimiento en tiempos de entrega y calidad en la ejecución de tareas. Su desempeño fue consistente y confiable, aportando valor tangible a los proyectos desarrollados.',
    date: 'Julio 2025',
  },
  {
    name: 'Juana Claudia Castro Barrientos',
    role: 'QA Lead — Rappi S.A.S',
    text: 'Durante su empleo, Juan Sebastián demostró ser una persona dedicada y responsable. Su desempeño laboral fue consistentemente bueno y su manejo de comunicación siempre fue cordial y con respeto.',
    date: 'Febrero 2026',
  },
]

export const education = [
  {
    institution: 'UNAD',
    degree: 'Ingeniería de Sistemas',
    period: '2023 – 2027 (en curso)',
  },
  {
    institution: 'SENA',
    degree: 'Tecnólogo en Análisis y Desarrollo de Software',
    period: '2023 – 2025',
  },
]

export const certifications = [
  'Scrum Fundamentals Certified — SCRUMstudy (2024)',
  'Programación en PHP y Java — Politécnico de Colombia (2024/2025)',
  'JavaScript, Python y SQL — Desafío Latam (2025)',
  'Derecho de Autor para la Industria del Software — DNDA (2025)',
]
