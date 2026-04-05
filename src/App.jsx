import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, animate, motion, useInView } from 'framer-motion';
import {
  Activity,
  Apple,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  ClipboardList,
  Headphones,
  Layers,
  LayoutTemplate,
  Lightbulb,
  ListOrdered,
  Monitor,
  Package,
  Paintbrush,
  Palette,
  Pencil,
  Rocket,
  Smartphone,
  Tag,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import heroVideo from '../Mockaps/Video for website.mp4';
import sectionThreeAiSolutionsImage from '../Mockaps/Photo 2.jpeg';
import sectionThreeWebPlatformsImage from '../Mockaps/Photo 3.jpeg';
import teamPhoto1 from '../Mockaps/Khil-Margarita.png';
import brandLogo from './assets/logo-main.png';
import sectionThreeMobileAppImage from './assets/section-three-mobile-app-v2.png';
import wizverseImage from '../Mockaps/Wizverse.png';
import meditationAppImage from '../Mockaps/App.png';
import fashionAppImage from '../Mockaps/Fashion.png';
import fitnessAppCaseImage from '../Mockaps/Fitness App.png';
import sectionThreeStartupProductsImage from './assets/section-three-startup-products.png';
import partnerLogo1 from './assets/partner-logo-1.png';
import partnerLogo2 from './assets/partner-logo-2.png';
import partnerLogo3 from './assets/partner-logo-3.png';
import partnerLogo4 from './assets/partner-logo-4.png';
import partnerLogo5 from './assets/partner-logo-5.png';
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

const PARTNER_LOGOS = [
  { id: 'p1', src: partnerLogo1 },
  { id: 'p2', src: partnerLogo2 },
  { id: 'p3', src: partnerLogo3 },
  { id: 'p4', src: partnerLogo4 },
  { id: 'p5', src: partnerLogo5 },
];

const CASES = [
  { id: '1', title: 'Wizverse Game', subtitle: 'Immersive gaming experience', image: wizverseImage },
  { id: '2', title: 'Meditation App', subtitle: 'Advancing mental wellness', image: meditationAppImage },
  { id: '3', title: 'Fashion App', subtitle: 'Luxury fashion shopping experience', image: fashionAppImage },
  { id: '4', title: 'Fitness App', subtitle: 'Personalized workouts and meal plans', image: fitnessAppCaseImage },
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

const SDLC_EASE = [0.22, 0.61, 0.36, 1];

const CYCLE_TAG_ICONS = {
  'Product Audit': ClipboardList,
  'System Design': Layers,
  'Backlog Scoping': ListOrdered,
  'Product Discovery': Lightbulb,
  'Market Research': BarChart3,
  'Customer Development': Users,
  'Value Proposition Canvas': LayoutTemplate,
  'UX & UI Design': Palette,
  'Analytics Setup': Activity,
  'iOS App Development': Apple,
  'Android App Development': Smartphone,
  'Mobile App SDK Development': Package,
  'App Store Optimization (ASO)': TrendingUp,
  'Application Support': Headphones,
  'Mobile App Redesign': Paintbrush,
  'Growth Strategy': Rocket,
};

const SDLC_PHASES = [
  {
    roadmapStep: 1,
    title: 'Research & Preparation',
    description:
      'We define the problem space by analyzing the current product state, business goals, and constraints. This stage ensures alignment and sets a clear foundation for decision-making.',
    tags: ['Product Audit', 'System Design', 'Backlog Scoping'],
  },
  {
    roadmapStep: 2,
    title: 'Discovery & Design',
    description:
      'We translate insights into validated product concepts and design user-centric solutions. The focus is on defining a clear value proposition and intuitive user experience.',
    tags: ['Product Discovery', 'Market Research', 'Customer Development', 'Value Proposition Canvas'],
  },
  {
    roadmapStep: 2,
    title: 'User Journey & Analytics',
    description:
      'We design user flows and implement analytics to track key interactions, measure performance, and identify opportunities for optimization.',
    tags: ['UX & UI Design', 'Analytics Setup'],
  },
  {
    roadmapStep: 2,
    title: 'Software Development',
    description:
      'We build scalable and reliable product solutions, ensuring seamless integration and high quality through testing and controlled releases.',
    tags: ['iOS App Development', 'Android App Development', 'Mobile App SDK Development'],
  },
  {
    roadmapStep: 3,
    title: 'Product Scaling',
    description:
      'We continuously iterate based on data, user feedback, and business objectives, focusing on sustainable growth and performance improvement.',
    tags: ['App Store Optimization (ASO)', 'Application Support', 'Mobile App Redesign', 'Growth Strategy'],
  },
];

const SDLC_ROADMAP_GROUPS = [1, 2, 3].map((step) => ({
  step,
  phases: SDLC_PHASES.filter((p) => p.roadmapStep === step),
}));

const CALENDLY_BOOK_URL = 'https://calendly.com/khilrita2000/30min';

const HEADER_DRAWER_LINKS = [
  { label: 'Our Company', href: '#team' },
  { label: 'Our Expertise', href: '#section-three' },
  { label: 'Our Work', href: '#cases' },
  { label: 'Partners', href: '#partners' },
  { label: 'Our process', href: '#cycle' },
  { label: 'Contact', href: '#contact' },
  { label: 'Start a project', href: CALENDLY_BOOK_URL, external: true },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [activePoint, setActivePoint] = useState(0);
  const [casesCanScrollLeft, setCasesCanScrollLeft] = useState(false);
  const [casesCanScrollRight, setCasesCanScrollRight] = useState(true);
  const [teamCanScrollLeft, setTeamCanScrollLeft] = useState(false);
  const [teamCanScrollRight, setTeamCanScrollRight] = useState(true);
  const [cycleCanScrollLeft, setCycleCanScrollLeft] = useState(false);
  const [cycleCanScrollRight, setCycleCanScrollRight] = useState(true);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [contactSent, setContactSent] = useState(false);
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactError, setContactError] = useState(null);
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const lastScrollYRef = useRef(0);
  const casesScrollRef = useRef(null);
  const teamScrollRef = useRef(null);
  const cycleScrollRef = useRef(null);

  const formspreeFormId = import.meta.env.VITE_FORMSPREE_FORM_ID || 'mdappqkg';

  const handleContactChange = (field) => (e) => {
    setContactForm((prev) => ({ ...prev, [field]: e.target.value }));
    setContactError(null);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactError(null);

    if (!formspreeFormId?.trim()) {
      setContactError(
        'Form is not connected yet. Add VITE_FORMSPREE_FORM_ID to your .env file (see Formspree dashboard).',
      );
      return;
    }

    setContactSubmitting(true);
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeFormId.trim()}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          phone: contactForm.phone || '—',
          message: contactForm.message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || `Request failed (${res.status})`);
      }
      setContactSent(true);
    } catch (err) {
      setContactError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setContactSubmitting(false);
    }
  };

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

  const updateCycleScrollState = () => {
    const el = cycleScrollRef.current;
    if (!el) return;
    setCycleCanScrollLeft(el.scrollLeft > 4);
    setCycleCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
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

  useEffect(() => {
    const el = cycleScrollRef.current;
    if (!el) return;
    updateCycleScrollState();
    const ro = new ResizeObserver(updateCycleScrollState);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!navMenuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setNavMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [navMenuOpen]);

  useEffect(() => {
    const topThreshold = 24;
    const directionThreshold = 6;

    const onScroll = () => {
      const y = window.scrollY;
      const last = lastScrollYRef.current;
      const delta = y - last;
      lastScrollYRef.current = y;

      setHeaderScrolled(y > topThreshold);

      if (navMenuOpen) return;

      if (y <= topThreshold) {
        setHeaderHidden(false);
        return;
      }

      if (delta > directionThreshold) {
        setHeaderHidden(true);
      } else if (delta < -directionThreshold) {
        setHeaderHidden(false);
      }
    };

    lastScrollYRef.current = window.scrollY;
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [navMenuOpen]);

  return (
    <>
    <header
      className={`top-nav profile-header${navMenuOpen ? ' profile-header--menu-open' : ''}${headerScrolled ? ' profile-header--scrolled' : ''}${headerHidden && !navMenuOpen ? ' profile-header--hidden' : ''}`}
    >
      <nav className="top-nav-left profile-links" aria-label="Primary">
        <a href="#team">Our Company</a>
        <a href="#section-three">Our Expertise</a>
        <a href="#cases">Our Work</a>
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
        <a
          className="start-project profile-start"
          href={CALENDLY_BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Start a project
          <span className="btn-arrow" aria-hidden="true">↗</span>
        </a>
        <button
          type="button"
          className={`menu-btn${navMenuOpen ? ' menu-btn--open' : ''}`}
          aria-expanded={navMenuOpen}
          aria-controls="site-nav-drawer"
          aria-label={navMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setNavMenuOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>

    <div className="site-main">
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
            <a
              className="video-work-with-us second-video-cta"
              href={CALENDLY_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book consultation <span className="btn-arrow" aria-hidden="true">↗</span>
            </a>
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
              href={CALENDLY_BOOK_URL}
              className="second-link"
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.95, ease: [0.22, 0.61, 0.36, 1] }}
            >
              Book consultation <span className="btn-arrow" aria-hidden="true">↗</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      <section id="partners" className="section-partners section-partners--second" aria-labelledby="partners-heading">
        <div className="section-partners-inner">
          <p className="section-partners-eyebrow">Partners</p>
          <h2 id="partners-heading" className="section-partners-title">
            Partners Along the Way
          </h2>
          <div
            className="partners-marquee"
            role="region"
            aria-label="Partner logos"
          >
            <div className="partners-marquee-track">
              {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map(({ id, src }, i) => (
                <div key={`${id}-${i}`} className="partners-logo-wrap">
                  <img className="partners-logo" src={src} alt="" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
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
          <a
            href={CALENDLY_BOOK_URL}
            className="section-three-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book consultation <span className="btn-arrow" aria-hidden="true">↗</span>
          </a>
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

    <section id="cycle" className="section-cycle" aria-labelledby="cycle-heading">
      <motion.div
        className="section-cycle-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12, margin: '0px 0px -8% 0px' }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.14,
              delayChildren: 0.02,
            },
          },
        }}
      >
        <motion.h2
          id="cycle-heading"
          className="section-cycle-title"
          variants={{
            hidden: { opacity: 0, y: 22 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.55, ease: SDLC_EASE }}
        >
          Our software development life cycle
        </motion.h2>
        <motion.p
          className="section-cycle-lead"
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.48, ease: SDLC_EASE }}
        >
          A structured, end-to-end approach to building and scaling digital products.
        </motion.p>
        <div className="section-cycle-carousel-wrap">
          <motion.div
            ref={cycleScrollRef}
            className="section-cycle-cards"
            onScroll={updateCycleScrollState}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0,
                },
              },
            }}
          >
            {SDLC_ROADMAP_GROUPS.map((group) => (
              <motion.div
                key={group.step}
                className={`cycle-cards-group cycle-cards-group--step-${group.step}`}
                role="group"
                aria-labelledby="cycle-heading"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.12,
                    },
                  },
                }}
              >
                {group.phases.map((phase) => (
                  <motion.article
                    key={phase.title}
                    className="cycle-card"
                    variants={{
                      hidden: { opacity: 0, x: -32 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.52, ease: SDLC_EASE }}
                  >
                    <h3 className="cycle-card-title">{phase.title}</h3>
                    <p className="cycle-card-desc">{phase.description}</p>
                    <ul className="cycle-tags" aria-label={`${phase.title} focus areas`}>
                      {phase.tags.map((tag) => {
                        const Icon = CYCLE_TAG_ICONS[tag] ?? Tag;
                        return (
                          <li key={tag} className="cycle-tag">
                            <Icon className="cycle-tag-icon" aria-hidden="true" strokeWidth={2} />
                            <span className="cycle-tag-label">{tag}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.article>
                ))}
              </motion.div>
            ))}
          </motion.div>
          {cycleCanScrollLeft && (
            <button
              type="button"
              className="cycle-scroll-btn cycle-scroll-btn-prev"
              aria-label="Scroll phases back"
              onClick={() => {
                if (cycleScrollRef.current) {
                  const el = cycleScrollRef.current;
                  const card = el.querySelector('.cycle-card');
                  const gap = parseFloat(getComputedStyle(el).gap) || 16;
                  const amount = card ? card.offsetWidth + gap : 280;
                  el.scrollBy({ left: -amount, behavior: 'smooth' });
                }
              }}
            >
              <ArrowLeft aria-hidden="true" />
            </button>
          )}
          {cycleCanScrollRight && (
            <button
              type="button"
              className="cycle-scroll-btn cycle-scroll-btn-next"
              aria-label="Scroll phases forward"
              onClick={() => {
                if (cycleScrollRef.current) {
                  const el = cycleScrollRef.current;
                  const card = el.querySelector('.cycle-card');
                  const gap = parseFloat(getComputedStyle(el).gap) || 16;
                  const amount = card ? card.offsetWidth + gap : 280;
                  el.scrollBy({ left: amount, behavior: 'smooth' });
                }
              }}
            >
              <ArrowRight aria-hidden="true" />
            </button>
          )}
        </div>
      </motion.div>
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

    <section id="contact" className="section-contact" aria-labelledby="contact-heading">
      <div className="section-contact-inner">
        <span className="section-contact-badge">Free consultation</span>
        <h2 id="contact-heading" className="section-contact-title">
          Let&apos;s build your product together
        </h2>
        <p className="section-contact-lead">
          Tell us about your idea and we&apos;ll get back within 24 hours
        </p>

        {contactSent ? (
          <p className="section-contact-thanks" role="status">
            Thank you — we&apos;ll reach out shortly.
          </p>
        ) : (
          <form className="section-contact-form" onSubmit={handleContactSubmit}>
            <div className="section-contact-grid">
              <label className="section-contact-field">
                <span className="section-contact-label">
                  Name{' '}
                  <abbr className="section-contact-star" title="required">
                    *
                  </abbr>
                </span>
                <input
                  className="section-contact-input"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  aria-required="true"
                  value={contactForm.name}
                  onChange={handleContactChange('name')}
                />
              </label>
              <label className="section-contact-field">
                <span className="section-contact-label">
                  Email{' '}
                  <abbr className="section-contact-star" title="required">
                    *
                  </abbr>
                </span>
                <input
                  className="section-contact-input"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  aria-required="true"
                  value={contactForm.email}
                  onChange={handleContactChange('email')}
                />
              </label>
            </div>
            <label className="section-contact-field">
              <span className="section-contact-label">Phone number</span>
              <input
                className="section-contact-input"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+1 (555) 000-0000"
                value={contactForm.phone}
                onChange={handleContactChange('phone')}
              />
            </label>
            <label className="section-contact-field">
              <span className="section-contact-label">
                Message / Project description{' '}
                <abbr className="section-contact-star" title="required">
                  *
                </abbr>
              </span>
              <textarea
                className="section-contact-textarea"
                name="message"
                rows={5}
                required
                aria-required="true"
                value={contactForm.message}
                onChange={handleContactChange('message')}
              />
            </label>
            {contactError ? (
              <p className="section-contact-error" role="alert">
                {contactError}
              </p>
            ) : null}
            <button
              type="submit"
              className="section-contact-submit"
              disabled={contactSubmitting}
            >
              {contactSubmitting ? 'Sending…' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </section>

    </div>

    <AnimatePresence>
      {navMenuOpen
        ? [
            <motion.div
              key="nav-backdrop"
              className="nav-menu-backdrop"
              role="presentation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setNavMenuOpen(false)}
            />,
            <motion.nav
              key="nav-panel"
              id="site-nav-drawer"
              className="nav-menu-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Site sections"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <p className="nav-menu-panel-title">Menu</p>
              <ul className="nav-menu-list">
                {HEADER_DRAWER_LINKS.map(({ label, href, external }) => (
                  <li key={label}>
                    <a
                      className="nav-menu-link"
                      href={href}
                      {...(external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      onClick={() => setNavMenuOpen(false)}
                    >
                      {label}
                      {external ? (
                        <span className="nav-menu-link-arrow" aria-hidden="true">
                          ↗
                        </span>
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>,
          ]
        : null}
    </AnimatePresence>
    </>
  );
}
