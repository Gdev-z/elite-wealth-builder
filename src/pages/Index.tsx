import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MethodologySection from "@/components/MethodologySection";
import ResultsSection from "@/components/ResultsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <MethodologySection />
      <ResultsSection />
      <DifferentialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
