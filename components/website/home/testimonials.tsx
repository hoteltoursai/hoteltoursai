"use client";

import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  company: string;
  rating: number;
  review: string;
  date: string;
}

export const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Charlotte Reeves",
      company: "General Manager, The Langford Hotel",
      rating: 5,
      review:
        "The team was professional from start to finish. The tour and AI concierge were live within a week, and we've seen a clear uplift in direct bookings — guests arrive having already pictured their stay.",
      date: "2 months ago",
    },
    {
      name: "James Holloway",
      company: "Owner, Harbour View Boutique Hotel",
      rating: 5,
      review:
        "The AI concierge answers guest questions about rooms and rates overnight, so our front desk isn't chasing emails. Brilliant detail on the tour too, and genuinely great value with no hidden fees.",
      date: "4 months ago",
    },
    {
      name: "Priya Sharma",
      company: "Marketing Lead, Riverside Hotel Group",
      rating: 5,
      review:
        "Hotel Tours AI captured three of our properties with no disruption to guests. The dollhouse view is a real talking point and we're capturing far more enquiries directly from our own website.",
      date: "5 months ago",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 mb-3">
            <span className="text-4xl font-bold text-emerald-600">4.9</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                  strokeWidth={0}
                />
              ))}
            </div>
          </div>
          <p className="text-gray-600">Rated by hoteliers across the UK</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-emerald-600">{testimonial.company}</p>
                  <div className="flex items-center space-x-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        strokeWidth={0}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">{testimonial.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
