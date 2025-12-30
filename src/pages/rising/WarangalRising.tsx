import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import {
    ArrowRight,
    CheckCircle2,
    Landmark,
    Rocket,
    Users,
    Globe,
    MapPin,
    History,
    Cpu,
    Download,
    Briefcase
} from 'lucide-react';
import { motion, Variants } from 'framer-motion';

// Assets
import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';
import heroSlide4 from '@/assets/hero-slide-4.jpg';
import infrastructureAerial from '@/assets/infrastructure_aerial_1767085665194.png';
import digitalTechOffice from '@/assets/digital_tech_office_1767085706981.png';
import manufacturingFacility from '@/assets/manufacturing_facility_1767085685808.png';

// Animation Variants
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

const WarangalRising = () => {
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
                            <MapPin className="h-6 w-6" />
                            <span className="tracking-[0.3em] font-bold uppercase text-sm">Heart of Telangana</span>
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className="font-display text-6xl md:text-7xl text-cream font-bold mb-8 leading-tight">
                            Warangal Rising
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-cream/90 text-xl md:text-2xl mb-12 max-w-2xl font-light leading-relaxed">
                            A historic legacy meeting a futuristic vision. We are unlocking a globally connected city-region.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Legacy Meets Future - Visual Split */}
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
                                src={heroSlide1}
                                alt="Warangal Heritage"
                                className="relative rounded-[2.5rem] shadow-2xl w-full h-[600px] object-cover"
                            />
                            <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-2xl shadow-xl hidden md:block">
                                <History className="text-gold h-10 w-10 mb-4" />
                                <h4 className="text-cream font-bold text-xl uppercase tracking-tighter">800 Years</h4>
                                <p className="text-cream/60 text-sm italic">of Kakatiya Excellence</p>
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
                                Urban Transformation
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                                Transforming the <span className="text-primary">Urban Landscape</span>
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                We are integrating smart city solutions with heritage preservation, creating a unique urban ecosystem that respects the past while embracing the future.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                {[
                                    { icon: <CheckCircle2 className="text-primary" />, text: "Smart Traffic Systems" },
                                    { icon: <CheckCircle2 className="text-primary" />, text: "Heritage Corridors" },
                                    { icon: <CheckCircle2 className="text-primary" />, text: "Industrial Parks" },
                                    { icon: <CheckCircle2 className="text-primary" />, text: "Digital Hubs" }
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
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 uppercase">Key Strategic Pillars</h2>
                        <div className="w-24 h-1 bg-gold mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Economic Hub", icon: <Rocket />, img: digitalTechOffice, desc: "Fueling Tech" },
                            { title: "Infrastructure", icon: <Globe />, img: infrastructureAerial, desc: "Global Connectivity" },
                            { title: "Prosperity", icon: <Users />, img: heroSlide3, desc: "Citizen First" },
                            { title: "Heritage", icon: <Landmark />, img: heroSlide4, desc: "Culture & Tourism" },
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
                    style={{ backgroundImage: `url(${manufacturingFacility})` }}
                />
                <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]" />
                <div className="container mx-auto px-6 h-full flex items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-cream mb-8 uppercase tracking-tighter">
                            Modern <span className="text-gold">Manufacturing</span> Hub
                        </h2>
                        <p className="text-2xl text-cream/80 font-light leading-relaxed">
                            Strategically positioned to drive industrial growth through large-scale production and world-class logistics.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 5. Economic Growth Table with Visual Side */}
            <section className="py-24 bg-primary text-cream overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Industrial <span className="text-gold">Roadmap</span></h2>
                            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
                                <table className="w-full text-left">
                                    <tbody>
                                        {[
                                            { sector: "Textiles", status: "Leader", icon: <Cpu /> },
                                            { sector: "Tech Hub", status: "Emerging", icon: <Briefcase /> },
                                            { sector: "Logistics", status: "Growing", icon: <Globe /> }
                                        ].map((row, i) => (
                                            <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                                <td className="p-6 font-bold flex items-center gap-4 text-gold">{row.icon} {row.sector}</td>
                                                <td className="p-6 text-cream/70 font-medium uppercase tracking-widest text-sm">{row.status}</td>
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
                            <img src={infrastructureAerial} alt="Growth" className="w-full h-[500px] object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 6. Call to Action - Panoramic Immersive */}
            <section className="relative py-32 text-center">
                <div className="absolute inset-0 bg-cover bg-fixed bg-center opacity-30" style={{ backgroundImage: `url(${heroSlide4})` }} />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="max-w-4xl mx-auto space-y-10"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-primary tracking-tighter uppercase italic">
                            Building a <span className="text-gold">Prosperous</span> Warangal
                        </h2>
                        <p className="text-2xl text-slate-700 leading-relaxed font-light">
                            Join the movement that blends legacy with leadership. Be part of the transformation.
                        </p>

                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default WarangalRising;