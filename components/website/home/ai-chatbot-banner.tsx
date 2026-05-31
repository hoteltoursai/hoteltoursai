"use client";

import { Sparkles, MessageSquare, Move3d, ArrowDown } from "lucide-react";

export const AiChatbotBanner = () => {
  const features = [
    {
      Icon: Sparkles,
      title: "Trained on your hotel",
      description: "Room rates, amenities and policies — set it up in our portal.",
    },
    {
      Icon: MessageSquare,
      title: "Answers guests 24/7",
      description: "Visitors ask real questions and get instant, accurate replies.",
    },
    {
      Icon: Move3d,
      title: "It moves the tour",
      description: "Ask to see a suite and the AI walks guests straight there.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-20 right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-teal-400/20 blur-3xl" />

      <div className="container relative mx-auto px-4 py-10">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Left: headline */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white ring-1 ring-white/25">
              <Sparkles className="h-3.5 w-3.5" />
              AI Concierge &times; VR Tour
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold leading-snug text-white">
              An AI concierge built into every tour, answering guest questions while you
              sleep
            </h2>
            <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-emerald-50">
              <ArrowDown className="h-4 w-4 animate-bounce" />
              Try it live in the tour below
            </p>
          </div>

          {/* Right: 3 features */}
          <div className="grid gap-4 sm:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur-sm"
              >
                <feature.Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                <h3 className="mt-2 text-sm font-semibold text-white">{feature.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-emerald-50">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
