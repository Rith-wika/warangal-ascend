import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import {
    ArrowRight,
    Factory,
    Cpu,
    Sprout,
    TrendingUp,
    GraduationCap,
    Zap,
    Users,
    DollarSign,
    Globe,
    Heart,
    Building2,
    Briefcase,
    FileText,
    Handshake,
    Target,
    Download
} from 'lucide-react';
import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';
import heroSlide4 from '@/assets/hero-slide-4.jpg';
import heroFutureCity from '@/assets/hero_future_city_1767085645515.png';
import infrastructureAerial from '@/assets/infrastructure_aerial_1767085665194.png';
import manufacturingFacility from '@/assets/manufacturing_facility_1767085685808.png';
import digitalTechOffice from '@/assets/digital_tech_office_1767085706981.png';
import governanceDigital from '@/assets/governance_digital_1767085727503.png';
import foundationConstruction from '@/assets/foundation_construction_1767085746913.png';
import { motion, Variants } from 'framer-motion';

// Animation Variants
const fadeInUp: Variants = {
    initial: { opacity: 0, y: 40 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.6, 0.05, 0.01, 0.9] as const
        }
    }
};

const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const scaleIn: Variants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const TrillionVision = () => {
    const scrollToRoadmap = () => {
        document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Layout>
            {/* 1. Hero Section - Full-Screen Visual with Parallax */}
            <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroFutureCity})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        className="max-w-5xl"
                    >
                        <motion.h1
                            variants={fadeInUp}
                            className="font-display text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-8 leading-tight"
                        >
                            $1 Trillion Vision for Warangal
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="text-white/90 text-xl md:text-2xl mb-12 max-w-4xl font-light leading-relaxed"
                        >
                            Building a Global Economic Powerhouse by 2047
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Vision Statement - Split Layout with Image */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Large Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative group"
                        >
                            <div className="absolute -inset-4 bg-primary/5 rounded-3xl scale-95 group-hover:scale-100 transition-transform duration-500" />
                            <img
                                src={heroSlide1}
                                alt="Smart City Vision"
                                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                            />
                        </motion.div>

                        {/* Right: Vision Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="space-y-6"
                        >
                            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-widest uppercase">
                                The Vision
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                                Building Tomorrow's Economy Today
                            </h2>
                            <div className="h-1 w-20 bg-primary" />
                            <div className="prose prose-lg text-slate-600 leading-relaxed space-y-4">
                                <p className="text-xl">
                                    Warangal's <strong className="text-primary">$1 Trillion Vision</strong> aims to transform the region into a major
                                    economic growth engine by 2047. The focus is on sustainable development,
                                    job creation, industrial expansion, technological innovation, and
                                    improving the quality of life for every citizen.
                                </p>
                                <p className="text-lg">
                                    This vision balances rapid economic growth with social inclusion,
                                    environmental responsibility, and long-term resilience.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Why $1 Trillion Matters - Image Cards */}
            <section className="py-24 bg-[#fcfaf7]">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Why $1 Trillion Matters
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto" />
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: false, amount: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {[
                            {
                                image: heroSlide2,
                                icon: <Users className="h-8 w-8" />,
                                title: "Employment Generation",
                                desc: "Millions of new jobs across manufacturing, services, and emerging sectors."
                            },
                            {
                                image: heroSlide3,
                                icon: <DollarSign className="h-8 w-8" />,
                                title: "Higher Income Levels",
                                desc: "Rising per-capita income and improved living standards for families."
                            },
                            {
                                image: heroSlide4,
                                icon: <Globe className="h-8 w-8" />,
                                title: "Global Competitiveness",
                                desc: "Positioning Warangal as a preferred destination for global investments."
                            },
                            {
                                image: heroSlide1,
                                icon: <Heart className="h-8 w-8" />,
                                title: "Inclusive Growth",
                                desc: "Ensuring benefits reach urban and rural communities alike."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
                            >
                                {/* Top Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4 h-12 w-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                                        {item.icon}
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="font-bold text-xl mb-3 text-slate-900">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 4. Section Breaker Image - Visual Pause */}
            <section className="relative h-[400px] overflow-hidden">
                <motion.div
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${infrastructureAerial})` }}
                />
                <div className="absolute inset-0 bg-slate-900/40" />
                <div className="container mx-auto px-6 h-full flex items-center justify-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white"
                    >
                        <h3 className="text-4xl md:text-5xl font-bold mb-4">
                            Infrastructure for the Future
                        </h3>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            Building the foundation for sustainable economic growth
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 5. Key Growth Pillars - Icon + Image Tiles */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Key Growth Pillars
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Foundational drivers powering Warangal's economic transformation
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: false, amount: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                image: manufacturingFacility,
                                icon: <Factory className="h-10 w-10" />,
                                title: "Industrial Manufacturing & MSMEs",
                                desc: "Strengthening industrial clusters and boosting exports."
                            },
                            {
                                image: digitalTechOffice,
                                icon: <Cpu className="h-10 w-10" />,
                                title: "IT, Digital Economy & Innovation",
                                desc: "Promoting technology-driven services, startups, and digital governance."
                            },
                            {
                                image: heroSlide2,
                                icon: <Sprout className="h-10 w-10" />,
                                title: "Agriculture & Agri-Tech",
                                desc: "Value-added agriculture, food processing, and farmer empowerment."
                            },
                            {
                                image: infrastructureAerial,
                                icon: <TrendingUp className="h-10 w-10" />,
                                title: "Infrastructure & Logistics",
                                desc: "Roads, rail, logistics hubs, and smart urban development."
                            },
                            {
                                image: heroSlide3,
                                icon: <GraduationCap className="h-10 w-10" />,
                                title: "Education & Skill Development",
                                desc: "Future-ready skills aligned with industry needs."
                            },
                            {
                                image: heroSlide4,
                                icon: <Zap className="h-10 w-10" />,
                                title: "Renewable Energy & Sustainability",
                                desc: "Clean energy, green industries, and climate resilience."
                            }
                        ].map((pillar, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.03 }}
                                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-[400px]"
                            >
                                {/* Background Image */}
                                <img
                                    src={pillar.image}
                                    alt={pillar.title}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-slate-900/30" />

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="h-16 w-16 bg-primary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                        {pillar.icon}
                                    </div>
                                    <h3 className="font-bold text-2xl mb-3 text-white">{pillar.title}</h3>
                                    <p className="text-white/90 leading-relaxed">{pillar.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 6. Sector-wise Economic Contribution - Visual Data with Side Image */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                {/* Background watermark image */}
                <div
                    className="absolute inset-0 opacity-10 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroSlide1})` }}
                />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Sector-wise Economic Contribution
                        </h2>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto">
                            How different sectors collectively build the trillion-dollar economy
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Table */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-white/10">
                                                <th className="text-left p-6 font-bold text-lg">Sector</th>
                                                <th className="text-left p-6 font-bold text-lg">Key Contributions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { sector: "Manufacturing", contributions: "Industrial output, exports, MSMEs" },
                                                { sector: "Services", contributions: "IT, finance, tourism, healthcare" },
                                                { sector: "Agriculture", contributions: "Agri-processing, rural economy" },
                                                { sector: "Infrastructure", contributions: "Construction, logistics, smart cities" },
                                                { sector: "Innovation", contributions: "Startups, R&D, AI, emerging tech" }
                                            ].map((row, i) => (
                                                <motion.tr
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: false }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                                                >
                                                    <td className="p-6 font-semibold text-white/80">{row.sector}</td>
                                                    <td className="p-6 text-white/80">{row.contributions}</td>
                                                </motion.tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </motion.div>

                        {/* Side Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src={manufacturingFacility}
                                alt="Economic Sectors"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 7. Policy & Infrastructure Enablers - Alternating Image + Text */}
            <section className="py-24 bg-[#fcfaf7]">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Policy & Infrastructure Enablers
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Demonstrating governance readiness and execution capability
                        </p>
                    </motion.div>

                    <div className="space-y-20">
                        {/* First Row - Image Left, Text Right */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.8 }}
                                className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
                            >
                                <img
                                    src={governanceDigital}
                                    alt="Digital Governance"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-6"
                            >
                                {[
                                    { icon: <Handshake />, text: "Investor-friendly industrial policies" },
                                    { icon: <FileText />, text: "Ease of doing business reforms" },
                                    { icon: <Cpu />, text: "Digital governance & transparency" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <p className="text-lg text-slate-700 font-medium pt-2">{item.text}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Second Row - Text Left, Image Right */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-6 lg:order-1 order-2"
                            >
                                {[
                                    { icon: <Building2 />, text: "Public–private partnerships" },
                                    { icon: <Target />, text: "Smart urban planning and mobility" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <p className="text-lg text-slate-700 font-medium pt-2">{item.text}</p>
                                    </div>
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.8 }}
                                className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl lg:order-2 order-1"
                            >
                                <img
                                    src={heroSlide4}
                                    alt="Smart Urban Planning"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Roadmap to 2047 - Image-Backed Timeline */}
            <section id="roadmap" className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Roadmap to 2047
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            A phased, realistic journey toward the trillion-dollar goal
                        </p>
                    </motion.div>

                    <div className="max-w-6xl mx-auto space-y-12">
                        {[
                            {
                                period: "2024–2030",
                                phase: "Foundation Phase",
                                image: foundationConstruction,
                                desc: "Infrastructure development, policy reforms, and comprehensive skill development programs"
                            },
                            {
                                period: "2030–2040",
                                phase: "Acceleration Phase",
                                image: manufacturingFacility,
                                desc: "Industrial scale-up, innovation ecosystems, and export-driven growth"
                            },
                            {
                                period: "2040–2047",
                                phase: "Leadership Phase",
                                image: heroFutureCity,
                                desc: "Global competitiveness, sustainability leadership, and economic resilience"
                            }
                        ].map((phase, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: i * 0.2 }}
                                className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px]"
                            >
                                {/* Background Image */}
                                <img
                                    src={phase.image}
                                    alt={phase.phase}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />

                                {/* Content */}
                                <div className="relative h-full flex items-center px-12">
                                    <div className="max-w-2xl">
                                        <div className="text-primary font-bold text-lg mb-2">{phase.period}</div>
                                        <h3 className="text-5xl font-bold text-white mb-6">{phase.phase}</h3>
                                        <p className="text-xl text-white/90 leading-relaxed">{phase.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. Call-to-Action - Emotional Visual */}
            <section className="relative py-32 overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroSlide3})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-orange-600/90" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
                            Be a Part of Warangal's Growth Story
                        </h2>
                        <p className="text-2xl text-white/95 mb-12 leading-relaxed">
                            Join hands with government, industry, and citizens to shape a prosperous,
                            inclusive, and sustainable future for generations to come.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-white text-primary hover:bg-white/90 border-0 text-lg px-8 py-6"
                            >
                                <Briefcase className="h-5 w-5 mr-2" />
                                View Sector Plans
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-white/10 text-white hover:bg-white/20 border-white/30 backdrop-blur-sm text-lg px-8 py-6"
                            >
                                <Users className="h-5 w-5 mr-2" />
                                Get Involved
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-white/10 text-white hover:bg-white/20 border-white/30 backdrop-blur-sm text-lg px-8 py-6"
                            >
                                <Download className="h-5 w-5 mr-2" />
                                Download Vision Document
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 10. Footer Closing Visual - Panoramic Image */}
            <section className="relative h-[300px] overflow-hidden">
                <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroSlide1})` }}
                />
                <div className="absolute inset-0 bg-slate-900/50" />
            </section>
        </Layout>
    );
};

export default TrillionVision;
