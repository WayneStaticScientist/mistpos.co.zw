"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Package,
  Printer,
  Database,
  LayoutDashboard,
  Clock,
  Wallet,
  Store,
  Bell,
  Users,
  MessageSquare,
  CreditCard,
  Camera,
  Bluetooth,
  ScanBarcode,
  Bot,
  Globe,
  Handshake,
  UserCheck,
  Car,
} from "lucide-react";

const categories = [
  { id: "all", label: "All Capabilities" },
  { id: "ai-analytics", label: "AI & Analytics" },
  { id: "pos-hardware", label: "POS & Hardware" },
  { id: "inventory-sync", label: "Inventory & Sync" },
  { id: "ecosystem-ops", label: "Ecosystem & Ops" },
];

const features = [
  {
    title: "Inventory Management",
    desc: "Track stock levels, manage suppliers, and receive alerts for low stock.",
    icon: Package,
    category: "inventory-sync",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Multi-Printer Support",
    desc: "Connect to multiple printers simultaneously via USB or Bluetooth.",
    icon: Printer,
    category: "pos-hardware",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Real-time Database",
    desc: "Seamless synchronization across all devices and store locations.",
    icon: Database,
    category: "inventory-sync",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Dashboard & Analytics",
    desc: "Comprehensive insights into sales performance and trends.",
    icon: LayoutDashboard,
    category: "ai-analytics",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Shift Management",
    desc: "Manage cashier shifts, track clock-ins, and reconcile end-of-day balances.",
    icon: Clock,
    category: "pos-hardware",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Expense Tracking",
    desc: "Monitor business expenses and maintain a healthy cash flow.",
    icon: Wallet,
    category: "ecosystem-ops",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Multi-Store Control",
    desc: "Manage multiple branches from a single unified dashboard.",
    icon: Store,
    category: "ecosystem-ops",
    color: "from-sky-500 to-indigo-500",
  },
  {
    title: "Instant Notifications",
    desc: "Receive real-time alerts for critical sales and stock activities.",
    icon: Bell,
    category: "inventory-sync",
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Unlimited Cashier Points",
    desc: "Scale your business with as many POS terminals as you need.",
    icon: Users,
    category: "pos-hardware",
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "WhatsApp Reports",
    desc: "Get automated daily or weekly reports delivered to your phone.",
    icon: MessageSquare,
    category: "ai-analytics",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Payment Gateways",
    desc: "Integrated support for major payment providers and digital wallets.",
    icon: CreditCard,
    category: "ecosystem-ops",
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Sales Images",
    desc: "Attach product photos to sales records for better visual tracking.",
    icon: Camera,
    category: "inventory-sync",
    color: "from-rose-500 to-red-500",
  },
  {
    title: "Barcode Support",
    desc: "Speed up checkouts with seamless barcode scanner integration.",
    icon: ScanBarcode,
    category: "pos-hardware",
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "Bluetooth/USB Ready",
    desc: "Fully compatible with modern wireless and wired POS peripherals.",
    icon: Bluetooth,
    category: "pos-hardware",
    color: "from-blue-600 to-indigo-600",
  },
  {
    title: "AI Assistant",
    desc: "Interact with your business data using voice or text for instant actionable insights.",
    icon: Bot,
    category: "ai-analytics",
    color: "from-fuchsia-500 to-purple-600",
  },

  {
    title: "Visitor Management",
    desc: "Track registrations, manage subscriptions, and handle recurring payments effortlessly.",
    icon: UserCheck,
    category: "ecosystem-ops",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Credit & Installment Payments",
    desc: "Allow customers to buy on credit and pay in partial quantities (e.g. $5, $5) with full balance tracking.",
    icon: CreditCard,
    category: "ecosystem-ops",
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Wholesale Pricing",
    desc: "Select quantities that trigger wholesale price tiers automatically for bulk selling.",
    icon: Handshake,
    category: "inventory-sync",
    color: "from-sky-500 to-indigo-500",
  },
  {
    title: "Receipt Refunds",
    desc: "Refund receipts directly from the sales record with full transaction reversal support.",
    icon: CreditCard,
    category: "ecosystem-ops",
    color: "from-rose-500 to-fuchsia-500",
  },
  {
    title: "System Diagnostics",
    desc: "Validate local cache, local storage, internet connectivity, and correct system time for POS readiness.",
    icon: Globe,
    category: "ecosystem-ops",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Inventory History",
    desc: "Track every item addition, removal, adjustment, and sale in a complete audit history.",
    icon: Database,
    category: "inventory-sync",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Composite & Recipe Production",
    desc: "Build composite items like burgers and combos. Auto-deduct raw ingredients upon checkout.",
    icon: Car,
    category: "inventory-sync",
    color: "from-amber-500 to-red-500",
  },
  {
    title: "Weight & Volume Pricing",
    desc: "Sell products dynamically computed by weight (kg, g) or liquid volume (liters, ml) with custom discounts.",
    icon: Package,
    category: "pos-hardware",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Dead Stock & Product Rank AI",
    desc: "Identify non-selling products, top 10 categories, product sales rank, and sales frequency with AI assistance.",
    icon: Bot,
    category: "ai-analytics",
    color: "from-emerald-500 to-teal-600",
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredFeatures =
    activeTab === "all"
      ? features
      : features.filter((f) => f.category === activeTab);

  return (
    <section
      id="features"
      className="py-24 px-6 relative overflow-hidden bg-muted/20 dark:bg-slate-950/20"
    >
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-black tracking-widest uppercase text-xs px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-black mt-6 tracking-tight text-foreground"
          >
            Enterprise tools, <br className="hidden md:block" /> built for
            scaling businesses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg font-medium leading-relaxed"
          >
            Explore our comprehensive suite of advanced billing, real-time
            tracking, and AI-driven operations.
          </motion.p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 max-w-4xl mx-auto p-1.5 bg-card/60 backdrop-blur-md rounded-[2rem] border border-border/80 shadow-md">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-6 py-3 rounded-full text-xs md:text-sm font-bold tracking-tight transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 blue-gradient rounded-full shadow-lg shadow-primary/20 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Features Grid with Layout Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredFeatures.map((feature) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{
                  opacity: 0,
                  scale: 0.92,
                  transition: { duration: 0.15 },
                }}
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
                key={feature.title}
                whileHover={{ y: -6 }}
                className="glass p-8 rounded-[2rem] border border-border/60 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle Hover Glow Backdrop */}
                <div
                  className={`absolute -inset-px bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-[2rem] -z-10`}
                />

                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 shadow-lg shadow-primary/10 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
