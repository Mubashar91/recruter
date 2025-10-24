import { DollarSign, Rocket, Globe2, HeartHandshake, TrendingUp, Award } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Cost-Effective Workforce Solutions",
    description: "Access qualified professionals starting at €539/month. Volume discounts up to 30% make scaling affordable. No recruitment fees, no hidden costs.",
  },
  {
    icon: Rocket,
    title: "Rapid Talent Acquisition",
    description: "From 1 to 100+ professionals in days, not months. Our pre-screened talent pool ensures fast placement. Scale your workforce as your business grows.",
  },
  {
    icon: Globe2,
    title: "Any Role, Any Industry",
    description: "From administrative staff to specialized developers. Customer service to cybersecurity experts. We source talent across all skill levels and industries with high accuracy.",
  },
  {
    icon: HeartHandshake,
    title: "Complete Recruitment Handling",
    description: "We manage the entire hiring process: sourcing, screening, interviewing, and skill testing. You receive only qualified candidates ready for final selection.",
  },
  {
    icon: TrendingUp,
    title: "You Maintain Full Control",
    description: "We source and deliver talent—you manage them directly. No middleman in daily operations. Your team, your way, with our recruitment support.",
  },
  {
    icon: Award,
    title: "Rigorous Screening Process",
    description: "Multi-stage interviews, comprehensive skill assessments, background verification, and role-specific testing ensure only qualified professionals reach you.",
  },
];

const Benefits = () => {
  return (
    <section className="py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-left mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">Recruitment Service?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Professional workforce recruitment with precision matching. We source, screen, and deliver qualified talent across all roles and industries—you manage them directly.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-8 bg-white dark:bg-blue-900/30 border border-gray-200 dark:border-blue-600/30 rounded-2xl hover:bg-gray-50 dark:hover:bg-blue-800/40 hover:border-gray-300 dark:hover:border-blue-500/50 hover:shadow-lg transition-all duration-700 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="inline-flex p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl transition-colors shadow-[0_10px_30px_-10px_rgba(34,211,238,0.5)]">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors duration-300">{benefit.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
