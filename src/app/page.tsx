import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WhyTrust } from "@/components/why-trust";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { FAQ } from "@/components/faq";
import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyTrust />
        <Services />
        <About />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
