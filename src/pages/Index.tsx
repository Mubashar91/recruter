import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { HowItWorks } from "@/components/HowItWorks";
import { Services } from "@/components/Services";
import Industries from "@/components/Industries";
import Stats from "@/components/Stats";
import Benefits from "@/components/Benefits";
import CustomSolutions from "@/components/CustomSolutions";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Pricing } from "@/components/Pricing";
import { ToolsIntegration } from "@/components/ToolsIntegration";
import { Testimonials } from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { CaseStudies } from "@/components/CaseStudies";
import { Blog } from "@/components/Blog";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-900 dark:to-slate-900">
      <Navbar />
      <Hero />
      {/* <ValueProposition /> */}
      <HowItWorks />
      {/* <Services /> */}
      <Industries />  
      <Benefits />
      {/* <CustomSolutions /> */}
      {/* <WhyChooseUs /> */}
      <Pricing />
      {/* <ToolsIntegration />
      <Testimonials /> */}
      <Blog />
      <CaseStudies />   
      <FAQ />
      
      {/* <FinalCTA />  */}
    </main>
  );
};

export default Index;