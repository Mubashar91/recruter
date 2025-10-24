import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, Sparkles, TrendingUp, Award, Zap, CheckCircle2, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollY } = useScroll();

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), {
    stiffness: 150,
    damping: 20,
  });

  const parallaxY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  // Floating particles data
  const particles = [
    { x: "10%", y: "20%", delay: 0, duration: 3 },
    { x: "80%", y: "30%", delay: 1, duration: 4 },
    { x: "20%", y: "70%", delay: 2, duration: 3.5 },
    { x: "90%", y: "60%", delay: 0.5, duration: 4.5 },
    { x: "50%", y: "15%", delay: 1.5, duration: 3 },
  ];

  return (
    <section className="relative pt-32 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced 3D Background Elements - Light Mode Optimized */}
      <motion.div 
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/15 to-cyan-500/15 dark:from-gold/20 dark:to-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ transformStyle: "preserve-3d", y: parallaxY }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-blue-400/12 to-cyan-400/12 dark:from-primary/20 dark:to-gold/20 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ transformStyle: "preserve-3d", y: parallaxY }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/8 to-purple-500/8 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles - Light Mode Enhanced */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-500/30 dark:bg-gold/40 rounded-full shadow-sm"
          style={{ left: particle.x, top: particle.y }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto relative z-10" style={{ perspective: "2000px" }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content with 3D transforms */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:bg-gold/10 border border-blue-200 dark:border-gold/20 text-blue-700 dark:text-gold px-4 py-2 rounded-full mb-6 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ scale: 0, rotateZ: -180 }}
              animate={{ scale: 1, rotateZ: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, translateZ: 20 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">Agency & High-Volume Staffing Solutions</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight drop-shadow-[0_2px_24px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="inline-block"
                style={{ transform: "translateZ(30px)" }}
              >
                Scale Your Agency with{" "}
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent inline-block relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, translateZ: 40 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                Pre-Screened
                <motion.span
                  className="absolute inset-0 bg-blue-500/20 dark:bg-cyan-400/30 blur-xl rounded-lg"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.8, 1.1, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="inline-block"
                style={{ transform: "translateZ(30px)" }}
              >
                {" "}Pre-Screened Talent
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-600 dark:text-slate-200 mb-6 leading-relaxed max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
            >
              Specialized staffing solutions for recruitment agencies, marketing agencies, data entry agencies, call centers, and chat support centers. We handle sourcing and screening, you deliver quality staff to your clients.
            </motion.p>

            {/* Key Features Pills */}
            <motion.div 
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {[
                { icon: CheckCircle2, text: "€450/month", color: "from-emerald-50 to-green-50 dark:from-emerald-500/30 dark:to-green-500/30 border-emerald-200 dark:border-emerald-400/40", textColor: "text-emerald-700 dark:text-emerald-300" },
                { icon: TrendingUp, text: "25% off bulk", color: "from-amber-50 to-yellow-50 dark:from-amber-500/30 dark:to-yellow-500/30 border-amber-200 dark:border-amber-400/40", textColor: "text-amber-700 dark:text-amber-300" },
                { icon: Zap, text: "5-day placement", color: "from-blue-50 to-cyan-50 dark:from-blue-500/30 dark:to-cyan-500/30 border-blue-200 dark:border-cyan-400/40", textColor: "text-blue-700 dark:text-cyan-300" },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r ${feature.color} border backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.05, translateZ: 25, y: -2 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <feature.icon className={`h-5 w-5 ${feature.textColor}`} />
                  <span className={`text-sm font-semibold ${feature.textColor}`}>{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                whileHover={{ scale: 1.05, translateZ: 30 }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-lg px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Scale Your Agency
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, translateZ: 30 }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-blue-300 dark:border-gold/50 text-blue-700 dark:text-gold hover:border-blue-500 dark:hover:border-gold hover:bg-blue-50 dark:hover:bg-gold/10 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md">
                  See How It Works
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-8 text-sm text-slate-600 dark:text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div 
                className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-gold transition-colors duration-300"
                whileHover={{ scale: 1.1, translateZ: 20 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Users className="h-5 w-5 text-blue-600 dark:text-gold" />
                <span>Agency-Focused Solutions</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-gold transition-colors duration-300"
                whileHover={{ scale: 1.1, translateZ: 20 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Sparkles className="h-5 w-5 text-blue-600 dark:text-gold" />
                <span>7-Day Placement</span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right Image with 3D Card Effect */}
          <motion.div 
            className="relative z-10"
            initial={{ opacity: 0, x: 50, rotateY: 20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            {/* Main 3D Image Card */}
            <motion.div
              style={{
                rotateX: isHovered ? rotateX : 0,
                rotateY: isHovered ? rotateY : 0,
                transformStyle: "preserve-3d",
              }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="relative z-0"
            >
              {/* Enhanced Glow effect - Light Mode Optimized */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-600/20 dark:from-gold/40 dark:via-accent/40 dark:to-blue-500/40 rounded-3xl blur-3xl"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transform: "translateZ(-50px)" }}
              />

              {/* Additional pulsing rings - Light Mode Enhanced */}
              <motion.div 
                className="absolute inset-0 rounded-3xl border-4 border-blue-400/40 dark:border-gold/30"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transform: "translateZ(-20px)" }}
              />
              
              {/* Image container with 3D depth */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-400/40 dark:border-gold/30 hover:border-blue-500/60 dark:hover:border-gold/50 transition-colors duration-500"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(50px)",
                }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  src={heroImage}
                  alt="Diverse remote workers collaborating digitally"
                  className="w-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                {/* Enhanced overlay gradients - Light Mode Optimized */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-cyan-500/10 dark:from-gold/20 dark:via-transparent dark:to-blue-500/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-400/5 to-transparent dark:via-purple-500/10 mix-blend-overlay" />
                
                {/* Shine effect on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full"
                  animate={isHovered ? {
                    translateX: ["100%", "200%"],
                  } : {}}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                />

                {/* Corner accents - Light Mode Enhanced */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-blue-500/60 dark:border-gold/50 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-blue-500/60 dark:border-gold/50 rounded-br-3xl" />
              </motion.div>

              {/* Sparkle effects around image - Light Mode Enhanced */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-500 dark:bg-gold rounded-full shadow-sm"
                  style={{
                    top: `${15 + i * 15}%`,
                    left: i % 2 === 0 ? "-5%" : "105%",
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
