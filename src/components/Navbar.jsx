import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import logo from '../assets/img/logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Get current location

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`sticky shadow-[0_4px_10px_rgba(0,0,0,0.1)] top-0 z-50 transition-all duration-300 md:px-10 ${
        scrolled ? 'bg-white/95 shadow-md' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 py-2 h-[92px] flex items-center justify-between relative">
        {/* Mobile menu button on the left (only for sm to lg) */}
        <button
          className="absolute left-4 lg:left-4 xl:hidden p-2 rounded-md"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Logo - Centered for sm to lg, left-aligned for xl and above */}
        <Link
          to="/"
          className="absolute left-1/2 transform -translate-x-1/2 lg:left-1/2 xl:left-0 xl:translate-x-0"
        >
          <img src={logo} alt="Logo" className="h-[82px] w-auto" />
        </Link>

        {/* Desktop Navigation (only for xl screens and above) */}
        <nav className="hidden xl:flex items-center space-x-6 ml-auto">
          <Link
            to="/"
            className={`font-medium ${
              location.pathname === '/' ? 'text-[#22C55E]' : 'text-gray-700'
            }`}
          >
            Home
          </Link>
          <Link
            to="/programs"
            className={`font-medium ${
              location.pathname === '/programs'
                ? 'text-[#22C55E]'
                : 'text-gray-700'
            }`}
          >
            Programs
          </Link>
          <Link
            to="/appointment"
            className={`font-medium ${
              location.pathname === '/appointment'
                ? 'text-[#22C55E]'
                : 'text-gray-700'
            }`}
          >
            Appointment
          </Link>
          <Link
            to="/blog"
            className={`font-medium ${
              location.pathname === '/blog' ? 'text-[#22C55E]' : 'text-gray-700'
            }`}
          >
            Blog
          </Link>
          <Link
            to="/success-stories"
            className={`font-medium ${
              location.pathname === '/success-stories'
                ? 'text-[#22C55E]'
                : 'text-gray-700'
            }`}
          >
            Success Stories
          </Link>
          <Link
            to="/portfolio"
            className={`font-medium ${
              location.pathname === '/portfolio'
                ? 'text-[#22C55E]'
                : 'text-gray-700'
            }`}
          >
            Portfolio
          </Link>
          <Link
            to="/career"
            className={`font-medium ${
              location.pathname === '/career'
                ? 'text-[#22C55E]'
                : 'text-gray-700'
            }`}
          >
            Career
          </Link>
          <Link
            to="/our-team"
            className={`font-medium ${
              location.pathname === '/our-team'
                ? 'text-[#22C55E]'
                : 'text-gray-700'
            }`}
          >
            Our Team
          </Link>
          <Link
            to="/contact-us"
            className={`font-medium ${
              location.pathname === '/contact-us'
                ? 'text-[#22C55E]'
                : 'text-gray-700'
            }`}
          >
            Contact Us
          </Link>
          <button
            className="text-gray-700 hover:text-primary"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="xl:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50">
            <div className="flex flex-col p-4 space-y-3">
              <Link
                to="/"
                className={`font-medium py-2 ${
                  location.pathname === '/' ? 'text-[#22C55E]' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link
                to="/programs"
                className={`font-medium py-2 ${
                  location.pathname === '/programs'
                    ? 'text-[#22C55E]'
                    : 'text-gray-700'
                }`}
              >
                Programs
              </Link>
              <Link
                to="/appointment"
                className={`font-medium py-2 ${
                  location.pathname === '/appointment'
                    ? 'text-[#22C55E]'
                    : 'text-gray-700'
                }`}
              >
                Appointment
              </Link>
              <Link
                to="/blog"
                className={`font-medium py-2 ${
                  location.pathname === '/blog'
                    ? 'text-[#22C55E]'
                    : 'text-gray-700'
                }`}
              >
                Blog
              </Link>
              <Link
                to="/success-stories"
                className={`font-medium py-2 ${
                  location.pathname === '/success-stories'
                    ? 'text-[#22C55E]'
                    : 'text-gray-700'
                }`}
              >
                Success Stories
              </Link>
              <Link
                to="/portfolio"
                className={`font-medium py-2 ${
                  location.pathname === '/portfolio'
                    ? 'text-[#22C55E]'
                    : 'text-gray-700'
                }`}
              >
                Portfolio
              </Link>
              <Link
                to="/career"
                className={`font-medium py-2 ${
                  location.pathname === '/career'
                    ? 'text-[#22C55E]'
                    : 'text-gray-700'
                }`}
              >
                Career
              </Link>
              <Link
                to="/our-team"
                className={`font-medium py-2 ${
                  location.pathname === '/our-team'
                    ? 'text-[#22C55E]'
                    : 'text-gray-700'
                }`}
              >
                Our Team
              </Link>
              <Link
                to="/contact-us"
                className={`font-medium py-2 ${
                  location.pathname === '/contact-us'
                    ? 'text-[#22C55E]'
                    : 'text-gray-700'
                }`}
              >
                Contact Us
              </Link>
              <div className="border-t pt-2">
                <button className="flex items-center text-gray-700 hover:text-primary">
                  <Search size={20} className="mr-2" /> Search
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
