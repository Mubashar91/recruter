import { Users, Headphones, BarChart, Palette, Shield, Megaphone } from "lucide-react";

const industries = [
  {
    icon: Users,
    title: "Recruitment Agencies",
    roles: "Recruiters, Talent Sourcers, HR Coordinators, Interview Coordinators",
  },
  {
    icon: Headphones,
    title: "Call Centers & Support",
    roles: "Call Center Agents, Chat Support, Customer Service, Technical Support",
  },
  {
    icon: BarChart,
    title: "Data Entry & Processing",
    roles: "Data Entry Specialists, Data Processors, Data Analysts, Data Cleaners",
  },
  {
    icon: Palette,
    title: "Marketing Agencies",
    roles: "Digital Marketers, Content Creators, Social Media Managers, SEO Specialists",
  },
  {
    icon: Shield,
    title: "Back Office Operations",
    roles: "Administrative Assistants, Virtual Assistants, Bookkeepers, Account Managers",
  },
  {
    icon: Megaphone,
    title: "Sales & Lead Generation",
    roles: "Sales Representatives, Lead Generators, Business Development, SDRs",
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="text-left mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Agency Roles <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">We Source</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Specialized talent for recruitment agencies, marketing agencies, call centers, and data entry companies
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="p-6 bg-white dark:bg-blue-900/30 border border-slate-200 dark:border-blue-600/30 rounded-xl hover:bg-slate-50 dark:hover:bg-blue-800/40 hover:border-slate-300 dark:hover:border-blue-500/50 hover:shadow-lg transition-all duration-700 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="inline-flex p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg transition-colors shadow-[0_10px_30px_-10px_rgba(34,211,238,0.5)]">
                  <industry.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-slate-600 dark:group-hover:text-cyan-300 transition-colors duration-300">{industry.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{industry.roles}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
