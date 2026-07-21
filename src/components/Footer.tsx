"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Globe, Mail, MessageSquare, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 blue-gradient rounded-lg flex items-center justify-center">
              <Rocket className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-display font-bold">Mistpos</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            The all-in-one solution for your retail business. Modern, fast, and
            reliable.
          </p>
          <div className="flex space-x-4 mt-6">
            <Globe className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Mail className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <MessageSquare className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Product</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li>
              <Link
                href="/features"
                className="hover:text-white transition-colors"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/download"
                className="hover:text-white transition-colors"
              >
                Download
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="hover:text-white transition-colors"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Contact</h4>
          <p className="text-gray-400 text-sm mb-4">
            Questions? Reach out to us at:
            <br />
            <span className="text-white font-medium">
              support@mistpos.co.zw
            </span>
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto border-t border-gray-800/80 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-xs w-full"
      >
        <p>© {new Date().getFullYear()} Mistpos. All rights reserved.</p>

        <Link
          href="https://openchainstechnologies.co.zw/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{
              scale: 1.04,
              boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.25)",
              borderColor: "rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2.5 px-4.5 py-2.5 bg-slate-900/50 hover:bg-slate-900 border border-gray-850 rounded-full text-gray-400 hover:text-white transition-all duration-300 relative group overflow-hidden cursor-pointer"
          >
            {/* Smooth animated shimmer overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 3,
                ease: "linear",
              }}
            />

            <span className="font-bold text-[9px] uppercase tracking-wider text-gray-500 group-hover:text-gray-300 transition-colors">
              Powered by
            </span>

            <div className="flex items-center space-x-1">
              <span className="font-extrabold text-[12px] tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-cyan-300 transition-all duration-300">
                Opechains
              </span>
              <span className="font-black text-[12px] tracking-tight text-white group-hover:text-cyan-200 transition-all duration-300">
                Technologies
              </span>
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 flex items-center justify-center"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400 group-hover:text-cyan-300 transition-colors" />
            </motion.div>

            {/* Pulsing state indicator dot */}
            <span className="absolute top-1.5 right-2 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
          </motion.div>
        </Link>
      </motion.div>
    </footer>
  );
}
