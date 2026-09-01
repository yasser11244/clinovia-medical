import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <span className="logo-icon">✚</span>
          <span>CLINOVIA</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="header-button">Get in Touch</button>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-content">
            <span className="tag">CLINOVIA MEDICAL SERVICES</span>

            <h1>
              Better Healthcare.
              <br />
              <span>Better Tomorrow.</span>
            </h1>

            <p>
              Delivering trusted, professional and innovative medical services
              with a commitment to quality and patient care.
            </p>

            <div className="hero-buttons">
              <button className="primary-button">Our Services</button>
              <button className="secondary-button">Contact Us</button>
            </div>
          </div>

          <div className="hero-card">
            <div className="cross">✚</div>
            <h2>Your Health<br />Our Priority</h2>
            <p>Professional medical services you can trust.</p>
          </div>
        </section>

        <section className="stats">
          <div>
            <strong>Professional</strong>
            <span>Medical Services</span>
          </div>

          <div>
            <strong>Quality</strong>
            <span>Healthcare Standards</span>
          </div>

          <div>
            <strong>Trusted</strong>
            <span>Professional Team</span>
          </div>
        </section>

        <section className="about" id="about">
          <span className="tag">ABOUT CLINOVIA</span>
          <h2>Healthcare Built Around People.</h2>
          <p>
            Clinovia Medical Services is committed to providing reliable,
            professional and high-quality healthcare solutions.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
