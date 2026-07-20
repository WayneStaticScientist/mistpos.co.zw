import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Sparkles, Download } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features & Capabilities | Mistpos POS",
  description: "Explore the full suite of features in Mistpos including AI business intelligence, smart checkout, offline sync, multi-store management, and inventory tracking.",
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors group mb-6"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-black tracking-widest uppercase mb-4 border border-primary/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Capability Matrix</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight text-foreground mb-4">
              Designed for Retail Excellence
            </h1>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed">
              Discover everything Mistpos offers to streamline your point of sale, manage inventory, analyze growth, and empower your team.
            </p>
          </div>
        </div>

        {/* Render main features component */}
        <Features />

        {/* Download Banner */}
        <div className="max-w-5xl mx-auto mt-20 p-10 glass rounded-[2.5rem] border border-primary/20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to test all features?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto font-medium">
            Download Mistpos today for Windows or Android and experience seamless checkout and offline management.
          </p>
          <Link
            href="/download"
            className="inline-flex items-center space-x-3 px-8 py-4 blue-gradient text-white font-black rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            <Download className="w-5 h-5" />
            <span>Get Started Now</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
