import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Eye, Users, ChevronRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { VisionSection } from '@/components/VisionSection';
import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';
import infrastructureAerial from '@/assets/infrastructure_aerial_1767085665194.png';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
  }
};

const staggerContainer: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.2 } }
};

const VisionPage = () => {
  return (
    <Layout>
      {/* 1. Hero Section - Cinematic Parallax */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroSlide1})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-3xl"
          >
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl text-cream font-bold mb-6 leading-tight">
              Vision & <span className="text-gold">Mission</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-cream/90 text-xl md:text-2xl font-light leading-relaxed">
              Charting the course for Warangal's transition into a global economic powerhouse by 2047.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Strategic Intent - Split Layout with Image Cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Our Vision",
                desc: "To transform Warangal into a $1 trillion economy by 2034, becoming a beacon of innovation and inclusive growth.",
                icon: <Eye className="h-8 w-8" />,
                img: heroSlide2,
                color: "border-primary"
              },
              {
                title: "Our Mission",
                desc: "To create sustainable livelihood opportunities while preserving our rich cultural heritage and building world-class infrastructure.",
                icon: <Target className="h-8 w-8" />,
                img: infrastructureAerial,
                color: "border-burgundy"
              },
              {
                title: "Our Values",
                desc: "Transparency, inclusivity, and sustainable development guide every decision we make for the people of Warangal.",
                icon: <Users className="h-8 w-8" />,
                img: heroSlide3,
                color: "border-gold"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`group bg-card rounded-3xl overflow-hidden border-b-4 ${item.color} shadow-xl hover:shadow-2xl transition-all duration-500`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-6 left-6 h-14 w-14 bg-cream/90 backdrop-blur flex items-center justify-center rounded-2xl text-primary">
                    {item.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Detailed Vision Roadmap - Section Break */}
      <VisionSection />

      {/* 4. Commitment Section - Wide Visual */}
      <section className="py-24 bg-primary text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src={heroSlide1} className="w-full h-full object-cover grayscale" alt="Background" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:w-1/2 space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">The 2047 <span className="text-gold">Promise</span></h2>
              <p className="text-xl text-cream/80">
                Our vision isn't just about numbers. It's about a future where every citizen of Warangal has access to digital education, quality healthcare, and dignified livelihoods.
              </p>
              <ul className="space-y-4">
                {['Inclusive Economic Growth', 'Preservation of Heritage', 'Technological Leadership'].map((text, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg font-medium">
                    <ChevronRight className="text-gold h-6 w-6" /> {text}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-2">
                <img src={heroSlide3} alt="Community" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 border-8 border-gold/30 rounded-3xl m-4" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Call to Action - Emotional Impact */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-6xl text-primary font-bold mb-8">
              Join the <span className="text-burgundy">Rising</span> Movement
            </h2>
            <p className="text-slate-600 text-xl mb-12 leading-relaxed">
              Warangal’s transformation is a collective journey. Whether you're an investor, an entrepreneur, or a citizen, your contribution shapes our $1 trillion future.
            </p>
            <Button variant="hero" size="xl" className="group">
              Get Involved
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default VisionPage;
