import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CaseStudy {
  id: number;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial: string;
  testimonialAuthor: string;
  testimonialRole: string;
  image: string;
  stats: {
    costSaved: string;
    timeframe: string;
    teamSize: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Recruitment Agency Places 3x More Candidates with Pre-Screened Talent",
    company: "Elite Recruiters GmbH",
    industry: "Recruitment Agency",
    challenge: "Elite Recruiters needed to scale their placement volume but traditional sourcing was too slow. They were losing clients to competitors who could deliver candidates faster.",
    solution: "We provided pre-screened, interview-ready candidates for their client placements. The agency maintained client relationships while we handled sourcing, screening, and initial vetting.",
    results: [
      {
        metric: "Placement Volume",
        value: "250% Increase",
        description: "From 15 to 38 monthly placements"
      },
      {
        metric: "Placement Speed",
        value: "80% Faster",
        description: "From 30 days to 5 days average placement time"
      },
      {
        metric: "Client Satisfaction",
        value: "95%",
        description: "Higher client satisfaction with faster placements"
      },
      {
        metric: "Revenue Growth",
        value: "250%",
        description: "Increased agency revenue through higher placement volume"
      }
    ],
    testimonial: "Partnering with TalentSource transformed our agency. We went from 15 to 38 monthly placements in just 3 months. Our clients love the faster turnaround, and we've gained 6 new clients based on our improved service.",
    testimonialAuthor: "Sarah Weber",
    testimonialRole: "Managing Director, Elite Recruiters GmbH",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    stats: {
      costSaved: "€320K/year",
      timeframe: "3 months",
      teamSize: "38 Placements"
    }
  },
  {
    id: 2,
    title: "Marketing Agency Scales Team 5x with Remote Specialists",
    company: "Creative Solutions Agency",
    industry: "Marketing Agency",
    challenge: "Creative Solutions needed to scale their team to handle multiple client projects but couldn't find enough local talent fast enough. Traditional hiring was too slow for their growth.",
    solution: "We sourced 28 pre-screened marketing specialists including content creators, social media managers, SEO specialists, and digital marketers. All candidates were skill-tested and ready to work on client projects immediately.",
    results: [
      {
        metric: "Team Growth",
        value: "400% Increase",
        description: "From 7 to 28 marketing specialists in 4 months"
      },
      {
        metric: "Client Capacity",
        value: "6x More",
        description: "Can now handle 6x more client projects simultaneously"
      },
      {
        metric: "Cost Savings",
        value: "40%",
        description: "€240K saved vs local hiring"
      },
      {
        metric: "Client Satisfaction",
        value: "4.8/5",
        description: "Higher client satisfaction with faster project delivery"
      }
    ],
    testimonial: "TalentSource helped us scale from 7 to 28 marketing specialists in just 4 months. We can now handle 6x more client projects and our clients love the faster turnaround. Our revenue has doubled.",
    testimonialAuthor: "Michael Chen",
    testimonialRole: "CEO, Creative Solutions Agency",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    stats: {
      costSaved: "€240K/year",
      timeframe: "4 months",
      teamSize: "28 Specialists"
    }
  },
  {
    id: 3,
    title: "Call Center Scales Operations 10x with Remote Agents",
    company: "Global Support Solutions",
    industry: "Call Center",
    challenge: "Global Support Solutions needed to scale their operations to handle seasonal peaks and new client contracts. Traditional hiring was too slow and expensive for their growth needs.",
    solution: "We sourced 64 pre-screened call center agents including customer service specialists, sales agents, and technical support professionals. All agents were trained and ready to handle client calls immediately.",
    results: [
      {
        metric: "Agent Scaling",
        value: "800% Increase",
        description: "From 8 to 64 call center agents in 3 months"
      },
      {
        metric: "Cost Reduction",
        value: "45%",
        description: "€360K saved vs local hiring"
      },
      {
        metric: "Response Time",
        value: "90% Better",
        description: "Average response time under 30 seconds"
      },
      {
        metric: "Client Satisfaction",
        value: "4.9/5",
        description: "Higher client satisfaction with faster response times"
      }
    ],
    testimonial: "TalentSource helped us scale from 8 to 64 call center agents in just 3 months. We can now handle 8x more client calls and our response times are under 30 seconds. Our clients are thrilled with the service quality.",
    testimonialAuthor: "David Martinez",
    testimonialRole: "Operations Director, Global Support Solutions",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    stats: {
      costSaved: "€360K/year",
      timeframe: "3 months",
      teamSize: "64 Agents"
    }
  }
];

export { caseStudies };

export const CaseStudies = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      id="case-studies"
      className="relative py-4 sm:py-6 md:py-8 lg:py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          className="mb-8 sm:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4 shadow-lg">
            Success Stories
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-slate-800 dark:text-white">
            Agency Success <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            See how recruitment agencies, marketing agencies, and call centers scaled their operations 2.5-8x faster while saving 35-45% on costs.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-slate-50/80 dark:bg-white/5 backdrop-blur-xl border-2 border-slate-200/50 dark:border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:bg-slate-100/90 dark:hover:bg-white/10 hover:border-slate-300/60 dark:hover:border-cyan-400/50 hover:shadow-[0_25px_80px_-20px_rgba(71,85,105,0.3)] dark:hover:shadow-[0_25px_80px_-20px_rgba(34,211,238,0.4)] transition-all duration-700 cursor-pointer w-full"
              onClick={() => navigate(`/case-study/${study.id}`)}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative h-44 sm:h-52 md:h-48 lg:h-56 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.company}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold rounded-full mb-1.5 sm:mb-2 shadow-lg">
                    {study.industry}
                  </span>
                  <h3 className="text-white font-bold text-base sm:text-lg line-clamp-2">
                    {study.company}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5 pb-4 sm:pb-5 border-b border-slate-200 dark:border-white/10">
                  <div className="text-center">
                    <div className="text-blue-600 dark:text-cyan-300 font-bold text-sm sm:text-base lg:text-lg">{study.stats.costSaved}</div>
                    <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-600 dark:text-cyan-300 font-bold text-sm sm:text-base lg:text-lg">{study.stats.teamSize}</div>
                    <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">Team Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-600 dark:text-cyan-300 font-bold text-sm sm:text-base lg:text-lg">{study.stats.timeframe}</div>
                    <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">Timeline</div>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 text-slate-800 dark:text-white group-hover:text-slate-600 dark:group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {study.title}
                </h4>

                {/* Challenge snippet */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                  {study.challenge}
                </p>

                {/* Read more */}
                <div className="flex items-center gap-1 sm:gap-2 text-slate-600 dark:text-cyan-300 font-semibold text-xs sm:text-sm group-hover:gap-2 sm:group-hover:gap-3 transition-all">
                  <span className="hidden sm:inline">View Full Case Study</span>
                  <span className="sm:hidden">View Study</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-12 lg:mt-16 text-center"
        >
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6">
            Ready to write your own success story?
          </p>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gold text-foreground font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-lg">
            <span className="hidden sm:inline">Book Your Free Consultation →</span>
            <span className="sm:hidden">Get Started →</span>
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};
