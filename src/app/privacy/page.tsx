import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto bg-card p-12 rounded-[2.5rem] shadow-xl border">
          <h1 className="text-4xl font-display font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8 italic">Last Updated: May 14, 2026</p>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mistpos collects information to provide better services to our users. We collect information such as your store name, email address, and transaction data necessary for inventory management and reporting.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information we collect is used to maintain and improve our services, develop new features, and protect Mistpos and our users. We use data for real-time synchronization, analytics, and generating reports.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We prioritize the security of your data. We use industry-standard encryption and hashing for password storage. Access to your store data is restricted to authorized personnel only.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mistpos integrates with third-party services such as payment gateways and WhatsApp for reporting. These services have their own privacy policies, and we encourage you to review them.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Your Consent</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using Mistpos, you consent to our privacy policy. We may update this policy from time to time, and any changes will be posted on this page.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
