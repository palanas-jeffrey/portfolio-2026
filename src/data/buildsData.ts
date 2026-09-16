export type Build = {
  name: string
  description: string
  stack: string[]
  github: string | null
  demo: string | null
  screenshot: string[]
  frontend?: string
  backend?: string
}

export const cloudflare = "https://images-portfolio.evenlabs.dev/";

export const builds: Build[] = [
  {
    name: 'Hotel Booking App',
    description: 'A hybrid-stack CRUD exercise: Laravel (Blade) for the frontend, with a separate Node.js/Express API handling backend logic, authorization, and MongoDB — built to practice Node.js and multi-stack integration.',
    stack: ['Express.js', 'Node.js', 'MongoDB', 'Laravel', 'PHP', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: null,
    demo: null,
    screenshot: [cloudflare  + 'hotel.png'],
    frontend: "https://github.com/palanas-jeffrey/capstone-hotel-frontend",
    backend: "https://github.com/palanas-jeffrey/capstone-hotel-backend",
  },
  {
    name: 'Restaurant App',
    description: 'A vanilla PHP practice project exploring a restaurant ordering flow, with full CRUD and MySQL.',
    stack: ['PHP', 'MySQL', 'Bootstrap'],
    github: "https://github.com/palanas-jeffrey/7mealrestaurant",
    demo: null,
    screenshot: [cloudflare + 'restaurant-app.png'],
  },
  { 
    name: 'Marine Engineering',
    description: 'A bootcamp practice site presenting marine engineering content, focused on applying HTML, CSS, and Bootstrap fundamentals with responsive layout.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: "https://github.com/palanas-jeffrey/marineenjneering77",
    demo: "https://palanas-jeffrey.github.io/marineenjneering77/",
    screenshot: [cloudflare + 'ss_home_marine_enjneering.png'],
  },
  {
    name: 'Pisonaire',
    description: 'A JavaScript quiz exercise with interactive questions and earnings tracking.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    github: "https://github.com/palanas-jeffrey/pisonaire",
    demo: "https://palanas-jeffrey.github.io/pisonaire/",
    screenshot: [cloudflare + 'ss_pisonaire.png'],
  }
]

export const buildPageContent = {
  title: 'Small projects, practical experiments.',
  description: 'A collection of practice projects and smaller builds that helped me sharpen my craft.',
  backLink: {
    text: '← Back to portfolio',
  },
  headSpan: 'Builds',
}
