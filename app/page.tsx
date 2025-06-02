import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Programs from "@/components/Programs";
import ImpactSection from "@/components/Impact";
import Gallery from "@/components/Gallery";
import Action from "@/components/Action";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <About />

      {/* Programs Section */}
      <Programs />

      {/* Impact Section */}
      <ImpactSection />

      {/* Gallery Section */}
      <Gallery />

      {/* Call to Action */}
      <Action />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
