import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const ROTATING_LINES = [
  'Tech Ventures',
  'Digital Products',
  'World Class Apps',
  'AI Solutions',
  'Innovative Platforms',
];

export default function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % ROTATING_LINES.length);
    }, 2400);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero-page">
      <div className="hero-bg" aria-hidden="true">
        <svg className="hero-bg-svg" viewBox="0 0 1024 362" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="405" y1="0" x2="405" y2="362" className="geo-line" />
          <line x1="610" y1="0" x2="610" y2="362" className="geo-line" />
          <line x1="0" y1="204" x2="520" y2="204" className="geo-line" />
          <line x1="820" y1="0" x2="1024" y2="0" className="geo-line" />
          <line x1="820" y1="0" x2="820" y2="202" className="geo-line" />
          <path d="M 405 0 C 405 68 350 124 282 124" className="geo-curve" />
          <path d="M 610 202 C 610 292 684 362 774 362" className="geo-curve" />
        </svg>
      </div>

      <header className="top-nav">
        <nav className="top-nav-left" aria-label="Primary">
          <a href="#">Our Company</a>
          <a href="#">Our Expertise</a>
          <a href="#">Our Work</a>
        </nav>

        <div className="logo-mark" aria-label="Utility logo">
          <span className="logo-cutout" />
        </div>

        <div className="top-nav-right">
          <button className="start-project" type="button">
            Start a project
            <span aria-hidden="true">↗</span>
          </button>
          <button className="menu-btn" type="button" aria-label="Menu">
            <span />
            <span />
          </button>
        </div>
      </header>

      <main className="hero-content">
        <h1 className="hero-title">
          <span className="title-static">Building Today's</span>
          <span className="title-animated-wrap">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                className="title-animated"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.38, ease: 'easeOut' }}
              >
                {ROTATING_LINES[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <p className="hero-subtitle">
          Utility crafts award-winning custom digital products
          <br />
          driven by strategy, design and technology
        </p>
      </main>
    </section>
  );
}
