import { Shield, Clock, Users, Lock, Sparkles, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const values = [
  {
    icon: Shield,
    title: "Starting €539/Month",
    description: "Affordable full-time professionals"
  },
  {
    icon: Users,
    title: "You Manage Your Team",
    description: "We source, you control directly"
  },
  {
    icon: Clock,
    title: "7-Day Placement",
    description: "From requirement to start date"
  },
  {
    icon: Lock,
    title: "Multi-Stage Screening",
    description: "Only qualified candidates delivered"
  }
];

export const ValueProposition = () => {
  return (
    <motion.section 
      className="relative pt-0 pb-4 sm:pb-6 md:pb-8 lg:pb-10 z-10 overflow-hidden"
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      {/* Animated Background Gradients */}
      <motion.div
        className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-gold/15 via-yellow-500/10 to-amber-500/15 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-gradient-to-tl from-blue-500/15 via-purple-500/10 to-gold/15 rounded-full blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gold/30 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="mb-20 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full mb-6 backdrop-blur-md shadow-lg"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Premium Benefits</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-slate-900 dark:text-white">
            Why Companies Choose <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400">Our Recruitment</span> Service
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Experience the perfect blend of affordability, control, and speed with our proven recruitment process
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              className="group relative p-8 rounded-3xl bg-white dark:bg-blue-900/30 border border-gray-200 dark:border-blue-600/30 hover:border-gray-300 dark:hover:border-blue-500/50 hover:shadow-lg transition-all duration-700 overflow-hidden"
              initial={{ opacity: 0, y: 80, scale: 0.9, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15, 
                ease: [0.6, -0.05, 0.01, 0.99] 
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 } 
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Inner glow effect */}
              <motion.div 
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 dark:from-blue-300/10 via-transparent to-transparent pointer-events-none"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              />
              
              {/* Animated gradient background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 dark:from-cyan-300/30 via-blue-400/10 dark:via-blue-300/20 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              
              {/* Shine effect on hover */}
              <motion.div 
                className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full"
                animate={{
                  translateX: ['100%', '200%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              />
              
              {/* Glowing orb */}
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400/30 dark:bg-cyan-300/40 rounded-full blur-3xl opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="mb-6 inline-flex p-5 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_10px_30px_-10px_rgba(34,211,238,0.5)]"
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 } 
                  }}
                >
                  <value.icon className="w-8 h-8" strokeWidth={2.5} />
                </motion.div>
                <h3 className="text-2xl font-black mb-3 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base mb-4">
                  {value.description}
                </p>
                
                {/* Hover indicator */}
                <motion.div 
                  className="flex items-center gap-2 text-blue-600 dark:text-cyan-300 font-semibold text-sm opacity-0 group-hover:opacity-100"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-blue-400/0 dark:border-cyan-300/0 group-hover:border-blue-500/70 dark:group-hover:border-cyan-300/70 rounded-tl-3xl transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-blue-400/0 dark:border-cyan-300/0 group-hover:border-blue-500/70 dark:group-hover:border-cyan-300/70 rounded-br-3xl transition-all duration-500" />
              
              {/* Floating indicator */}
              <motion.div
                className="absolute top-4 right-4 w-3 h-3 bg-emerald-400 dark:bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 shadow-[0_0_12px_rgba(52,211,153,0.6)]"
                animate={{
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};