import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

// Constants
const MAX_TEAM_SIZE = 30;
const BASE_PRICE = 539;

// Volume discount calculator
const getDiscount = (count: number): number => {
  if (count >= 20) return 0.30; // 30% off for 20+
  if (count >= 10) return 0.20; // 20% off for 10-19
  if (count >= 5) return 0.10;  // 10% off for 5-9
  return 0;
};

// TypeScript Interface
interface PricingPlan {
  name: string;
  teamSize: string;
  basePrice: number;
  discount: number;
  features: string[];
  highlighted: boolean;
  badge?: string;
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    teamSize: "1-4 People",
    basePrice: BASE_PRICE,
    discount: 0,
    features: [
      "Full-Time Staff (40h/week)",
      "Pre-Screened & Skill-Tested",
      "High-Accuracy Role Matching",
      "You Manage Them Directly",
      "7-Day Placement Guarantee"
    ],
    highlighted: false
  },
  {
    name: "Growth",
    teamSize: "5-9 People",
    basePrice: BASE_PRICE,
    discount: 0.10,
    badge: "Popular",
    features: [
      "Everything in Starter",
      "10% Volume Discount",
      "Priority Candidate Pool",
      "Dedicated Recruiter",
      "Flexible Replacements"
    ],
    highlighted: true
  },
  {
    name: "Scale",
    teamSize: "10-19 People",
    basePrice: BASE_PRICE,
    discount: 0.20,
    features: [
      "Everything in Growth",
      "20% Volume Discount",
      "Account Manager Included",
      "Custom Skill Sourcing",
      "Quarterly Team Reviews"
    ],
    highlighted: false
  },
  {
    name: "Enterprise",
    teamSize: "20+ People",
    basePrice: BASE_PRICE,
    discount: 0.30,
    badge: "Best Value",
    features: [
      "Everything in Scale",
      "30% Volume Discount",
      "Strategic Partnership",
      "Custom Pricing for Specialists",
      "White-Glove Service"
    ],
    highlighted: false
  }
];

export const Pricing = () => {
  const [teamSize, setTeamSize] = useState(1);
  
  const discount = getDiscount(teamSize);
  const pricePerPerson = Math.round(BASE_PRICE * (1 - discount));
  const totalMonthly = pricePerPerson * teamSize;
  const savings = discount > 0 ? Math.round(BASE_PRICE * discount * teamSize) : 0;
  
  // Calculate hourly rate (40h/week = 160h/month)
  const hourlyRate = (pricePerPerson / 160).toFixed(2)

  return (
    <motion.section 
      id="pricing"
      className="relative py-4 sm:py-6 md:py-8 lg:py-10 text-foreground z-10 overflow-hidden"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div 
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs sm:text-sm font-bold rounded-full mb-3 sm:mb-4 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            Transparent Pricing
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white leading-tight">
            Scale Your Team, <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">Save More</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Specialized staffing for agencies and high-volume companies. Perfect for recruitment agencies, marketing agencies, call centers, and data entry agencies. Save up to 30% with bulk hiring.
          </p>
        </motion.div>

        {/* VA Count Selector */}
        <motion.div 
          className="max-w-xl mx-auto mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-left mb-3 sm:mb-4">
            <label className="block text-base sm:text-lg lg:text-xl font-bold mb-2 text-slate-800 dark:text-white">
              How many team members do you need?
            </label>
            <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 px-2">
              Select your team size to see volume discounts
            </span>
          </div>
          
          <div className="relative group">
            {/* Hover gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg sm:rounded-xl pointer-events-none" />
            
            {/* Glow effect on focus */}
            <div className="absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl bg-gold/20" />
            
            <select 
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="relative w-full p-3 sm:p-4 md:p-5 bg-white dark:bg-blue-900/30 border-2 border-blue-200 dark:border-blue-600/30 hover:border-blue-400 dark:hover:border-blue-500/50 focus:border-blue-500 rounded-lg sm:rounded-xl text-center font-bold text-lg sm:text-xl lg:text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-800 dark:text-white/95 appearance-none cursor-pointer shadow-md hover:shadow-lg hover:shadow-blue-500/10 active:scale-[0.98]"
              style={{
                backgroundImage: 'none'
              }}
              aria-label="Select team size"
              aria-describedby="team-size-description"
            >
              {Array.from({ length: MAX_TEAM_SIZE }, (_, i) => i + 1).map(num => (
                <option 
                  key={num} 
                  value={num} 
                  className="text-slate-800 dark:text-white/95 bg-white dark:bg-blue-900/40 py-2 sm:py-3"
                >
                  {num} {num === 1 ? 'Person' : 'People'}
                </option>
              ))}
            </select>
            
            {/* Custom dropdown arrow */}
            <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none text-blue-500 dark:text-gold/70 group-hover:text-blue-600 dark:group-hover:text-gold transition-all duration-300 group-focus-within:rotate-180">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          {/* Price display */}
          <motion.div 
            className="mt-4 sm:mt-5 text-left space-y-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
          </motion.div>

          {discount > 0 && (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mt-4 sm:mt-5 p-3 sm:p-4 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-gold/20 dark:via-gold/30 dark:to-gold/20 backdrop-blur-sm border-2 border-emerald-200 dark:border-gold/50 rounded-lg sm:rounded-xl text-left shadow-lg"
              role="alert"
              aria-live="polite"
            >
              <p className="text-emerald-700 dark:text-gold font-bold text-sm sm:text-base md:text-lg flex items-center justify-start gap-2 flex-wrap">
                <span className="text-xl" aria-hidden="true">🎉</span>
                <span className="whitespace-nowrap">{Math.round(discount * 100)}% Volume Discount Active!</span>
                <span className="whitespace-nowrap">Saving €{savings}/month</span>
              </p>
            </motion.div>
          )}
          {teamSize >= 2 && teamSize < 5 && (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mt-4 sm:mt-5 p-2.5 sm:p-3 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-600/30 rounded-lg sm:rounded-xl text-left"
              role="status"
            >
              <p className="text-blue-700 dark:text-white/80 text-xs sm:text-sm flex items-center justify-start gap-1.5 flex-wrap">
                <span>💡</span>
                <span>Hire {5 - teamSize} more to unlock 10% discount</span>
              </p>
            </motion.div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -12, scale: 1.02 }}
            >
              {/* Animated gradient border for highlighted plan */}
              {plan.highlighted && (
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-gold via-blue-400 to-blue-500 rounded-2xl"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                />
              )}
              
              <div className={`relative rounded-2xl p-6 sm:p-8 md:p-10 transition-all duration-500 group h-full ${
                plan.highlighted 
                  ? 'bg-white dark:bg-blue-900/30 border-2 border-blue-500 dark:border-blue-400 shadow-[0_20px_50px_-12px_rgba(59,130,246,0.25)] hover:shadow-[0_25px_60px_-12px_rgba(59,130,246,0.35)]' 
                  : 'bg-white dark:bg-blue-900/30 border border-gray-200 dark:border-blue-600/30 hover:border-gray-300 dark:hover:border-blue-500/50 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]'
              }`}>
                {/* Top accent line with animation */}
                <motion.div 
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${
                    plan.highlighted ? 'bg-blue-500' : 'bg-gradient-to-r from-transparent via-blue-300 to-transparent'
                  }`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              
                {plan.badge && (
                  <motion.div 
                    className="absolute -top-4 right-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5"
                    initial={{ y: -10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Star className="w-3.5 h-3.5 fill-current" />
                    </motion.div>
                    {plan.badge}
                  </motion.div>
                )}
              
                {/* Header */}
                <div className="mb-5 relative z-10">
                  <h3 className={`text-xl sm:text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300 ${
                    plan.highlighted ? 'text-slate-900 dark:text-white' : 'text-slate-900 dark:text-white'
                  }`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className={`text-sm font-medium ${
                      plan.highlighted ? 'text-slate-600 dark:text-slate-200' : 'text-slate-600 dark:text-slate-300'
                    }`}>
                      {plan.teamSize}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-5 pb-5 border-b border-current/10 relative z-10">
                  <div className="flex flex-col gap-1">
                    <motion.span 
                      className={`text-3xl sm:text-4xl font-bold tracking-tight ${
                        plan.highlighted ? 'text-blue-600 dark:text-blue-300' : 'text-slate-900 dark:text-white'
                      }`}
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", duration: 0.8, delay: 0.4 }}
                    >
                      €{Math.round(plan.basePrice * (1 - plan.discount))}
                    </motion.span>
                    <span className={`text-xs ${
                      plan.highlighted ? 'text-slate-600 dark:text-slate-200' : 'text-slate-600 dark:text-slate-300'
                    }`}>
                      per person/month
                    </span>
                  </div>
                  {plan.discount > 0 && (
                    <p className={`text-xs mt-2 font-semibold flex items-center gap-1 ${
                      plan.highlighted ? 'text-emerald-600' : 'text-emerald-600'
                    }`}>
                      <Check className="w-3.5 h-3.5" />
                      {Math.round(plan.discount * 100)}% discount included
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-5 relative z-10">
                  {plan.features.map((feature, fIndex) => (
                    <motion.li 
                      key={fIndex} 
                      className="flex items-start gap-2.5"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + fIndex * 0.1 }}
                    >
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300 group-hover:scale-110 ${
                        plan.highlighted ? 'bg-blue-100 dark:bg-blue-400/20' : 'bg-blue-100 dark:bg-blue-400/15'
                      }`}>
                        <Check className={`w-3 h-3 ${
                          plan.highlighted ? 'text-blue-600 dark:text-blue-400' : 'text-blue-600 dark:text-blue-400'
                        }`} />
                      </div>
                      <span className={`text-sm leading-relaxed ${
                        plan.highlighted ? 'text-slate-700 dark:text-slate-100' : 'text-slate-700 dark:text-slate-200'
                      }`}>
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  variant={plan.highlighted ? "default" : "outline"}
                  size="lg"
                  onClick={() => window.location.href = '/book-meeting'}
                  className={`w-full relative z-10 font-semibold text-base py-4 sm:py-5 rounded-xl transition-all duration-300 group/btn overflow-hidden min-h-[48px] ${
                    plan.highlighted 
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl' 
                      : 'bg-white dark:bg-blue-900/30 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-300 hover:bg-blue-600 hover:text-white shadow-md hover:shadow-lg'
                  }`}
                  aria-label={`Get started with ${plan.name} plan for ${plan.teamSize} at €${Math.round(plan.basePrice * (1 - plan.discount))} per person per month`}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p 
    className="text-center text-muted-foreground mt-10 sm:mt-12 md:mt-16 lg:mt-20 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base px-4"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.5 }}
  >
    All plans include rigorous pre-screening, quality-assured placements, and flexible month-to-month billing. Perfect for agencies with big staffing demands - we take full responsibility for candidate quality so you can confidently deliver to your clients. Custom pricing available for specialized roles and enterprise partnerships.
        </motion.p>
      </div>
    </motion.section>
  );
};