import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

export function LeadershipSection() {
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
    <section ref={sectionRef} className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Quote Block */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <Quote className="h-12 w-12 text-gold mb-6" />
            <blockquote className="font-display text-3xl md:text-4xl text-foreground leading-relaxed mb-6">
              "The difficult we must do immediately. The impossible may take a little longer."
            </blockquote>
            <div className="border-l-4 border-gold pl-4">
              <p className="font-bold text-foreground text-lg">Warangal Leadership</p>
              <p className="text-muted-foreground">For the People of Warangal</p>
            </div>
          </div>

          {/* Vision Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-6">
              No one will be left behind
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Everybody in Warangal will have access to quality education, healthcare, 
                and a promise of sustainable livelihood. Nobody will be left behind.
              </p>
              <p>
                <span className="text-burgundy font-semibold">Only when people rise, Warangal will truly rise.</span>
              </p>
              <p>
                Dreaming big is just the beginning. What matters is achieving those dreams 
                within the next decade.
              </p>
              <p>
                It is possible to achieve a world-class Warangal that is the bluest, cleanest, 
                safest, and greenest city, filled with opportunities.
              </p>
              <p>
                A great government must welcome investments and wealth creation while ensuring 
                social justice and equitable distribution of wealth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
