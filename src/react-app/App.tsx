import { useEffect, useState } from "react";
import "./App.css";

const PHONE = "01515994218";
const WHATSAPP = "201515994218";
const EMAIL = "info@clinoviamedical.com";

type IconName =
  | "plus"
  | "arrow"
  | "phone"
  | "mail"
  | "globe"
  | "shield"
  | "heart"
  | "menu"
  | "close"
  | "check"
  | "play"
  | "location"
  | "linkedin";

function Icon({
  name,
  size = 24,
}: {
  name: IconName;
  size?: number;
}) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const icons: Record<IconName, React.ReactNode> = {
    plus: (
      <>
        <path d="M12 4v16" />
        <path d="M4 12h16" />
      </>
    ),

    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),

    phone: (
      <path d="M5 4h3l2 5-2 1.5a14 14 0 0 0 5.5 5.5L15 14l5 2v3c0 1.1-.9 2-2 2C7.5 21 3 16.5 3 11V6c0-1.1.9-2 2-2Z" />
    ),

    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),

    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c3 2.7 4.5 5.7 4.5 9S15 18.3 12 21c-3-2.7-4.5-5.7-4.5-9S9 5.7 12 3Z" />
      </>
    ),

    shield: (
      <>
        <path d="M12 3 20 6v5c0 5.2-3.4 8.7-8 10-4.6-1.3-8-4.8-8-10V6l8-3Z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),

    heart: (
      <path d="M20.8 8.7c0 5.8-8.8 10.8-8.8 10.8S3.2 14.5 3.2 8.7A4.4 4.4 0 0 1 11 6l1 1.5L13 6a4.4 4.4 0 0 1 7.8 2.7Z" />
    ),

    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),

    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),

    check: <path d="m5 12 4 4L19 6" />,

    play: <path d="m9 6 9 6-9 6V6Z" />,

    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),

    linkedin: (
      <>
        <rect x="4" y="9" width="3" height="10" />
        <path d="M5.5 5.5h.01" />
        <path d="M10 19v-6c0-2.2 1.3-3.5 3.2-3.5 2.1 0 3.3 1.4 3.3 4V19" />
        <path d="M10 13c0-2.2 1.3-3.5 3.2-3.5" />
      </>
    ),
  };

  return <svg {...props}>{icons[name]}</svg>;
}

const capabilities = [
  {
    number: "01",
    title: "Medical Assistance",
    text: "Professional support and clear coordination for healthcare needs across different situations.",
  },
  {
    number: "02",
    title: "Global Coordination",
    text: "A structured approach designed to make international healthcare communication easier to navigate.",
  },
  {
    number: "03",
    title: "Case Support",
    text: "Organized follow-up and professional communication throughout the support journey.",
  },
];

const standards = [
  {
    icon: "shield" as IconName,
    title: "Confidential by Design",
    text: "Privacy and responsible handling of information are central to the Clinovia approach.",
  },
  {
    icon: "heart" as IconName,
    title: "Human-Centered",
    text: "Professional healthcare support should remain clear, reassuring and focused on people.",
  },
  {
    icon: "globe" as IconName,
    title: "International Perspective",
    text: "A global outlook for situations that extend beyond a single location or system.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      {/* NAVIGATION */}
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-symbol">
            <Icon name="plus" size={26} />
          </span>

          <span className="brand-wordmark">
            <strong>CLINOVIA</strong>
            <small>MEDICAL</small>
          </span>
        </a>

        <nav className="desktop-navigation">
          <a href="#about">About</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#standards">Our Standards</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="nav-contact"
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noreferrer"
        >
          <span>Get Assistance</span>
          <Icon name="arrow" size={17} />
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <Icon name={menuOpen ? "close" : "menu"} size={26} />
        </button>
      </header>

      {/* MOBILE NAVIGATION */}
      <div className={`mobile-navigation ${menuOpen ? "is-open" : ""}`}>
        <div className="mobile-nav-links">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About Clinovia</a>
          <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
          <a href="#standards" onClick={closeMenu}>Our Standards</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>

        <a
          className="mobile-nav-action"
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          Start a Conversation
          <Icon name="arrow" size={18} />
        </a>
      </div>

      <main>
        {/* HERO */}
        <section className="hero-section" id="home">
          <div className="hero-media" />
          <div className="hero-shade" />

          <div className="hero-layout">
            <div className="hero-copy">
              <div className="hero-kicker">
                <span className="kicker-line" />
                <span>INTERNATIONAL MEDICAL ASSISTANCE</span>
              </div>

              <h1>
                Care should feel
                <span> certain.</span>
              </h1>

              <p>
                Clinovia Medical brings clarity, professional coordination and
                a global perspective to the moments when healthcare support
                matters most.
              </p>

              <div className="hero-actions">
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                >
                  <span>Get Medical Assistance</span>
                  <Icon name="arrow" size={19} />
                </a>

                <a href="#about" className="quiet-button">
                  Explore Clinovia
                </a>
              </div>
            </div>

            <div className="hero-side-mark">
              <span>CLINOVIA</span>
              <span className="hero-side-line" />
              <span>HEALTHCARE WITHOUT BORDERS</span>
            </div>
          </div>

          <div className="hero-bottom">
            <div>
              <span className="hero-bottom-number">01</span>
              <p>Professional healthcare coordination with a human approach.</p>
            </div>

            <a href="#about" className="scroll-prompt">
              <span>SCROLL TO EXPLORE</span>
              <span className="scroll-line" />
            </a>
          </div>
        </section>

        {/* MANIFESTO */}
        <section className="manifesto-section" id="about">
          <div className="manifesto-index">CLINOVIA / 01</div>

          <div className="manifesto-grid">
            <div className="manifesto-title">
              <p className="section-eyebrow">THE CLINOVIA APPROACH</p>

              <h2>
                Beyond assistance.
                <em> Toward confidence.</em>
              </h2>
            </div>

            <div className="manifesto-text">
              <p className="lead-paragraph">
                Healthcare becomes more complex when information, people and
                locations are disconnected. Clinovia exists to bring greater
                clarity to that experience.
              </p>

              <p>
                Our role is built around professional support, thoughtful
                coordination and a perspective that understands healthcare can
                extend far beyond one place.
              </p>

              <a href="#capabilities" className="editorial-link">
                Discover what we do
                <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* IMAGE STATEMENT */}
        <section className="image-statement">
          <div className="statement-image" />

          <div className="statement-panel">
            <span className="panel-number">02</span>

            <blockquote>
              “When health matters,
              <br />
              clarity matters too.”
            </blockquote>

            <p>
              A more thoughtful way to approach medical support and
              coordination.
            </p>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="capabilities-section" id="capabilities">
          <div className="capabilities-top">
            <div>
              <p className="section-eyebrow">WHAT WE DO</p>
              <h2>Built for the moments that need clarity.</h2>
            </div>

            <p>
              A focused range of medical support capabilities, structured
              around communication, coordination and accessibility.
            </p>
          </div>

          <div className="capabilities-list">
            {capabilities.map((item) => (
              <article className="capability-item" key={item.number}>
                <span className="capability-number">{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <span className="capability-arrow">
                  <Icon name="arrow" size={22} />
                </span>
              </article>
            ))}
          </div>
        </section>

        {/* GLOBAL EXPERIENCE */}
        <section className="global-section">
          <div className="global-content">
            <p className="section-eyebrow">A GLOBAL PERSPECTIVE</p>

            <h2>
              Healthcare does not stop
              <em> at a border.</em>
            </h2>

            <p>
              Modern healthcare needs can cross cities, countries and systems.
              Clinovia is designed around the importance of clear coordination
              and professional communication in an international environment.
            </p>

            <div className="global-points">
              <div>
                <span className="point-icon">
                  <Icon name="check" size={17} />
                </span>
                <span>Professional coordination</span>
              </div>

              <div>
                <span className="point-icon">
                  <Icon name="check" size={17} />
                </span>
                <span>International accessibility</span>
              </div>

              <div>
                <span className="point-icon">
                  <Icon name="check" size={17} />
                </span>
                <span>Clear communication</span>
              </div>
            </div>
          </div>

          <div className="global-visual">
            <div className="global-image" />

            <div className="global-caption">
              <span className="caption-icon">
                <Icon name="globe" size={26} />
              </span>

              <div>
                <strong>One perspective.</strong>
                <span>Designed for an international world.</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="process-section">
          <div className="process-heading">
            <p className="section-eyebrow">HOW WE APPROACH SUPPORT</p>

            <h2>
              Simple by design.
              <em> Professional by nature.</em>
            </h2>
          </div>

          <div className="process-steps">
            <article>
              <span>01</span>
              <h3>Connect</h3>
              <p>Start the conversation and share the situation with our team.</p>
            </article>

            <article>
              <span>02</span>
              <h3>Understand</h3>
              <p>We focus on understanding the context and support requirements.</p>
            </article>

            <article>
              <span>03</span>
              <h3>Coordinate</h3>
              <p>Professional coordination helps create a clearer path forward.</p>
            </article>

            <article>
              <span>04</span>
              <h3>Continue</h3>
              <p>Clear communication remains important throughout the journey.</p>
            </article>
          </div>
        </section>

        {/* STANDARDS */}
        <section className="standards-section" id="standards">
          <div className="standards-image">
            <div className="standards-image-overlay" />

            <div className="standards-image-copy">
              <span>CLINOVIA STANDARD</span>
              <span className="vertical-rule" />
              <span>2026</span>
            </div>
          </div>

          <div className="standards-content">
            <p className="section-eyebrow">OUR PROFESSIONAL STANDARDS</p>

            <h2>
              Serious about
              <em> what matters.</em>
            </h2>

            <div className="standards-list">
              {standards.map((item) => (
                <article key={item.title}>
                  <span className="standard-icon">
                    <Icon name={item.icon} size={25} />
                  </span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="contact-watermark">C</div>

          <div className="contact-content">
            <p className="section-eyebrow light">LET'S TALK</p>

            <h2>
              When you need
              <em> support, start here.</em>
            </h2>

            <p>
              Speak with Clinovia Medical and start a clear conversation about
              your healthcare support needs.
            </p>

            <a
              className="contact-main-action"
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
            >
              <span>Contact us on WhatsApp</span>
              <Icon name="arrow" size={20} />
            </a>
          </div>

          <div className="contact-information">
            <a href={`tel:${PHONE}`} className="contact-row">
              <span className="contact-icon">
                <Icon name="phone" size={22} />
              </span>

              <div>
                <small>CALL US</small>
                <strong>{PHONE}</strong>
              </div>
            </a>

            <a href={`mailto:${EMAIL}`} className="contact-row">
              <span className="contact-icon">
                <Icon name="mail" size={22} />
              </span>

              <div>
                <small>EMAIL</small>
                <strong>{EMAIL}</strong>
              </div>
            </a>

            <div className="contact-row">
              <span className="contact-icon">
                <Icon name="globe" size={22} />
              </span>

              <div>
                <small>REACH</small>
                <strong>International perspective</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand-column">
            <a className="brand footer-brand" href="#home">
              <span className="brand-symbol">
                <Icon name="plus" size={25} />
              </span>

              <span className="brand-wordmark">
                <strong>CLINOVIA</strong>
                <small>MEDICAL</small>
              </span>
            </a>

            <p>
              Medical assistance and professional healthcare coordination with
              an international perspective.
            </p>
          </div>

          <div className="footer-navigation">
            <div>
              <span>EXPLORE</span>
              <a href="#about">About Clinovia</a>
              <a href="#capabilities">Capabilities</a>
              <a href="#standards">Our Standards</a>
            </div>

            <div>
              <span>CONTACT</span>
              <a href={`tel:${PHONE}`}>{PHONE}</a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Clinovia Medical. All rights reserved.</span>

          <span>Healthcare without borders.</span>
        </div>
      </footer>

      {/* MOBILE QUICK ACTION */}
      <div className="mobile-quick-action">
        <a href={`tel:${PHONE}`}>
          <Icon name="phone" size={19} />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noreferrer"
        >
          <span className="quick-plus">
            <Icon name="plus" size={19} />
          </span>
          <span>WhatsApp</span>
        </a>

        <a href={`mailto:${EMAIL}`}>
          <Icon name="mail" size={19} />
          <span>Email</span>
        </a>
      </div>
    </div>
  );
}

export default App;
