import { useEffect, useState, type FormEvent } from 'react'

import './styles/base.css'
import './styles/portfolio.css'
import { About } from './components/About'
import { BuildsPage } from './components/BuildsPage'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { projects, timeline, navItems } from './data/portfolioData'
import { isBuildsRoute } from './routes'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [routeHash, setRouteHash] = useState(window.location.hash)
  const isBuildsPage = isBuildsRoute(window.location.pathname, routeHash)

  useEffect(() => {
    const handleHashChange = () => setRouteHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className={`app-shell ${darkMode ? 'theme-dark' : 'theme-light'}`}>
      <Header
        darkMode={darkMode}
        navItems={navItems}
        onToggle={() => setDarkMode((current) => !current)}
      />

      <main className="page-shell">
        {isBuildsPage ? (
          <BuildsPage />
        ) : (
          <>
            <Hero />
            <Projects projects={projects} />
            <Skills />
            <About timeline={timeline} />
            <Contact submitted={submitted} onSubmit={handleSubmit} />
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App
