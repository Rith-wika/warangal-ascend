import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Home, GraduationCap, Scale, Heart } from 'lucide-react';
import heroSlide2 from '@/assets/hero-slide-2.jpg';

const WelfarePage = () => {
  const programs = [
    {
      icon: <Home className="h-10 w-10" />,
      title: 'Housing Initiative',
      description: 'Providing affordable housing to every family in Warangal. Our mission is to ensure no one is left without a roof.',
      stats: '25,000+ homes planned',
      color: 'bg-primary',
    },
    {
      icon: <GraduationCap className="h-10 w-10" />,
      title: 'Skill & Jobs Programs',
      description: 'Equipping youth with market-relevant skills and connecting them with employment opportunities.',
      stats: '100,000+ youth to be skilled',
      color: 'bg-burgundy',
    },
    {
      icon: <Scale className="h-10 w-10" />,
      title: 'Social Justice Initiatives',
      description: 'Ensuring equal opportunities and protecting the rights of all marginalized communities.',
      stats: 'Universal coverage',
      color: 'bg-gold',
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: 'Healthcare Access',
      description: 'Free quality healthcare for all citizens through modern medical facilities and programs.',
      stats: '50+ new health centers',
      color: 'bg-primary',
    },
  ];

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
              People's Welfare
            </h1>
            <p className="text-cream/80 text-lg md:text-xl mb-8">
              Comprehensive welfare programs ensuring no citizen is left behind
            </p>
            <Button variant="hero" size="lg">
              View All Programs
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-primary font-bold mb-4">
              Welfare <span className="text-gold">Programs</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Every program is designed with the citizen at the center
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`w-16 h-16 rounded-xl ${program.color} flex items-center justify-center text-cream flex-shrink-0`}
                  >
                    {program.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold text-card-foreground mb-3">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-bold">
                      {program.stats}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 navy-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-cream font-bold mb-6">
            Everyone Deserves Opportunity
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">
            Our welfare programs are not charity—they're investments in human potential.
          </p>
          <Button variant="hero" size="xl">
            Apply for Benefits
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default WelfarePage;
