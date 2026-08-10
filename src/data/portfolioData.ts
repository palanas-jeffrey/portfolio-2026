export type Project = {
  title: string
  category: string
  summary: string
  challenge: string
  solution: string
  result: string
  stack: string[]
  demo: string
  github: string
}

export type Skill = {
  name: string
  level: number
}

export type TimelineItem = {
  year: string
  title: string
  description: string
}

export const navItems = ['About', 'Projects', 'Skills', 'Contact']

export const projects: Project[] = [
  {
    title: 'Alumni Connect',
    category: 'Community platform',
    summary:
      'A social and networking platform designed to connect graduates, mentors, and career partners across alumni groups.',
    challenge:
      'The platform needed to support dynamic community updates while keeping content discoverable and easy to navigate across devices.',
    solution:
      'I designed the user experience around clear content flows, responsive layouts, and intake workflows for posts, events, and volunteer opportunities.',
    result: 'Improved engagement by unifying the alumni experience into a single digital hub.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Coastal Commerce',
    category: 'E-commerce rebuild',
    summary:
      'An e-commerce platform for a product-led brand focused on conversion, trust, and streamlined customer journeys.',
    challenge:
      'The store had fragmented product information and a weak checkout flow, which lowered customer confidence and purchase completion.',
    solution:
      'I rebuilt the browsing experience, simplified navigation, and created a clearer path from product discovery to checkout.',
    result: 'Reduced friction across the buying journey and improved conversion quality across key pages.',
    stack: ['React', 'PHP', 'MySQL', 'Git'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Portfolio Platform',
    category: 'Personal branding',
    summary:
      'A developer portfolio experience designed to tell a story, present projects with clarity, and give recruiters a strong first impression.',
    challenge:
      'The goal was to move beyond a static résumé and create a polished online presence that reflects technical depth and decision-making.',
    solution:
      'I built a responsive portfolio with motion-rich storytelling, structured case studies, and quick access to project and contact information.',
    result: 'Created a stronger digital-first introduction that communicates both technical capability and product thinking.',
    stack: ['React', 'TypeScript', 'Vite', 'Framer Motion'],
    demo: '#',
    github: '#',
  },
]

export const skills: Skill[] = [
  { name: 'React', level: 92 },
  { name: 'Node.js', level: 86 },
  { name: 'Express.js', level: 82 },
  { name: 'MongoDB', level: 78 },
  { name: 'PHP', level: 74 },
  { name: 'MySQL', level: 80 },
  { name: 'Git', level: 90 },
]

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
      'Gained professional experience developing full‑stack applications. Worked on Node.js backends and Angular/React frontends, optimizing queries, building dynamic UI components, and integrating APIs and AI agents. Tech Stack: React, Angular, Node.js, MongoDB, Git.',
  },
  {
    year: '2021',
    title: 'Fullstack Web Developer',
    description:
      'Delivered clean, reliable user experiences with strong UX focus and performance awareness. Worked on responsive UI updates, accessibility features, and dynamic components using React, Angular, and ASP.NET. Collaborated with designers via Figma/InVision, optimized queries, integrated APIs and chatbots. Tech Stack: React, Angular, Node.js, ASP.NET, MongoDB, HTML, CSS, JavaScript, Bootstrap, jQuery, Tailwind, Git.',
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
  title: 'From engines to code — building systems that run flawlessly.',
  description:
    'I’m a developer who thrives on turning complex systems into intuitive, dependable digital experiences. My background in marine engineering taught me how to solve problems under pressure, and that mindset now shapes the way I build software.',
  actions: {
    primary: 'Explore projects',
    secondary: 'Download resume',
  },
  stats: [
    { value: '7+', label: 'years of technical experience' },
    { value: '10+', label: 'products and learning builds' },
  ],
  panel: {
    badge: 'Available for work',
    focus: 'Full-stack product builds',
    stack: ['React', 'Node', 'MongoDB'],
    code: `const profile = {
      mindset: 'build reliable systems',
      craft: ['UX', 'API', 'Performance'],
      goal: 'turn complex problems into clear experiences'
    }`,
  },
};
