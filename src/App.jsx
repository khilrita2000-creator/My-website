import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Monitor, Pencil, Target, TrendingUp, Users } from 'lucide-react';
import heroVideo from '../Mockaps/AZr-2xR-XmdCMCCPjuJ3Cw-AZr-2xR-HPhs_L2nyekk4A.mp4';
import './second-page.css';

const ROTATING_LINES = [
  'Tech Ventures',
  'Digital Products',
  'World Class Apps',
  'AI Solutions',
  'Innovative Platforms',
];

const SERVICES = [
  { label: 'Tech Development', Icon: Monitor },
  { label: 'Product Design', Icon: Pencil },
  { label: 'AI Solutions', Icon: Target },
  { label: 'Growth Marketing', Icon: TrendingUp },
  { label: 'Digital Transformation', Icon: Users },
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
    <>
    <section id="into-section" className="hero-page into-section">
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

      <header className="top-nav profile-header">
        <nav className="top-nav-left profile-links" aria-label="Primary">
          <a href="#">Our Company</a>
          <a href="#">Our Expertise</a>
          <a href="#">Our Work</a>
        </nav>

        <div className="logo-mark" aria-label="Utility logo">
          <span className="logo-cutout" />
        </div>

        <div className="top-nav-right profile-actions">
          <a className="start-project profile-start" href="#video-section">
            Start a project
            <span aria-hidden="true">↗</span>
          </a>
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
        <button className="hero-work-with-us" type="button">
          Work with us <span aria-hidden="true">↗</span>
        </button>
      </main>

    </section>
    <section id="video-section" className="second-page video-section">
      <svg className="mask-defs" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="frameClip" clipPathUnits="objectBoundingBox">
            <path d="M0.03 0.08H0.5V0.03H0.97V0.44A0.53 0.53 0 0 1 0.44 0.97H0.03V0.52H0.5V0.08Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="second-grid">
        <div className="second-video-col">
          <div className="second-video-shell">
            <video className="second-video" autoPlay muted loop playsInline>
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="second-copy-col">
          <p className="second-lead">
            Drawing on decades of expertise, Utility builds new products with innovative client
            partners.
          </p>
          <ul className="second-services">
            {SERVICES.map(({ label, Icon }) => (
              <li key={label}>
                <Icon className="second-service-icon" aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
          <a href="#" className="second-link">
            View all services <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
