import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Monitor, Pencil, Target, TrendingUp, Users } from 'lucide-react';
import heroVideo from '../Mockaps/Video for website.mp4';
import sectionThreeAiSolutionsImage from '../Mockaps/Photo 2.jpeg';
import sectionThreeWebPlatformsImage from '../Mockaps/Photo 3.jpeg';
import brandLogo from './assets/logo-main.png';
import sectionThreeMobileAppImage from './assets/section-three-mobile-app-v2.png';
import sectionThreeStartupProductsImage from './assets/section-three-startup-products.png';
import './second-page.css';

const ROTATING_LINES = [
  'World Class Apps',
  'Web Platforms',
  'Digital Products',
  'AI Solutions',
  'Tech Startups',
];

const SERVICES = [
  { label: 'Mobile App Development', Icon: Monitor },
  { label: 'Web Development', Icon: Target },
  { label: 'UI/UX Design', Icon: Pencil },
  { label: 'MVP Development', Icon: Users },
  { label: 'AI Solutions', Icon: Target },
  { label: 'Product Strategy & Growth', Icon: TrendingUp },
];

const SOLUTIONS = [
  {
    id: '01',
    title: 'Mobile Apps',
    description:
      'High-quality iOS and Android applications built for performance, scalability, and exceptional user experience.',
    points: [
      'iOS App Development',
      'Android App Development',
      'Cross-platform Apps',
      'App Store & Google Play Launch',
      'Mobile App Optimization',
    ],
    image: sectionThreeMobileAppImage,
  },
  {
    id: '02',
    title: 'Web Platforms',
    description:
      'Modern websites and web platforms are built for speed, reliability, and seamless user interaction.',
    points: [
      'Corporate Websites',
      'Web Applications',
      'SaaS Platforms',
      'E-commerce Solutions',
      'CMS & Admin Panels',
    ],
    image: sectionThreeWebPlatformsImage,
  },
  {
    id: '03',
    title: 'Startup Products',
    description:
      'We help startups turn ideas into real products through rapid MVP creation and fast market validation.',
    points: [
      'MVP Development',
      'Product Discovery',
      'Prototype Design',
      'Startup Tech Consulting',
      'Product Launch Support',
    ],
    image: sectionThreeStartupProductsImage,
  },
  {
    id: '04',
    title: 'AI Solutions',
    description:
      'Custom AI integrations and intelligent tools that automate workflows and unlock new capabilities.',
    points: [
      'AI Chatbots',
      'AI Automation',
      'Machine Learning Integration',
      'AI Data Analysis',
      'AI-powered Applications',
    ],
    image: sectionThreeAiSolutionsImage,
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [activePoint, setActivePoint] = useState(0);

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

        <div
          className="logo-mark"
          aria-label="Utility logo"
          style={{
            width: 56,
            height: 56,
            overflow: 'visible',
            borderRadius: 0,
            background: 'transparent',
            zIndex: 4,
          }}
        >
          <img
            src={brandLogo}
            alt="Integrior logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center',
              transform: 'none',
              mixBlendMode: 'normal',
              filter: 'drop-shadow(0 3px 8px rgba(0,0,0,0.35))',
            }}
          />
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
          Integrior Agency builds innovative digital products powered by strategy, design and
          technology.
        </p>
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
            <button className="video-work-with-us second-video-cta" type="button">
              Work with us <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>

        <div className="second-copy-col">
          <p className="second-lead">
            Turning your ideas into innovative digital products from concept to launch. We
            design, build and launch digital products.
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
    <section id="section-three" className="section-three">
      <div className="section-three-inner">
        <p className="section-three-eyebrow">What we do</p>
        <h2 className="section-three-title">Innovative digital solutions built on proven expertise</h2>
        <div className="section-three-content">
          <div className="section-three-left">
            <div className="section-three-loader" aria-hidden="true">
              <motion.span
                className="section-three-loader-fill"
                animate={{ y: expandedIndex * 84 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
              />
            </div>

            <div className="section-three-list">
              {SOLUTIONS.map((item, itemIndex) => {
                const isOpen = expandedIndex === itemIndex;
                return (
                  <article
                    key={item.id}
                    className={`solution-item${isOpen ? ' is-open' : ''}`}
                    onClick={() => {
                      setExpandedIndex(itemIndex);
                      setActivePoint(0);
                    }}
                    onMouseEnter={() => {
                      setExpandedIndex(itemIndex);
                      setActivePoint(0);
                    }}
                  >
                    <button type="button" className={`solution-trigger${isOpen ? ' is-open' : ''}`}>
                      <span className="solution-id">{item.id}</span>
                      <h3>
                        {item.title}
                        <span className={`solution-arrow${isOpen ? ' is-open' : ''}`} aria-hidden="true">
                          ↗
                        </span>
                      </h3>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.span
                            className="solution-subtitle"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.22, ease: 'easeOut' }}
                          >
                            {item.description}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        item.points && (
                          <motion.div
                            className="solution-body"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.28, ease: 'easeOut' }}
                          >
                            <span className="solution-body-loader-track" aria-hidden="true" />
                            <motion.span
                              className="solution-body-loader-thumb"
                              aria-hidden="true"
                              initial={{ y: 0 }}
                              animate={{ y: activePoint * 26 }}
                              transition={{ duration: 0.36, ease: 'easeOut' }}
                            />
                            <ul className="solution-points">
                              {item.points.map((point, pointIndex) => (
                                <li key={point}>
                                  <button
                                    type="button"
                                    className={`solution-point-btn${
                                      activePoint === pointIndex ? ' is-active' : ''
                                    }`}
                                    onClick={(event) => {
                                      event.stopPropagation();
                                      setActivePoint(pointIndex);
                                    }}
                                    onMouseEnter={() => setActivePoint(pointIndex)}
                                    onFocus={() => setActivePoint(pointIndex)}
                                  >
                                    {point}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )
                      )}
                    </AnimatePresence>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="section-three-visual">
            <div className="section-three-media">
              <AnimatePresence mode="wait">
                <motion.img
                  className="section-three-image"
                  key={SOLUTIONS[expandedIndex]?.id}
                  src={SOLUTIONS[expandedIndex]?.image}
                  alt={SOLUTIONS[expandedIndex]?.title}
                  loading="lazy"
                  initial={{ opacity: 0.2, scale: 1.015 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.2, scale: 1.015 }}
                  transition={{ duration: 0.32, ease: 'easeOut' }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
        <button type="button" className="section-three-cta">
          All services <span aria-hidden="true">↗</span>
        </button>
      </div>
    </section>
    </>
  );
}
