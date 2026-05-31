"use client";

export const AboutHero = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-emerald-600 text-white text-sm font-semibold tracking-wide px-5 py-2 rounded-sm mb-6">
            ABOUT US
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Helping UK hotels turn browsers into bookings
          </h1>
          <p className="text-xl text-gray-600">
            Hotel Tours AI brings together immersive Matterport 3D tours and an AI concierge
            chatbot, built specifically for hotels. We&rsquo;re the hospitality arm of the
            team behind Gym Tours AI, applying the same proven VR-plus-AI approach to the
            way guests choose where to stay.
          </p>
        </div>
      </div>
    </section>
  );
};
