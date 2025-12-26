import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Building, Briefcase, GraduationCap, Home } from 'lucide-react';

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    icon: <TrendingUp className="h-8 w-8" />,
    value: '$1T',
    label: 'Economy by 2034',
  },
  {
    icon: <Users className="h-8 w-8" />,
    value: '1000+',
    label: 'Global Delegates',
  },
  {
    icon: <Building className="h-8 w-8" />,
    value: '500+',
    label: 'Partner Companies',
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    value: '50K+',
    label: 'New Jobs Created',
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    value: '100K+',
    label: 'Youth Skilled',
  },
  {
    icon: <Home className="h-8 w-8" />,
    value: '25K+',
    label: 'Houses Built',
  },
];

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 navy-gradient">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-cream/10 flex items-center justify-center text-gold mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="font-display text-3xl md:text-4xl font-bold text-cream mb-2">
                {stat.value}
              </div>
              <div className="text-cream/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
