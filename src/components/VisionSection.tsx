import { motion } from 'framer-motion';
import { Building2, Factory, Wheat } from 'lucide-react';
import infrastructureAerial from '@/assets/infrastructure_aerial_1767085665194.png';
import manufacturingFacility from '@/assets/manufacturing_facility_1767085685808.png';
import digitalTechOffice from '@/assets/digital_tech_office_1767085706981.png';

const visionCards = [
  {
    icon: <Building2 className="h-10 w-10" />,
    title: 'Core Urban Region Economy',
    acronym: 'CURE',
    img: digitalTechOffice,
    description: 'The hub for high-value services, technology, innovation, and urban economic engines.',
  },
  {
    icon: <Factory className="h-10 w-10" />,
    title: 'Peri-Urban Region Economy',
    acronym: 'PURE',
    img: manufacturingFacility,
    description: 'The zone that will drive large-scale manufacturing, industrial growth, and production infrastructure.',
  },
  {
    icon: <Wheat className="h-10 w-10" />,
    title: 'Rural and Agri Region Economy',
    acronym: 'RARE',
    img: infrastructureAerial,
    description: 'The foundation for agriculture, food systems, and rural production-led prosperity.',
  },
];

export function VisionSection() {
  return (
    <section className="py-24 bg-[#fcfaf7] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl text-primary font-bold mb-6"
          >
            Vision for <span className="text-gold">Warangal</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-xl leading-relaxed"
          >
            A multi-layered economic strategy designed to drive growth across every landscape—from urban centers to rural farmlands.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {visionCards.map((card, index) => (
            <motion.div
              key={card.acronym}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              {/* Background Image */}
              <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-cream">
                <div className="h-16 w-16 bg-gold rounded-2xl flex items-center justify-center text-primary mb-6 shadow-lg">
                  {card.icon}
                </div>
                <span className="text-gold font-bold tracking-widest text-sm mb-2">{card.acronym}</span>
                <h3 className="font-display text-2xl font-bold mb-4 leading-tight group-hover:text-gold transition-colors">
                  {card.title}
                </h3>
                <p className="text-cream/80 leading-relaxed text-lg">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}