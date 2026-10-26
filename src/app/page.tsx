
const services = [
  { no: "01", icon: "✳", title: "Web Design", desc: "Distinctive interfaces and premium visual experiences for ambitious brands." },
  { no: "02", icon: "⌘", title: "Web Development", desc: "Fast, responsive and scalable websites built around your business goals." },
  { no: "03", icon: "↗", title: "E-Commerce", desc: "Beautiful online stores designed to make shopping simple and engaging." },
  { no: "04", icon: "◈", title: "Custom Web Solutions", desc: "Purpose-built digital tools tailored to your business requirements." },
];
import Image from "next/image";
const projects = [
  {
    title: "The Modern Studio",
    category: "BUSINESS WEBSITE CONCEPT",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Form & Function",
    category: "E-COMMERCE CONCEPT",
    image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Serene Escapes",
    category: "HOSPITALITY CONCEPT",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function Home() {
  return (
    <main className="site-3d overflow-hidden bg-[#FFF6EB] text-[#2D1E17]">
      {/* NAVIGATION */}
      <header className="relative z-30 flex items-center justify-between border-b border-[#2D1E17]/10 px-5 py-5 md:px-12 lg:px-20">
        <a href="#home" className="text-2xl font-semibold tracking-tight">
          <span className="text-[#6B705C]">i</span> Ceylon
          <span className="ml-1 align-top text-[10px]">®</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          <a href="#home" className="nav-link">Home</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#work" className="nav-link">Portfolio</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#marketing" className="nav-link">Digital Marketing</a>
        </nav>

        <a href="#contact" className="rounded-full bg-[#2D1E17] px-5 py-3 text-sm text-white transition duration-300 hover:-translate-y-1 hover:bg-[#6B705C]">
          Let&apos;s Talk ↗
        </a>
      </header>

     
<div className="hero-scene sigiriya-scene">
  <div className="sigiriya-image-wrap">
    <Image
      src="/sigiriya.jpg"
      alt="Sigiriya Rock Fortress, Sri Lanka"
      fill
      priority
      sizes="(max-width: 768px) 100vw, 60vw"
      className="sigiriya-image"
    />

    <div className="sigiriya-image-overlay" />

    <div className="sigiriya-image-content">
      <span className="sigiriya-label">
        <span className="status-dot" />
        INSPIRED BY SRI LANKA
      </span>

      <h2>
        Timeless
        <br />
        <span>heritage.</span>
      </h2>

      <p>Rooted in heritage. Built for the future.</p>

      <a href="#about" className="sigiriya-explore">
        Discover our story <span>↗</span>
      </a>
    </div>

    <div className="sigiriya-image-index">SRI LANKA · 01</div>
  </div>
</div>


      {/* SERVICES */}
      <section id="services" className="px-5 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-[#6B705C]">What we do</p>
            <h2 className="section-title">Ideas into impact<span className="text-[#6B705C]">.</span></h2>
          </div>
          <p className="max-w-md leading-7 text-[#796254]">
            Digital solutions built to make your business stand out, earn trust
            and create better experiences for your customers.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.no} className="service-card">
              <div className="flex items-center justify-between">
                <span className="service-icon">{service.icon}</span>
                <span className="text-xs text-[#796254]">{service.no}</span>
              </div>
              <h3 className="mt-9 text-xl font-medium">{service.title}</h3>
              <p className="mt-3 min-h-20 text-sm leading-7 text-[#796254]">{service.desc}</p>
              <a href="#contact" className="service-link">
                Discuss a project <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="work" className="portfolio-section px-5 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-[#DDBEA9]">Selected concepts</p>
            <h2 className="section-title text-[#FFF6EB]">Made to stand out<span className="text-[#DDBEA9]">.</span></h2>
          </div>
          <p className="max-w-md leading-7 text-[#DDBEA9]">
            A glimpse of the visual directions and digital experiences we can
            create for growing brands.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.title} className="project-card" style={{ animationDelay: `${index * 120}ms` }}>
              <div className="project-image-wrap">
                <img src={project.image} alt={project.title + " visual concept"} className="project-image" />
                <span className="project-arrow">↗</span>
                <span className="project-concept">CONCEPT PROJECT</span>
              </div>
              <p className="mt-5 text-[10px] tracking-[0.2em] text-[#DDBEA9]">{project.category}</p>
              <h3 className="mt-2 text-2xl text-[#FFF6EB]">{project.title}</h3>
            </article>
          ))}
        </div>
        <p className="mt-8 text-xs text-[#DDBEA9]/75">
          These are visual concept examples, not completed client projects.
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="grid gap-12 px-5 py-20 md:grid-cols-2 md:items-center md:px-12 md:py-28 lg:px-20">
        <div className="about-visual">
          <div className="about-back-shape" />
          <div className="about-image-card">
            <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1100&q=85" alt="Creative workspace" />
          </div>
          <div className="about-note">
            <span className="text-3xl">✳</span>
            <p className="mt-2 font-serif text-xl italic">Create with purpose.</p>
            <p className="mt-1 text-xs text-[#796254]">i Ceylon · Sri Lanka</p>
          </div>
        </div>

        <div>
          <p className="eyebrow text-[#6B705C]">The i Ceylon approach</p>
          <h2 className="section-title mt-5">
            Thoughtful details.
            <br />
            <span className="gradient-text font-serif italic font-normal">Meaningful impact.</span>
          </h2>
          <p className="mt-7 leading-8 text-[#796254]">
            A website should do more than look good. It should tell your story,
            communicate your value and help customers take the next step.
          </p>
          <p className="mt-4 leading-8 text-[#796254]">
            We bring creative direction and purposeful development together to
            build a stronger digital foundation for your business.
          </p>
          <a href="#contact" className="primary-button mt-8">
            Work with us <span>↗</span>
          </a>
        </div>
      </section>

      {/* DIGITAL MARKETING — COMING SOON */}
      <section id="marketing" className="marketing-section mx-4 my-5 overflow-hidden rounded-3xl px-6 py-12 md:mx-8 md:px-14 md:py-16">
        <div className="marketing-orb marketing-orb-one" />
        <div className="marketing-orb marketing-orb-two" />

        <div className="relative z-10 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="coming-badge">
              <span className="status-dot" /> COMING SOON
            </div>
            <h2 className="mt-6 text-4xl font-medium leading-tight tracking-tight text-[#FFF6EB] md:text-6xl">
              Your next level
              <br />
              <span className="font-serif italic text-[#DDBEA9]">starts here.</span>
            </h2>
            <p className="mt-5 max-w-lg leading-8 text-[#F1E3D3]">
              We&apos;re preparing a new way to help brands grow online.
              Digital marketing services are coming soon to i Ceylon.
            </p>
            <a href="#contact" className="marketing-button mt-7">
              Get notified <span>↗</span>
            </a>
          </div>

          <div className="marketing-scene">
            <div className="marketing-ring" />
            <div className="marketing-tile marketing-tile-one">SEO<span>↗</span></div>
            <div className="marketing-tile marketing-tile-two">SOCIAL<span>✳</span></div>
            <div className="marketing-tile marketing-tile-three">GROWTH<span>↑</span></div>
            <div className="marketing-center">i<span>C</span></div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section mx-4 my-8 rounded-3xl px-6 py-14 md:mx-8 md:px-14 md:py-20">
        <p className="eyebrow text-[#F1E3D3]">Have a project in mind?</p>
        <div className="mt-6 grid gap-10 md:grid-cols-2 md:items-end">
          <h2 className="text-4xl font-medium leading-tight tracking-tight text-[#FFF6EB] md:text-6xl">
            Let&apos;s build
            <br />
            <span className="font-serif italic text-[#DDBEA9]">something great.</span>
          </h2>
          <div>
            <p className="mb-6 leading-7 text-[#F1E3D3]">
              Tell us about your idea. Let&apos;s discuss how we can bring it
              to life.
            </p>
            <a href="https://wa.me/94712695820" target="_blank" rel="noreferrer" className="contact-row">
              <span className="contact-symbol">↗</span>
              <span><small>WHATSAPP / PHONE</small><strong>071 269 5820</strong></span>
              <span className="ml-auto">↗</span>
            </a>
            <a href="mailto:iceylonpvtltd@gmail.com" className="contact-row">
              <span className="contact-symbol">✉</span>
              <span><small>EMAIL US</small><strong>iceylonpvtltd@gmail.com</strong></span>
              <span className="ml-auto">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex flex-col justify-between gap-6 px-5 py-8 md:flex-row md:items-center md:px-12 lg:px-20">
        <a href="#home" className="text-2xl font-semibold tracking-tight">
          <span className="text-[#6B705C]">i</span> Ceylon
        </a>
        <p className="text-sm text-[#796254]">Web Design & Development · Sri Lanka</p>
        <div className="flex flex-wrap gap-5 text-sm text-[#796254]">
          <a href="#services" className="nav-link">Services</a>
          <a href="#marketing" className="nav-link">Digital Marketing</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        <p className="text-xs text-[#796254]">© 2026 i Ceylon</p>
      </footer>
    </main>
  );
}
