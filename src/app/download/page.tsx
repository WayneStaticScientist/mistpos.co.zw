"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Download, Laptop, Smartphone, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function DownloadPage() {

  const windowsSteps = [
    "Extract the downloaded .ZIP file",
    "Open the extracted folder",
    "Double-click mistpos.exe to launch",
    "Right-click mistpos.exe and 'Pin to Taskbar' for easy access"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Choose your platform</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Download Mistpos for your devices and start managing your business more efficiently today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Windows Option */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-10 rounded-[2.5rem] border border-border/50 hover:border-primary/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Laptop className="text-primary w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Windows</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                The full desktop experience with advanced printing and offline capabilities.
              </p>
              
              <div className="space-y-3 mb-10">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="text-primary w-4 h-4" />
                  <span>Version 2.0.4 (Latest)</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="text-primary w-4 h-4" />
                  <span>Windows 10/11 Compatible</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border/50 mb-10">
                <h3 className="font-bold mb-6 text-foreground flex items-center space-x-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Laptop className="w-4 h-4" />
                  </span>
                  <span>Installation Steps:</span>
                </h3>
                <div className="space-y-5">
                  {windowsSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-4">
                      <div className="w-6 h-6 rounded-full bg-primary text-[10px] font-black text-white flex items-center justify-center shrink-0 mt-0.5 shadow-lg shadow-primary/20">
                        {idx + 1}
                      </div>
                      <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Mistpos.zip';
                  link.download = 'Mistpos.zip';
                  link.click();
                }}
                className="w-full py-5 blue-gradient text-white rounded-2xl font-black text-lg shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-3 cursor-pointer"
              >
                <Download className="w-6 h-6" />
                <span>Download .ZIP Now</span>
              </button>
            </motion.div>

            {/* Android Option */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-secondary p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Smartphone size={120} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform">
                  <Smartphone className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-white">Android</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Manage your store on the go with real-time notifications and barcode scanning.
                </p>

                <div className="space-y-3 mb-10">
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <CheckCircle2 className="text-primary-light w-4 h-4" />
                    <span>Available on Play Store</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <CheckCircle2 className="text-primary-light w-4 h-4" />
                    <span>Android 8.0 or higher</span>
                  </div>
                </div>

                <a 
                  href="https://play.google.com/store/apps/details?id=aca.bicosatstudios.mistpos.mistpos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-white text-secondary rounded-2xl font-bold shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-3"
                >
                  <Smartphone className="w-5 h-5" />
                  <span>Get on Play Store</span>
                </a>
              </div>
            </motion.div>
          </div>

          <div className="mt-20 text-center">
            <p className="text-muted-foreground">
              Need help with installation? <Link href="/contact" className="text-primary font-bold hover:underline">Contact Support</Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
