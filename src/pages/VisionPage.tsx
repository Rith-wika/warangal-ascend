import { Layout } from '@/components/Layout';
import { VisionSection } from '@/components/VisionSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Eye, Users } from 'lucide-react';
import heroSlide1 from '@/assets/hero-slide-1.jpg';

const VisionPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroSlide1})` }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream font-bold mb-6">
              Vision & Mission
            </h1>
            <p className="text-cream/80 text-lg md:text-xl">
              Building a prosperous Warangal through innovation, inclusion, and investment
            </p>
          </div>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border card-hover animate-fade-in-up">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Eye className="h-10 w-10" />
              </div>
              <h3 className="font-display text-2xl font-bold text-card-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To transform Warangal into a $1 trillion economy by 2034, becoming a beacon of 
                innovation, sustainability, and inclusive growth in India.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border card-hover animate-fade-in-up delay-100">
              <div className="w-16 h-16 rounded-xl bg-burgundy/10 flex items-center justify-center text-burgundy mb-6">
                <Target className="h-10 w-10" />
              </div>
              <h3 className="font-display text-2xl font-bold text-card-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To create sustainable livelihood opportunities for all citizens while preserving 
                our rich cultural heritage and building world-class infrastructure.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border card-hover animate-fade-in-up delay-200">
              <div className="w-16 h-16 rounded-xl bg-gold/20 flex items-center justify-center text-gold mb-6">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="font-display text-2xl font-bold text-card-foreground mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Transparency, inclusivity, innovation, and sustainable development guide every 
                decision we make for the people of Warangal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <VisionSection />

      {/* Call to Action */}
      <section className="py-20 navy-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-cream font-bold mb-6">
            Join the Rising Movement
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">
            Be part of Warangal's transformation. Whether you're an investor, entrepreneur, 
            or citizen, there's a role for you in shaping our future.
          </p>
          <Button variant="hero" size="xl">
            Get Involved
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default VisionPage;
