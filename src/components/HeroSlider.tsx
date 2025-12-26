import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';
import heroSlide4 from '@/assets/hero-slide-4.jpg';

interface Slide {
  image: string;
  title: string;
  highlight: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    image: heroSlide1,
    title: 'WARANGAL',
    highlight: 'National Pride',
    subtitle: '1000+ global delegates, 500+ companies',
  },
  {
    image: heroSlide2,
    title: 'WARANGAL',
    highlight: 'Vision',
    subtitle: 'Building the future of Telangana',
  },
  {
    image: heroSlide3,
    title: 'WARANGAL',
    highlight: 'Growth',
    subtitle: 'Industrial excellence and innovation',
  },
  {
    image: heroSlide4,
    title: 'WARANGAL',
    highlight: 'The Future',
    subtitle: 'Youth, innovation, and opportunity',
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-800 ease-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Overlay */}
          <div className="hero-overlay absolute inset-0" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-3xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-700 ${
                index === currentSlide
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8 pointer-events-none'
              }`}
            >
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream mb-4">
                {slide.title}
              </h1>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6">
                <span className="text-cream">Means </span>
                <span className="text-gradient font-bold">{slide.highlight}</span>
              </h2>
              <p className="text-cream/80 text-lg md:text-xl mb-8">{slide.subtitle}</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg">
                  Read More
                </Button>
                <Button variant="heroOutline" size="lg">
                  <MapPin className="h-5 w-5 mr-2" />
                  Directions
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Event Banner */}
        <div className="absolute bottom-8 right-4 md:right-8 bg-primary/90 backdrop-blur-md rounded-xl p-6 max-w-sm animate-fade-in-up delay-500">
          <div className="flex items-start gap-4">
            <Calendar className="h-8 w-8 text-gold flex-shrink-0" />
            <div>
              <p className="text-cream/70 text-sm">January 15 & 16, 2025</p>
              <p className="text-cream text-sm">Warangal Convention Center</p>
              <h3 className="text-gold font-display text-lg font-bold mt-2">
                Come join the rise!
              </h3>
              <Button variant="gold" size="sm" className="mt-3">
                Event Schedule
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-8 left-4 md:left-8 flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-2 border-cream/30 flex items-center justify-center text-cream hover:border-gold hover:text-gold transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border-2 border-cream/30 flex items-center justify-center text-cream hover:border-gold hover:text-gold transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          {/* Slide Indicators */}
          <div className="flex items-center gap-2 ml-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-8 bg-gold'
                    : 'w-2 bg-cream/30 hover:bg-cream/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
