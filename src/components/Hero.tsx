"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, CheckCircle, Smartphone, Bot, Search, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 4500); // 4.5 seconds per step
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      {/* Adaptive Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-blue-400/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-black tracking-widest uppercase mb-8 border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>NEXT GEN POS SYSTEM</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.95] mb-8 tracking-tighter text-foreground">
            Sell <span className="text-primary italic">faster.</span><br />
            Grow <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">bigger.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-xl font-medium">
            The all-in-one POS solution designed for modern retailers. Powerful, intuitive, and built to scale with your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Link 
              href="/download" 
              className="w-full sm:w-auto px-10 py-5 blue-gradient text-white rounded-2xl font-black text-lg shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-3"
            >
              <Download className="w-6 h-6" />
              <span>Download Free</span>
            </Link>
            <a 
              href="#features" 
              className="w-full sm:w-auto px-10 py-5 glass text-foreground rounded-2xl font-black text-lg border border-foreground/10 hover:bg-foreground/5 hover:border-foreground/20 transition-all flex items-center justify-center space-x-3"
            >
              <span>Explore Features</span>
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>

          <div className="flex flex-wrap gap-8">
            <div className="flex items-center space-x-3 group">
              <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <CheckCircle className="text-green-500 w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Cloud Sync</span>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Smartphone className="text-blue-500 w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Mobile Ready</span>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <CheckCircle className="text-primary w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Offline First</span>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Bot className="text-purple-500 w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">AI Powered</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative"
        >
          {/* Floating Element 1 */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 z-20 glass p-6 rounded-3xl shadow-2xl border border-white/40 hidden md:block"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30">
                <ArrowRight className="text-white w-7 h-7 -rotate-45" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Revenue</p>
                <p className="text-2xl font-black text-foreground">+$12,450</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Element 2 */}
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 z-20 glass p-6 rounded-3xl shadow-2xl border border-white/40 hidden md:block"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30">
                <Download className="text-white w-7 h-7" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Daily Sales</p>
                <p className="text-2xl font-black text-foreground">842</p>
              </div>
            </div>
          </motion.div>

          {/* Interactive POS & AI Search Widget */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 md:-bottom-12 md:left-6 md:translate-x-0 xl:-left-20 z-30 bg-slate-950/95 backdrop-blur-xl p-6 rounded-[2.5rem] shadow-2xl border border-white/10 w-80 h-[400px] flex flex-col justify-between overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {(step === 0 || step === 1) && (
                <motion.div
                  key="pos-step"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full flex flex-col items-center justify-between"
                >
                  <div className="text-center w-full">
                    <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider">
                      Multipoint Print & Pay
                    </span>
                    <h4 className="text-sm font-bold text-white mt-1">Instant Checkout</h4>
                  </div>

                  {/* Animation Area: Card inserting and receipt printing */}
                  <div className="relative w-full flex-grow flex flex-col items-center justify-center mt-4">
                    {/* Receipt paper printing out */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={step === 1 ? { height: 90, opacity: 1 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="w-28 bg-white text-slate-800 rounded-t-lg p-2.5 shadow-lg border border-slate-200 overflow-hidden flex flex-col space-y-1.5 z-20 absolute -top-8"
                    >
                      <div className="w-full flex justify-between items-center border-b border-dashed border-slate-300 pb-1">
                        <span className="text-[7px] font-bold font-mono">MIST POS</span>
                        <span className="text-[6px] font-mono">11/07/26</span>
                      </div>
                      <div className="w-full h-1 bg-slate-200 rounded" />
                      <div className="w-12 h-1 bg-slate-200 rounded" />
                      <div className="flex justify-between items-center text-[7px] font-mono mt-1 pt-1 border-t border-slate-200">
                        <span>TOTAL</span>
                        <span className="font-bold">$42.50</span>
                      </div>
                    </motion.div>

                    {/* Card container slot */}
                    <div className="relative w-40 h-28 flex justify-center items-end mt-12">
                      {/* Debit Card */}
                      <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={
                          step === 0 
                            ? { y: 20, opacity: 1, scale: 0.9 } 
                            : { y: 20, opacity: 1, scale: 0.9 }
                        }
                        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
                        className="w-24 h-15 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-2 shadow-lg flex flex-col justify-between absolute -top-8 z-0"
                      >
                        <div className="w-4 h-3 bg-amber-400 rounded-sm" />
                        <div className="w-full flex justify-between items-center">
                          <div className="text-[7px] text-white font-mono">•••• 4022</div>
                          <div className="w-3 h-3 rounded-full bg-white/20" />
                        </div>
                      </motion.div>

                      {/* POS terminal device body */}
                      <div className="w-36 h-20 bg-slate-800 rounded-t-xl border border-slate-700 shadow-xl flex flex-col justify-between p-2 z-10">
                        {/* Slot Line */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-1 bg-slate-950 rounded-full" />
                        {/* Terminal Screen */}
                        <div className="w-full h-8 bg-slate-900 rounded border border-slate-700 flex items-center justify-center px-1">
                          <span className={`text-[8px] font-mono ${step === 1 ? "text-emerald-400 animate-pulse" : "text-blue-400"}`}>
                            {step === 0 ? "PROCESSING CARD..." : "PAYMENT SUCCESS!"}
                          </span>
                        </div>
                        {/* Keyboard */}
                        <div className="grid grid-cols-4 gap-1 mt-1">
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className="h-1 bg-slate-600 rounded-sm" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] text-slate-400 mt-2">
                    {step === 0 ? "Processing transaction..." : "Receipt printed successfully"}
                  </span>
                </motion.div>
              )}

              {(step === 2 || step === 3) && (
                <motion.div
                  key="ai-step"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full flex flex-col items-center justify-between"
                >
                  <div className="text-center w-full">
                    <span className="text-[10px] uppercase font-bold text-purple-400 tracking-wider">
                      SuperAdmin AI Analytics
                    </span>
                    <h4 className="text-sm font-bold text-white mt-1">Natural Language Queries</h4>
                  </div>

                  {/* AI Search and result lines */}
                  <div className="w-full flex-grow flex flex-col justify-center space-y-3 mt-4">
                    {/* Search Bar */}
                    <div className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 flex items-center space-x-2">
                      <Search className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                      <div className="text-[10px] font-mono text-slate-300 w-full overflow-hidden whitespace-nowrap">
                        <motion.span
                          initial={{ width: 0 }}
                          animate={step === 2 || step === 3 ? { width: "100%" } : { width: 0 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="inline-block border-r border-purple-400 pr-1"
                        >
                          sales today by country
                        </motion.span>
                      </div>
                    </div>

                    {/* Results list */}
                    <div className="space-y-2">
                      {[
                        { flag: "🇿🇼", name: "Zimbabwe", val: "$4,250", count: "142 sales", delay: 0.4 },
                        { flag: "🇿🇦", name: "South Africa", val: "$2,840", count: "94 sales", delay: 0.8 },
                        { flag: "🇬🇧", name: "United Kingdom", val: "$1,200", count: "40 sales", delay: 1.2 },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -15 }}
                          animate={step === 3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                          transition={{ duration: 0.4, delay: item.delay }}
                          className="w-full bg-slate-900 border border-slate-800 hover:border-slate-700 p-2 rounded-lg flex items-center justify-between shadow-inner"
                        >
                          <div className="flex items-center space-x-2">
                            <span className="text-xs">{item.flag}</span>
                            <span className="text-[9px] font-semibold text-slate-300">{item.name}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-[9px] font-black text-white">{item.val}</div>
                            <div className="text-[7px] text-slate-500">{item.count}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <span className="text-[10px] text-purple-400 mt-2 flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 animate-spin" />
                    <span>AI aggregating demographics...</span>
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Branding Footer */}
            <div className="w-full text-center border-t border-slate-900 pt-2.5 mt-2 flex items-center justify-center space-x-1 shrink-0">
              <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">
                Developed by
              </span>
              <span className="text-[8px] font-black text-blue-400 uppercase tracking-widest">
                #Openchains Technologies
              </span>
            </div>
          </motion.div>

          <div className="relative z-10 glass p-4 rounded-[3rem] border border-white/30 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 group-hover:opacity-0 transition-opacity" />
            <Image 
              src="/images/dashboard.png" 
              alt="Mistpos Dashboard Preview" 
              width={1000} 
              height={750} 
              className="rounded-[2rem] shadow-2xl group-hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
          
          {/* Backdrop glow */}
          <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
