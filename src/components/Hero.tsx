"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, CheckCircle, Smartphone } from "lucide-react";
import Link from "next/link";

export default function Hero() {
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
