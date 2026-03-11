import heroVideo from '../Mockaps/AZr-2xR-XmdCMCCPjuJ3Cw-AZr-2xR-HPhs_L2nyekk4A.mp4';
import './second-page.css';

const services = [
  'Tech Development',
  'Product Design',
  'AI Solutions',
  'Growth Marketing',
  'Digital Transformation',
];

export default function SecondPage() {
  return (
    <section className="second-page">
      <svg className="mask-defs" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="halfUClip" clipPathUnits="objectBoundingBox">
            <path d="M0.34 0H1V0.8C1 0.93 0.93 1 0.8 1H0V0.58H0.34Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="second-grid">
        <div className="second-video-col">
          <div className="second-video-shell">
            <video
              className="second-video"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="second-copy-col">
          <p className="second-lead">
            Drawing on decades of expertise, Integralist builds new products with innovative client
            partners.
          </p>
          <ul className="second-services">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
          <a href="#" className="second-link">
            View all services
          </a>
        </div>
      </div>
    </section>
  );
}
