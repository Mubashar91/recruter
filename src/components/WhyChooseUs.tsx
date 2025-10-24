import { motion } from "framer-motion";
import { Award, Target, Zap, Shield, HeartHandshake, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Precision Talent Matching",
    description: "Super high accuracy in matching candidates to your specific requirements. Whether you need general staff or highly specialized experts, we find the right fit for your exact needs."
  },
  {
    icon: Target,
    title: "All Skill Levels Available",
    description: "From entry-level administrative roles to senior developers and cybersecurity experts. We source talent across all industries and expertise levels with custom pricing for specialized positions."
  },
  {
    icon: Zap,
    title: "Lightning-Fast Placement",
    description: "Need to scale from 1 to 20+ professionals? We deliver in 7 days. Our extensive talent network and efficient screening process means rapid deployment without compromising quality."
  },
  {
    icon: Shield,
    title: "Quality-Assured Candidates",
    description: "Comprehensive multi-stage screening including interviews, skill assessments, and background checks. We only present candidates who meet your exact specifications and requirements."
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Recruitment Support",
    description: "You get direct management of your team with ongoing recruitment support from us. Need replacements or want to scale up? We're here to help whenever you need."
  },
  {
    icon: TrendingUp,
    title: "Transparent Volume Pricing",
    description: "Starting at €539/month with clear volume discounts. 5 people: 10% off. 10 people: 20% off. 20+ people: 30% off. No hidden fees, just straightforward pricing that scales with you."
  }
];

export const WhyChooseUs = () => {
  return (
    <motion.section 
      className="relative py-4 sm:py-6 md:py-8 lg:py-10 z-40"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div 
          className="mb-10 sm:mb-12 md:mb-16 lg:mb-20 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
            The TalentSource Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 text-slate-900 dark:text-white px-2">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">Our Recruitment</span>?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed px-2">
            Professional workforce recruitment with precision matching, rapid placement, and scalable pricing. Here's what sets us apart.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              className="relative bg-white dark:bg-blue-900/30 border border-gray-200 dark:border-blue-600/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 hover:bg-gray-50 dark:hover:bg-blue-800/40 hover:border-gray-300 dark:hover:border-blue-500/50 hover:shadow-lg transition-all duration-700 group overflow-hidden"
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.6, -0.05, 0.01, 0.99] }}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <motion.div 
                  className="mb-4 sm:mb-5 md:mb-6 inline-flex p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white group-hover:scale-110 transition-all duration-500 shadow-[0_10px_30px_-10px_rgba(34,211,238,0.5)]"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <reason.icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {reason.description}
                </p>
              </div>
              
              {/* Corner decoration */}
              <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-b-2 border-r-2 border-blue-400/0 dark:border-cyan-400/0 group-hover:border-blue-400/50 dark:group-hover:border-cyan-400/50 rounded-br-xl sm:rounded-br-2xl transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};