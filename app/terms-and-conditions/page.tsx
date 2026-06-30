import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for Cruising Adventures Ltd, Nassau, Bahamas.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white py-20">
        <div className="container-px mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-bold">Terms and Conditions</h1>
          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              By booking or participating in any Cruising Adventures Ltd. tour or
              activity, you agree to the following terms and conditions. Please read
              them carefully before making a reservation.
            </p>
            <h2 className="font-display text-2xl font-bold text-foreground">Booking and Payment</h2>
            <p>
              All bookings are subject to availability. A deposit may be required to
              secure your reservation. Full payment is due before the tour commences.
              We accept major credit cards and other payment methods as listed on our
              booking page.
            </p>
            <h2 className="font-display text-2xl font-bold text-foreground">Safety Requirements</h2>
            <p>
              Participants must be at least 16 years old to operate a speedboat.
              A weight limit of 250 lbs per person applies. All guests must follow
              instructions from our certified guides at all times. Life jackets must
              be worn during all water activities.
            </p>
            <h2 className="font-display text-2xl font-bold text-foreground">Health and Physical Requirements</h2>
            <p>
              Guests with heart conditions, back problems, or who are pregnant should
              consult their doctor before participating. We reserve the right to
              refuse participation to anyone we deem unfit for safety reasons.
            </p>
            <h2 className="font-display text-2xl font-bold text-foreground">Alcohol Policy</h2>
            <p>
              No alcohol is permitted during tours. Upon completion of the tour,
              guests will receive 2 complimentary shots at the Lime Wedge bar.
            </p>
            <h2 className="font-display text-2xl font-bold text-foreground">Weather Policy</h2>
            <p>
              Tours are weather-dependent. In case of cancellation due to adverse
              weather conditions, we will offer a full refund or rescheduling at
              no additional charge.
            </p>
            <h2 className="font-display text-2xl font-bold text-foreground">Contact</h2>
            <p>
              Questions about these terms? Contact us at{" "}
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
