export function VrTour() {
  return (
    <section id="sample-tour" className="scroll-mt-20 py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Step inside a sample hotel tour
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Explore the tour just like a guest would — walk through the rooms and view the
            dollhouse. Try the AI concierge too: ask it about rates, or tell it to show you
            the suite, and watch it take you there.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-lg shadow-2xl">
            <iframe
              src="https://tourbots.ai/embed/tour/8ba11f8b-4db1-40bc-a3db-4b04e6405e02?id=tour-8ba11f8b-4db1-40bc-a3db-4b04e6405e02-1780089410970&tourId=ae65cfc6-d845-4132-8621-a5dca0bf9d96&showTitle=false&showChat=true"
              width="100%"
              height="600"
              className="w-full h-[600px] border-0"
              frameBorder={0}
              allowFullScreen
              title="Hotel Tours AI sample hotel tour"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
