
import {
  ArrowUpRight,
  Palette,
  Code2,
  ShoppingBag,
  Wrench,
  Mail,
  MessageCircle,
  Asterisk,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    no: "01",
    icon: Palette,
    title: "Web Design",
    desc: "Distinctive interfaces and premium visual experiences for ambitious brands.",
  },
  {
    no: "02",
    icon: Code2,
    title: "Web Development",
    desc: "Fast, responsive and scalable websites built around your business goals.",
  },
  {
    no: "03",
    icon: ShoppingBag,
    title: "E-Commerce",
    desc: "Beautiful online stores designed to make shopping simple and engaging.",
  },
  {
    no: "04",
    icon: Wrench,
    title: "Custom Web Solutions",
    desc: "Purpose-built digital tools tailored to your business requirements.",
  },
];

const projects = [
  {
    no: "01",
    category: "WEB DESIGN / DEVELOPMENT",
    title: "Digital Experiences",
    description:
      "Modern websites that communicate your brand and turn visitors into customers.",
    className: "project-one",
    label: "01",
  },
  {
    no: "02",
    category: "E-COMMERCE",
    title: "Online Storefronts",
    description:
      "Thoughtfully designed shopping experiences built for growth and conversion.",
    className: "project-two",
    label: "02",
  },
  {
    no: "03",
    category: "CUSTOM SOLUTIONS",
    title: "Business Systems",
    description:
      "Digital tools and tailored solutions that make everyday business easier.",
    className: "project-three",
    label: "03",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="navbar">
        <a href="#home" className="brand" aria-label="i Ceylon home">
          <span className="brand-mark">i<span>C</span></span>
          <span className="brand-name">i Ceylon<span>®</span></span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#work">Our Work</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-cta">
          Let&apos;s Talk
          <ArrowUpRight size={16} strokeWidth={1.7} aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-background">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="hero-grid" />
        </div>

        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            DIGITAL DESIGN & DEVELOPMENT STUDIO
          </div>

          <h1>
            We build
            <br />
            <span className="hero-serif">digital</span> experiences
            <br />
            that move you
            <span className="hero-period">.</span>
          </h1>

          <p className="hero-description">
            We help ambitious businesses build a powerful digital presence
            through thoughtful design, purposeful technology and experiences
            that make a difference.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="button button-primary">
              Start a Project
              <ArrowUpRight size={17} strokeWidth={1.7} aria-hidden="true" />
            </a>
            <a href="#work" className="button button-secondary">
              Explore Our Work
            </a>
          </div>

          <div className="hero-bottom">
            <span>DESIGNED WITH PURPOSE</span>
            <span className="hero-bottom-line" />
            <span>BUILT FOR GROWTH</span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-orbit orbit-three" />

          <div className="visual-core">
            <div className="core-ring">
              <span className="core-i">i</span>
              <span className="core-c">C</span>
            </div>
          </div>

          <div className="floating-card floating-card-top">
            <span className="mini-dot" />
            <span>Creative thinking</span>
          </div>

          <div className="floating-card floating-card-bottom">
            <Asterisk size={17} strokeWidth={1.5} aria-hidden="true" />
            <span>Made for growth</span>
            <ArrowUpRight size={14} strokeWidth={1.7} aria-hidden="true" />
          </div>

          <div className="visual-caption">
            <span>FIG. 01</span>
            <span>DESIGN IN MOTION</span>
          </div>
        </div>

        <div className="hero-side-note">INDEPENDENT DIGITAL STUDIO · SRI LANKA</div>
      </section>

      <section className="ticker" aria-label="Our approach">
        <div className="ticker-track">
          {[
            "Strategy",
            "Design",
            "Technology",
            "Innovation",
            "Strategy",
            "Design",
            "Technology",
            "Innovation",
          ].map((item, index) => (
            <span className="ticker-item" key={`${item}-${index}`}>
              {item}
              <Asterisk size={15} strokeWidth={1.5} aria-hidden="true" />
            </span>
          ))}
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading">
          <div>
            <span className="section-kicker">01 — WHAT WE DO</span>
            <h2>
              Digital craft.
              <br />
              <span className="heading-serif">Real impact.</span>
            </h2>
          </div>

          <p className="section-intro">
            Great digital experiences don&apos;t happen by accident. We bring
            strategy, creativity and technology together to build solutions
            that work beautifully.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.no}>
                <div className="service-card-top">
                  <span className="service-number">{service.no}</span>
                  <span className="service-icon">
                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>

                <a
                  className="service-link"
                  href="#contact"
                  aria-label={`Discuss ${service.title}`}
                >
                  <span>
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-decoration" aria-hidden="true">
          <div className="about-ring about-ring-one" />
          <div className="about-ring about-ring-two" />
          <div className="about-ring about-ring-three" />
          <div className="about-center">
            <Asterisk size={48} strokeWidth={1.1} />
          </div>
        </div>

        <div className="about-content">
          <span className="section-kicker">02 — A LITTLE ABOUT US</span>

          <h2>
            Good design is
            <br />
            more than how it
            <br />
            <span className="heading-serif">looks.</span>
          </h2>

          <p>
            It&apos;s how it works. How it feels. And how it helps your business
            move forward. At i Ceylon, we believe every business deserves a
            digital presence that reflects its ambition.
          </p>

          <p>
            We combine clean design, reliable development and a detail-focused
            approach to create digital experiences with purpose.
          </p>

          <a href="#contact" className="text-link">
            Get to know us
            <ArrowUpRight size={17} strokeWidth={1.7} aria-hidden="true" />
          </a>
        </div>

        <div className="about-note">
          <span className="about-note-icon">
            <Asterisk size={26} strokeWidth={1.4} aria-hidden="true" />
          </span>
          <span className="about-note-title">Thoughtfully made.</span>
          <span className="about-note-subtitle">Purposefully built.</span>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <div>
            <span className="section-kicker">03 — SELECTED WORK</span>
            <h2>
              Made to make
              <br />
              <span className="heading-serif">an impression.</span>
            </h2>
          </div>

          <p className="section-intro">
            Every project begins with a challenge and ends with a digital
            experience designed around what matters most.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${project.className}`}
              key={project.no}
            >
              <div className="project-art">
                <div className="project-art-orbit project-art-orbit-one" />
                <div className="project-art-orbit project-art-orbit-two" />
                <div className="project-art-shape">
                  <span className="project-art-letter">iC</span>
                </div>
                <span className="project-art-index">{project.label}</span>
                <span className="project-art-arrow">
                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>
              </div>

              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="work-footnote">
          Your business could be our next project.
        </p>
      </section>

      <section className="marketing-section">
        <div className="marketing-content">
          <span className="section-kicker">04 — COMING SOON</span>

          <h2>
            More ways to
            <br />
            <span className="heading-serif">grow digitally.</span>
          </h2>

          <p>
            We&apos;re preparing new digital marketing services to help
            businesses reach the right audience and grow their online presence.
          </p>

          <span className="coming-soon-label">
            <span className="status-dot" />
            DIGITAL MARKETING · COMING SOON
          </span>
        </div>

        <div className="marketing-visual" aria-label="Upcoming marketing services">
          <div className="marketing-tile marketing-tile-one">
            <span className="marketing-tile-label">01 / SEARCH</span>
            <span className="marketing-tile-title">SEO</span>
            <ArrowUpRight size={22} strokeWidth={1.5} aria-hidden="true" />
          </div>

          <div className="marketing-tile marketing-tile-two">
            <span className="marketing-tile-label">02 / COMMUNITY</span>
            <span className="marketing-tile-title">SOCIAL</span>
            <Asterisk size={22} strokeWidth={1.5} aria-hidden="true" />
          </div>

          <div className="marketing-tile marketing-tile-three">
            <span className="marketing-tile-label">03 / PERFORMANCE</span>
            <span className="marketing-tile-title">GROWTH</span>
            <TrendingUp size={22} strokeWidth={1.5} aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-heading">
          <span className="section-kicker">05 — HAVE A PROJECT IN MIND?</span>
          <h2>
            Let&apos;s make
            <br />
            something
            <br />
            <span className="heading-serif">meaningful.</span>
          </h2>

          <p>
            Tell us about your idea. We&apos;d love to hear what you&apos;re
            building and explore how we can help.
          </p>

          <a href="mailto:iceylonpvtltd@gmail.com" className="button button-light">
            Start a Conversation
            <ArrowUpRight size={17} strokeWidth={1.7} aria-hidden="true" />
          </a>
        </div>

        <div className="contact-details">
          <span className="contact-details-kicker">GET IN TOUCH</span>

          <a
            className="contact-row"
            href="https://wa.me/94712695820"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-row-icon">
              <MessageCircle size={20} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <span className="contact-row-content">
              <span className="contact-row-label">WHATSAPP / PHONE</span>
              <span className="contact-row-value">071 269 5820</span>
            </span>
            <ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" />
          </a>

          <a
            className="contact-row"
            href="mailto:iceylonpvtltd@gmail.com"
          >
            <span className="contact-row-icon">
              <Mail size={20} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <span className="contact-row-content">
              <span className="contact-row-label">EMAIL</span>
              <span className="contact-row-value">
                iceylonpvtltd@gmail.com
              </span>
            </span>
            <ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" />
          </a>

          <div className="contact-availability">
            <span className="status-dot" />
            OPEN FOR SELECT PROJECTS
          </div>
        </div>

        <div className="contact-watermark" aria-hidden="true">
          iC
        </div>
      </section>

      <footer className="footer">
        <a href="#home" className="brand footer-brand" aria-label="i Ceylon home">
          <span className="brand-mark">i<span>C</span></span>
          <span className="brand-name">i Ceylon<span>®</span></span>
        </a>

        <span className="footer-copy">
          © 2026 i Ceylon. Crafted with purpose.
        </span>

        <a href="#home" className="footer-back">
          BACK TO TOP
          <ArrowUpRight size={14} strokeWidth={1.7} aria-hidden="true" />
        </a>
      </footer>
    </main>
  );
}
