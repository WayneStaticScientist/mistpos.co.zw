"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Download, Home as HomeIcon, Shield, Layers, DollarSign } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Features", href: "/features", icon: Layers },
  { name: "Pricing", href: "/pricing", icon: DollarSign },
  { name: "Privacy", href: "/privacy", icon: Shield },
  { name: "Download", href: "/download", icon: Download },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href;
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-6 py-4 md:py-6",
        scrolled ? "py-3 md:py-4" : "bg-transparent"
      )}
    >
      <div 
        className={cn(
          "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 px-4 md:px-6 py-2.5 md:py-3 rounded-2xl",
          scrolled ? "glass shadow-2xl shadow-primary/5 border border-border/50" : "bg-card/40 backdrop-blur-md border border-border/30 shadow-lg"
        )}
      >
        {/* Brand Logo & Back to Home */}
        <Link 
          href="/" 
          className="flex items-center space-x-3 group cursor-pointer"
          title="Mistpos - Back to Home"
        >
          <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 bg-slate-900 border border-white/20 p-1 flex items-center justify-center shrink-0">
            <Image 
              src="/logo.png" 
              alt="Mistpos Logo" 
              fill 
              className="object-contain p-1"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-display font-black tracking-tight text-slate-900 dark:text-white leading-none">
              Mistpos
            </span>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1 hidden sm:block">
              POS & Enterprise
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-background/60 p-1.5 rounded-full border border-border/60 backdrop-blur-md">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            const Icon = link.icon;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 rounded-full text-xs font-extrabold tracking-tight transition-all duration-300 flex items-center space-x-2 cursor-pointer",
                  active
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                )}
              >
                {active && (
                  <motion.div
                    layoutId="activeAppBarTab"
                    className="absolute inset-0 blue-gradient rounded-full shadow-lg shadow-primary/25 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                <Icon className={cn("w-3.5 h-3.5", active ? "text-white" : "text-muted-foreground")} />
                <span>{link.name}</span>

                {active && (
                  <span className="relative flex h-1.5 w-1.5 ml-0.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Download Action Button */}
        <div className="hidden md:flex items-center space-x-3">
          <Link
            href="/download"
            className={cn(
              "px-5 py-2.5 rounded-xl text-xs font-black tracking-wider uppercase transition-all duration-300 flex items-center space-x-2 shadow-xl cursor-pointer",
              pathname === "/download"
                ? "bg-foreground text-background shadow-foreground/20 hover:scale-105"
                : "blue-gradient text-white shadow-primary/25 hover:scale-105 active:scale-95"
            )}
          >
            <Download className="w-4 h-4" />
            <span>Download App</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle navigation menu"
          className="md:hidden text-foreground p-2 hover:bg-muted rounded-xl transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-full left-4 right-4 mt-3 glass border border-border/80 p-6 rounded-3xl flex flex-col space-y-3 md:hidden shadow-2xl z-50"
          >
            <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-3 mb-1">
              Navigation
            </div>
            
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              const Icon = link.icon;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-2xl font-bold transition-all text-sm",
                    active
                      ? "blue-gradient text-white shadow-lg shadow-primary/20"
                      : "hover:bg-muted text-foreground"
                  )}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </div>
                  {active && (
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20 text-white">
                      Current
                    </span>
                  )}
                </Link>
              );
            })}

            <hr className="border-border/50 my-2" />

            <Link
              href="/download"
              onClick={() => setIsOpen(false)}
              className="w-full py-4 blue-gradient text-white rounded-2xl text-center font-bold text-sm shadow-xl flex items-center justify-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download App</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
