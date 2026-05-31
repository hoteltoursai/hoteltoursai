import { Hotel, Sparkles, Move3d, MessageSquare } from "lucide-react";

export const ComingSoon = () => {
  const highlights = [
    {
      Icon: Move3d,
      title: "Immersive 3D tours",
      description: "Matterport tours that let guests explore every room 24/7.",
    },
    {
      Icon: MessageSquare,
      title: "AI concierge",
      description: "An assistant trained on your hotel, answering guests instantly.",
    },
    {
      Icon: Sparkles,
      title: "More direct bookings",
      description: "Capture and qualify enquiries straight from your website.",
    },
  ];

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-emerald-950 to-teal-950 px-4 py-16 text-center">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-24 -right-16 h-96 w-96 rounded-full bg-emerald-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-2xl">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600">
            <Hotel className="h-7 w-7 text-white" strokeWidth={2} />
          </span>
          <span className="flex flex-col items-start leading-none">
            <span className="text-xl font-bold tracking-tight text-white">
              Hotel Tours AI
            </span>
            <span className="text-[11px] font-medium uppercase tracking-widest text-emerald-400">
              Virtual Tours &amp; AI Concierge
            </span>
          </span>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-100 ring-1 ring-white/20">
          <Sparkles className="h-3.5 w-3.5" />
          Launching soon
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
          Something special is coming for hotels
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-emerald-100/80">
          We&rsquo;re putting the finishing touches to Hotel Tours AI — immersive Matterport
          3D tours paired with an AI concierge, built to help UK hotels turn website
          browsers into direct bookings.
        </p>

        {/* Highlights */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-white/5 p-5 text-left ring-1 ring-white/10 backdrop-blur-sm"
            >
              <item.Icon className="h-6 w-6 text-emerald-400" strokeWidth={1.75} />
              <h2 className="mt-3 text-sm font-semibold text-white">{item.title}</h2>
              <p className="mt-1 text-xs leading-relaxed text-emerald-100/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12">
          <p className="text-sm text-emerald-100/70">Want to be one of our first hotels?</p>
          <a
            href="mailto:hello@hoteltours.ai"
            className="mt-3 inline-flex items-center rounded-md bg-emerald-600 px-7 py-3 font-semibold text-white transition-colors duration-200 hover:bg-emerald-700"
          >
            hello@hoteltours.ai
          </a>
        </div>

        <p className="mt-12 text-xs text-emerald-100/50">
          © {new Date().getFullYear()} Hotel Tours.
        </p>
      </div>
    </main>
  );
};
