import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import {
    ArrowRight,
    Scale,
    Heart,
    Shield,
    Users,
    CheckCircle2,
    GraduationCap,
    Briefcase,
    Home,
    Building2,
    UserCheck,
    TrendingUp,
    Award,
    FileCheck,
    Download,
    ExternalLink,
    Handshake,
    Target
} from 'lucide-react';
import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';
import heroSlide4 from '@/assets/hero-slide-4.jpg';
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

const SocialJustice = () => {
    return (
        <Layout>
            {/* 1. Hero Section - Human-Centered Impact */}
            <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroSlide2})` }}
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
                            Social Justice Initiatives
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="text-white/90 text-xl md:text-2xl mb-12 max-w-4xl font-light leading-relaxed"
                        >
                            Ensuring equity, inclusion, and justice for every citizen of Warangal.
                        </motion.p>

                    </motion.div>
                </div>
            </section>

            {/* 2. Inclusive Growth - Split Layout */}
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
                                src={heroSlide3}
                                alt="Social Justice"
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
                                Inclusive Growth
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                                Building an Equitable Society
                            </h2>
                            <div className="h-1 w-20 bg-primary" />
                            <div className="prose prose-lg text-slate-600 leading-relaxed space-y-4">
                                <p className="text-xl">
                                    Our Social Justice Initiatives are designed to <strong className="text-primary">uplift marginalized communities</strong>, ensuring fair representation, equal opportunities, and access to resources for all citizens.
                                </p>
                                <p className="text-lg">
                                    True development is measured not by economic growth alone, but by how we empower the most vulnerable sections of our society.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Why Social Justice Matters - Image Cards */}
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
                            Why Social Justice Matters
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Creating a society where everyone has equal opportunity to thrive
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
                                image: heroSlide1,
                                icon: <Scale className="h-8 w-8" />,
                                title: "Equal Rights",
                                desc: "Ensuring constitutional rights and legal protection for all"
                            },
                            {
                                image: heroSlide4,
                                icon: <Users className="h-8 w-8" />,
                                title: "Fair Representation",
                                desc: "Empowering marginalized voices in governance and decision-making"
                            },
                            {
                                image: heroSlide2,
                                icon: <Handshake className="h-8 w-8" />,
                                title: "Economic Inclusion",
                                desc: "Access to employment, entrepreneurship, and financial resources"
                            },
                            {
                                image: heroSlide3,
                                icon: <Heart className="h-8 w-8" />,
                                title: "Social Dignity",
                                desc: "Eliminating discrimination and promoting mutual respect"
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
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
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
                            Empowering Every Community
                        </h3>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            Comprehensive programs designed to eliminate barriers and create pathways to success
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 5. Key Programs - Image Tiles */}
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
                            Key Social Justice Programs
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Targeted interventions for systemic change
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
                                image: heroSlide3,
                                icon: <GraduationCap className="h-10 w-10" />,
                                title: "Education Equity",
                                desc: "Scholarships and support for underprivileged students"
                            },
                            {
                                image: heroSlide1,
                                icon: <Briefcase className="h-10 w-10" />,
                                title: "Employment Opportunities",
                                desc: "Skill training and job placement for marginalized groups"
                            },
                            {
                                image: heroSlide2,
                                icon: <Shield className="h-10 w-10" />,
                                title: "Legal Aid & Protection",
                                desc: "Free legal support and rights awareness programs"
                            },
                            {
                                image: heroSlide4,
                                icon: <Home className="h-10 w-10" />,
                                title: "Community Development",
                                desc: "Infrastructure and services in underserved areas"
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.03 }}
                                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-[350px]"
                            >
                                {/* Background Image */}
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-slate-900/30" />

                                {/* Content */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                    <div className="h-14 w-14 bg-primary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="font-bold text-2xl mb-2 text-white">{feature.title}</h3>
                                    <p className="text-white/90 leading-relaxed">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 6. Focus Communities - Image + Text */}
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
                            Communities We Serve
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Prioritizing those who face systemic barriers
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
                                src={heroSlide1}
                                alt="Communities"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
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
                                    icon: <Users className="h-6 w-6" />,
                                    title: "Scheduled Castes & Tribes",
                                    desc: "Comprehensive welfare programs and reservation benefits"
                                },
                                {
                                    icon: <Heart className="h-6 w-6" />,
                                    title: "Women & Children",
                                    desc: "Safety, education, and empowerment initiatives"
                                },
                                {
                                    icon: <Shield className="h-6 w-6" />,
                                    title: "Differently-Abled Persons",
                                    desc: "Accessibility, employment, and support services"
                                },
                                {
                                    icon: <Building2 className="h-6 w-6" />,
                                    title: "Minority Communities",
                                    desc: "Cultural preservation and economic development"
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

            {/* 7. Impact & Progress - Visual Statistics */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 opacity-20 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroSlide2})` }}
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
                            Impact & Progress
                        </h2>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto">
                            Measurable change in creating an equitable society
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <GraduationCap />, number: "25,000+", label: "Scholarships Awarded" },
                            { icon: <Briefcase />, number: "15,000+", label: "Jobs Created" },
                            { icon: <Shield />, number: "5,000+", label: "Legal Cases Supported" },
                            { icon: <Users />, number: "100+", label: "Community Centers" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <div className="inline-flex h-16 w-16 bg-primary/20 rounded-2xl items-center justify-center text-primary mb-4">
                                    {stat.icon}
                                </div>
                                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                                <div className="text-white/80 text-lg">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Final CTA - Emotional Visual */}
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
                            Justice Is the Foundation of Progress
                        </h2>
                        <p className="text-2xl text-white/95 mb-12 leading-relaxed">
                            Together, we're building a Warangal where every citizen has equal opportunity to succeed and thrive
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-white text-primary hover:bg-white/90 border-0 text-lg px-8 py-6"
                            >
                                <UserCheck className="h-5 w-5 mr-2" />
                                View Programs
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-white/10 text-white hover:bg-white/20 border-white/30 backdrop-blur-sm text-lg px-8 py-6"
                            >
                                <FileCheck className="h-5 w-5 mr-2" />
                                Apply for Benefits
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-white/10 text-white hover:bg-white/20 border-white/30 backdrop-blur-sm text-lg px-8 py-6"
                            >
                                <Download className="h-5 w-5 mr-2" />
                                Policy Documents
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 9. Footer Visual */}
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

export default SocialJustice;
