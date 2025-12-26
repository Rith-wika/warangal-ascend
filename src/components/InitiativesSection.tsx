import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Building2, Sprout, Lightbulb, Factory, Heart } from 'lucide-react';

interface Initiative {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  color: string;
}

const initiatives: Initiative[] = [
  {
    icon: <Building2 className="h-8 w-8" />,
    title: 'Warangal Rising',
    description: 'The comprehensive vision for transforming Warangal into a global destination.',
    href: '/rising/warangal',
    color: 'bg-primary',
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: 'Urban Rising',
    description: 'Smart city initiatives and modern infrastructure development.',
    href: '/rising/urban',
    color: 'bg-burgundy',
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Women Rising',
    description: 'Empowering women through education, entrepreneurship, and leadership.',
    href: '/rising/women',
    color: 'bg-gold',
  },
  {
    icon: <Sprout className="h-8 w-8" />,
    title: 'Farmers Rising',
    description: 'Agricultural innovation and sustainable farming practices.',
    href: '/rising/farmers',
    color: 'bg-primary',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Youth Rising',
    description: 'Skills development, jobs, and opportunities for the next generation.',
    href: '/rising/youth',
    color: 'bg-burgundy',
  },
  {
    icon: <Factory className="h-8 w-8" />,
    title: 'Industry Rising',
    description: 'Industrial growth, investments, and manufacturing excellence.',
    href: '/rising/industry',
    color: 'bg-gold',
  },
];

export function InitiativesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl text-primary font-bold mb-4">
            The <span className="text-gold">Rising</span> Initiatives
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive programs designed to uplift every sector and citizen of Warangal
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((initiative, index) => (
            <Link
              key={initiative.title}
              to={initiative.href}
              className={`group block transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-card rounded-2xl p-6 shadow-md border border-border card-hover h-full flex flex-col">
                <div
                  className={`w-14 h-14 rounded-xl ${initiative.color} flex items-center justify-center text-cream mb-5`}
                >
                  {initiative.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-card-foreground mb-3 group-hover:text-gold transition-colors">
                  {initiative.title}
                </h3>
                <p className="text-muted-foreground flex-1 mb-4">{initiative.description}</p>
                <div className="flex items-center text-gold font-semibold group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
