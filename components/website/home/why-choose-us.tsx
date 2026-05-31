"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export const WhyChooseUs = () => {
  const features = [
    {
      Icon: Sparkles,
      title: "AI CONCIERGE INCLUDED",
      description:
        "Every tour comes with an AI assistant trained on your hotel — rates, amenities and policies — answering guests around the clock.",
    },
    {
      Icon: Clock,
      title: "LIVE IN A WEEK",
      description:
        "One short visit to scan your hotel, then your tour and AI concierge go live on your website within about a week.",
    },
    {
      Icon: ShieldCheck,
      title: "MORE DIRECT BOOKINGS",
      description:
        "Capture and qualify leads straight from your tour, so you rely less on OTAs and keep more of every booking.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Image and Quote */}
          <div className="relative">
            <div className="aspect-[4/3] relative">
              <Image
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80"
                alt="Hotel suite captured as a 3D virtual tour"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md absolute bottom-6 left-6 border border-gray-100">
              <blockquote className="text-lg font-medium italic text-gray-800">
                &ldquo;A virtual tour and AI concierge let guests explore your rooms with
                genuine confidence — so the enquiries you receive are ready to book.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <div className="inline-block bg-emerald-600 text-white text-sm font-semibold tracking-wide px-5 py-2 rounded-sm mb-6">
              WHY HOTEL TOURS AI
            </div>
            <h2 className="text-4xl font-bold mb-6">More direct bookings, fewer lost guests</h2>
            <p className="text-lg text-gray-700 mb-6">
              An immersive 3D tour works around the clock for your hotel. Guests can walk
              through your rooms, picture their stay and get every question answered by the
              AI concierge long before they pick up the phone.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              From scan to live tour and chatbot, we handle everything — so you capture more
              direct bookings without adding to your team&rsquo;s workload.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center bg-emerald-600 text-white px-8 py-3 rounded-sm hover:bg-emerald-700 transition-colors duration-200"
            >
              EXPLORE OUR SERVICES
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 flex justify-center">
                <feature.Icon className="w-16 h-16 text-emerald-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
