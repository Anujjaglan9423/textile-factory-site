import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Hero from "@/components/hero";
import ServicesSection from "@/components/sections/services";
import ProcessSection from "@/components/sections/process";
import StatsSection from "@/components/sections/stats";
import ProductsSection from "@/components/sections/products";
import SustainabilitySection from "@/components/sections/sustainability";
import ClientsSection from "@/components/sections/clients";
import TestimonialsSection from "@/components/sections/testimonials";
import ContactSection from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        {/* <ClientsSection /> */}
        <ServicesSection />
        <ProcessSection />
        <StatsSection />
        <ProductsSection />
        <SustainabilitySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
