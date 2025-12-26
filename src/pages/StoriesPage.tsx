import { Layout } from '@/components/Layout';
import { StoriesSection } from '@/components/StoriesSection';
import heroSlide4 from '@/assets/hero-slide-4.jpg';

const StoriesPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroSlide4})` }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream font-bold mb-6">
              Stories & Updates
            </h1>
            <p className="text-cream/80 text-lg md:text-xl">
              Stay connected with the latest news, events, and progress updates from Warangal Rising
            </p>
          </div>
        </div>
      </section>

      <StoriesSection />
    </Layout>
  );
};

export default StoriesPage;
