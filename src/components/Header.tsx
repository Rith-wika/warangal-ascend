import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/warangal-rising-logo.png';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Vision & Mission', href: '/vision' },
  {
    label: 'The Rising',
    href: '/rising',
    children: [
      { label: 'Warangal Rising', href: '/rising/warangal' },
      { label: 'Urban Rising', href: '/rising/urban' },
      { label: 'Women Rising', href: '/rising/women' },
      { label: 'Farmers Rising', href: '/rising/farmers' },
      { label: 'Youth Rising', href: '/rising/youth' },
      { label: 'Industry Rising', href: '/rising/industry' },
    ],
  },
  {
    label: 'Economy & Growth',
    href: '/economy',
    children: [
      { label: '$1 Trillion Vision', href: '/economy/vision' },
      { label: 'Investments', href: '/economy/investments' },
    ],
  },
  {
    label: "People's Welfare",
    href: '/welfare',
    children: [
      { label: 'Housing Initiative', href: '/welfare/housing' },
      { label: 'Skill & Jobs Programs', href: '/welfare/skills' },
      { label: 'Social Justice Initiatives', href: '/welfare/justice' },
    ],
  },
  { label: 'Stories', href: '/stories' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Warangal Rising" className="h-14 w-auto" />
            <div className="hidden sm:block">
              <span className="text-cream font-display text-xl font-bold block leading-tight">
                WARANGAL
              </span>
              <span className="text-gold text-sm font-semibold tracking-wider">
                RISING
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium text-cream hover:text-gold transition-colors flex items-center gap-1 ${
                    location.pathname === item.href ? 'text-gold' : ''
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-primary border border-cream/10 rounded-lg shadow-lg overflow-hidden animate-fade-in">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-3 text-sm text-cream hover:bg-cream/10 hover:text-gold transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Language Toggle & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-cream text-sm font-medium hover:text-gold transition-colors">
              EN | తెలుగు
            </button>
            <Button variant="hero" size="sm">
              Summit 2025
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-cream"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className={`block px-4 py-3 text-cream hover:text-gold hover:bg-cream/5 rounded-lg transition-colors ${
                      location.pathname === item.href ? 'text-gold bg-cream/5' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 border-l-2 border-gold/30">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-cream/80 hover:text-gold transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-cream/10 flex flex-col gap-3">
              <button className="text-cream text-sm font-medium">EN | తెలుగు</button>
              <Button variant="hero" className="w-full">
                Summit 2025
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
