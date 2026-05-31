"use client";

import Link from "next/link";
import { Check } from "lucide-react";

interface Package {
  title: string;
  subtitle: string;
  price: string;
  unit: string;
  features: string[];
  featured?: boolean;
}

export const Packages = () => {
  const packages: Package[] = [
    {
      title: "AI Essentials",
      subtitle: "Bring your own Matterport tour",
      price: "£149",
      unit: "per month",
      features: [
        "Use your existing Matterport tour",
        "AI concierge trained on your hotel",
        "Website & in-tour chatbot",
        "Lead capture, scoring & alerts",
        "Analytics dashboard",
        "Standard email support",
      ],
    },
    {
      title: "All-in-One",
      subtitle: "Professional capture + full AI platform",
      price: "£249",
      unit: "per month + one-off capture",
      featured: true,
      features: [
        "Professional Matterport 3D capture",
        "Everything in AI Essentials",
        "Tour hosting, embed & floor plan",
        "Custom chatbot personality & branding",
        "Train the AI on your own documents",
        "Priority email & chat support",
      ],
    },
    {
      title: "Hotel Group",
      subtitle: "Multi-property & ongoing rollouts",
      price: "Bespoke",
      unit: "tailored package",
      features: [
        "Multiple properties",
        "Discounted per-site rates",
        "Dedicated account manager",
        "Group-wide lead reporting",
        "Flexible scheduling & rollout",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-lg p-8 ${
                pkg.featured
                  ? "bg-gray-900 text-white shadow-2xl ring-2 ring-emerald-600"
                  : "bg-white text-gray-900 shadow-sm border border-gray-100"
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-2xl font-bold">{pkg.title}</h3>
              <p
                className={`text-sm mb-6 ${
                  pkg.featured ? "text-gray-300" : "text-gray-500"
                }`}
              >
                {pkg.subtitle}
              </p>
              <div className="mb-1">
                <span className="text-4xl font-bold">{pkg.price}</span>
              </div>
              <p
                className={`text-sm mb-6 ${
                  pkg.featured ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {pkg.unit}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <Check
                      className={`mr-2 h-5 w-5 flex-shrink-0 ${
                        pkg.featured ? "text-emerald-400" : "text-emerald-600"
                      }`}
                    />
                    <span className={pkg.featured ? "text-gray-200" : "text-gray-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block w-full text-center px-6 py-3 rounded-sm font-semibold transition-colors duration-200 ${
                  pkg.featured
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                BOOK A DEMO
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          All prices exclude VAT and are billed monthly. Professional 3D capture is a
          one-off fee quoted to the size of your hotel, with no surprise travel charges.
        </p>
      </div>
    </section>
  );
};
