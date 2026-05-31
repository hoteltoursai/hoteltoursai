export function Stats() {
  const stats = [
    { value: "200+", label: "Hotels live with us" },
    { value: "24/7", label: "AI concierge answering" },
    { value: "1 week", label: "From scan to go-live" },
    { value: "UK-wide", label: "Coverage, no travel fees" },
  ];

  return (
    <section className="bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-emerald-400 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
