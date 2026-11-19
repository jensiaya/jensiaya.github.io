const heritageSites = [
  {
    name: "Hundred Islands",
    location: "Alaminos City",
    description: "A protected island landscape known for limestone formations, clear waters, and island-hopping activities.",
    icon: "🏝️",
    image: "/heritage/hundred-islands.jpg",
    imageAlt: "Green island formations surrounded by blue water at Hundred Islands"
  },
  {
    name: "Bolinao Lighthouse",
    location: "Bolinao",
    description: "A historic coastal landmark overlooking the West Philippine Sea and nearby rock formations.",
    icon: "🗼",
    image: "/heritage/bolinao-lighthouse.jpg",
    imageAlt: "White lighthouse standing among trees beneath a clear blue sky"
  },
  {
    name: "Balungao Hot Spring",
    location: "Balungao",
    description: "A natural hot-spring destination associated with Mount Balungao and outdoor recreation.",
    icon: "♨️",
    image: "/heritage/balungao-hot-spring.jpg",
    imageAlt: "Outdoor hot spring pool surrounded by lush green trees"
  }
];

function HeritageCard({ site }) {
  return (
    <article className="card">
      <img className="heritage-image" src={site.image} alt={site.imageAlt} loading="lazy" />
      <div className="card-icon" aria-hidden="true">{site.icon}</div>
      <div>
        <p className="eyebrow">{site.location}</p>
        <h2>{site.name}</h2>
        <p>{site.description}</p>
        <button className="outline-button" type="button">Explore site</button>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Pangasinan Heritage home">
          <span className="brand-mark" aria-hidden="true">♥</span>
          <span>Pangasinan Heritage</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#sites">Sites</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Digital Heritage Showcase</p>
          <h1>Discover Pangasinan, one landmark at a time.</h1>
          <p className="lead">
            A lightweight, accessible guide to selected heritage and tourism destinations.
          </p>
          <a className="primary-button" href="#sites">Browse destinations</a>
        </div>
      </section>

      <section id="sites" className="section" aria-labelledby="sites-title">
        <div className="section-heading">
          <p className="eyebrow">Featured destinations</p>
          <h2 id="sites-title">Explore heritage sites</h2>
        </div>
        <div className="grid">
          {heritageSites.map((site) => <HeritageCard key={site.name} site={site} />)}
        </div>
      </section>

      <section id="about" className="section info">
        <div>
          <p className="eyebrow">Built for the brief</p>
          <h2>Fast, mobile-first, maintainable, and accessible.</h2>
        </div>
        <ul>
          <li>Responsive layout for phones, tablets, and desktops</li>
          <li>Semantic HTML and visible keyboard focus states</li>
          <li>Minimal dependencies and static export configuration</li>
          <li>Reusable React components for future pages</li>
        </ul>
      </section>

      <footer className="footer">
        <p>© 2026 Pangasinan Heritage Digital Showcase</p>
      </footer>
    </main>
  );
}
