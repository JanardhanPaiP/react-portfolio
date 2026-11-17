import { useEffect, useState } from 'react';
import { getResume } from './services/resumeService.js';
import Header from './components/Header.jsx';
import Section from './components/Section.jsx';

export default function App() {
  const [resume, setResume] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getResume().then(setResume).catch(setError);
  }, []);

  if (error) return <p className="status">Failed to load resume.</p>;
  if (!resume) return <p className="status">Loading...</p>;

  return (
    <>
      <Header resume={resume} />
      <main className="container">
        <Section id="about" title="About Me">
          <div className="about">
            <div className="about-text">
              {resume.about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <div className="tags">
                {resume.about.interests.map((i) => (
                  <span className="tag" key={i}>{i}</span>
                ))}
              </div>
            </div>
            <dl className="facts">
              {resume.about.facts.map((f) => (
                <div className="fact" key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="stats">
            {resume.about.stats.map((s) => (
              <div className="stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="timeline">
            {resume.experience.map((job) => (
              <article className="timeline-item" key={`${job.company}-${job.period}`}>
                <span className="period">{job.period}</span>
                <h3>{job.role}</h3>
                <p className="company">{job.company}</p>
                <ul>
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="skills-grid">
            {resume.skills.map((group) => (
              <div className="card" key={group.category}>
                <h3>{group.category}</h3>
                <div className="tags">
                  {group.items.map((s) => (
                    <span className="tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="projects-grid">
            {resume.projects.map((p) =>
              p.link ? (
                <a className="card project" key={p.name} href={p.link} target="_blank" rel="noopener noreferrer">
                  <h3>{p.name} <span aria-hidden="true">↗</span></h3>
                  <p>{p.description}</p>
                </a>
              ) : (
                <div className="card project" key={p.name}>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                </div>
              )
            )}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="timeline">
            {resume.education.map((e) => (
              <article className="timeline-item" key={e.degree}>
                <span className="period">{e.period}</span>
                <h3>{e.degree}</h3>
                <p className="company">{e.school}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications">
          <div className="timeline">
            {resume.certifications.map((c) => (
              <article className="timeline-item" key={c.name}>
                <span className="period">{c.period}</span>
                <h3>{c.name}</h3>
                <p className="company">{c.issuer}</p>
              </article>
            ))}
          </div>
        </Section>
      </main>
      <footer className="footer">© {new Date().getFullYear()} {resume.name}</footer>
    </>
  );
}
