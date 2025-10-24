import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, CheckCircle2 } from "lucide-react";

const faqs = [
  {
    question: "How quickly can you place professionals?",
    answer: "We typically deliver pre-screened candidate profiles within 24-48 hours. Once you make your selection, professionals start within 7 days. For specialized roles like experienced developers or cybersecurity experts, the process may take slightly longer to ensure the right match.",
  },
  {
    question: "What if someone doesn't work out?",
    answer: "We stand behind our screening process. If a professional isn't meeting your expectations, contact us and we'll work with you to find a replacement. Our goal is to ensure you have the right people for your needs.",
  },
  {
    question: "How do you ensure quality and reliability?",
    answer: "Every candidate goes through a 5-stage vetting process: initial screening, technical skills assessment, English proficiency test (for roles requiring communication), background verification, and cultural fit interview. Only the top 3% of applicants make it through our process.",
  },
  {
    question: "What's included in the €539/month pricing?",
    answer: "The €539/month is for full-time professionals (40 hours/week). This includes our complete recruitment and screening service. Volume discounts apply: 10% off for 5+ people, 20% off for 10+, and 30% off for 20+. You manage them directly. Specialized roles have custom pricing based on expertise required.",
  },
  {
    question: "Are there long-term contracts?",
    answer: "No. We work on a flexible month-to-month basis. Scale up or down as your business needs change. Need more people or replacements? Just reach out and we'll handle the sourcing and screening.",
  },
  {
    question: "How do you handle different time zones?",
    answer: "We have talent pools across all major time zones. Whether you need overlap with US business hours, 24/7 coverage, or specific regional presence, we can build teams that match your operational needs perfectly.",
  },
  {
    question: "Can you handle specialized or niche roles?",
    answer: "Absolutely. We've placed everyone from blockchain developers to medical transcriptionists. If you have specialized requirements, we tap into our extended network and industry-specific recruitment channels. Specialized roles may take a few extra days but we deliver.",
  },
  {
    question: "What industries do you serve?",
    answer: "We serve all major industries including technology, finance, healthcare, e-commerce, marketing, customer service, and more. Our recruiters have industry-specific expertise to understand your unique needs and terminology.",
  },
  {
    question: "How do payments and management work?",
    answer: "You pay us monthly for our recruitment service. You manage the professionals directly—setting tasks, schedules, and workflows. You handle their employment arrangements independently. We simply source and screen talent; you take it from there.",
  },
  {
    question: "What happens after placement?",
    answer: "You manage the professionals directly with complete control. For larger teams (10+), you get a dedicated account manager to help with ongoing recruitment needs. Need more people or replacements? We're always available to source additional talent.",
  },
];

const FAQ = () => {
  return (
    <motion.section 
      className="relative py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100/60 dark:bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-cyan-100/60 dark:bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div 
          className="text-left mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <HelpCircle className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white">Got Questions?</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Everything you need to know about our workforce recruitment service
          </p>
        </motion.div>
        
        <Accordion type="single" collapsible className="space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="group bg-white dark:bg-blue-900/30 backdrop-blur-xl border border-gray-200 dark:border-blue-600/30 hover:border-blue-300 dark:hover:border-blue-500/50 rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)] transition-all duration-300 overflow-hidden"
              >
                <AccordionTrigger className="text-left hover:no-underline px-6 sm:px-8 py-5 sm:py-6 hover:bg-blue-50 dark:hover:bg-blue-800/40 transition-colors duration-300">
                  <div className="flex items-start gap-3 sm:gap-4 pr-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 dark:bg-gold/10 group-hover:bg-blue-200 dark:group-hover:bg-gold/20 flex items-center justify-center transition-colors duration-300">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-gold" />
                      </div>
                    </div>
                    <span className="font-bold text-base sm:text-lg text-slate-800 dark:text-white/95 group-hover:text-blue-600 dark:group-hover:text-blue-200 transition-colors duration-300">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 sm:px-8 pb-5 sm:pb-6">
                  <div className="pl-12 sm:pl-14 text-slate-600 dark:text-white/80 leading-relaxed text-sm sm:text-base border-l-2 border-blue-300 dark:border-blue-400/30 ml-4 sm:ml-5">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
        
        {/* Bottom CTA */}
        <motion.div 
          className="mt-12 sm:mt-16 text-center p-6 sm:p-8 bg-gradient-to-br from-blue-50/80 via-blue-50/40 to-transparent dark:from-gold/10 dark:via-gold/5 dark:to-transparent border-2 border-blue-200 dark:border-gold/20 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-5">
            Our team is here to help you find the right talent for your needs.
          </p>
          <motion.button
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-gold dark:hover:bg-gold/90 text-white dark:text-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HelpCircle className="w-5 h-5" />
            <span>Contact Us</span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQ;
