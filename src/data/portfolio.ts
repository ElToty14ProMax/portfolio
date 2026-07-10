export type LinkKind = 'primary' | 'secondary' | 'quiet'

export interface PortfolioLink {
  label: string
  href: string
  kind?: LinkKind
  external?: boolean
}

export interface NavItem {
  label: string
  href: string
}

export interface Stat {
  value: string
  label: string
}

export interface Capability {
  title: string
  summary: string
  proof: string
  tools: string[]
  icon: 'code' | 'workflow' | 'database' | 'rocket' | 'chart' | 'book'
}

export interface Experience {
  role: string
  company: string
  period: string
  location: string
  summary: string
  bullets: string[]
  tags: string[]
}

export interface ProjectCase {
  name: string
  type: string
  timeline: string
  headline: string
  summary: string
  role: string
  image?: string
  imageAlt?: string
  stack: string[]
  highlights: string[]
  outcome: string
  accent: 'sun' | 'coral' | 'aqua' | 'green'
  links?: PortfolioLink[]
}

export interface EducationItem {
  title: string
  institution: string
  period: string
  detail: string
}

export const profile = {
  name: 'Frank Eduardo Gattorno Rodríguez',
  shortName: 'Frank Gattorno',
  role: 'Full-Stack Developer & Integrations Engineer',
  location: 'Embu das Artes, São Paulo, Brazil',
  email: 'frankegr14@gmail.com',
  phone: '+55 11 91346-3247',
  phoneHref: 'tel:+5511913463247',
  cvHref: '/cv-frank-gattorno.pdf',
  image: '/frank-gattorno-profile.webp',
  graduationImage: '/frank-gattorno-graduation-sm.webp',
  thesisImage: '/frank-gattorno-thesis-sm.webp',
  github: 'https://github.com/ElToty14ProMax',
  linkedin: 'https://www.linkedin.com/in/frank-eduardo-gattorno-rodr%C3%ADguez-b30bb5375/',
  x: 'https://x.com/GattornoFrank'
}

export const navItems: NavItem[] = [
  { label: 'Profile', href: '#profile' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Proof', href: '#proof' },
  { label: 'Contact', href: '#contact' }
]

export const heroStats: Stat[] = [
  { value: '5+', label: 'years building software and integrations' },
  { value: '20+', label: 'business tools connected through APIs and workflows' },
  { value: '4', label: 'major platforms documented from architecture to deployment' },
  { value: '2025', label: 'Computer Engineering degree completed at UCLV' }
]

export const proofPoints = [
  'Production apps with Vue, React, Laravel, PostgreSQL and Docker.',
  'CRM and operations systems across Zoho One, Monday.com, GoHighLevel, HubSpot, Salesforce and Pipedrive.',
  'Deployment, QA and performance checklists with Lighthouse, k6, PHPUnit, Vitest and CI thinking.',
  'Technical documentation that makes a system understandable, maintainable and handoff-ready.'
]

export const capabilities: Capability[] = [
  {
    title: 'Full-stack product engineering',
    summary:
      'I turn requirements into usable applications: API contracts, dashboards, forms, workflows, responsive UI and admin surfaces.',
    proof:
      'La Pequeña Isla, NEXORA and CENDAAI all include multi-screen product flows, backend rules and operational panels.',
    tools: ['Vue 3', 'React', 'TypeScript', 'Laravel', 'Node.js', 'REST APIs'],
    icon: 'code'
  },
  {
    title: 'CRM and automation architecture',
    summary:
      'I connect sales, marketing, invoicing, support and delivery tools so teams stop copying data by hand.',
    proof:
      'Built CRM modules, pipelines, custom fields, validation rules, Zoho Flow/Deluge logic and Monday.com boards.',
    tools: ['Zoho One', 'Monday.com', 'Zapier', 'Make', 'n8n', 'Workato'],
    icon: 'workflow'
  },
  {
    title: 'Database and API reliability',
    summary:
      'I design schemas, indexes, migrations, validation layers, payload mapping and structured error handling.',
    proof:
      'Worked with PostgreSQL, MySQL and SQL Server across e-commerce, financial support and internal systems.',
    tools: ['PostgreSQL', 'MySQL', 'SQL Server', 'JWT', 'OAuth', 'Webhooks'],
    icon: 'database'
  },
  {
    title: 'Deployment and performance',
    summary:
      'I prepare projects for real hosting with build discipline, environment control, containers, SSL and performance budgets.',
    proof:
      'La Pequeña Isla includes Docker/Nginx/SSL deployment notes and Lighthouse, bundle and load-test targets.',
    tools: ['Docker', 'Nginx', 'Linux', 'Vercel', 'Netlify', 'GitHub Actions'],
    icon: 'rocket'
  },
  {
    title: 'Operational dashboards',
    summary:
      'I build views that make status, revenue, lead flow, SLA follow-up and delivery ownership visible.',
    proof:
      'NerdyBiz/Secure Biz work included CRM source-of-truth logic, Monday boards, dashboards and reporting layers.',
    tools: ['Monday.com', 'Zoho Analytics', 'Google Sheets', 'Airtable', 'Slack', 'JustCall'],
    icon: 'chart'
  },
  {
    title: 'Documentation and handoff',
    summary:
      'I document architecture, environment variables, deployment steps, test plans and user flows so projects survive beyond the build.',
    proof:
      'The attached project documents cover technical architecture, user manuals, performance plans and go-live checklists.',
    tools: ['SOPs', 'Technical specs', 'User manuals', 'QA plans', 'Runbooks'],
    icon: 'book'
  }
]

export const experiences: Experience[] = [
  {
    role: 'Integration Engineer',
    company: 'NerdyBiz',
    period: '09/2024 - 05/2026',
    location: 'United States, remote',
    summary:
      'Configured and connected CRM, sales, marketing, invoicing, support and delivery systems for business operations.',
    bullets: [
      'Implemented Zoho CRM modules, pipelines, tags, lead sources, validation rules, workflows and custom functions.',
      'Connected Zoho, Monday.com, GoHighLevel, HubSpot, Pipedrive, Salesforce, JustCall, Slack, Gmail, Calendly, Zoom and Google Sheets.',
      'Troubleshot webhooks, expired tokens, duplicate records, missing fields, mapping errors and CRM data quality issues.',
      'Created workflow documentation, mappings, SOPs, tests and handoff notes for repeatable operations.'
    ],
    tags: ['Zoho One', 'Monday.com', 'Deluge', 'Webhooks', 'Automation', 'CRM Ops']
  },
  {
    role: 'Full-Stack Developer',
    company: 'XETID',
    period: '05/2024 - 02/2026',
    location: 'Santa Clara, Villa Clara, Cuba',
    summary:
      'Built full-stack web applications and internal systems with modern frontends, APIs, relational data and deployment workflows.',
    bullets: [
      'Developed API-driven views, dashboards, forms, filters, tables, routing and reusable components.',
      'Built backend systems with Laravel, Node.js/Express, Python/FastAPI, Java/Spring Boot and .NET concepts.',
      'Designed relational data models, migrations, joins, indexes, integrity rules, reporting logic and data cleanup flows.',
      'Improved maintainability through refactoring, documentation, standard API contracts and troubleshooting production issues.'
    ],
    tags: ['Vue', 'React', 'Laravel', 'PostgreSQL', 'Docker', 'Git']
  },
  {
    role: 'Software Engineer Intern',
    company: 'XETID',
    period: '12/2020 - 05/2024',
    location: 'Santa Clara, Villa Clara, Cuba',
    summary:
      'Started on modernization work for internal systems, connecting legacy data with cleaner web interfaces.',
    bullets: [
      'Built a custom CRM to display and manage data from a legacy university system.',
      'Used Node.js, Express, Vue.js and PostgreSQL to improve access to structured data.',
      'Gained practical experience in business application design, database integration and full-stack delivery.'
    ],
    tags: ['Node.js', 'Express', 'Vue', 'PostgreSQL', 'Legacy modernization']
  }
]

export const projectCases: ProjectCase[] = [
  {
    name: 'La Pequeña Isla',
    type: 'E-commerce platform',
    timeline: '2026',
    headline: 'Bilingual commerce platform for a Cuban MIPYME',
    summary:
      'A Spanish/English e-commerce build with multi-currency pricing, fulfillment options, PayPal/Zelle payments and a complete admin layer.',
    role: 'Full-stack architecture, frontend, backend, database, deployment and performance documentation.',
    stack: ['Vue 3', 'TypeScript', 'Vite', 'Pinia', 'Tailwind CSS', 'Laravel 12', 'PostgreSQL', 'Docker'],
    highlights: [
      'Separated SPA and API architecture with Sanctum token authentication.',
      'Multi-currency display in USD, EUR and BRL with USD settlement logic.',
      'Docker Compose production plan with Nginx, PHP-FPM, PostgreSQL and SSL.',
      'Performance plan covering Lighthouse, bundle budgets, database indexes and load testing.'
    ],
    outcome:
      'Shows that I can take a real business from catalog requirements to checkout, admin operations and deployable infrastructure.',
    accent: 'sun'
  },
  {
    name: 'NEXORA',
    type: 'Financial support platform',
    timeline: '2026',
    headline: 'Community platform with Pix flows, reputation and admin control',
    summary:
      'A platform where users request or provide financial support, submit Pix proof, earn XP and move through a reputation system.',
    role: 'Backend/API design, React web app structure, Android flow support, PostgreSQL model and deployment documentation.',
    stack: ['Laravel', 'React 18', 'TypeScript', 'Vite', 'Kotlin', 'PostgreSQL', 'JWT', 'Vercel'],
    highlights: [
      'User registration, email verification, approval, support requests and proof validation.',
      'XP, levels, invite code and administrative fee logic documented for operation.',
      'Admin dashboard concepts for users, requests, contributions and audit logs.',
      'Production checklist for environment variables, Pix key safety, tests and post-deploy verification.'
    ],
    outcome:
      'Demonstrates domain modeling, security thinking and end-to-end product flows across web, API and mobile.',
    accent: 'coral'
  },
  {
    name: 'NerdyBiz + Secure Biz',
    type: 'CRM and operations build',
    timeline: '2024 - 2026',
    headline: 'Unified Zoho One and Monday.com operating layer',
    summary:
      'A multi-tool business system connecting CRM, invoicing, projects, support, campaigns, boards, automations and reporting.',
    role: 'Primary developer for CRM configuration, workflow logic, board architecture, integration mapping and go-live documentation.',
    stack: ['Zoho CRM', 'Zoho Books', 'Zoho Flow', 'Monday.com', 'Slack', 'JustCall', 'Calendly', 'Zapier'],
    highlights: [
      'CRM source-of-truth model with lead, deal, client, service and support visibility.',
      'Automations for handoffs between sales, fulfillment, invoicing, support and reporting.',
      'Monday.com boards for operations, daily overview, service revenue and delivery tracking.',
      'Security, exception handling, dashboards and definition-of-done thinking.'
    ],
    outcome:
      'Shows business-process judgment: I can make tools behave like one operational system instead of disconnected apps.',
    accent: 'aqua'
  },
  {
    name: 'CENDAAI Registry System',
    type: 'Academic engineering thesis',
    timeline: '2025',
    headline: 'Public registry management system for copyright processes',
    summary:
      'A web application proposal and implementation plan to modernize public registry workflows for Cuba copyright services.',
    role: 'Requirements engineering, architecture, Laravel/Vue implementation, relational model, testing plan and documentation.',
    image: '/frank-gattorno-thesis.webp',
    imageAlt: 'Frank Gattorno presenting the CENDAAI thesis system',
    stack: ['Laravel', 'Vue.js', 'PostgreSQL', 'Scrum', 'MVC', 'QA planning'],
    highlights: [
      'Online registration and citizen file concepts for reducing physical paperwork.',
      'Search, control, notification and documentation-error reduction goals.',
      'Architecture, relational database, component, deployment and testing diagrams.',
      'Graduation project for Computer Engineering at Universidad Central "Marta Abreu" de Las Villas.'
    ],
    outcome:
      'Shows the academic side of my engineering: requirements, process analysis, architecture and validation, not only code.',
    accent: 'green'
  }
]

export const publicLabs: ProjectCase[] = [
  {
    name: 'Los Pérez',
    type: 'Public SPA',
    timeline: '2025',
    headline: 'Responsive business site for a local service brand',
    summary:
      'A live public single-page site with service information, contact paths and mobile-friendly structure.',
    role: 'Frontend build and deployment.',
    stack: ['Vue.js', 'Bootstrap', 'JavaScript', 'Netlify'],
    highlights: ['Responsive layout', 'Public deployment', 'Business copy', 'Contact flow'],
    outcome: 'A practical small-business delivery with a live URL.',
    accent: 'aqua',
    links: [
      {
        label: 'Live site',
        href: 'https://poncheralosperez.netlify.app/',
        external: true
      },
      {
        label: 'Repository',
        href: 'https://github.com/ElToty14ProMax/poncheralosperez',
        external: true,
        kind: 'quiet'
      }
    ]
  },
  {
    name: 'The Weather App',
    type: 'Public utility',
    timeline: '2025',
    headline: 'Weather lookup app with a clean API-driven UI',
    summary:
      'A small utility app for city search, weather conditions and forecast-style information.',
    role: 'Frontend build, API consumption and deployment.',
    stack: ['Vue.js', 'Pinia', 'Bootstrap', 'OpenWeatherMap API'],
    highlights: ['API integration', 'State management', 'Responsive UI', 'Netlify deployment'],
    outcome: 'An early public project that shows API consumption and user-facing polish.',
    accent: 'sun',
    links: [
      {
        label: 'Live site',
        href: 'https://theweatherbyfrankgattorno.netlify.app/',
        external: true
      },
      {
        label: 'Repository',
        href: 'https://github.com/ElToty14ProMax/theWeather',
        external: true,
        kind: 'quiet'
      }
    ]
  }
]

export const education: EducationItem[] = [
  {
    title: "Bachelor's in Computer Engineering",
    institution: 'Universidad Central "Marta Abreu" de Las Villas',
    period: '2022 - 2025',
    detail: 'Graduated with a thesis focused on a Laravel, Vue and PostgreSQL public registry management system.'
  },
  {
    title: 'English Language Certification',
    institution: 'Language Center, UCLV',
    period: '2025',
    detail: 'B1 level certification.'
  }
]

export const techClouds = [
  {
    label: 'Frontend',
    items: ['Vue 3', 'React 18', 'TypeScript', 'Vite', 'Pinia', 'Tailwind CSS', 'Responsive UI']
  },
  {
    label: 'Backend',
    items: ['Laravel', 'PHP 8.2+', 'Node.js', 'Express', 'FastAPI', 'REST APIs', 'Auth']
  },
  {
    label: 'Data',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Indexes', 'Migrations', 'Reports']
  },
  {
    label: 'Automation',
    items: ['Zoho One', 'Monday.com', 'Zapier', 'Make', 'n8n', 'Workato', 'Webhooks']
  },
  {
    label: 'Delivery',
    items: ['Docker', 'Nginx', 'Linux', 'GitHub Actions', 'Vercel', 'Netlify', 'Lighthouse']
  }
]
