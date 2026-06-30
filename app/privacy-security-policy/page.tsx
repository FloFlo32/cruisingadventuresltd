import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Privacy and Security Policy",
  description: "Privacy and Security Policy for Cruising Adventures Ltd, Nassau, Bahamas.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white py-20">
        <div className="container-px mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-bold">Privacy and Security Policy</h1>
          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Cruising Adventures Ltd. ("we", "us", or "our") is committed to protecting
              your personal information and your right to privacy. This Privacy Policy
              explains how we collect, use, and safeguard your information when you visit
              our website or book our services.
            </p>
            <h2 className="font-display text-2xl font-bold text-foreground">Information We Collect</h2>
            <p>
              We collect information you voluntarily provide when contacting us or booking
              adventures, including your name, email address, phone number, and any
              additional details relevant to your booking.
            </p>
            <h2 className="font-display text-2xl font-bold text-foreground">How We Use Your Information</h2>
            <p>
              Your information is used solely to process bookings, communicate about your
              adventure, and improve our services. We do not sell or share your personal
              information with third parties for marketing purposes.
            </p>
            <h2 className="font-display text-2xl font-bold text-foreground">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal
              information. All payment information is processed through secure, encrypted
              payment processors.
            </p>
            <h2 className="font-display text-2xl font-bold text-foreground">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:cruisingadventuresltd@gmail.com" className="text-primary hover:underline">
                cruisingadventuresltd@gmail.com
              </a>{" "}
              or call 242-817-2944.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
