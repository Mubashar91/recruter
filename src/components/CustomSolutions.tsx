import { Button } from "@/components/ui/button";
import { Sparkles, Target, Zap, Shield, Clock, Users } from "lucide-react";

const features = [
	{
		icon: Target,
		title: "Role-Specific Matching",
		description:
			"We don't just fill seats. Our AI-powered matching system analyzes your specific needs, company culture, and technical requirements to find candidates who'll excel in your unique environment.",
	},
	{
		icon: Clock,
		title: "Flexible Engagement Models",
		description:
			"Choose from full-time, part-time, contract, or project-based arrangements. Scale up during busy seasons or scale down as needed. No long-term commitments required.",
	},
	{
		icon: Shield,
		title: "Custom Vetting Process",
		description:
			"Add your own interview rounds, technical assessments, or trial periods. We adapt our screening process to match your standards and requirements exactly.",
	},
	{
		icon: Users,
		title: "Team Composition Planning",
		description:
			"Need a mix of seniors and juniors? Specialists and generalists? We help you build balanced teams with the right skill distribution for your projects.",
	},
	{
		icon: Zap,
		title: "Rapid Replacement Guarantee",
		description:
			"If a team member doesn't work out in the first 90 days, we'll replace them at no additional cost. Your satisfaction is guaranteed.",
	},
	{
		icon: Sparkles,
		title: "Dedicated Success Manager",
		description:
			"For teams of 10+, get a dedicated account manager who understands your business, anticipates your needs, and ensures smooth operations.",
	},
];

const CustomSolutions = () => {
	return (
		<section className="py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-12">
			<div className="container mx-auto">
				<div className="max-w-3xl text-left mb-16 animate-fade-in">
					<div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full mb-6">
						<Sparkles className="h-4 w-4" />
						<span className="text-sm font-medium">Tailored to Your Needs</span>
					</div>

					<h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
						Custom{" "}
						<span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
							Employee Solutions
						</span>
					</h2>

					<p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
						Every business is unique. That's why we offer fully customizable
						workforce solutions that adapt to your specific requirements, industry
						demands, and company culture. No cookie-cutter approaches here.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
					{features.map((feature, index) => (
						<div
							key={feature.title}
							className="p-6 bg-white dark:bg-[#1B3476]/30 border border-gray-200 dark:border-blue-600/30 rounded-xl hover:bg-gray-50 dark:hover:bg-[#1B3476]/40 hover:border-gray-300 dark:hover:border-blue-500/50 hover:shadow-lg transition-all duration-700 group animate-slide-up"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className="mb-4">
								<div className="inline-flex p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg transition-colors shadow-[0_10px_30px_-10px_rgba(59,130,246,0.5)]">
									<feature.icon className="h-6 w-6 text-white" />
								</div>
							</div>

							<h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors duration-300">
								{feature.title}
							</h3>
							<p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
								{feature.description}
							</p>
						</div>
					))}
				</div>

				<div className="max-w-4xl mx-auto bg-white dark:bg-[#1B3476]/30 backdrop-blur-xl border border-gray-200 dark:border-blue-600/30 rounded-2xl p-8 sm:p-12 text-center animate-fade-in hover:bg-gray-50 dark:hover:bg-[#1B3476]/40 hover:border-gray-300 dark:hover:border-blue-500/50 transition-all duration-300">
					<h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
						Need Something{" "}
						<span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
							Even More Specific?
						</span>
					</h3>
					<p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
						We've built custom solutions for Fortune 500 companies, fast-growing
						startups, and everything in between. Tell us what you need, and we'll
						make it happen.
					</p>
					<Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-medium">
						Schedule a Custom Consultation
					</Button>
				</div>
			</div>
		</section>
	);
};

export default CustomSolutions;
