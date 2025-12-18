import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Locations from "@/components/Locations";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import AIChat from "@/components/AIChat";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Smarter Real Estates | Stop Foreclosure Without Bankruptcy | 99% Success Rate</title>
        <meta 
          name="description" 
          content="Stop foreclosure and save your home without filing bankruptcy. Expert legal team with 99% success rate. Free consultation. Nationwide service with offices in FL, NY, TX, DC & HI." 
        />
        <meta name="keywords" content="stop foreclosure, foreclosure defense, wrongful foreclosure, loan modification, TRO, save home from auction, foreclosure lawyer, mortgage help" />
        <link rel="canonical" href="https://smarterrealestates.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Smarter Real Estates | Stop Foreclosure Without Bankruptcy" />
        <meta property="og:description" content="Expert foreclosure defense with 99% success rate. Save your home without bankruptcy. Free consultation available 24/7." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smarterrealestates.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Smarter Real Estates",
            "description": "Foreclosure defense and mortgage modification legal services",
            "telephone": "855-964-2555",
            "email": "info@smarterrealestates.com",
            "url": "https://smarterrealestates.com",
            "areaServed": "United States",
            "serviceType": ["Foreclosure Defense", "Loan Modification", "Wrongful Foreclosure", "TRO Filing"],
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "3200 N. Federal Highway",
                "addressLocality": "Boca Raton",
                "addressRegion": "FL",
                "postalCode": "33433"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "17 State St",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "postalCode": "10004"
              }
            ]
          })}
        </script>
      </Helmet>

      <main className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <Stats />
        <About />
        <Testimonials />
        <FAQ />
        <Locations />
        <ContactForm />
        <Footer />
        <AIChat />
      </main>
    </>
  );
};

export default Index;
