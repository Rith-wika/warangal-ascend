import { useParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { StatsSection } from '@/components/StatsSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, DollarSign, LineChart, Building } from 'lucide-react';
import heroSlide3 from '@/assets/hero-slide-3.jpg';

const EconomyPage = () => {
  const { category } = useParams();

  const contentMap: Record<string, { title: string; desc: string }> = {
    'vision': { title: '$1 Trillion Vision', desc: 'A bold roadmap to achieve a $1 trillion economy by 2047.' },
    'investments': { title: 'Investments', desc: 'Attracting global capital to fuel Warangal’s rapid growth engines.' },
  };

  const currentContent = category && contentMap[category] ? contentMap[category] : {
    title: 'Economy & Growth',
    desc: 'Building a $1 trillion economy through strategic investments and sustainable growth'
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroSlide3})` }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream font-bold mb-6">
              {currentContent.title}
            </h1>
            <p className="text-cream/80 text-lg md:text-xl mb-8">
              {currentContent.desc}
            </p>
            <Button variant="hero" size="lg">
              Investment Opportunities
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Economic Pillars */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-primary font-bold mb-4">
              Economic <span className="text-gold">Pillars</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Four strategic pillars driving Warangal's economic transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TrendingUp className="h-10 w-10" />,
                title: 'Growth',
                value: '12%',
                desc: 'Annual GDP growth target',
              },
              {
                icon: <DollarSign className="h-10 w-10" />,
                title: 'Investment',
                value: '₹50K Cr',
                desc: 'Target investment by 2030',
              },
              {
                icon: <LineChart className="h-10 w-10" />,
                title: 'Trade',
                value: '3x',
                desc: 'Export growth target',
              },
              {
                icon: <Building className="h-10 w-10" />,
                title: 'Infrastructure',
                value: '500+',
                desc: 'New projects planned',
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border card-hover text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                  {item.icon}
                </div>
                <div className="font-display text-4xl font-bold text-gold mb-2">
                  {item.value}
                </div>
                <h3 className="font-display text-xl font-bold text-card-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment CTA */}
      <section className="py-20 gold-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground font-bold mb-6">
            Invest in Warangal's Future
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            Strategic location, skilled workforce, and progressive policies make Warangal
            the ideal destination for your next investment.
          </p>
          <Button variant="navy" size="xl">
            Contact Investment Office
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default EconomyPage;
