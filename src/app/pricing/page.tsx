"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Download,
  ArrowLeft,
  Sparkles,
  Zap,
  Building2,
  Bot,
  HelpCircle,
  ShieldCheck,
  Scale,
  Utensils,
  CreditCard,
  BarChart3,
  Flame,
  ArrowRight
} from "lucide-react";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Mistpos Point of Sale Software",
    "description": "Mistpos POS offers flexible plans: $0 / $5 Basic for selling without subscription, $10 Pro for AI analytics, dead-stock tracking & credit installment management, and $15 Enterprise for multi-shop control & composite burger item production.",
    "offers": [
      {
        "@type": "Offer",
        "name": "Basic / Free Starter",
        "price": "5.00",
        "priceCurrency": "USD",
        "description": "Sell for free without mandatory subscription, add products, basic POS checkout."
      },
      {
        "@type": "Offer",
        "name": "Pro Retail & AI Analytics",
        "price": "10.00",
        "priceCurrency": "USD",
        "description": "Advanced inventory, dead-stock analytics, product sales rank, customer credit installments, weight/volume pricing."
      },
      {
        "@type": "Offer",
        "name": "Enterprise & Composite Production",
        "price": "15.00",
        "priceCurrency": "USD",
        "description": "Multi-shop master dashboard, production advanced inventory for composite items (burgers, combos), raw ingredient auto-deduction."
      }
    ]
  };

  const plans = [
    {
      name: "Basic",
      badge: "Free to Sell",
      desc: "Sell for free without subscriptions! Perfect for single shops adding products and running daily sales.",
      priceMonthly: "$5",
      priceAnnual: "$4",
      period: "per month (or Free)",
      popular: false,
      color: "from-blue-500 to-indigo-500",
      ctaText: "Download & Sell Free",
      ctaLink: "/download",
      features: [
        "Sell completely free without mandatory subscription",
        "Add & manage products, prices, and categories",
        "Lightning-fast POS checkout & offline receipt saving",
        "Cash and card transaction processing",
        "USB & Bluetooth thermal printer support",
        "Basic daily sales reporting"
      ]
    },
    {
      name: "Pro",
      badge: "Best Value",
      desc: "Deep AI analytics, dead stock detection, product rankings, and customer credit installment tracking.",
      priceMonthly: "$10",
      priceAnnual: "$8",
      period: "per month",
      popular: true,
      color: "from-primary via-purple-600 to-indigo-600",
      ctaText: "Start Pro Trial",
      ctaLink: "/download",
      features: [
        "Advanced Inventory & Dead Stock analytics (see non-selling products)",
        "Top 10 selling categories & best-selling product breakdowns",
        "Product Sales Analytics: view sales frequency, relative comparison & rank",
        "AI Assistant: chat with AI to diagnose stock and sales history",
        "Customer Credit & Debt tracking (pay in installments e.g. $5, $5)",
        "Variable pricing by Weight (kg/g) & Liquid Volume (liters/ml)",
        "Custom checkout discounts & price modifiers"
      ]
    },
    {
      name: "Enterprise",
      badge: "Multi-Shop & Production",
      desc: "Multi-branch master control, composite recipe production (burgers/combos), and enterprise chain management.",
      priceMonthly: "$15",
      priceAnnual: "$12",
      period: "per month",
      popular: false,
      color: "from-emerald-500 via-teal-600 to-cyan-600",
      ctaText: "Get Enterprise",
      ctaLink: "/download",
      features: [
        "Multi-Shop Master Dashboard: unified view across all registered stores",
        "Production Advanced Inventory: produce & compose items (e.g. burgers, combos)",
        "Automated raw material ingredient deduction on composite sales",
        "Shift management & cashier end-of-day reconciliation",
        "Automated daily sales summaries sent via WhatsApp",
        "Role-based staff permissions (Admin, Manager, Cashier)",
        "Official Mistpos Reseller Program eligibility & commissions"
      ]
    }
  ];

  const featureSpotlights = [
    {
      icon: CreditCard,
      title: "Credit & Flexible Installment Payments",
      badge: "SEO Trackable Feature",
      gradient: "from-blue-500 to-indigo-600",
      desc: "Mistpos natively supports buying on credit! Customers can make partial installment payments (e.g., $5 today, $5 next week) until their total balance is fulfilled. Access a dedicated Credit Manager to view all credited buyers, payment histories, and remaining balances at a glance."
    },
    {
      icon: Utensils,
      title: "Composite Items & Production Inventory",
      badge: "Advanced Recipes",
      gradient: "from-amber-500 to-red-600",
      desc: "Ideal for restaurants, fast food, and manufacturing! Create composite products like burgers, pizzas, or assembled bundles. When a burger is sold, Mistpos automatically calculates and deducts each raw ingredient (bun, patty, sauce) from inventory."
    },
    {
      icon: Scale,
      title: "Sold by Weight, Volume & Discounts",
      badge: "Flexible Billing",
      gradient: "from-purple-500 to-pink-600",
      desc: "Sell products dynamic by weight (kg, grams) or liquid volume (liters, ml). Apply instant percentage or fixed monetary discounts directly at checkout, ensuring precise pricing for groceries, liquids, and bulk items."
    },
    {
      icon: BarChart3,
      title: "AI Product Ranking & Non-Selling Stock Analytics",
      badge: "AI Powered",
      gradient: "from-emerald-500 to-teal-600",
      desc: "Stop wasting capital on slow stock! Mistpos identifies non-selling products, ranks your top 10 categories, tracks how many times each item has been sold, and compares relative sales performance with AI assistance."
    }
  ];

  const faqs = [
    {
      q: "Can I really use Mistpos to sell for free?",
      a: "Yes! You can download Mistpos and sell products for free without a subscription. Upgrading to the $5 Basic, $10 Pro, or $15 Enterprise plans unlocks advanced analytics, AI tools, credit tracking, and multi-shop production."
    },
    {
      q: "How does buying on credit with installments work?",
      a: "When checking out, select 'Credit'. You can log partial customer payments (e.g., $5, $5) as they pay. Mistpos tracks remaining customer balances and keeps a complete payment ledger."
    },
    {
      q: "What are composite items like burgers?",
      a: "Composite items allow you to define recipes (e.g., 1 Burger = 1 Bun + 1 Patty + 1 Cheese slice). Selling 1 burger automatically deducts the raw components from your stock levels."
    },
    {
      q: "Does Mistpos support weighted or liquid products?",
      a: "Yes. Items can be configured to sell by weight (kilograms, grams) or volume (liters, milliliters), automatically computing the total cost based on the quantity entered."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors group mb-8"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          {/* Pricing Header */}
          <header className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-black tracking-widest uppercase mb-4 border border-primary/20">
              <Zap className="w-3.5 h-3.5" />
              <span>Affordable & Transparent Pricing</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight text-foreground mb-6">
              Pick the Perfect Plan for Your Store
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed mb-8">
              Sell for <strong className="text-foreground">FREE</strong> without subscriptions, or scale with <strong className="text-foreground">$5 Basic</strong>, <strong className="text-foreground">$10 Pro AI</strong>, and <strong className="text-foreground">$15 Enterprise Multi-Shop</strong> capabilities.
            </p>

            {/* Annual / Monthly Toggle */}
            <div className="inline-flex items-center p-1.5 glass rounded-full border border-border/80 shadow-md">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                  !isAnnual ? "blue-gradient text-white shadow-lg" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2.5 rounded-full text-xs font-extrabold transition-all flex items-center space-x-2 cursor-pointer ${
                  isAnnual ? "blue-gradient text-white shadow-lg" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>Annual Billing</span>
                <span className="bg-emerald-500 text-white text-[10px] px-2 py-0.5 rounded-full font-black uppercase">
                  Save 20%
                </span>
              </button>
            </div>
          </header>

          {/* Pricing Cards Grid */}
          <section aria-label="Mistpos Pricing Plans" className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-24">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`glass p-8 rounded-[2.5rem] border ${
                  plan.popular ? "border-primary shadow-2xl shadow-primary/20 relative scale-[1.02]" : "border-border/60"
                } flex flex-col justify-between group hover:border-primary/40 transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 blue-gradient text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center space-x-1">
                    <Flame className="w-3.5 h-3.5" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-3xl font-black text-foreground">{plan.name}</h2>
                    {!plan.popular && (
                      <span className="text-xs font-bold px-3 py-1 bg-muted rounded-full text-muted-foreground">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-6 font-medium">
                    {plan.desc}
                  </p>

                  <div className="mb-8 pb-6 border-b border-border/50">
                    <span className="text-4xl md:text-6xl font-black text-foreground">
                      {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                    </span>
                    <span className="text-xs text-muted-foreground ml-2 font-bold uppercase">
                      / {plan.period}
                    </span>
                  </div>

                  <div className="space-y-3.5 mb-8">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start space-x-3 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground font-medium leading-relaxed">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={plan.ctaLink}
                  className={`w-full py-4 rounded-2xl text-center font-black text-sm shadow-xl transition-all flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? "blue-gradient text-white hover:scale-[1.02]"
                      : "bg-card hover:bg-muted text-foreground border border-border"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </section>

          {/* Core Feature Spotlights (SEO & Trackable) */}
          <section aria-label="Key Feature Capabilities" className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Enterprise Features Built-In</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-black text-foreground">
                Advanced Tools to Scale Sales & Inventory
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featureSpotlights.map((spot, i) => {
                const Icon = spot.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass p-8 rounded-[2.5rem] border border-border/70 shadow-xl flex flex-col justify-between group hover:border-primary/30 transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${spot.gradient} flex items-center justify-center text-white shadow-lg`}>
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                          {spot.badge}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {spot.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                        {spot.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* FAQ Section */}
          <section aria-label="Frequently Asked Questions" className="max-w-4xl mx-auto glass p-10 md:p-14 rounded-[3rem] border border-border/80 shadow-xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase mb-3">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground">Got questions? We have answers.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="font-bold text-foreground flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
