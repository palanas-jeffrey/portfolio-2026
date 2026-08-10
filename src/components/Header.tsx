import { header } from '../data/portfolioData';

type HeaderProps = {
  darkMode: boolean
  onToggle: () => void
  navItems: string[]
}

export function Header({ darkMode, onToggle, navItems }: HeaderProps) {
  return (
    <header className="topbar">
      <div className="brand-wrap">
        <div className="brand-mark">JP</div>
        <span>{header.brand}</span>
      </div>

      <nav className="main-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="theme-toggle"
        aria-label="Toggle color mode"
        onClick={onToggle}
      >
        {darkMode ? header.toggle.dark : header.toggle.light}
      </button>
    </header>
  )
}
