import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/warangal-rising-logo.png';

const footerLinks = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'Vision & Mission', href: '/vision' },
    { label: 'The Rising', href: '/rising' },
    { label: 'Stories', href: '/stories' },
  ],
  initiatives: [
    { label: 'Urban Rising', href: '/rising/urban' },
    { label: 'Women Rising', href: '/rising/women' },
    { label: 'Youth Rising', href: '/rising/youth' },
    { label: 'Industry Rising', href: '/rising/industry' },
  ],
  economy: [
    { label: '$1 Trillion Vision', href: '/economy/vision' },
    { label: 'Investments', href: '/economy/investments' },
    { label: 'Housing Initiative', href: '/welfare/housing' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Warangal Rising" className="h-16 w-auto" />
              <div>
                <span className="text-cream font-display text-2xl font-bold block leading-tight">
                  WARANGAL
                </span>
                <span className="text-gold text-sm font-semibold tracking-wider">
                  RISING
                </span>
              </div>
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed mb-6 max-w-md">
              Warangal Rising is a vision to transform the historic city into a thriving hub of
              innovation, industry, and inclusive growth. Together, we build a brighter future.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-cream/70">
                <MapPin className="h-4 w-4 text-gold" />
                <span>Warangal, Telangana, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-cream/70">
                <Mail className="h-4 w-4 text-gold" />
                <span>info@warangalrising.gov.in</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-cream/70">
                <Phone className="h-4 w-4 text-gold" />
                <span>+91 870 XXX XXXX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-cream/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Initiatives */}
          <div>
            <h4 className="font-display text-lg font-bold text-gold mb-4">Initiatives</h4>
            <ul className="space-y-2">
              {footerLinks.initiatives.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-cream/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Economy */}
          <div>
            <h4 className="font-display text-lg font-bold text-gold mb-4">Economy</h4>
            <ul className="space-y-2">
              {footerLinks.economy.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-cream/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-cream/60">
              © {new Date().getFullYear()} Warangal Rising. All rights reserved.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-cream/60 hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm text-cream/60">
              <Link to="/privacy" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-gold transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
