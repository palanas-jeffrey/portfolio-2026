import { Skill } from '../components/Skills';
import { cloudflare } from './buildsData'

export type TimelineItem = {
  year: string
  title: string
  description: string
}

export const navItems = ['About', 'Projects', 'Skills', 'Contact']

export type Project = {
  title: string
  category: string
  summary: string
  challenge: string[]
  solution: string[]
  outcome: string[]
  stack: string[]
  demo?: string
  github?: string
  note?: string
  screenshots?: string[]
}

export const projects: Project[] = [
  {
    title: 'Per-Day Tool Rental Booking App',
    category: 'TOOL RENTAL BOOKING PLATFORM',
    summary:
      'A full-stack tool rental platform with role-based access for renters, front-desk staff, owners, and bookkeepers — built as a reusable template adaptable to different rental businesses.',
    challenge: [
      'Manual, paper-based booking and checkout slowed counter service',
      'Staff had no real-time visibility into tool inventory or rental history',
      'No structured way for owners or bookkeepers to track rental activity or performance over time'
    ],
    solution: [
      'Built a reusable full-stack, per-day tool rental booking platform over ~3 weeks',
      'Renters: kiosk booking (no login) or logged-in accounts with current and past booking history',
      'Front desk: view, approve, and confirm bookings and returns',
      'Owner dashboard: view rentals by day, week, or custom range; see most-rented tools',
      'Bookkeeper page: track rental records by day, month, year, or custom range; export reports',
      'Asset inventory: view item status (available, rented, in repair), mark for maintenance, retire, or add new items',
      'Self-managed VPS deployment with Docker and Nginx, using AI-assisted architecture planning and code generation with my own review and security hardening'
    ],
    outcome: [
      'Load-tested the deployment with k6 and resolved a scaling bottleneck by clustering the backend',
      'Reached stable performance at 1,000 concurrent read users and 30 concurrent write users',
      "Currently deployed and functional, with flexibility to adapt to a client's store scenario",
    ],
    stack: ['React', 'Next.js', 'NestJS', 'Prisma', 'GraphQL', 'PostgreSQL', 'Redis', 'Docker', 'Nginx', 'k6'],
    demo: 'https://tool-rental.evenlabs.dev',
    note:'Source kept private - happy to walk through the code and architecture in an interview',
    screenshots: [
      cloudflare + 'ss_tool-rental.png',
      cloudflare + 'ss_cart-tool-rental.png',
      cloudflare + 'ss_counter.png',
      cloudflare + 'ss_tool-rental-analytics.png',
      cloudflare + 'ss_tool-rental-inventory.png',
      cloudflare + 'ss_tool-rental-ledger.png',
    ]
  },
  {
    title: 'Alumni Connect',
    category: 'Community platform',
    summary:
      'A full-stack platform built as a thesis project for a client student — connecting alumni, managing events, enabling donations, and running tracer studies.',
    challenge: [
      'Needed secure authentication with password recovery',
      'Needed distinct admin and alumni interfaces with role-based permissions',
      'Needed a dynamic tracer study module with customizable target-year respondents and reporting',
      'Needed a donation channel with admin-side tracking'
    ],
    solution: [
      'Built core features: alumni directory, event management with email notifications, secure authentication, profile updates, and dynamic tracer study forms with reporting',
      'Designed the database schema with full CRUD for alumni records, events, and tracer forms',
      "Integrated PayMongo for donations, built and tested per PayMongo's documentation (sandbox/test environment — production access requires business permits I don't currently hold)",
      "Built reporting tools including PDF conversion for tracer studies, donation summaries",
      "Handled deployment via GitHub-connected Hostinger hosting — pulling code, running builds, and linking storage for assets",
      "Used Git version control with manual review before merging to main"
    ],
    outcome: [
      'Solo-built end-to-end, with requirement input from my thesis adviser and a peer acting as tester',
      'Deployed for about a year to support development, testing, and the thesis defense',
      "Passed thesis defense; the project was built from the start to be adopted by the school, and is in the process of being handed over to the school's IT department with full documentation"
    ],
    stack: ['Laravel', 'Livewire', 'MariaDB', 'JavaScript', 'CSS'],
    github: 'https://github.com/palanas-jeffrey/alumni-app',
    screenshots: [
      cloudflare + 'ss_alumni_login.png',
      cloudflare + 'ss_alumni_user_dashboard.png',
      cloudflare + 'ss_alumni_user_donation.png',
      cloudflare + 'ss_alumni_user_profile.png',
      cloudflare + 'ss_alumni_user_questionaire.png',
      cloudflare + 'ss_admin_dashboard.png',
      cloudflare + 'ss_alumni_admin_statistics.png',
      cloudflare + 'ss_alumni_admin_taget_audience.png',
      cloudflare + 'ss_alumni_form_builder.png',
    ]
  },
  {
    title: 'Alfa Laval Purifier — Asset Management App',
    category: 'ASSET MANAGEMENT & INVENTORY',
    summary:
      "A solo capstone project from my coding bootcamp: an asset management app for spare-parts requisitions, modeled on a real equipment manual's inventory.",
    challenge: [
      'Needed secure, role-based access for admins vs. regular users',
      'Required an approval workflow routing spare-part requests to a Chief Engineer role',
      'Needed reliable tracking of real spare-parts inventory data'
    ],
    solution: [
      'Built full CRUD for both user and admin accounts',
      'Designed a requisition workflow with approval routing',
      'Built a responsive UI with HTML, CSS, JavaScript, Bootstrap, and jQuery',
      'Backend logic in Laravel + PHP, with MySQL for relational data storage',
      'Populated with real spare-parts data based on an actual equipment manual, not placeholder data',
      'Deployed on Hostinger (shared hosting)'
    ],
    outcome: [
      'Completed a fully working requisition and approval system as a solo capstone project',
      'No longer deployed — was a bootcamp exercise, not adopted by a real company',
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery'],
    github: 'https://github.com/palanas-jeffrey/alfa_purifier_spare-management',
    screenshots: [
      cloudflare + 'alfalaval.png',
    ]
  },
];

export const projectHeading = {
  eyebrow: 'Selected work',
  title: 'Projects built to solve real problems.'
};

export const skills: Skill[] = [
  { name: 'TypeScript', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'PHP', category: 'Languages' },

  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Bootstrap', category: 'Frontend' },
  { name: 'jQuery', category: 'Frontend' }, 

  { name: 'Node.js', category: 'Backend' },
  { name: 'NestJS', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'Laravel', category: 'Backend' },
  { name: 'MariaDB', category: 'Backend' },
  { name: 'MongoDB', category: 'Backend' },
  { name: 'GraphQL', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Backend' },
  { name: 'Prisma', category: 'Backend' },
  { name: 'Redis', category: 'Backend' },

  { name: 'Jest', category: 'Testing' },
  { name: 'k6', category: 'Testing' },

  { name: 'Docker', category: 'Infra & tools' },
  { name: 'Nginx', category: 'Infra & tools' },
  { name: 'Git', category: 'Infra & tools' },
];

export const workedWith: Skill[] = [
  { name: 'C#', category: 'Languages' },

  { name: 'Angular', category: 'Frontend' },

  { name: 'ASP.net', category: 'Backend' },
  { name: 'Razor Pages', category: 'Backend' },

  { name: 'axe', category: 'Accessibility & QA tools' },
  { name: 'IBM Equal Access', category: 'Accessibility & QA tools' },
  { name: 'NVDA', category: 'Accessibility & QA tools' },
  { name: 'Litmus', category: 'Accessibility & QA tools' },

  { name: 'Figma', category: 'Design collaboration' },
  { name: 'InVision', category: 'Design collaboration' },
];

export const timeline: TimelineItem[] = [
  {
    year: '2014',
    title: 'Marine Engineering Cadet',
    description:
      'Worked on high-stakes engineering systems where reliability, troubleshooting, and operational continuity were mission critical.',
  },
  {
    year: '2018 (Nov) – 2019 (Mar)',
    title: 'Transition into Software Development',
    description:
      "Shifted from marine engineering into software development. Completed Zuitt's (then Tuitt) full-stack coding bootcamp, covering HTML, CSS, Bootstrap, JavaScript, jQuery, PHP, Laravel, MySQL, Node.js, Express, MongoDB, JWT authentication, and API testing with Postman — including deployment practice on Hostinger and Heroku. Built and deployed multiple practice projects and required capstones to complete the program.",
  },
  {
    year: '2019',
    title: 'Associate Software Engineer',
    description:
      "Joined an AI-focused engineering team, contributing to multiple internal platforms (details under NDA). On one project, translated a backend API server from Python to Node.js and migrated its database to MongoDB; contributed to a UI redesign, including a complex multi-level accordion component built to avoid duplicated logic and render performance issues, and a drag-and-drop feature — my first time working with React. Later studied Angular and worked on a separate project integrating multiple AI chat providers, where I diagnosed and fixed a slow backend by replacing nested loops with MongoDB's aggregation pipeline. Tech Stack: React, Angular, Node.js, MongoDB, Python, Git, Jest.",
  },
  {
    year: '2021',
    title: 'Web Developer',
    description:
      'Joined as a frontend-focused Web Developer, building and rebranding pages while embedding accessibility into every implementation — not as a separate task, but as a standard applied across all HTML/component work and existing-page fixes. Solved non-trivial compliance problems, including writing custom JavaScript to make components like carousels fully accessible. Ensured semantic structure, keyboard navigation, and modal focus trapping in line with WCAG/W3C standards — certified in accessibility (Deque), auditing with axe, IBM Equal Access, and NVDA. Also built and rigorously tested HTML email templates for consistent rendering across Outlook, Gmail, and other clients. Tech Stack: React, HTML, CSS, JavaScript, Bootstrap, jQuery, Tailwind, Figma/InVision.',
  },
  {
    year: '2024',
    title: 'Expanded into Fullstack Development',
    description: 
    "Took on fullstack responsibilities alongside continuing my existing frontend, accessibility, and email development work — expanding scope, not replacing it. The main new challenge was C# and Razor pages, since API development itself was already familiar from prior experience translating a Python backend to Node.js and building API servers during bootcamp. Rebuilt cookie management/consent flows, updated API routing to a new C# service, and learned to debug in Visual Studio. Fixed Razor pages and React-built widgets, and wrote unit tests. Tech Stack: C#, ASP.NET, Razor Pages, React, Jest, Git."
  }
];

export const contact = {
  eyebrow: 'Let’s build something reliable.',
  title: 'Open to product-focused, web development opportunities.',
  button: 'Connect by email',
  email: 'palanas.jeffrey@gmail.com',
  form: {
    name: 'Name',
    email: 'Email',
    message: 'Message',
    placeholders: {
      name: 'Your name',
      email: 'you@example.com',
      message: 'Tell me about your project or role.',
    },
    submit: 'Send message',
    success: 'Thanks! Your message is sent.',
  },
};

export const about = {
  eyebrow: 'About me',
  title: 'From marine systems to web products.',
  paragraphs: [
    'My journey into tech began with a mindset built around systems, reliability, and practical problem solving. In marine engineering, every decision had to account for safety, performance, and long-term stability. That same lens now shapes how I build digital products.',
    'I am drawn to thoughtful interfaces, maintainable architecture, and solving real user pain points with a balance of design and technical discipline. I enjoy working where structure meets creativity.',
  ],
};

export const footer = {
  copyright: '© 2026 Jeffrey Palanas',
  links: [
    { label: 'Back to top', href: '#top' },
    { label: 'GitHub', href: 'https://github.com/palanas-jeffrey' },
    { label: 'Email', href: 'mailto:palanas.jeffrey@gmail.com' },
  ],
  verse: 'Commit to the LORD whatever you do, and he will establish your plans. - Proverbs 16:3',
};

export const header = {
  brand: 'Jeffrey Palanas',
  toggle: {
    dark: 'Light mode',
    light: 'Dark mode',
  },
};

export const hero = {
  eyebrow: 'Marine engineering → software engineering',
  title: 'From engines to code — building systems that run reliably.',
  description:
    'I’m a developer who thrives on turning complex systems into intuitive, dependable digital experiences. My background in marine engineering taught me how to solve problems under pressure, and that mindset now shapes the way I build software.',
  actions: {
    primary: 'Explore projects',
  },
  stats: [
    { value: '7+', label: 'years of professional dev experience.' },
    { value: '8+', label: 'builds — from capstone projects to self-deployed platforms' },
  ],
  panel: {
    badge: 'Available for work',
    focus: 'Full-stack development',
    stack: ['React', 'Node', 'MongoDB', 'Laravel', 'JavaScript'],
    code: `const profile = {
      mindset: 'build reliable systems',
      craft: ['UX', 'API', 'Performance'],
      goal: 'turn complex problems into clear experiences'
    }`,
  },
};

export const skillsData = {
  eyebrow: 'Core stack',
  title: 'Tools I use to turn complexity into clarity.',
  workedWith: 'Also worked with (professional experience)',
}