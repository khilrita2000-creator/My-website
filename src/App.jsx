import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, animate, motion, useInView } from 'framer-motion';
import { ArrowLeft, ArrowRight, Monitor, Pencil, Rocket, Target, TrendingUp, Users } from 'lucide-react';
import heroVideo from '../Mockaps/Video for website.mp4';
import sectionThreeAiSolutionsImage from '../Mockaps/Photo 2.jpeg';
import sectionThreeWebPlatformsImage from '../Mockaps/Photo 3.jpeg';
import teamPhoto1 from '../Mockaps/Khil-Margarita.png';
import brandLogo from './assets/logo-main.png';
import sectionThreeMobileAppImage from './assets/section-three-mobile-app-v2.png';
import wizverseImage from '../Mockaps/Wizverse.png';
import meditationAppImage from '../Mockaps/App.png';
import fashionAppImage from '../Mockaps/Fashion.png';
import musicPlatformImage from '../Mockaps/Music New.png';
import sectionThreeStartupProductsImage from './assets/section-three-startup-products.png';
import './second-page.css';

function StatCounter({ endValue, suffix, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let controls;
    const timer = setTimeout(() => {
      controls = animate(0, endValue, {
        duration: 1,
        ease: [0.22, 0.61, 0.36, 1],
        onUpdate: (v) => setDisplayValue(Math.round(v)),
      });
    }, delay * 1000);
    return () => {
      clearTimeout(timer);
      controls?.stop();
    };
  }, [isInView, endValue, delay]);

  return (
    <span ref={ref} className="team-stat-value">
      {displayValue}{suffix}
    </span>
  );
}

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

const CASES = [
  { id: '1', title: 'Wizverse Game', subtitle: 'Immersive gaming experience', image: wizverseImage },
  { id: '2', title: 'Meditation App', subtitle: 'Advancing mental wellness', image: meditationAppImage },
  { id: '3', title: 'Fashion App', subtitle: 'Luxury fashion shopping experience', image: fashionAppImage },
  { id: '4', title: 'Music Web Platform', subtitle: 'AI-powered music creation platform', image: musicPlatformImage },
];

const TEAM = [
  {
    id: '1',
    image: teamPhoto1,
    quote:
      "Building Integrior is about creating products that genuinely solve real problems, not just look good. We focus on clarity, strategy, and thoughtful execution to deliver real impact and measurable business results. The goal is simple. Build products that drive growth and create lasting value.",
    name: 'Khil Margarita',
    position: 'CEO & Founder',
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [activePoint, setActivePoint] = useState(0);
  const [casesCanScrollLeft, setCasesCanScrollLeft] = useState(false);
  const [casesCanScrollRight, setCasesCanScrollRight] = useState(true);
  const [teamCanScrollLeft, setTeamCanScrollLeft] = useState(false);
  const [teamCanScrollRight, setTeamCanScrollRight] = useState(true);
  const casesScrollRef = useRef(null);
  const teamScrollRef = useRef(null);

  const updateTeamScrollState = () => {
    const el = teamScrollRef.current;
    if (!el) return;
    setTeamCanScrollLeft(el.scrollLeft > 4);
    setTeamCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  const updateCasesScrollState = () => {
    const el = casesScrollRef.current;
    if (!el) return;
    setCasesCanScrollLeft(el.scrollLeft > 4);
    setCasesCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % ROTATING_LINES.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = casesScrollRef.current;
    if (!el) return;
    updateCasesScrollState();
    const ro = new ResizeObserver(updateCasesScrollState);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = teamScrollRef.current;
    if (!el) return;
    updateTeamScrollState();
    const ro = new ResizeObserver(updateTeamScrollState);
    ro.observe(el);
    return () => ro.disconnect();
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
          aria-label="Integrior logo"
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
            <span className="btn-arrow" aria-hidden="true">↗</span>
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
              Work with us <span className="btn-arrow" aria-hidden="true">↗</span>
            </button>
          </div>
        </div>

        <div className="second-copy-col">
          <motion.div
            className="second-copy-col-inner"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2, delayChildren: 0.25 } },
              hidden: {},
            }}
          >
            <motion.p
              className="second-lead"
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
            >
              We turn ambitious ideas into innovative digital products from concept to{' '}
              <span style={{ whiteSpace: 'nowrap' }}>launch <Rocket className="second-lead-icon" aria-hidden="true" /></span>
            </motion.p>
            <motion.ul
              className="second-services"
              variants={{
                visible: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
                hidden: {},
              }}
            >
              {SERVICES.map(({ label, Icon }) => (
                <motion.li
                  key={label}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  <Icon className="second-service-icon" aria-hidden="true" />
                  <span>{label}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.a
              href="#"
              className="second-link"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.95, ease: [0.22, 0.61, 0.36, 1] }}
            >
              View all services <span className="btn-arrow" aria-hidden="true">↗</span>
            </motion.a>
          </motion.div>
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
        <div className="section-three-cta-wrap">
          <button type="button" className="section-three-cta">
            All services <span className="btn-arrow" aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </section>

    <section id="cases" className="section-cases">
      <div className="cases-inner">
        <div className="cases-left">
          <h2 className="cases-headline">Products We Have Built</h2>
          <p className="cases-description">
            Explore digital products and platforms created by Integrior.
          </p>
          <a href="#" className="cases-cta">
            View All <span className="btn-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="cases-right">
          <div
            className="cases-carousel"
            ref={casesScrollRef}
            onScroll={updateCasesScrollState}
          >
            {CASES.map((item, i) => (
              <article key={item.id} className={`cases-card${i === 0 ? ' cases-card-first' : ''}`}>
                <div className="cases-card-image-wrap">
                  <img src={item.image} alt={item.subtitle} loading="lazy" className="cases-card-image" />
                </div>
                <div className="cases-card-info">
                  <span className="cases-card-title">{item.title}</span>
                  <h3 className="cases-card-subtitle">{item.subtitle}</h3>
                </div>
              </article>
            ))}
          </div>
          {casesCanScrollLeft && (
            <button
              type="button"
              className="cases-scroll-btn cases-scroll-btn-prev"
              aria-label="Scroll carousel back"
              onClick={() => {
                if (casesScrollRef.current) {
                  const el = casesScrollRef.current;
                  const card = el.querySelector('.cases-card');
                  const gap = parseFloat(getComputedStyle(el).gap) || 24;
                  const amount = card ? card.offsetWidth + gap : 344;
                  el.scrollBy({ left: -amount, behavior: 'smooth' });
                }
              }}
            >
              <ArrowLeft aria-hidden="true" />
            </button>
          )}
          {casesCanScrollRight && (
            <button
              type="button"
              className="cases-scroll-btn cases-scroll-btn-next"
              aria-label="Scroll carousel forward"
              onClick={() => {
                if (casesScrollRef.current) {
                  const el = casesScrollRef.current;
                  const card = el.querySelector('.cases-card');
                  const gap = parseFloat(getComputedStyle(el).gap) || 24;
                  const amount = card ? card.offsetWidth + gap : 344;
                  el.scrollBy({ left: amount, behavior: 'smooth' });
                }
              }}
            >
              <ArrowRight aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </section>

    <section id="team" className="section-team">
      <div className="team-inner">
        <div className="team-left">
          <p className="team-eyebrow">Where we've been</p>
          <h2 className="team-title">We take pride in delivering high quality solutions that consistently exceed expectations.</h2>
          <motion.div
            className="team-stats"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.28, delayChildren: 0.35 } },
              hidden: {},
            }}
          >
            <motion.div
              className="team-stat"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.85, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <StatCounter endValue={6} suffix="+ years" delay={0.35} />
              <span className="team-stat-desc">Agency history</span>
            </motion.div>
            <motion.div
              className="team-stat"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.85, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <StatCounter endValue={51} suffix="+" delay={0.63} />
              <span className="team-stat-label">Projects delivered</span>
            </motion.div>
            <motion.div
              className="team-stat"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.85, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <StatCounter endValue={10} suffix="+" delay={0.91} />
              <span className="team-stat-label">Rockstar staff</span>
            </motion.div>
          </motion.div>
        </div>
        <div className="team-right">
          <div
            className="team-carousel"
            ref={teamScrollRef}
            onScroll={updateTeamScrollState}
          >
            {TEAM.map((member) => (
              <article key={member.id} className="team-card">
                <div className="team-card-image-wrap">
                  <img src={member.image} alt={member.name} loading="lazy" className="team-card-image" />
                </div>
                <div className="team-card-info">
                  <blockquote className="team-card-quote">"{member.quote}"</blockquote>
                  <p className="team-card-name">{member.name}</p>
                  <p className="team-card-position">{member.position}</p>
                </div>
              </article>
            ))}
          </div>
          {teamCanScrollLeft && (
            <button
              type="button"
              className="team-scroll-btn team-scroll-btn-prev"
              aria-label="Previous team member"
              onClick={() => {
                if (teamScrollRef.current) {
                  const w = teamScrollRef.current.clientWidth;
                  const amount = w < 500 ? w : 320;
                  teamScrollRef.current.scrollBy({ left: -amount, behavior: 'smooth' });
                }
              }}
            >
              <ArrowLeft aria-hidden="true" />
            </button>
          )}
          {teamCanScrollRight && (
            <button
              type="button"
              className="team-scroll-btn team-scroll-btn-next"
              aria-label="Next team member"
              onClick={() => {
                if (teamScrollRef.current) {
                  const w = teamScrollRef.current.clientWidth;
                  const amount = w < 500 ? w : 320;
                  teamScrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
                }
              }}
            >
              <ArrowRight aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </section>

    <section id="contact" className="section-contact">
      <div className="section-contact-inner">
        <p className="section-contact-eyebrow">Let's talk —</p>
        <h2 className="section-contact-title">We'd love to hear about your project</h2>
        <a href="#" className="section-contact-cta">
          Start a Project <span className="btn-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
    </>
  );
}
