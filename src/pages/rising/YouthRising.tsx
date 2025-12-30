import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import {
    ArrowRight,
    CheckCircle2,
    Lightbulb,
    Cpu,
    Briefcase,
    GraduationCap,
    Rocket,
    Globe,
    Download,
    Zap
} from 'lucide-react';
import { motion, Variants } from 'framer-motion';

// Assets
import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';
import heroSlide4 from '@/assets/hero-slide-4.jpg';
import digitalTechOffice from '@/assets/digital_tech_office_1767085706981.png';
import heroFutureCity from '@/assets/hero_future_city_1767085645515.png';

// Animation Variants matching Warangal Rising
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

const YouthRising = () => {
    return (
        <Layout>
            {/* 1. Cinematic Hero Section - Uses Scale-in Animation */}
            <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroSlide4})` }}
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
                            <Zap className="h-6 w-6" />
                            <span className="tracking-[0.3em] font-bold uppercase text-sm">Tomorrow's Leaders</span>
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className="font-display text-6xl md:text-8xl text-cream font-bold mb-8 leading-tight">
                            Youth <br /><span className="text-gold">Rising</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-cream/90 text-xl md:text-2xl mb-12 max-w-2xl font-light leading-relaxed">
                            Unlocking the potential of young people as drivers of global change, ambition, and creative purpose.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Innovation Split - Visual Layout with Badge */}
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
                                src={digitalTechOffice}
                                alt="Youth Innovation"
                                className="relative rounded-[2.5rem] shadow-2xl w-full h-[600px] object-cover"
                            />
                            <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-2xl shadow-xl hidden md:block">
                                <Rocket className="text-gold h-10 w-10 mb-4" />
                                <h4 className="text-cream font-bold text-xl uppercase tracking-tighter">Skill Lab</h4>
                                <p className="text-cream/60 text-sm italic">Industry 4.0 Readiness</p>
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
                                Powering the Future
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                                Ambition & <span className="text-primary">Creativity</span>
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Our mission is to bridge the gap between academic learning and professional excellence through vibrant ecosystems of startups and mentorship.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                {[
                                    { icon: <CheckCircle2 className="text-primary" />, text: "Industry Bootcamps" },
                                    { icon: <CheckCircle2 className="text-primary" />, text: "Startup Incubation" },
                                    { icon: <CheckCircle2 className="text-primary" />, text: "Global Mentorship" },
                                    { icon: <CheckCircle2 className="text-primary" />, text: "Civic Leadership" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 font-semibold text-slate-800">
                                        {item.icon}
                                        {item.text}
                                    </div>
                                ))}
                            </div>
                            <Button size="xl" variant="hero" className="mt-6">
                                Join Skill Portals <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Thematic Pillars - Image Grid with Overlays */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 uppercase">Vision for the Youth</h2>
                        <div className="w-24 h-1 bg-gold mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Future Skills", icon: <Cpu />, img: heroFutureCity, desc: "AI & Emerging Tech" },
                            { title: "Innovation", icon: <Lightbulb />, img: heroSlide1, desc: "Startup support hubs" },
                            { title: "Employment", icon: <Briefcase />, img: heroSlide3, desc: "Quality professional links" },
                            { title: "Leadership", icon: <GraduationCap />, img: heroSlide2, desc: "Civic & social pathways" },
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
                                <div className="absolute inset-0 p-8 flex flex-col justify-end text-cream">
                                    <div className="h-12 w-12 bg-gold rounded-xl flex items-center justify-center text-primary mb-4 shadow-lg group-hover:bg-cream transition-colors">
                                        {pillar.icon}
                                    </div>
                                    <h4 className="text-2xl font-bold mb-2">{pillar.title}</h4>
                                    <p className="text-white/70 text-sm">{pillar.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Panoramic Quote Break - Uses Fixed Background Parallax */}
            <section className="relative h-[500px] overflow-hidden">
                <motion.div
                    initial={{ scale: 1.3 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0 bg-cover bg-fixed bg-center"
                    style={{ backgroundImage: `url(${heroSlide3})` }}
                />
                <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]" />
                <div className="container mx-auto px-6 h-full flex items-center justify-center relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-cream mb-8 uppercase tracking-tighter italic leading-tight">
                            Skills. Innovation. Opportunity. <br /><span className="text-gold">Empowering</span> the Next Generation.
                        </h2>
                    </motion.div>
                </div>
            </section>

            {/* 5. Footer Closing Visual */}
            <section className="relative h-[300px] overflow-hidden">
                <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroSlide4})` }}
                />
                <div className="absolute inset-0 bg-slate-900/50" />
            </section>
        </Layout>
    );
};

export default YouthRising;

