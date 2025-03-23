import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import logo from '../assets/img/logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Navigation links data to avoid repetition
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/programs', label: 'Programs' },
    { to: '/appointment', label: 'Appointment' },
    { to: '/blog', label: 'Blog' },
    { to: '/success-stories', label: 'Success Stories' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/career', label: 'Career' },
    { to: '/our-team', label: 'Our Team' },
    { to: '/contact-us', label: 'Contact Us' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const NavLink = ({ to, label }) => (
    <Link
      to={to}
      className={`font-medium ${
        location.pathname === to ? 'text-[#22C55E]' : 'text-gray-700'
      } hover:text-[#22C55E] transition-colors`}
      onClick={() => setIsMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.1)] ${
        scrolled ? 'bg-white/95 shadow-md' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 md:px-10 py-2 h-[92px] flex items-center justify-between relative">
        {/* Mobile menu button */}
        <button
          className="xl:hidden p-2 rounded-md"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Logo - Centered on mobile, left on desktop */}
        <div className="absolute left-1/2 transform -translate-x-1/2 xl:static xl:transform-none xl:left-0">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-[82px] w-auto md:ml-10" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-6 ml-auto">
          {navLinks.map(link => (
            <NavLink key={link.to} to={link.to} label={link.label} />
          ))}
          <button
            className="text-gray-700 hover:text-[#22C55E] transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu - Separate from main layout flow */}
      {isMenuOpen && (
        <div className="xl:hidden absolute top-[92px] left-0 right-0 bg-white shadow-md z-50 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-4 space-y-3">
            {navLinks.map(link => (
              <NavLink key={link.to} to={link.to} label={link.label} />
            ))}
            <div className="border-t pt-2">
              <button className="flex items-center text-gray-700 hover:text-[#22C55E] transition-colors">
                <Search size={20} className="mr-2" /> Search
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
