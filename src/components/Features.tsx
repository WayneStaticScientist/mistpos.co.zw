"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, Package, Printer, Database, LayoutDashboard, 
  Clock, Wallet, Store, Bell, Users, MessageSquare, 
  CreditCard, Camera, Bluetooth, ScanBarcode 
} from "lucide-react";

const features = [
  {
    title: "Inventory Management",
    desc: "Track stock levels, manage suppliers, and receive alerts for low stock.",
    icon: Package,
  },
  {
    title: "Multi-Printer Support",
    desc: "Connect to multiple printers simultaneously via USB or Bluetooth.",
    icon: Printer,
  },
  {
    title: "Real-time Database",
    desc: "Seamless synchronization across all devices and store locations.",
    icon: Database,
  },
  {
    title: "Dashboard & Analytics",
    desc: "Comprehensive insights into sales performance and trends.",
    icon: LayoutDashboard,
  },
  {
    title: "Shift Management",
    desc: "Manage cashier shifts, track clock-ins, and reconcile end-of-day balances.",
    icon: Clock,
  },
  {
    title: "Expense Tracking",
    desc: "Monitor business expenses and maintain a healthy cash flow.",
    icon: Wallet,
  },
  {
    title: "Multi-Store Control",
    desc: "Manage multiple branches from a single unified dashboard.",
    icon: Store,
  },
  {
    title: "Instant Notifications",
    desc: "Receive real-time alerts for critical sales and stock activities.",
    icon: Bell,
  },
  {
    title: "Unlimited Cashier Points",
    desc: "Scale your business with as many POS terminals as you need.",
    icon: Users,
  },
  {
    title: "WhatsApp Reports",
    desc: "Get automated daily or weekly reports delivered to your phone.",
    icon: MessageSquare,
  },
  {
    title: "Payment Gateways",
    desc: "Integrated support for major payment providers and digital wallets.",
    icon: CreditCard,
  },
  {
    title: "Sales Images",
    desc: "Attach product photos to sales records for better visual tracking.",
    icon: Camera,
  },
  {
    title: "Barcode Support",
    desc: "Speed up checkouts with seamless barcode scanner integration.",
    icon: ScanBarcode,
  },
  {
    title: "Bluetooth/USB Ready",
    desc: "Fully compatible with modern wireless and wired POS peripherals.",
    icon: Bluetooth,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mt-4"
          >
            Everything you need to <br className="hidden md:block" /> scale your business
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-card p-8 rounded-3xl shadow-sm border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl blue-gradient flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                <feature.icon className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
