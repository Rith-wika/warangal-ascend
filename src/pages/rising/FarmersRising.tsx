import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import {
    ArrowRight,
    CheckCircle2,
    Sprout,
    TrendingUp,
    Tractor,
    Wheat,
    Globe,
    MapPin,
    Download,
    Leaf
} from 'lucide-react';
import { motion, Variants } from 'framer-motion';

// Assets
import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';
import heroSlide4 from '@/assets/hero-slide-4.jpg';
import infrastructureAerial from '@/assets/infrastructure_aerial_1767085665194.png';
import manufacturingFacility from '@/assets/manufacturing_facility_1767085685808.png';

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
    animate: { transition: { staggerChildren: 0.15 } }
};

const FarmersRising = () => {
    return (
        <Layout>
            {/* 1. Cinematic Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroSlide2})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary/90" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        className="max-w-4xl"
                    >
                        <motion.div variants={fadeInUp} className="flex items-center gap-3 text-gold mb-6">
                            <Leaf className="h-6 w-6" />
                            <span className="tracking-[0.3em] font-bold uppercase text-sm">Agricultural Revolution</span>
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className="font-display text-6xl md:text-7xl text-cream font-bold mb-8 leading-tight">
                            Farmers Rising
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-cream/90 text-xl md:text-2xl mb-12 max-w-2xl font-light leading-relaxed">
                            Empowering the backbone of our nation through modern technology, global market access, and sustainable practices.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Tradition Meets Tech - Visual Split */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
                            <img
                                src={heroSlide3}
                                alt="Modern Agriculture"
                                className="relative rounded-[2.5rem] shadow-2xl w-full h-[600px] object-cover"
                            />
                            <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-2xl shadow-xl hidden md:block">
                                <Tractor className="text-gold h-10 w-10 mb-4" />
                                <h4 className="text-cream font-bold text-xl uppercase tracking-tighter">Smart Farming</h4>
                                <p className="text-cream/60 text-sm italic">Precision Agri-Solutions</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1 }}
                            className="space-y-8"
                        >
                            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest uppercase">
                                Securing Sustainability
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                                Roots of <span className="text-primary">Innovation</span>
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                We are bridging the gap between traditional wisdom and modern technology. Our initiative ensures farmers have direct access to markets while adopting practices that protect our environment.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                {[
                                    { icon: <CheckCircle2 className="text-primary" />, text: "Climate-Resilient Seeds" },
                                    { icon: <CheckCircle2 className="text-primary" />, text: "Precision Irrigation" },
                                    { icon: <CheckCircle2 className="text-primary" />, text: "Direct Market Linkages" },
                                    { icon: <CheckCircle2 className="text-primary" />, text: "Agri-Fintech Tools" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 font-semibold text-slate-800">
                                        {item.icon}
                                        {item.text}
                                    </div>
                                ))}
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Thematic Pillars - Image Grid with Overlays */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 uppercase">Agricultural Vision Pillars</h2>
                        <div className="w-24 h-1 bg-gold mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Sustainability", icon: <Sprout />, img: heroSlide1, desc: "Resource-efficient farming" },
                            { title: "Better Incomes", icon: <TrendingUp />, img: heroSlide4, desc: "Wealth generation" },
                            { title: "Agri-Tech", icon: <Tractor />, img: manufacturingFacility, desc: "Digital mechanization" },
                            { title: "Inclusion", icon: <Wheat />, img: infrastructureAerial, desc: "Supporting small holders" },
                        ].map((pillar, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -12 }}
                                className="group relative h-[450px] rounded-3xl overflow-hidden shadow-xl"
                            >
                                <img src={pillar.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-90" />
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="h-12 w-12 bg-gold rounded-xl flex items-center justify-center text-primary mb-4 shadow-lg group-hover:bg-cream transition-colors">
                                        {pillar.icon}
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-2">{pillar.title}</h4>
                                    <p className="text-white/70">{pillar.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Panoramic Vision Break */}
            <section className="relative h-[600px] overflow-hidden">
                <motion.div
                    initial={{ scale: 1.3 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0 bg-cover bg-fixed bg-center"
                    style={{ backgroundImage: `url(${heroSlide4})` }}
                />
                <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]" />
                <div className="container mx-auto px-6 h-full flex items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-cream mb-8 uppercase tracking-tighter">
                            Sustainable <span className="text-gold">Farming</span> Systems
                        </h2>
                        <p className="text-2xl text-cream/80 font-light leading-relaxed">
                            Ensuring long-term agricultural expansion while securing livelihoods, dignity, and a resilient future for farming communities.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 6. Call to Action */}
            <section className="relative py-32 text-center">
                <div className="absolute inset-0 bg-cover bg-fixed bg-center opacity-30" style={{ backgroundImage: `url(${heroSlide1})` }} />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="max-w-4xl mx-auto space-y-10"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-primary tracking-tighter uppercase italic">
                            Sustainable Farms. <span className="text-gold">Stronger</span> Futures.
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Button size="xl" className="bg-primary text-cream px-10 py-8 text-xl group">
                                Get Involved <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                            </Button>
                            <Button size="xl" variant="outline" className="border-primary text-primary px-10 py-8 text-xl">
                                <Download className="mr-3 h-6 w-6" /> Agri-Vision 2047
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default FarmersRising;