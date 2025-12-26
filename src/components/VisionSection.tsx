import { useEffect, useRef, useState } from 'react';
import { Building2, Factory, Wheat } from 'lucide-react';
import heroSlide1 from '@/assets/hero-slide-1.jpg';

interface VisionCard {
  icon: React.ReactNode;
  title: string;
  acronym: string;
  description: string;
}

const visionCards: VisionCard[] = [
  {
    icon: <Building2 className="h-10 w-10" />,
    title: 'Core Urban Region Economy',
    acronym: 'CURE',
    description: 'The hub for high-value services, technology, innovation, and urban economic engines.',
  },
  {
    icon: <Factory className="h-10 w-10" />,
    title: 'Peri-Urban Region Economy',
    acronym: 'PURE',
    description: 'The zone that will drive large-scale manufacturing, industrial growth, and production infrastructure.',
  },
  {
    icon: <Wheat className="h-10 w-10" />,
    title: 'Rural and Agri Region Economy',
    acronym: 'RARE',
    description: 'The foundation for agriculture, food systems, and rural production-led prosperity.',
  },
];

export function VisionSection() {
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
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroSlide1})` }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl text-primary font-bold mb-4">
            Vision for <span className="text-gold">Warangal</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Warangal's vision is to become a{' '}
            <span className="text-burgundy font-bold">$1 trillion economy by 2034</span> and a{' '}
            <span className="text-burgundy font-bold">$3 trillion SGDP by 2047</span>, when India
            celebrates 100 years of Independence.
          </p>
        </div>

        {/* Vision Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {visionCards.map((card, index) => (
            <div
              key={card.acronym}
              className={`bg-card rounded-2xl p-8 shadow-lg card-hover border border-border transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                {card.icon}
              </div>
              <span className="inline-block px-3 py-1 bg-gold/20 text-gold rounded-full text-sm font-bold mb-3">
                {card.acronym}
              </span>
              <h3 className="font-display text-xl font-bold text-card-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
