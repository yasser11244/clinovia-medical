import "./App.css";

function App() {
  const phone = "01515994218";
  const whatsapp = "201515994218";

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <div className="logo-icon">✚</div>
          <div>
            <div className="logo-name">CLINOVIA</div>
            <div className="logo-sub">MEDICAL</div>
          </div>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Our Services</a>
          <a href="#why">Why Choose Us</a>
          <a href="#network">Global Network</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <a
          className="nav-button"
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noreferrer"
        >
          Get Assistance →
        </a>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="eyebrow">Healthcare Without Borders</p>

          <h1>
            Your Health,
            <br />
            Our Priority
          </h1>

          <p className="hero-text">
            Clinovia Medical provides comprehensive medical assistance and
            support wherever you are in the world.
          </p>

          <div className="hero-buttons">
            <a
              className="gold-button"
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              Get Medical Assistance →
            </a>

            <a className="outline-button" href="#about">
              Learn More ▷
            </a>
          </div>

          <div className="hero-features">
            <span>◉ 24/7 Support</span>
            <span>◎ Global Reach</span>
            <span>♢ Trusted Professionals</span>
            <span>◉ Fast & Reliable</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services section" id="services">
        <p className="section-label">WHAT WE DO</p>
        <h2>Comprehensive Medical Solutions</h2>

        <div className="section-line"></div>

        <div className="services-grid">
          <Service
            icon="▣"
            title="Medical Assistance"
            text="We coordinate and provide medical assistance tailored to your needs."
          />
          <Service
            icon="◎"
            title="Global Medical Support"
            text="Support and guidance anywhere in the world while you travel."
          />
          <Service
            icon="✚"
            title="Medical Insurance Support"
            text="Assistance with insurance coordination and coverage related services."
          />
          <Service
            icon="♙"
            title="Professional Medical Network"
            text="Access to a wide network of trusted healthcare providers and specialists."
          />
          <Service
            icon="✚"
            title="Emergency Coordination"
            text="24/7 emergency support and coordination for critical situations."
          />
          <Service
            icon="▤"
            title="Medical Case Management"
            text="Complete management and follow-up of medical cases and needs."
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-image"></div>

        <div className="about-content">
          <p className="section-label">ABOUT US</p>

          <h2>
            Medical Support
            <br />
            Wherever You Are
          </h2>

          <p>
            Clinovia Medical is a global medical support company committed to
            connecting people with reliable healthcare solutions.
          </p>

          <p>
            Our mission is to make quality medical care accessible, easy and
            dependable — no matter where you are.
          </p>

          <a className="dark-button" href="#services">
            Discover More About Us →
          </a>
        </div>

        <div className="about-card">
          <div>
            <span className="about-icon">◎</span>
            <div>
              <strong>Worldwide Coverage</strong>
              <p>We provide support across the globe.</p>
            </div>
          </div>

          <div>
            <span className="about-icon">☷</span>
            <div>
              <strong>Multilingual Team</strong>
              <p>We speak your language and understand your needs.</p>
            </div>
          </div>

          <div>
            <span className="about-icon">✚</span>
            <div>
              <strong>Trusted & Confidential</strong>
              <p>Your privacy and safety are our top priorities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why" id="why">
        <p className="section-label gold-text">WHY CHOOSE CLINOVIA</p>
        <h2>Excellence in Every Step</h2>

        <div className="stats">
          <div className="stat">
            <span className="stat-icon">◉</span>
            <div>
              <strong>24/7</strong>
              <p>Support</p>
              <small>We are always here when you need us.</small>
            </div>
          </div>

          <div className="stat">
            <span className="stat-icon">◎</span>
            <div>
              <strong>100+</strong>
              <p>Countries</p>
              <small>Global reach to connect you with the best care.</small>
            </div>
          </div>

          <div className="stat">
            <span className="stat-icon">♙</span>
            <div>
              <strong>500+</strong>
              <p>Medical Partners</p>
              <small>A trusted network of hospitals and specialists.</small>
            </div>
          </div>

          <div className="stat">
            <span className="stat-icon">♢</span>
            <div>
              <strong>98%</strong>
              <p>Customer Satisfaction</p>
              <small>Our clients trust our commitment.</small>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials section">
        <p className="section-label">WHAT OUR CLIENTS SAY</p>
        <h2>Trusted by People Worldwide</h2>

        <div className="section-line"></div>

        <div className="testimonial-grid">
          <Testimonial
            initials="A"
            name="Ahmed R."
            country="Kuwait"
            text="Clinovia Medical helped me find the right hospital and doctor during my trip abroad. The support was exceptional."
          />
          <Testimonial
            initials="S"
            name="Sarah L."
            country="United Kingdom"
            text="Professional, fast, and reliable. They were with me every step of the way. Highly recommended!"
          />
          <Testimonial
            initials="M"
            name="Michael T."
            country="United States"
            text="Excellent assistance in a critical situation. Their 24/7 team is amazing and very supportive."
          />
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div>
          <h2>We're Here to Help</h2>
          <p>
            Contact us today and our team will be happy to assist you anytime,
            anywhere.
          </p>
        </div>

        <div className="contact-item">
          <strong>☎ Phone</strong>
          <span>{phone}</span>
          <small>WhatsApp Available</small>
        </div>

        <div className="contact-item">
          <strong>✉ Email</strong>
          <span>info@clinoviamedical.com</span>
        </div>

        <div className="contact-item">
          <strong>⌖ Location</strong>
          <span>Global Support</span>
          <small>Worldwide</small>
        </div>

        <a
          className="gold-button"
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noreferrer"
        >
          Contact Us Now →
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-brand">
          <div className="logo">
            <div className="logo-icon">✚</div>
            <div>
              <div className="logo-name">CLINOVIA</div>
              <div className="logo-sub">MEDICAL</div>
            </div>
          </div>

          <p>
            Healthcare without borders. We provide comprehensive medical support
            and solutions worldwide.
          </p>

          <div className="socials">f &nbsp; in &nbsp; ◎ &nbsp; ◉</div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#why">Why Choose Us</a>
          <a href="#network">Global Network</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div>
          <h4>Our Services</h4>
          <a href="#services">Medical Assistance</a>
          <a href="#services">Global Medical Support</a>
          <a href="#services">Medical Insurance Support</a>
          <a href="#services">Emergency Coordination</a>
          <a href="#services">Case Management</a>
        </div>

        <div>
          <h4>Support</h4>
          <a href="#contact">FAQ</a>
          <a href="#contact">Privacy Policy</a>
          <a href="#contact">Terms of Service</a>
          <a href="#contact">Cookie Policy</a>
        </div>

        <div>
          <h4>Newsletter</h4>
          <p>Subscribe to get the latest updates and health news.</p>
          <div className="newsletter">
            <input placeholder="Your email address" />
            <button>➤</button>
          </div>
        </div>
      </footer>

      <div className="copyright">
        © 2026 Clinovia Medical. All rights reserved.
      </div>

      {/* FLOATING CONTACT */}
      <div className="floating-contact">
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noreferrer"
        >
          ☏
        </a>

        <a href={`tel:${phone}`}>☎</a>

        <a href="mailto:info@clinoviamedical.com">✉</a>
      </div>
    </div>
  );
}

function Service({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Testimonial({
  initials,
  name,
  country,
  text,
}: {
  initials: string;
  name: string;
  country: string;
  text: string;
}) {
  return (
    <div className="testimonial">
      <div className="avatar">{initials}</div>
      <div>
        <p>“{text}”</p>
        <strong>{name}</strong>
        <span>{country}</span>
        <div className="stars">★★★★★</div>
      </div>
    </div>
  );
}

export default App;
