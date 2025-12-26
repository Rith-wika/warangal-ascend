import { Layout } from '@/components/Layout';
import { InitiativesSection } from '@/components/InitiativesSection';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroSlide2 from '@/assets/hero-slide-2.jpg';

const RisingPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroSlide2})` }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream font-bold mb-6">
              The Rising
            </h1>
            <p className="text-cream/80 text-lg md:text-xl mb-8">
              Comprehensive initiatives transforming every sector of Warangal's economy and society
            </p>
            <Button variant="hero" size="lg">
              Explore Initiatives
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <InitiativesSection />

      {/* CTA Section */}
      <section className="py-20 bg-burgundy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-cream font-bold mb-6">
            Be Part of the Change
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">
            Each rising initiative creates opportunities for growth, investment, and community development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg">
              Partner With Us
            </Button>
            <Button variant="heroOutline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RisingPage;
