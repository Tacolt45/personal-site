import './App.css'

const projects = [
  {
    number: '01',
    title: 'Project title',
    category: 'Technology · Art',
    description:
      'Add a short introduction to a project, what you made, and why it matters.',
    tags: ['React', 'Your tools'],
  },
  {
    number: '02',
    title: 'Another project',
    category: 'Creative work',
    description:
      'Use this space to highlight another piece of work or a personal experiment.',
    tags: ['Design', 'Your tools'],
  },
]

const experience = [
  {
    dates: '20XX — Present',
    role: 'Role or milestone',
    place: 'Company, client, or personal practice',
    detail: 'Add a sentence about what you worked on and what you learned.',
  },
  {
    dates: '20XX — 20XX',
    role: 'Another role or milestone',
    place: 'Company, school, or community',
    detail: 'Describe a meaningful contribution, project, or area of growth.',
  },
]

const skills = ['Add a technical skill', 'Add an artistic skill', 'Add a tool you use']

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Your Name, home">
          YN<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="availability" href="#contact">
          <span aria-hidden="true" />
          Say hello
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <p className="eyebrow">PERSONAL PORTFOLIO</p>
          <h1>
            Hello, I’m <span>Your Name.</span>
            <br />
            I make things for the web
            <br />
            <span className="serif-accent">and beyond.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              A place to share your work across technology, art, and everything
              in between.
            </p>
            <a className="text-link" href="#work">
              Explore my work <span aria-hidden="true">↘</span>
            </a>
          </div>
          <div className="hero-mark" aria-hidden="true">
            ✳
          </div>
        </section>

        <section className="work section-wrap" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A FEW THINGS I’VE MADE</p>
              <h2>Selected work</h2>
            </div>
            <span className="section-index">01 / 03</span>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-art project-art-${project.number}`}>
                  <span className="project-number">{project.number}</span>
                  <span className="project-art-shape" aria-hidden="true">
                    ✳
                  </span>
                  <span className="project-art-label">YOUR WORK HERE</span>
                </div>
                <div className="project-info">
                  <div>
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="project-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <p className="project-description">{project.description}</p>
                <ul className="tag-list" aria-label="Project tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A LITTLE ABOUT ME</p>
              <h2>Curious by nature.</h2>
            </div>
            <span className="section-index">02 / 03</span>
          </div>
          <div className="about-content">
            <p className="about-intro">
              I’m a <span>maker and problem-solver</span> interested in the
              meeting point between thoughtful technology and creative
              expression.
            </p>
            <div className="about-details">
              <p>
                This is your space to say what you care about, how you approach
                your work, and what you’re currently exploring. Keep it personal
                and make it yours.
              </p>
              <div className="skills">
                <h3>Things I work with</h3>
                <ul className="tag-list">
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="experience section-wrap" id="experience">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE PATH SO FAR</p>
              <h2>Experience</h2>
            </div>
            <span className="section-index">03 / 03</span>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={item.role}>
                <p className="experience-dates">{item.dates}</p>
                <div>
                  <h3>{item.role}</h3>
                  <p className="experience-place">{item.place}</p>
                  <p className="experience-detail">{item.detail}</p>
                </div>
                <span className="experience-mark" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
          <h2>
            Let’s make
            <br />
            <span className="serif-accent">something good.</span>
          </h2>
          <p className="contact-copy">
            Interested in working together or just want to say hi? Add your
            preferred contact details here.
          </p>
          <a className="contact-link" href="mailto:hello@example.com">
            hello@example.com <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home">
          YN<span>.</span>
        </a>
        <p>Made with care, wherever you are.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
