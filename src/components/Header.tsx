import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MemberSelectionModal } from './registration/MemberSelectionModal';
import { AttendeeDetailsModal } from './registration/AttendeeDetailsModal';
import { toast } from 'sonner';
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
    href: '#',
    children: [
      { label: 'Warangal Rising', href: '/rising/warangal' },
      { label: 'Urban Rising', href: '/rising/urban' },
      { label: 'Women Rising', href: '/rising/women' },
      { label: 'Farmers Rising', href: '/rising/farmers' },
      { label: 'Youth Rising', href: '/rising/youth' },
    ],
  },
  {
    label: 'Economy & Growth',
    href: '#',
    children: [
      { label: '$1 Trillion Vision', href: '/economy/vision' },
      { label: 'Investments', href: '/economy/investments' },
    ],
  },
  {
    label: "People Welfare",
    href: '#',
    children: [
      { label: 'Housing Initiative', href: '/welfare/housing' },
      { label: 'Social Justice Initiatives', href: '/welfare/justice' },
    ],
  },
  { label: 'Stories', href: '/stories' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  // Registration Flow State
  const [isMemberSelectionOpen, setIsMemberSelectionOpen] = useState(false);
  const [isAttendeeDetailsOpen, setIsAttendeeDetailsOpen] = useState(false);
  const [memberCount, setMemberCount] = useState(1);

  const location = useLocation();
  const navigate = useNavigate();

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
    setMobileDropdown(null);
  }, [location.pathname]);

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdown(mobileDropdown === label ? null : label);
  };

  const handleRegisterClick = () => {
    setIsMemberSelectionOpen(true);
    setIsMobileMenuOpen(false);
  }

  const handleMemberSelectionProceed = (count: number) => {
    setMemberCount(count);
    setIsMemberSelectionOpen(false);
    setTimeout(() => setIsAttendeeDetailsOpen(true), 150); // Small delay for smooth transition
  }

  const handleAttendeeDetailsSubmit = (data: any) => {
    setIsAttendeeDetailsOpen(false);
    toast.info("Please Wait", {
      description: "We’re redirecting you to payment...",
      duration: 2000,
    });

    setTimeout(() => {
      navigate('/payment', { state: { attendees: data.attendees, count: memberCount } });
    }, 1500);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
        ? 'bg-primary shadow-lg py-2'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Warangal Rising" className="h-20 w-22" />
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
                  className={`px-4 py-2 text-sm font-medium text-cream hover:text-gold transition-colors flex items-center gap-1 ${location.pathname === item.href ? 'text-gold' : ''
                    }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-4 w-4" />}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-0 w-64 bg-white border border-gray-200 rounded-md shadow-xl overflow-hidden animate-in fade-in duration-75 origin-top-left z-50 py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-2 text-base font-normal text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition-none"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Register Button Desktop */}
            <Button
              onClick={handleRegisterClick}
              className="ml-4 bg-gold hover:bg-gold/90 text-primary font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              Register Now
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
          <div className="lg:hidden mt-4 pb-6 h-screen overflow-y-auto bg-primary">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-white/10 last:border-0">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(item.label)}
                        className="w-full flex items-center justify-between px-4 py-4 text-cream hover:bg-white/5 transition-colors"
                      >
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-200 ${mobileDropdown === item.label ? 'rotate-180' : ''
                            }`}
                        />
                      </button>

                      {/* Sub-menu items */}
                      <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === item.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                        <div className="bg-black/20 py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              className="block px-8 py-3 text-sm text-cream/90 hover:text-gold"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-4 py-4 text-cream font-medium hover:bg-white/5 ${location.pathname === item.href ? 'text-gold' : ''
                        }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Register Button Mobile */}
              <div className="p-4">
                <Button
                  onClick={handleRegisterClick}
                  className="w-full bg-gold hover:bg-gold/90 text-primary font-bold shadow-lg"
                >
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Registration Modals */}
        <MemberSelectionModal
          isOpen={isMemberSelectionOpen}
          onClose={() => setIsMemberSelectionOpen(false)}
          onProceed={handleMemberSelectionProceed}
        />

        <AttendeeDetailsModal
          isOpen={isAttendeeDetailsOpen}
          onClose={() => setIsAttendeeDetailsOpen(false)}
          count={memberCount}
          onSubmit={handleAttendeeDetailsSubmit}
        />

      </div>
    </header>
  );
}
