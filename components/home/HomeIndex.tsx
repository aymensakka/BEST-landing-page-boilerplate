import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Benefits from "@/components/home/Benefits";
import HowItWorks from "@/components/home/HowItWorks";
import UseCases from "@/components/home/UseCases";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import { defaultLocale, getDictionary } from "@/lib/i18n";

export default async function HomeIndex({ lang }: { lang: string }) {
  const langName = lang || defaultLocale;
  const dict = await getDictionary(langName);

  return (
    <>
      {/* Hero Section */}
      <Hero locale={dict.Hero} langName={langName} CTALocale={dict.CTAButton} />
      
      {/* Features Section */}
      <Features id="features" locale={dict.Features} />
      
      {/* Benefits Section - What is gifthero? */}
      <Benefits locale={dict.Benefits} />
      
      {/* How It Works Section */}
      <HowItWorks id="how-it-works" locale={dict.HowItWorks} />
      
      {/* Use Cases Section */}
      <UseCases id="use-cases" locale={dict.UseCases} />
      
      {/* About Section */}
      <About id="about" locale={dict.About} />
      
      {/* Contact Section */}
      <Contact id="contact" locale={dict.Contact} />
      
      {/* CTA (Call to Action) */}
      <CTA locale={dict.CTA} CTALocale={dict.CTAButton} />
    </>
  );
}
