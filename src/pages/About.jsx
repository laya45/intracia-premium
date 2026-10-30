
import {
  ArrowRight,
  CheckCircle2,
  Headset,
  TrendingUp,
  ShieldCheck,
  Users,
} from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Experienced Team',
    description:
      'Skilled professionals focused on delivering reliable customer experiences.',
  },
  {
    icon: TrendingUp,
    title: 'Flexible Scaling',
    description:
      'Adapt your support operations as your business grows and evolves.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality & Security',
    description:
      'Structured processes designed to support service quality and data protection.',
  },
  {
    icon: Headset,
    title: 'Customer-First Support',
    description:
      'Create meaningful customer interactions across support channels.',
  },
];

function About() {
  return (
    <section className="about-section section" id="about">
      <div className="container about-container">
        {/* LEFT SIDE */}
        <div className="about-visual">
          <div className="about-image-main">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
              alt="Customer service team working together"
              loading="lazy"
            />
          </div>

          <div className="about-image-accent"></div>

          <div className="about-experience-card">
            <div className="about-experience-icon">
              <Headset size={25} />
            </div>

            <div>
              <strong>Customer Experience</strong>
              <p>Support that puts people first</p>
            </div>
          </div>

          <div className="about-image-label">
            <span className="about-label-dot"></span>
            BUSINESS PROCESS OUTSOURCING
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-content">
          <span className="section-label">
            ABOUT INTRACIA TECHNOLOGIES
          </span>

          <h2 className="section-title">
            Simplifying Business Operations.
            <span className="about-title-accent">
              {' '}Strengthening Customer Relationships.
            </span>
          </h2>

          <p className="section-description">
            Managing customer support in-house can bring challenges
            such as staffing, training, operating costs, and changing
            customer demands. Intracia Technologies helps businesses
            address these challenges through business process
            outsourcing and customer support solutions.
          </p>

          <p className="about-second-description">
            Our approach focuses on dependable service, flexible
            support operations, and customer interactions that help
            businesses build stronger relationships with their audiences.
          </p>

          <div className="about-benefits">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div className="about-benefit" key={benefit.title}>
                  <div className="about-benefit-icon">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <a href="#services" className="btn btn-primary about-button">
            Discover Our Solutions
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* BOTTOM FEATURE STRIP */}
      <div className="container about-feature-strip">
        <div className="about-feature">
          <CheckCircle2 size={19} />
          <span>Cost-conscious operations</span>
        </div>

        <div className="about-feature">
          <CheckCircle2 size={19} />
          <span>Flexible support solutions</span>
        </div>

        <div className="about-feature">
          <CheckCircle2 size={19} />
          <span>Customer-focused service</span>
        </div>

        <div className="about-feature">
          <CheckCircle2 size={19} />
          <span>Continuous improvement</span>
        </div>
      </div>
    </section>
  );
}

export default About;
