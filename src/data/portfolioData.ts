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

export const timeline: TimelineItem[] = [
  {
    year: '2014',
    title: 'Marine Engineering Cadet',
    description:
      'Worked on high-stakes engineering systems where reliability, troubleshooting, and operational continuity were mission critical.',
  },
  {
    year: '2018',
    title: 'Transition into Software Development',
    description:
      'Shifted from marine engineering maintenance into application and web development. Completed a coding boot camp and built projects that merge structured problem‑solving with modern digital solutions.',
  },
  {
    year: '2019',
    title: 'Associate Software Engineer',
    description:
      'Gained professional experience developing full‑stack applications. Worked on Node.js backends and Angular/React frontends, optimizing queries, building dynamic UI components, and integrating APIs and AI agents. Tech Stack: React, Angular, Node.js, MongoDB, Git, Jest.',
  },
  {
    year: '2021',
    title: 'Fullstack Web Developer',
    description:
      'Delivered clean, reliable user experiences with strong UX focus and performance awareness. Worked on responsive UI updates, accessibility features, and dynamic components using React, Angular, and ASP.NET. Collaborated with designers via Figma/InVision, optimized queries, integrated APIs and chatbots. Tech Stack: React, Angular, Node.js, ASP.NET, MongoDB, HTML, CSS, JavaScript, Bootstrap, jQuery, Tailwind, Jest, Git.',
  },
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
    success: 'Thanks! Your message is ready to send.',
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
