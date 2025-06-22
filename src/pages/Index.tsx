import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CreateNFTSection from "@/components/CreateNFTSection";
import FeaturedNFTs from "@/components/FeaturedNFTs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CreateNFTSection />
      <FeaturedNFTs />
    </div>
  );
};

export default Index;
