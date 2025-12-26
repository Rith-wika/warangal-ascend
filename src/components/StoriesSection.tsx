import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';
import heroSlide4 from '@/assets/hero-slide-4.jpg';

interface Story {
  id: string;
  image: string;
  category: string;
  title: string;
  date: string;
  excerpt: string;
}

const stories: Story[] = [
  {
    id: '1',
    image: heroSlide4,
    category: 'Summit',
    title: 'Warangal Rising Summit 2025: A defining moment for investors and entrepreneurs',
    date: '26-12-2025',
    excerpt: 'The summit brought together over 1000 global delegates and 500+ companies to discuss investment opportunities.',
  },
  {
    id: '2',
    image: heroSlide3,
    category: 'Industry',
    title: 'Industrial corridor set to transform Warangal\'s economic landscape',
    date: '24-12-2025',
    excerpt: 'New industrial zone promises thousands of jobs and billions in investment.',
  },
  {
    id: '3',
    image: heroSlide2,
    category: 'Urban Development',
    title: 'Smart city initiatives bring modern infrastructure to historic Warangal',
    date: '22-12-2025',
    excerpt: 'Technology-driven urban planning creating sustainable growth opportunities.',
  },
];

export function StoriesSection() {
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
    <section ref={sectionRef} className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-primary font-bold mb-2">
              Stay connected:
            </h2>
            <p className="text-muted-foreground text-lg">
              Blog posts, key updates & more
            </p>
          </div>
          <Button variant="gold" asChild>
            <Link to="/stories">
              View All Stories
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Story */}
          <div
            className={`md:col-span-2 lg:col-span-1 lg:row-span-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <Link to={`/stories/${stories[0].id}`} className="group block h-full">
              <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                <img
                  src={stories[0].image}
                  alt={stories[0].title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-gold text-foreground rounded-full text-sm font-bold mb-3">
                    {stories[0].category}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-cream mb-3 group-hover:text-gold transition-colors">
                    {stories[0].title}
                  </h3>
                  <div className="flex items-center gap-2 text-cream/70 text-sm">
                    <Clock className="h-4 w-4" />
                    {stories[0].date}
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Other Stories */}
          {stories.slice(1).map((story, index) => (
            <div
              key={story.id}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              <Link to={`/stories/${story.id}`} className="group block">
                <div className="bg-card rounded-2xl overflow-hidden shadow-md card-hover border border-border">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-foreground rounded-full text-sm font-bold">
                      {story.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-card-foreground mb-2 group-hover:text-gold transition-colors line-clamp-2">
                      {story.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {story.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Clock className="h-4 w-4" />
                        {story.date}
                      </div>
                      <span className="text-gold font-semibold text-sm group-hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
