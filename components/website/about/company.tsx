"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const CompanyInfo = () => {
  const capabilities = [
    "Matterport Pro3 LiDAR capture",
    "AI concierge trained on your hotel",
    "Interactive 3D dollhouse views",
    "Embeddable tours for your website",
    "Lead capture, scoring & alerts",
    "Custom chatbot branding & personality",
    "Multi-property group packages",
    "Hosting & ongoing support",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <div className="inline-block bg-emerald-600 text-white text-sm font-semibold tracking-wide px-5 py-2 rounded-sm mb-6">
              OUR STORY
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Specialists in virtual tours and AI for hotels
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Hotel Tours AI was established to give hotels a better way to showcase their
              rooms and answer guests online. Having seen the VR-plus-AI approach work for
              hundreds of UK gyms through our sister company, Gym Tours AI, we built a
              version dedicated entirely to hospitality.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              We handle every project personally — from the initial scan, to training your
              AI concierge, to a polished tour that&rsquo;s ready to share. No outsourcing,
              no shortcuts, and transparent pricing with no surprise travel fees.
            </p>

            {/* Capabilities List */}
            <div className="grid grid-cols-2 gap-4">
              {capabilities.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-2" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center bg-emerald-600 text-white px-8 py-3 rounded-sm hover:bg-emerald-700 transition-colors duration-200 mt-8"
            >
              GET IN TOUCH
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Right side - Image */}
          <div className="relative h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80"
              alt="Modern hotel interior captured by Hotel Tours AI"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
