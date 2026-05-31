"use client";

import { Clock, MapPin, Phone, Mail } from "lucide-react";

interface InfoTile {
  icon: any;
  title: string;
  content: string[];
}

export const ContactForm = () => {
  const infoTiles: InfoTile[] = [
    {
      icon: MapPin,
      title: "Hotel Tours AI",
      content: ["27 Curtain Road", "Shoreditch, London EC2A 3LT"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: [
        "Monday – Friday: 8.30am – 6.00pm",
        "Saturday: 9.00am – 1.00pm",
        "On-site scanning available 7 days a week by arrangement.",
      ],
    },
    {
      icon: Phone,
      title: "Call Us",
      content: ["020 3886 9021"],
    },
    {
      icon: Mail,
      title: "Email Us",
      content: ["hello@hoteltours.ai"],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form className="bg-white p-8 rounded-lg shadow-sm">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Property
                </label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Please select…
                  </option>
                  <option>Boutique Hotel</option>
                  <option>Resort / Country House Hotel</option>
                  <option>B&amp;B / Guesthouse</option>
                  <option>Serviced Apartments</option>
                  <option>Hotel Group / Multiple Properties</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your hotel
                </label>
                <textarea
                  rows={4}
                  placeholder="Number of rooms, location and whether you already have a Matterport tour…"
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white px-6 py-3 rounded-sm hover:bg-emerald-700 transition-colors duration-200"
              >
                Book My Demo
              </button>
            </form>
          </div>

          {/* Info Tiles */}
          <div className="space-y-6">
            {infoTiles.map((tile, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <tile.icon className="w-6 h-6 text-emerald-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{tile.title}</h3>
                    {tile.content.map((line, i) => (
                      <p key={i} className="text-gray-600 mb-1">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
