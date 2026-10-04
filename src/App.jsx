import './App.css'

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">
          <span className="logo-symbol">♫</span>
          <div>
            <h1>Abhinandana</h1>
            <span>Music Academy</span>
          </div>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#teachers">Teachers</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">TRADITION • MUSIC • LEARNING</p>

            <h2>
              Discover the Joy
              <br />
              <span>of Music</span>
            </h2>

            <p className="hero-text">
              Learn music with passion, discipline and tradition at
              Abhinandana Music Academy.
            </p>

            <div className="hero-buttons">
              <a href="#courses" className="button primary">
                Explore Courses
              </a>

              <a href="#contact" className="button secondary">
                Contact Us
              </a>
            </div>
          </div>

          <div className="hero-decoration">
            <div className="music-note">♫</div>
            <div className="music-note small">♪</div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-heading">
            <p>ABOUT THE ACADEMY</p>
            <h2>Where Music Becomes a Journey</h2>
          </div>

          <div className="about-content">
            <div>
              <p>
                Abhinandana Music Academy is dedicated to nurturing musical
                talent in children, adults and beginners.
              </p>

              <p>
                We provide both online and offline music classes with a focus
                on learning, practice and appreciation of music.
              </p>
            </div>

            <div className="experience-card">
              <strong>25+</strong>
              <span>Years of Teaching Experience</span>
            </div>
          </div>
        </section>

        <section id="courses" className="section courses">
          <div className="section-heading">
            <p>OUR COURSES</p>
            <h2>Learn Your Instrument</h2>
          </div>

          <div className="course-grid">
            <div className="course-card">
              <span>🎤</span>
              <h3>Vocal</h3>
              <p>Build your voice and develop musical confidence.</p>
            </div>

            <div className="course-card">
              <span>🎹</span>
              <h3>Keyboard</h3>
              <p>Learn keyboard from fundamentals to advanced skills.</p>
            </div>

            <div className="course-card">
              <span>🎸</span>
              <h3>Guitar</h3>
              <p>Develop rhythm, chords and performance skills.</p>
            </div>

            <div className="course-card">
              <span>🎶</span>
              <h3>Classical Music</h3>
              <p>Explore the depth and beauty of traditional music.</p>
            </div>

            <div className="course-card">
              <span>🎼</span>
              <h3>Western Music</h3>
              <p>Learn modern musical concepts and techniques.</p>
            </div>

            <div className="course-card">
              <span>🪈</span>
              <h3>Flute</h3>
              <p>Discover melody, breath control and expression.</p>
            </div>

            <div className="course-card">
              <span>🥁</span>
              <h3>Rhythm Pad</h3>
              <p>Develop rhythm and accompaniment skills.</p>
            </div>

            <div className="course-card">
              <span>♪</span>
              <h3>More Training</h3>
              <p>Other music-related training is also available.</p>
            </div>
          </div>
        </section>

        <section id="teachers" className="section teachers">
          <div className="section-heading">
            <p>OUR TEACHERS</p>
            <h2>Learn From Experience</h2>
          </div>

          <div className="teacher-grid">
            <article className="teacher-card featured">
              <div className="teacher-icon">♪</div>
              <p className="teacher-role">FOUNDER & MAIN TEACHER</p>
              <h3>G. Udaya Bhasker Reddy</h3>
              <p>
                With 25 years of musical teaching experience and recognition
                through numerous awards, he leads the academy with dedication
                and passion.
              </p>
            </article>

            <article className="teacher-card">
              <div className="teacher-icon">♫</div>
              <p className="teacher-role">MUSIC TEACHER</p>
              <h3>Rajababu</h3>
              <p>
                Supporting students in their musical learning and development.
              </p>

              <a href="tel:9360346425" className="teacher-phone">
                9360346425
              </a>
            </article>
          </div>
        </section>

        <section className="section learning">
          <div className="learning-box">
            <p className="eyebrow">FLEXIBLE LEARNING</p>
            <h2>Online & Offline Classes</h2>
            <p>
              Whether you prefer learning from home or attending classes in
              person, we offer flexible options for children, adults and
              beginners.
            </p>
          </div>
        </section>

        <section className="section achievements">
          <div className="section-heading">
            <p>EXPERIENCE & ACHIEVEMENTS</p>
            <h2>A Tradition of Musical Learning</h2>
          </div>

          <div className="achievement-grid">
            <div>
              <strong>25+</strong>
              <span>Years of Experience</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>Passion for Music</span>
            </div>

            <div>
              <strong>2</strong>
              <span>Learning Modes</span>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-heading">
            <p>GET IN TOUCH</p>
            <h2>Start Your Musical Journey</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <h3>Abhinandana Music Academy</h3>

              <p>
                📍 Bazzar Street, Near Muthoot Finance,
                <br />
                Palamaner – 517408
              </p>

              <p>
                📞{' '}
                <a href="tel:9849660992">
                  9849660992
                </a>
              </p>

              <p>
                📞{' '}
                <a href="tel:9360346425">
                  9360346425
                </a>
              </p>

              <p>
                ✉️{' '}
                <a href="mailto:abhinanadanamusicacademy@gmail.com">
                  abhinanadanamusicacademy@gmail.com
                </a>
              </p>
            </div>

            <div className="contact-card">
              <h3>Interested in joining?</h3>
              <p>
                Contact us to learn about available courses, timings and
                admission details.
              </p>

              <a href="tel:9849660992" className="button primary">
                Call the Academy
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-logo">♫ Abhinandana Music Academy</div>
        <p>Music • Tradition • Learning</p>
        <small>© 2026 Abhinandana Music Academy. All rights reserved.</small>
      </footer>
    </div>
  )
}

export default App
