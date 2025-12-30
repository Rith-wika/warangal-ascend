import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import {
    ArrowRight,
    CheckCircle2,
    GraduationCap,
    Briefcase,
    Heart,
    ShieldCheck,
    Users,
    Globe,
    Download,
    Star,
    Sparkles
} from 'lucide-react';
import { motion, Variants } from 'framer-motion';

// Assets
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';
import heroSlide4 from '@/assets/hero-slide-4.jpg';
import heroFutureCity from '@/assets/hero_future_city_1767085645515.png';
import digitalTechOffice from '@/assets/digital_tech_office_1767085706981.png';
import governanceDigital from '@/assets/governance_digital_1767085727503.png';

// Animation Variants matching your established format
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

const WomenRising = () => {
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
                            <Star className="h-6 w-6" />
                            <span className="tracking-[0.3em] font-bold uppercase text-sm">Equity & Leadership</span>
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className="font-display text-6xl md:text-7xl text-cream font-bold mb-8 leading-tight">
                            Women Rising
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-cream/90 text-xl md:text-2xl mb-12 max-w-2xl font-light leading-relaxed">
                            Advancing agency and workforce participation across the economic, social, and governance ecosystems.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Empowerment Split - Visual Layout */}
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
                                src={governanceDigital}
                                alt="Governance and Leadership"
                                className="relative rounded-[2.5rem] shadow-2xl w-full h-[600px] object-cover"
                            />
                            <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-2xl shadow-xl hidden md:block">
                                <Sparkles className="text-gold h-10 w-10 mb-4" />
                                <h4 className="text-cream font-bold text-xl uppercase tracking-tighter">Economic Agency</h4>
                                <p className="text-cream/60 text-sm italic">Inclusive Growth Models</p>
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
                                The Next Generation
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                                Empowering <span className="text-primary">Regional Growth</span>
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                We are committed to fostering a culture of equity where leadership is defined by talent. By providing dedicated platforms for skill acquisition, we ensure women are central to the region's prosperity.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                {[
                                    { icon: <CheckCircle2 className="text-primary" />, text: "Leadership Academies" },
                                    { icon: <CheckCircle2 className="text-primary" />, text: "Entrepreneurial Grants" },
                                    { icon: <CheckCircle2 className="text-primary" />, text: "Skill Re-entry" },
                                    { icon: <CheckCircle2 className="text-primary" />, text: "Community Safety" }
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

            {/* 3. Strategic Pillars - Image Grid with Overlays */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 uppercase">Four Pillars of Transformation</h2>
                        <div className="w-24 h-1 bg-gold mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Economic Power", icon: <Briefcase />, img: digitalTechOffice, desc: "Skill development & MSMEs" },
                            { title: "Leadership", icon: <Globe />, img: heroFutureCity, desc: "Public & Private sectors" },
                            { title: "Well-being", icon: <Heart />, img: heroSlide3, desc: "Health & Social Dignity" },
                            { title: "Digital Access", icon: <ShieldCheck />, img: heroSlide4, desc: "Tech & Finance Equity" },
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
                    style={{ backgroundImage: `url(${heroSlide3})` }}
                />
                <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]" />
                <div className="container mx-auto px-6 h-full flex items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-cream mb-8 uppercase tracking-tighter leading-tight">
                            Advancing <span className="text-gold">Agency</span> & Dignity
                        </h2>
                        <p className="text-2xl text-cream/80 font-light leading-relaxed">
                            Creating an environment where women have equal access to resources, skills, and decision-making platforms.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 5. Metrics Table with Visual Side */}
            <section className="py-24 bg-primary text-cream overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Focus <span className="text-gold">Areas</span></h2>
                            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
                                <table className="w-full text-left">
                                    <tbody>
                                        {[
                                            { area: "Skill Development", target: "Workforce Readiness", icon: <Briefcase /> },
                                            { area: "Representation", target: "Governance & Boards", icon: <Star /> },
                                            { area: "Digital Safety", target: "Safe Urban Spaces", icon: <ShieldCheck /> }
                                        ].map((row, i) => (
                                            <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                                <td className="p-6 font-bold flex items-center gap-4 text-gold">{row.icon} {row.area}</td>
                                                <td className="p-6 text-cream/70 font-medium uppercase tracking-widest text-sm">{row.target}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <img src={digitalTechOffice} alt="Growth" className="w-full h-[500px] object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 6. Call to Action - Immersive Panoramic */}
            <section className="relative py-32 text-center">
                <div className="absolute inset-0 bg-cover bg-fixed bg-center opacity-30" style={{ backgroundImage: `url(${heroSlide4})` }} />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="max-w-4xl mx-auto space-y-10"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-primary tracking-tighter uppercase italic">
                            Inclusive <span className="text-gold">Growth</span> Begins Here
                        </h2>
                        <p className="text-2xl text-slate-700 leading-relaxed font-light">
                            Inclusive growth begins with women. It is about enabling agency, dignity, and a contribution to sustainable development.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Button size="xl" className="bg-primary text-cream px-10 py-8 text-xl group">
                                Get Involved <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                            </Button>
                            <Button size="xl" variant="outline" className="border-primary text-primary px-10 py-8 text-xl">
                                <Download className="mr-3 h-6 w-6" /> Gender Vision 2047
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default WomenRising;