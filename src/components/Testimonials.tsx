import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const testimonials = [
	{
		name: "Michael Schmidt",
		company: "TechFlow GmbH",
		role: "CEO",
		content:
			"DON VA helped us scale our customer support without compromising quality. We cut costs by 65% and improved response times significantly.",
		rating: 5,
	},
	{
		name: "Sarah Weber",
		company: "Digital Marketing Pro",
		role: "Marketing Director",
		content:
			"The social media management has been exceptional. Our engagement tripled, and the quality control is genuinely native-level.",
		rating: 5,
	},
	{
		name: "Thomas Müller",
		company: "E-Commerce Solutions",
		role: "Operations Manager",
		content:
			"Finally found VAs that actually understand our business. The 24h replacement guarantee gave us confidence to scale quickly.",
		rating: 5,
	},
];

export const Testimonials = () => {
	return (
		<motion.section
			id="testimonials"
			className="relative py-4 sm:py-6 md:py-8 lg:py-10 text-foreground z-40"
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.8, ease: "easeOut" }}
		>
			<div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
				<motion.div
					className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-left"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2 text-slate-900 dark:text-white">
						Trusted by{" "}
						<span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
							Growing Businesses
						</span>
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl px-2">
						Real results from real companies scaling with DON VA.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							className="bg-[#172D64] dark:bg-[#1B3476]/30 border border-gray-200 dark:border-blue-600/30 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 hover:bg-[#0f1f4a] dark:hover:bg-[#1B3476]/40 hover:border-gray-300 dark:hover:border-blue-500/50 transition-all duration-700"
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
						>
							<div className="flex gap-1 mb-3 sm:mb-4">
								{[...Array(testimonial.rating)].map((_, i) => (
									<Star
										key={i}
										className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 dark:fill-cyan-400 text-yellow-400 dark:text-cyan-400"
									/>
								))}
							</div>

							<p className="text-sm sm:text-base text-white dark:text-slate-200 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
								"{testimonial.content}"
							</p>

							<div className="border-t border-blue-200 dark:border-white/10 pt-3 sm:pt-4">
								<p className="text-sm sm:text-base font-bold text-white dark:text-white">
									{testimonial.name}
								</p>
								<p className="text-xs sm:text-sm text-blue-300 dark:text-cyan-300">
									{testimonial.role}
								</p>
								<p className="text-xs sm:text-sm text-blue-200 dark:text-slate-400">
									{testimonial.company}
								</p>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					className="!bg-[#172D64] dark:!bg-gradient-to-br dark:from-card/50 dark:to-card/30 backdrop-blur-sm border border-blue-400/30 dark:border-gold/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-5xl mx-auto hover:!bg-[#0f1f4a] dark:hover:border-gold/50 transition-all duration-300"
					style={{ backgroundColor: '#172D64' }}
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
				>
					<div className="text-left">
						<span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 dark:bg-gold/10 dark:text-gold text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
							Success Story
						</span>
						<h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white dark:text-white">
							Case Study:{" "}
							<span className="bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
								70% Cost Reduction
							</span>
						</h3>
						<p className="text-sm sm:text-base md:text-lg text-blue-100 dark:text-muted-foreground mb-5 sm:mb-6 leading-relaxed max-w-3xl">
							See how a mid-sized e-commerce company reduced their operational
							costs by €42,000 annually while improving service quality.
						</p>
						<Button
							variant="gold"
							size="lg"
							className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
						>
							View Full Case Study
						</Button>
					</div>
				</motion.div>
			</div>
		</motion.section>
	);
};