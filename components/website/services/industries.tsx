"use client";

import Image from "next/image";

interface Industry {
  name: string;
  image: string;
  tagline: string;
  description: string;
}

export const Industries = () => {
  const industries: Industry[] = [
    {
      name: "Guest Rooms & Suites",
      image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80",
      tagline: "Rooms",
      description:
        "Let guests step inside every room type and suite before they book. Show off the views, layout and finish that listing photos simply can't capture.",
    },
    {
      name: "Restaurants & Bars",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
      tagline: "Dining",
      description:
        "Capture the atmosphere of your restaurants and bars, helping guests and event planners choose the right space for celebrations and group bookings.",
    },
    {
      name: "Spa & Wellness",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80",
      tagline: "Leisure",
      description:
        "Showcase your spa, pool and wellness facilities in full 3D so guests can picture the experience and add treatments to their stay.",
    },
    {
      name: "Event & Conference Spaces",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
      tagline: "Events",
      description:
        "Help couples, planners and corporate clients picture their day in your function rooms — reducing site visits and speeding up the booking decision.",
    },
    {
      name: "Lobby & Communal Areas",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80",
      tagline: "Hotel",
      description:
        "Give guests a true feel for your arrival experience, lounges and shared spaces, setting the tone for their stay from the very first click.",
    },
    {
      name: "Exterior & Grounds",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
      tagline: "Location",
      description:
        "Capture your facade, gardens and surroundings so guests understand the setting and location before they ever arrive at your door.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Every part of your hotel, captured</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We scan the spaces that influence a booking decision and stitch them into one
            seamless, explorable tour.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-56">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-emerald-600 text-white text-xs font-semibold tracking-wide px-3 py-1 rounded-sm mb-3">
                  {industry.tagline}
                </div>
                <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
