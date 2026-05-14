import Link from "next/link";
import { Rocket, Globe, Mail, MessageSquare } from "lucide-react";

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
            The all-in-one solution for your retail business. Modern, fast, and reliable.
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
            <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
            <li><Link href="#download" className="hover:text-white transition-colors">Download</Link></li>
            <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Contact</h4>
          <p className="text-gray-400 text-sm mb-4">
            Questions? Reach out to us at:<br />
            <span className="text-white font-medium">support@mistpos.co.zw</span>
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Mistpos. All rights reserved.
      </div>
    </footer>
  );
}
