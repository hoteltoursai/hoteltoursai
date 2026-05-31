"use client";

import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Daniel Carter",
      role: "Founder & Lead Capture Technician",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Sophie Bennett",
      role: "Operations Director",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Marcus Lee",
      role: "AI & Chatbot Specialist",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Hannah Doyle",
      role: "Hotel Onboarding & Client Success",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-emerald-600 text-white text-sm font-semibold tracking-wide px-5 py-2 rounded-sm mb-6">
            OUR TEAM
          </div>
          <h2 className="text-3xl font-bold mb-4">Meet the people behind the tours</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A small, dedicated team of capture technicians and AI specialists who handle
            every hotel from first scan to a live tour and concierge.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
