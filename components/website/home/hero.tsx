"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative h-[78vh] min-h-[520px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury hotel interior captured for a virtual tour"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/30" />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block bg-emerald-600 text-white text-sm font-semibold tracking-wide px-5 py-2 mb-5 rounded-sm">
              VIRTUAL TOURS &times; AI CONCIERGE FOR HOTELS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
              Let guests explore
              <br />
              your hotel and book
              <br />
              before they arrive
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl">
              Hotel Tours AI combines immersive Matterport 3D tours with an AI concierge
              chatbot, so guests can walk through your rooms and get instant answers 24/7 —
              turning website browsers into direct bookings.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center bg-emerald-600 text-white px-8 py-3 rounded-sm hover:bg-emerald-700 transition-colors duration-200"
              >
                BOOK A DEMO
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#sample-tour"
                className="inline-flex items-center bg-white text-gray-900 px-8 py-3 rounded-sm hover:bg-gray-100 transition-colors duration-200"
              >
                <Eye className="mr-2 h-4 w-4" />
                View Sample Tour
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
