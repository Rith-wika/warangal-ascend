import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import {
    ArrowRight,
    Factory,
    Cpu,
    Building2,
    Landmark,
    TrendingUp,
    Zap,
    Users,
    FileCheck,
    Clock,
    Handshake,
    Target,
    Download,
    ExternalLink,
    CheckCircle2,
    Briefcase,
    Globe,
    Award
} from 'lucide-react';
import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';
import heroSlide4 from '@/assets/hero-slide-4.jpg';
import investmentHero from '@/assets/investment_hero_business_1767087179970.png';
import industrialCorridor from '@/assets/industrial_corridor_1767087214384.png';
import textileManufacturing from '@/assets/textile_manufacturing_1767087231199.png';
import itInnovationHub from '@/assets/it_innovation_hub_1767087249904.png';
import manufacturingFacility from '@/assets/manufacturing_facility_1767085685808.png';
import digitalTechOffice from '@/assets/digital_tech_office_1767085706981.png';
import governanceDigital from '@/assets/governance_digital_1767085727503.png';
import infrastructureAerial from '@/assets/infrastructure_aerial_1767085665194.png';
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

const Investments = () => {
    return (
        <Layout>
            {/* 1. Hero Section - Full-Width Visual */}
            <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${investmentHero})` }}
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
                            Investments
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="text-white/90 text-xl md:text-2xl mb-12 max-w-4xl font-light leading-relaxed"
                        >
                            Attracting global capital to fuel Warangal's growth, infrastructure,
                            and innovation ecosystem.
                        </motion.p>

                    </motion.div>
                </div>
            </section>

            {/* 2. Why Warangal? - Split Layout */}
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
                                src={industrialCorridor}
                                alt="Industrial Corridor"
                                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                            />
                        </motion.div>

                        {/* Right: Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="space-y-6"
                        >
                            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-widest uppercase">
                                Why Warangal?
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                                A Strategic Investment Destination
                            </h2>
                            <div className="h-1 w-20 bg-primary" />
                            <div className="prose prose-lg text-slate-600 leading-relaxed space-y-4">
                                <p className="text-xl">
                                    Warangal is emerging as a <strong className="text-primary">strategic investment destination</strong>,
                                    supported by strong infrastructure, skilled manpower, and investor-friendly governance.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Strategic location with excellent connectivity',
                                        'Skilled workforce and educational institutions',
                                        'Investor-friendly policies and incentives',
                                        'Robust infrastructure and utilities'
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 text-slate-700">
                                            <CheckCircle2 className="text-primary h-5 w-5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Why Invest in Warangal - Image Card Grid */}
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
                            Investment Opportunities
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Diverse sectors offering high-growth potential and sustainable returns
                        </p>
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
                                image: textileManufacturing,
                                icon: <Factory className="h-8 w-8" />,
                                title: "Manufacturing & Textiles",
                                desc: "World-class facilities for textiles, MSMEs, and industrial production"
                            },
                            {
                                image: itInnovationHub,
                                icon: <Cpu className="h-8 w-8" />,
                                title: "IT & Digital Economy",
                                desc: "Innovation hubs, IT parks, and technology-driven services"
                            },
                            {
                                image: heroSlide2,
                                icon: <Landmark className="h-8 w-8" />,
                                title: "Tourism & Heritage",
                                desc: "Heritage sites, hospitality, and cultural tourism development"
                            },
                            {
                                image: infrastructureAerial,
                                icon: <TrendingUp className="h-8 w-8" />,
                                title: "Logistics & Connectivity",
                                desc: "Strategic highways, rail networks, and freight corridors"
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

            {/* 4. Visual Section Break */}
            <section className="relative h-[400px] overflow-hidden">
                <motion.div
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroSlide4})` }}
                />
                <div className="absolute inset-0 bg-slate-900/50" />
                <div className="container mx-auto px-6 h-full flex items-center justify-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white"
                    >
                        <h3 className="text-4xl md:text-5xl font-bold mb-4">
                            Building an Investor-Ready Ecosystem
                        </h3>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            Infrastructure, policies, and support systems designed for your success
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 5. Investment Focus Areas - Image Tiles */}
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
                            Investment Focus Areas
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            High-potential sectors aligned with Warangal's growth trajectory
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
                                image: heroSlide3,
                                icon: <Zap className="h-10 w-10" />,
                                title: "Renewable Energy",
                                desc: "Solar, wind, and green technology investments"
                            },
                            {
                                image: heroSlide1,
                                icon: <Factory className="h-10 w-10" />,
                                title: "Food Processing",
                                desc: "Agri-business and value-added food production"
                            },
                            {
                                image: manufacturingFacility,
                                icon: <Cpu className="h-10 w-10" />,
                                title: "Electronics Manufacturing",
                                desc: "High-tech manufacturing and assembly units"
                            },
                            {
                                image: heroSlide4,
                                icon: <Building2 className="h-10 w-10" />,
                                title: "Real Estate & Infrastructure",
                                desc: "Commercial, residential, and industrial development"
                            },
                            {
                                image: digitalTechOffice,
                                icon: <Users className="h-10 w-10" />,
                                title: "Education & Skill Development",
                                desc: "Training centers and educational institutions"
                            },
                            {
                                image: heroSlide2,
                                icon: <Landmark className="h-10 w-10" />,
                                title: "Healthcare & Wellness",
                                desc: "Medical facilities and wellness tourism"
                            }
                        ].map((sector, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.03 }}
                                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-[400px]"
                            >
                                {/* Background Image */}
                                <img
                                    src={sector.image}
                                    alt={sector.title}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-slate-900/30" />

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="h-16 w-16 bg-primary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                        {sector.icon}
                                    </div>
                                    <h3 className="font-bold text-2xl mb-3 text-white">{sector.title}</h3>
                                    <p className="text-white/90 leading-relaxed">{sector.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 6. Ease of Doing Business - Image + Bullet Layout */}
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
                            Ease of Doing Business
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Streamlined processes and dedicated support for investors
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
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
                                {
                                    icon: <FileCheck className="h-6 w-6" />,
                                    title: "Single-Window Clearance System",
                                    desc: "Unified platform for all approvals and permits"
                                },
                                {
                                    icon: <Clock className="h-6 w-6" />,
                                    title: "Transparent Digital Approvals",
                                    desc: "Real-time tracking and automated processing"
                                },
                                {
                                    icon: <Target className="h-6 w-6" />,
                                    title: "Fast-Track Project Facilitation",
                                    desc: "Priority support for large-scale investments"
                                },
                                {
                                    icon: <Handshake className="h-6 w-6" />,
                                    title: "Dedicated Investor Support Cell",
                                    desc: "24/7 assistance and grievance redressal"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                                        <p className="text-slate-600">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 7. Investor Journey - Visual Timeline */}
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
                            Your Investment Journey
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            A seamless process from expression of interest to operational launch
                        </p>
                    </motion.div>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            {[
                                {
                                    step: "01",
                                    icon: <FileCheck className="h-8 w-8" />,
                                    title: "Expression of Interest",
                                    desc: "Submit your investment proposal"
                                },
                                {
                                    step: "02",
                                    icon: <Target className="h-8 w-8" />,
                                    title: "Project Evaluation",
                                    desc: "Technical and financial assessment"
                                },
                                {
                                    step: "03",
                                    icon: <Building2 className="h-8 w-8" />,
                                    title: "Land & Approvals",
                                    desc: "Site allocation and clearances"
                                },
                                {
                                    step: "04",
                                    icon: <Handshake className="h-8 w-8" />,
                                    title: "Execution Support",
                                    desc: "Implementation assistance"
                                },
                                {
                                    step: "05",
                                    icon: <Award className="h-8 w-8" />,
                                    title: "Operational Launch",
                                    desc: "Inauguration and operations"
                                }
                            ].map((phase, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative"
                                >
                                    <div className="text-center">
                                        <div className="inline-flex h-20 w-20 bg-primary/10 rounded-2xl items-center justify-center text-primary mb-4 hover:bg-primary hover:text-white transition-colors duration-300">
                                            {phase.icon}
                                        </div>
                                        <div className="text-primary font-bold text-sm mb-2">STEP {phase.step}</div>
                                        <h4 className="font-bold text-lg mb-2 text-slate-900">{phase.title}</h4>
                                        <p className="text-sm text-slate-600">{phase.desc}</p>
                                    </div>
                                    {i < 4 && (
                                        <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-primary/20" style={{ width: 'calc(100% - 80px)', marginLeft: '40px' }} />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Final Call to Action - Emotional Visual */}
            <section className="relative py-32 overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroSlide1})` }}
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
                            Partner in Warangal's Growth Story
                        </h2>
                        <p className="text-2xl text-white/95 mb-12 leading-relaxed">
                            Join us in building a prosperous, sustainable, and globally competitive economy
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-white text-primary hover:bg-white/90 border-0 text-lg px-8 py-6"
                            >
                                <Briefcase className="h-5 w-5 mr-2" />
                                Invest Now
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-white/10 text-white hover:bg-white/20 border-white/30 backdrop-blur-sm text-lg px-8 py-6"
                            >
                                <Globe className="h-5 w-5 mr-2" />
                                Contact Investment Cell
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-white/10 text-white hover:bg-white/20 border-white/30 backdrop-blur-sm text-lg px-8 py-6"
                            >
                                <Download className="h-5 w-5 mr-2" />
                                Download Investor Guide
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 9. Footer Closing Visual */}
            <section className="relative h-[300px] overflow-hidden">
                <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${industrialCorridor})` }}
                />
                <div className="absolute inset-0 bg-slate-900/50" />
            </section>
        </Layout>
    );
};

export default Investments;
