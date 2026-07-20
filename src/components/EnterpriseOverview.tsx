"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Bot,
  ShoppingCart,
  Package,
  BarChart3,
  Building2,
  Handshake,
  Sparkles,
  CheckCircle2,
  WifiOff,
  ArrowRight,
  Target,
  ShieldCheck,
  CreditCard,
  Sliders,
  Layers,
  Truck,
  TrendingUp,
  PieChart,
  Users,
  MessageSquare,
  Wallet,
  Headphones,
  Award
} from "lucide-react";

export default function EnterpriseOverview() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Mistpos",
    "operatingSystem": "Windows 10, Windows 11, Android 8.0+",
    "applicationCategory": "BusinessApplication, POSSystem",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Mistpos is an AI-powered Point of Sale (POS) and inventory management ecosystem with offline synchronization, multi-store analytics, employee management, and automated WhatsApp reports.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "128"
    },
    "featureList": [
      "AI-Powered Business Intelligence & Smart Assistant",
      "Smart POS with Offline Cart & Receipt Sync",
      "Multi-Shop Dashboard & Chain Operations",
      "Supply Chain Control & Inventory Audit",
      "WhatsApp Daily Sales & Real-time Alerts",
      "Mistpos Reseller Program with Commissions"
    ]
  };

  const featurePillars = [
    {
      id: "ai-bi",
      badge: "🤖 AI-Powered BI",
      title: "AI-Powered Business Intelligence",
      gradient: "from-purple-500 via-fuchsia-500 to-indigo-500",
      borderGlow: "group-hover:border-purple-500/40",
      bgLight: "bg-purple-500/10",
      textColor: "text-purple-400",
      icon: Bot,
      summary: "Conversational statistics, progress goal tracking, and automated error diagnostics.",
      items: [
        {
          name: "Smart Assistant",
          desc: "Chat with the built-in AI to instantly get statistics about your sales, inventory history, employee performance, and stock levels.",
          icon: Sparkles
        },
        {
          name: "Goal Setting & Debugging",
          desc: "Set business goals, track your progress, and even use the AI to debug errors or understand exactly what is happening in your system.",
          icon: Target
        }
      ]
    },
    {
      id: "smart-pos",
      badge: "🛒 Smart Checkout",
      title: "Smart Point of Sale (POS)",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      borderGlow: "group-hover:border-blue-500/40",
      bgLight: "bg-blue-500/10",
      textColor: "text-blue-400",
      icon: ShoppingCart,
      summary: "Rapid payment processing, customizable order modifiers, and offline receipt resilience.",
      items: [
        {
          name: "Flexible Payments",
          desc: "Process purchases via cash, card, or enable custom credit profiles for trusted customers.",
          icon: CreditCard
        },
        {
          name: "Order Management",
          desc: "Add customizable taxes, discounts, and item modifiers (price adjustments) directly at checkout.",
          icon: Sliders
        },
        {
          name: "Drafts & Offline Mode",
          desc: "Save current carts as drafts to finish later, and save receipts offline. Never lose a sale due to a network outage.",
          icon: WifiOff
        }
      ]
    },
    {
      id: "inventory",
      badge: "📦 Supply Chain",
      title: "Comprehensive Inventory & Catalog",
      gradient: "from-emerald-500 via-green-500 to-teal-600",
      borderGlow: "group-hover:border-emerald-500/40",
      bgLight: "bg-emerald-500/10",
      textColor: "text-emerald-400",
      icon: Package,
      summary: "Visual item cataloging, stock evaluation, purchase orders, and supplier tracking.",
      items: [
        {
          name: "Visual Item Management",
          desc: "Organize your products with custom colors, icons, or high-quality image uploads.",
          icon: Layers
        },
        {
          name: "Categorization",
          desc: "Group products and expenses into distinct categories for cleaner menus and detailed reporting.",
          icon: ShieldCheck
        },
        {
          name: "Supply Chain Control",
          desc: "Manage purchase orders, stock adjustments, suppliers, complete inventory history, stock evaluations, and physical inventory counts.",
          icon: Truck
        }
      ]
    },
    {
      id: "analytics",
      badge: "📊 Multi-Store",
      title: "Deep Analytics & Multi-Store Reporting",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      borderGlow: "group-hover:border-amber-500/40",
      bgLight: "bg-amber-500/10",
      textColor: "text-amber-400",
      icon: BarChart3,
      summary: "Granular breakdown of sales, credit/debt tracking, and cross-branch dashboards.",
      items: [
        {
          name: "Granular Statistics",
          desc: "View daily, monthly, and yearly breakdowns of sales, expenses, losses, discounts, payment types, shifts, and customer activity.",
          icon: TrendingUp
        },
        {
          name: "Actionable Insights",
          desc: "Discover your top 10 selling days, pinpoint peak sales hours, and view comprehensive month/year summaries.",
          icon: Sparkles
        },
        {
          name: "Advanced Visualizations",
          desc: "Track your performance through interactive line and bar graphs (revenue, customers, receipt counts) and pie charts comparing expenses vs. profits, payment types, cashier performance, and product category popularity.",
          icon: PieChart
        },
        {
          name: "Credit & Debt Tracking",
          desc: "Monitor outstanding credit, remaining balances, and payment histories for customers buying on credit.",
          icon: CreditCard
        },
        {
          name: "Multi-Shop Dashboard",
          desc: "View and compare statistics, top-earning locations, and expenses across all your registered shops in a single, unified view.",
          icon: Building2
        }
      ]
    },
    {
      id: "operations",
      badge: "🏢 Operations",
      title: "Business Operations & Growth",
      gradient: "from-sky-500 via-indigo-500 to-purple-600",
      borderGlow: "group-hover:border-sky-500/40",
      bgLight: "bg-sky-500/10",
      textColor: "text-sky-400",
      icon: Building2,
      summary: "Role-based staff access, automated WhatsApp summaries, and ticketing support.",
      items: [
        {
          name: "Employee Management",
          desc: "Add and manage staff with specific role-based permissions (Cashiers, Managers, Admins).",
          icon: Users
        },
        {
          name: "Automated Notifications",
          desc: "Receive daily sales summaries directly via WhatsApp, alongside real-time push notifications for critical system alerts.",
          icon: MessageSquare
        },
        {
          name: "Expense Tracking",
          desc: "Record daily expenses and attach them to specific categories to visualize exactly where your money is going via detailed pie charts.",
          icon: Wallet
        },
        {
          name: "Built-in Support",
          desc: "Access a dedicated ticketing system right inside the app to reach our support team whenever you need help.",
          icon: Headphones
        }
      ]
    },
    {
      id: "reseller",
      badge: "🤝 Reseller Program",
      title: "Mistpos Reseller Program",
      gradient: "from-rose-500 via-pink-500 to-purple-500",
      borderGlow: "group-hover:border-rose-500/40",
      bgLight: "bg-rose-500/10",
      textColor: "text-rose-400",
      icon: Handshake,
      summary: "Earn ongoing recurring commissions by registering new retail clients.",
      items: [
        {
          name: "Grow With Us",
          desc: "Want to grow with us? Apply directly in the app to become an official Mistpos Reseller. Register new clients on your behalf and earn ongoing commissions for their active subscriptions.",
          icon: Award
        }
      ]
    }
  ];

  return (
    <article 
      id="enterprise-overview" 
      className="py-24 px-6 relative overflow-hidden bg-background border-t border-border/40"
      aria-labelledby="overview-heading"
    >
      {/* Embedded JSON-LD for rich SEO indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Decorative gradient background glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <header className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-black tracking-widest uppercase mb-6 border border-primary/20"
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span>AI-POWERED POS & ENTERPRISE ECOSYSTEM</span>
          </motion.div>

          <motion.h2
            id="overview-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-black tracking-tight leading-[1.1] text-foreground mb-8"
          >
            Mistpos: <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-purple-500">AI-Powered Point of Sale</span> & Enterprise Management
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-medium"
          >
            <p>
              <strong className="text-foreground font-bold">Mistpos</strong> is a next-generation Point of Sale (POS) and inventory management ecosystem designed to help you run, scale, and understand your business effortlessly. Built for modern retail and enterprise environments, Mistpos combines a lightning-fast checkout experience with deep, AI-driven analytics, ensuring you have total control over a single shop or an entire chain of stores.
            </p>
            <p>
              Whether you are tracking real-time stock levels, managing employee shifts, or comparing revenue across multiple locations, Mistpos delivers enterprise-grade tools in a clean, intuitive interface. Crucially, Mistpos keeps your business running even when your internet drops, seamlessly syncing your offline sales with the server the moment you reconnect.
            </p>
          </motion.div>
        </header>

        {/* Feature Highlights Grid */}
        <section aria-label="Core Feature Categories" className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featurePillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className={`glass p-8 rounded-[2.5rem] border border-border/70 ${pillar.borderGlow} transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xl`}
                >
                  {/* Card Header */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${pillar.gradient} flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <span className={`text-xs font-black px-3 py-1.5 rounded-full ${pillar.bgLight} ${pillar.textColor} border border-current/20`}>
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-8 leading-relaxed font-medium">
                      {pillar.summary}
                    </p>

                    {/* Sub-items list */}
                    <div className="space-y-4 pt-6 border-t border-border/50">
                      {pillar.items.map((item, idx) => {
                        const ItemIcon = item.icon;
                        return (
                          <div key={idx} className="flex items-start space-x-3 group/item">
                            <div className={`w-6 h-6 rounded-lg ${pillar.bgLight} flex items-center justify-center shrink-0 mt-0.5`}>
                              <ItemIcon className={`w-3.5 h-3.5 ${pillar.textColor}`} />
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-foreground group-hover/item:text-primary transition-colors">
                                {item.name}
                              </h4>
                              <p className="text-xs text-muted-foreground leading-relaxed mt-1 font-normal">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Offline & Realtime Sync Feature Spotlight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-slate-950 text-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-white/10 overflow-hidden mb-20"
        >
          {/* Subtle animated light gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
                <WifiOff className="w-3.5 h-3.5" />
                <span>Zero Downtime guarantee</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                Offline-First Reliability & Auto Sync
              </h3>
              <p className="text-gray-300 text-base leading-relaxed max-w-2xl font-medium">
                Internet outages will never stall your checkout lines. Mistpos records transactions locally and syncs receipts, stock deductions, and financial statistics to the cloud automatically when connection returns.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 justify-center items-stretch lg:items-end">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <CheckCircle2 className="text-emerald-400 w-5 h-5 shrink-0" />
                <span className="text-sm font-semibold">100% Data Integrity Guarantee</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <CheckCircle2 className="text-blue-400 w-5 h-5 shrink-0" />
                <span className="text-sm font-semibold">Real-Time Cloud Backups</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Closing Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto glass p-10 md:p-14 rounded-[3rem] border border-primary/20 shadow-2xl relative overflow-hidden"
        >
          <h3 className="text-3xl md:text-5xl font-display font-black text-foreground mb-6 tracking-tight">
            Take control of your business today
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
            Mistpos is your complete solution for sales, stock, and intelligent growth. Available on Windows and Android.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/download"
              className="w-full sm:w-auto px-10 py-5 blue-gradient text-white rounded-2xl font-black text-lg shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-3"
            >
              <span>Get Mistpos Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="#features"
              className="w-full sm:w-auto px-8 py-5 glass text-foreground rounded-2xl font-bold text-lg border border-border hover:bg-foreground/5 transition-all flex items-center justify-center space-x-2"
            >
              <span>Explore All Capabilities</span>
            </a>
          </div>
        </motion.div>

      </div>
    </article>
  );
}
