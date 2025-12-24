import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Who It\'s For', path: '/who-its-for' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full py-4 px-6 lg:px-12 bg-background-light/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Eukora" className="h-10 w-10 object-contain" />
          <span className="text-2xl font-display font-bold text-darkblue tracking-tight">Eukora</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 font-semibold text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`hover:text-primary transition-colors ${
                isActive(link.path) ? 'text-primary' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-icons-round text-3xl text-slate-600">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-6 mt-4 border-t border-slate-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-semibold ${
                  isActive(link.path) ? 'text-primary' : 'text-slate-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
