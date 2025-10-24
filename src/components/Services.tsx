import { Users, Target, UserCheck, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Target,
    title: "Agency-Focused Talent Matching",
    description: "Specialized sourcing for recruitment agencies, marketing agencies, data entry agencies, call centers, and chat support centers. We understand your high-volume needs and deliver candidates that match your client requirements perfectly.",
    benefit: "Agency-specialized sourcing"
  },
  {
    icon: UserCheck,
    title: "Pre-Screened & Client-Ready",
    description: "Every candidate goes through our rigorous screening process including skills testing, background checks, and client-specific assessments. Your agency clients get deployment-ready professionals from day one.",
    benefit: "Zero-friction deployments"
  },
  {
    icon: Users,
    title: "Bulk Staffing for High Demand",
    description: "Scale from 5 to 50+ staff members with progressive volume discounts. Perfect for agencies with big client demands - recruitment agencies placing multiple candidates, call centers needing seasonal staff, marketing agencies expanding teams.",
    benefit: "Volume-based pricing"
  },
  {
    icon: TrendingUp,
    title: "Full Responsibility Partnership",
    description: "We take complete responsibility for candidate quality and placement success. Your agency can confidently deliver staff to clients knowing we've done the heavy lifting of sourcing, screening, and vetting.",
    benefit: "Risk-free agency partnerships"
  }
];

export const Services = () => {
  return (
    <motion.section 
      id="services"
      className="relative py-4 sm:py-6 md:py-8 lg:py-10 text-foreground z-30 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
        <motion.div 
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 relative z-10 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs sm:text-sm md:text-base font-semibold rounded-full mb-3 sm:mb-4 shadow-lg">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-5 px-2 text-slate-900 dark:text-white">
            Powering <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">Agencies & High-Volume</span> Companies
          </h2>
          <p className="text-base sm:text-lg md:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed px-2">
            Specialized staffing solutions for recruitment agencies, marketing agencies, data entry agencies, call centers, and chat support centers. We handle the sourcing and screening, you deliver quality staff to your clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-7 lg:gap-8 max-w-6xl mx-auto relative z-10">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="relative bg-white dark:bg-blue-900/30 border border-slate-200 dark:border-blue-600/30 p-5 sm:p-6 md:p-7 lg:p-9 xl:p-10 rounded-xl sm:rounded-2xl hover:bg-slate-50 dark:hover:bg-blue-800/40 hover:border-slate-300 dark:hover:border-blue-500/50 hover:shadow-lg transition-all duration-700 group overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
              whileHover={{ y: -12, scale: 1.02 }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start gap-4 sm:gap-5 md:gap-5 lg:gap-6 relative z-10">
                <motion.div 
                  className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-[0_10px_30px_-10px_rgba(34,211,238,0.5)]"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                </motion.div>
                <div className="flex-1 w-full">
                  <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-3 text-slate-800 dark:text-white group-hover:text-slate-600 dark:group-hover:text-cyan-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-sm lg:text-base text-slate-600 dark:text-slate-300 mb-3 sm:mb-4 md:mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 md:px-3.5 md:py-1.5 lg:px-4 lg:py-2 bg-slate-100 dark:bg-cyan-500/20 border border-slate-300 dark:border-cyan-400/30 rounded-full text-slate-600 dark:text-cyan-300 text-xs sm:text-sm md:text-xs lg:text-sm font-semibold group-hover:bg-slate-500 dark:group-hover:bg-cyan-500 group-hover:text-white group-hover:border-slate-500 dark:group-hover:border-cyan-500 transition-all duration-500">
                    <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 mr-1.5 sm:mr-2 md:mr-1.5 lg:mr-2" />
                    <span className="leading-none">{service.benefit}</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/50 rounded-tr-xl sm:rounded-tr-2xl transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 border-b-2 border-l-2 border-gold/0 group-hover:border-gold/50 rounded-bl-xl sm:rounded-bl-2xl transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};