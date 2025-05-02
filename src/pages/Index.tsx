
import Header from "@/components/ui/Header";
import Hero from "@/components/Hero";
import ProgramSection from "@/components/ProgramSection";
import MaterialsSection from "@/components/MaterialsSection";
import AchievementsSection from "@/components/AchievementsSection";
import UploadSection from "@/components/UploadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProgramSection />
        <MaterialsSection />
        <UploadSection />
        <AchievementsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
