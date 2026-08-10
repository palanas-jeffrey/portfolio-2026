import { footer} from '../data/portfolioData';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>{footer.copyright}</p>

        <div className="footer-links">
          {footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
