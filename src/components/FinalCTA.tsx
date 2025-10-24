import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles, Clock, CheckCircle2, Users, TrendingUp, Award } from "lucide-react";
import { motion } from "framer-motion";

export const FinalCTA = () => {
  return (
    <motion.section 
      className="relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10 z-60"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgb(59 130 246) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} />
        </div>
        
        {/* Elegant gradient orbs */}
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 dark:from-blue-500/15 dark:to-purple-500/15 rounded-full filter blur-[80px]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-cyan-200/30 to-blue-200/30 dark:from-cyan-500/15 dark:to-blue-500/15 rounded-full filter blur-[80px]"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Accent gradient line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-300/40 dark:via-blue-400/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Professional badge */}
          <motion.div 
            className="flex justify-start mb-8 sm:mb-10"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 bg-slate-50/90 dark:bg-blue-900/20 backdrop-blur-xl rounded-full border border-slate-200/50 dark:border-blue-600/30 shadow-[0_8px_32px_rgba(71,85,105,0.15)] hover:bg-slate-100/90 dark:hover:bg-blue-800/30 hover:border-slate-300/60 dark:hover:border-blue-500/40 transition-all duration-300">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-slate-600 dark:text-blue-300" />
              </motion.div>
              <span className="text-sm sm:text-base font-semibold text-slate-700 dark:text-white/95 whitespace-nowrap tracking-wide">Build Your Workforce Today</span>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_rgba(52,211,153,0.8)]"></div>
            </div>
          </motion.div>

          {/* Professional headline */}
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-[1.15] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="block text-slate-900 dark:text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">Ready to Build</span>
            <span className="block mt-2 sm:mt-3">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent font-extrabold drop-shadow-[0_2px_24px_rgba(59,130,246,0.3)] dark:drop-shadow-[0_2px_24px_rgba(59,130,246,0.6)]">
                Your Workforce?
              </span>
            </span>
          </motion.h2>
          
          {/* Professional subtitle */}
          <motion.div
            className="mb-8 sm:mb-10 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-200 mb-8 leading-relaxed font-medium">
              Get qualified professionals placed in 5 days. You manage, we source.
            </p>
            
            {/* Refined benefits grid */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {[
                "Starting €450/month",
                "Pre-screened talent",
                "Up to 25% off",
                "All skill levels"
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.08, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2.5 bg-white/90 dark:bg-blue-900/20 backdrop-blur-xl rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 border border-slate-200/50 dark:border-blue-600/20 hover:bg-slate-50/90 dark:hover:bg-blue-800/30 hover:border-slate-300/60 dark:hover:border-blue-500/40 transition-all duration-300 shadow-[0_4px_16px_rgba(71,85,105,0.1)] dark:shadow-[0_4px_16px_rgba(59,130,246,0.2)]"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-300 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-white/95 text-sm sm:text-base font-medium whitespace-nowrap">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Professional CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Button 
              size="lg"
              onClick={() => window.location.href = '/book-meeting'}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 hover:scale-[1.03] active:scale-[0.98] group px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-bold rounded-xl shadow-[0_8px_32px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_48px_rgba(59,130,246,0.4)] transition-all duration-300 border border-blue-400/50 relative overflow-hidden cursor-pointer w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <span className="relative flex items-center gap-2.5">
                <span>Get Started Now</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={() => window.open('https://wa.me/YOUR_WHATSAPP_NUMBER', '_blank')}
                className="bg-white/90 dark:bg-white/[0.08] border-2 border-slate-300 dark:border-white/30 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-white/[0.15] hover:border-slate-400 dark:hover:border-white/50 hover:scale-[1.03] active:scale-[0.98] px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-semibold rounded-xl backdrop-blur-xl transition-all duration-300 group cursor-pointer w-full sm:w-auto shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
            >
              <span className="relative flex items-center gap-2.5">
                <MessageCircle className="h-5 w-5 group-hover:rotate-6 transition-transform duration-300" />
                <span>Chat With Us</span>
              </span>
            </Button>
          </motion.div>

          {/* Professional stats section */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            {[
              { icon: Users, value: "300+", label: "Professionals" },
              { icon: TrendingUp, value: "25%", label: "Max Discount" },
              { icon: Award, value: "92%", label: "Success Rate" },
              { icon: Clock, value: "5 Days", label: "Fast Placement" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 + index * 0.08, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="bg-white/90 dark:bg-blue-900/20 backdrop-blur-xl border border-slate-200/50 dark:border-blue-600/20 rounded-xl p-4 sm:p-5 hover:bg-slate-50/90 dark:hover:bg-blue-800/30 hover:border-slate-300/60 dark:hover:border-blue-500/40 transition-all duration-300 group shadow-[0_4px_16px_rgba(71,85,105,0.1)] dark:shadow-[0_4px_16px_rgba(59,130,246,0.2)]"
              >
                <stat.icon className="w-7 h-7 sm:w-9 sm:h-9 text-slate-600 dark:text-blue-300 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-white/70 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  );
};