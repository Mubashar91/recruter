import { TrendingUp, Users, Clock, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Professionals Placed",
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Placement Success Rate",
  },
  {
    icon: Clock,
    value: "7 Days",
    label: "Average Placement Time",
  },
  {
    icon: Award,
    value: "30%",
    label: "Max Volume Discount",
  },
];

const Stats = () => {
  return (
    <section className="py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex p-4 bg-white/10 rounded-xl mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/90 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
