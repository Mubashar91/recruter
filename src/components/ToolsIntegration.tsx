import { motion } from "framer-motion";

const tools = [
  { name: "Slack", category: "Communication" },
  { name: "Trello", category: "Project Management" },
  { name: "Asana", category: "Project Management" },
  { name: "Google Workspace", category: "Productivity" },
  { name: "Microsoft 365", category: "Productivity" },
  { name: "Canva", category: "Design" },
  { name: "Adobe Suite", category: "Design" },
  { name: "HubSpot", category: "CRM" },
  { name: "Salesforce", category: "CRM" },
  { name: "Zendesk", category: "Support" },
  { name: "Intercom", category: "Support" },
  { name: "Monday.com", category: "Project Management" },
  { name: "ClickUp", category: "Project Management" },
  { name: "WordPress", category: "CMS" },
  { name: "Shopify", category: "E-commerce" },
  { name: "Mailchimp", category: "Marketing" },
  { name: "SEMrush", category: "SEO" },
  { name: "Hootsuite", category: "Social Media" }
];

const categories = ["Communication", "Project Management", "Productivity", "Design", "CRM", "Support", "CMS", "E-commerce", "Marketing", "SEO", "Social Media"];

export const ToolsIntegration = () => {
  return (
    <motion.section 
      className="relative py-4 sm:py-6 md:py-8 lg:py-10 z-60"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div 
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2 text-slate-900 dark:text-white">
            Works With Your <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">Existing Tools</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl px-2">
            Our VAs are trained on 50+ platforms. No need to change your workflow—we adapt to yours.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {tools.slice(0, 18).map((tool, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-blue-900/30 border border-gray-200 dark:border-blue-600/30 rounded-lg p-3 sm:p-4 text-center hover:bg-gray-50 dark:hover:bg-blue-800/40 hover:border-gray-300 dark:hover:border-blue-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
              >
                <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-white/95 group-hover:text-blue-600 dark:group-hover:text-blue-200 transition-colors">
                  {tool.name}
                </p>
                <p className="text-[10px] sm:text-xs text-slate-600 dark:text-white/70 mt-1">
                  {tool.category}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-blue-900/30 border border-gray-200 dark:border-blue-600/30 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8 text-center hover:bg-gray-50 dark:hover:bg-blue-800/40 hover:border-gray-300 dark:hover:border-blue-500/50 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-base sm:text-lg text-slate-800 dark:text-white/95 mb-3 sm:mb-4">
              <span className="font-bold text-blue-600 dark:text-blue-200">Need a specific tool?</span> Just ask. 
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-white/80">
              Our VAs receive ongoing training on new platforms monthly. If you use it, we can work with it.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};