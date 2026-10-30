
import { useState } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  'Inbound Call Center Services',
  'Outbound Call Center Services',
  'Customer Support Services',
  'Help Desk Services',
  'Telemarketing Services',
  'Appointment Setting Services',
  'Answering Services',
  'Call Center Consulting Services',
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <p>
            Your trusted partner for customer experience
          </p>

          <a href="mailto:info@intraciatechnologies.com">
            info@intraciatechnologies.com
          </a>
        </div>
      </div>

      <nav className="navbar container">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Intracia Technologies home"
        >
          <img
            src="https://intraciatechnologies.com/wp-content/uploads/2024/04/cropped-Intracia_Tech_Logo-removebg-preview.png"
            alt="Intracia Technologies"
          />
        </a>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <div className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About Us
          </a>

          <div className="nav-dropdown">
            <button
              className="nav-dropdown-trigger"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown size={15} />
            </button>

            <div
              className={`dropdown-menu ${
                servicesOpen ? 'dropdown-open' : ''
              }`}
            >
              {services.map((service) => (
                <a
                  href="#services"
                  key={service}
                  onClick={closeMenu}
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          <a href="#industries" onClick={closeMenu}>
            Industries
          </a>

          <a href="#process" onClick={closeMenu}>
            Our Process
          </a>

          <a href="#contact" onClick={closeMenu}>
            Careers
          </a>

          <a
            href="#contact"
            className="nav-contact"
            onClick={closeMenu}
          >
            Let's Talk
            <ArrowUpRight size={17} />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
