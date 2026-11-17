export default function Header({ resume }) {
  const { name, title, summary, contact } = resume;
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <span className="brand">{initials}</span>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#certifications">Certifications</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <div className="container hero-inner">
          <div className="avatar" aria-hidden="true">{initials}</div>
          <p className="eyebrow">Hello, I'm</p>
          <h1>{name}</h1>
          <p className="title">{title}</p>
          <p className="summary">{summary}</p>
          <div className="cta">
            <a
              className="btn btn-primary"
              href={contact.email ? `mailto:${contact.email}` : contact.linkedin}
              target={contact.email ? undefined : '_blank'}
              rel="noopener noreferrer"
            >
              Contact me
            </a>
            {contact.github && (
              <a className="btn btn-ghost" href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            )}
            <a className="btn btn-ghost" href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <ul className="contact">
            {contact.email && <li>✉ {contact.email}</li>}
            {contact.phone && <li>☎ {contact.phone}</li>}
            <li>⌖ {contact.location}</li>
          </ul>
        </div>
      </header>
    </>
  );
}
