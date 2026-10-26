import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { about, artworks, experience, profile } from './content'
import './App.css'

const YEAR = new Date().getFullYear()

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}

function ModeText({ text, className }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.p
        key={text}
        className={className}
        initial={{ opacity: 0, filter: 'blur(6px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, filter: 'blur(6px)' }}
        transition={{ duration: 0.25 }}
      >
        {text}
      </motion.p>
    </AnimatePresence>
  )
}

function Toggle({ mode, setMode }) {
  return (
    <button
      className="toggle"
      onClick={() => setMode(mode === 'tech' ? 'art' : 'tech')}
      aria-label={`Switch to ${mode === 'tech' ? 'art' : 'tech'} mode`}
    >
      <motion.div layout className={`pill ${mode}`} transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
      <span className={mode === 'tech' ? 'on' : ''}>Tech</span>
      <span className={mode === 'art' ? 'on' : ''}>Art</span>
    </button>
  )
}

export default function App() {
  const [mode, setMode] = useState('tech')

  useEffect(() => {
    document.documentElement.dataset.mode = mode
  }, [mode])

  return (
    <>
      <div className="backdrop" />
      <header className="nav">
        <div className="wrap">
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#artwork">Artwork</a>
            <a href="#contact">Contact</a>
          </nav>
          <Toggle mode={mode} setMode={setMode} />
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap">
            <motion.p className="eyebrow" {...reveal}>
              {mode === 'tech' ? '// engineer' : 'artist —'}
            </motion.p>
            <motion.h1 {...reveal}>{profile.name}</motion.h1>
            <ModeText className="statement" text={profile.statement[mode]} />
          </div>
        </section>

        <section id="about" className="about">
          <div className="wrap">
            <p className="eyebrow">01 / About</p>
            <motion.h2 {...reveal}>Curious by default.</motion.h2>
            <ModeText className="body" text={about[mode]} />
          </div>
        </section>

        <section id="experience">
          <div className="wrap">
            <p className="eyebrow">02 / Experience</p>
            <motion.h2 {...reveal}>Work history</motion.h2>
            <ul className="timeline">
              {experience.map((job, i) => (
                <motion.li key={i} {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }}>
                  <span className="years">{job.years}</span>
                  <div>
                    <h3>{job.role} · {job.org}</h3>
                    <p>{job.note}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
            <a className="resume-link" href={profile.resume} target="_blank" rel="noreferrer">
              Download résumé (PDF) ↗
            </a>
          </div>
        </section>

        <section id="artwork">
          <div className="wrap">
            <p className="eyebrow">03 / Artwork</p>
            <motion.h2 {...reveal}>Selected work</motion.h2>
            <div className="gallery">
              {artworks.map((art, i) => (
                <motion.figure
                  key={art.title}
                  className="piece"
                  {...reveal}
                  transition={{ ...reveal.transition, delay: (i % 3) * 0.08 }}
                  whileHover="hover"
                >
                  <div className="frame">
                    <span>image placeholder</span>
                    <motion.div
                      className="meta"
                      variants={{ hover: { y: 0 } }}
                      initial={{ y: '100%' }}
                      transition={{ duration: 0.25 }}
                    >
                      <span>{art.medium}</span>
                      <span>{art.size}</span>
                      <span>{art.year}</span>
                    </motion.div>
                  </div>
                  <h3>{art.title}</h3>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap">
            <p className="eyebrow">04 / Contact</p>
            <motion.h2 {...reveal}>Let’s make something.</motion.h2>
            <a className="email" href={`mailto:${profile.email}`}>{profile.email}</a>
            <ul>
              {profile.links.map((l) => (
                <li key={l.label}><a href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a></li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">© {YEAR} {profile.name}</div>
      </footer>
    </>
  )
}
