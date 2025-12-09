import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="w-full mx-auto max-w-[1920px] md:border-x border-white/10 bg-background">
        <Hero />
        <Capabilities />
        <About />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
