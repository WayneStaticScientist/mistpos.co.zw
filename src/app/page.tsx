import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EnterpriseOverview from "@/components/EnterpriseOverview";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <EnterpriseOverview />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
