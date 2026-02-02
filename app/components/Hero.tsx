export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center h-[500px] md:h-[600px] bg-[#0f1412]"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#538e79] drop-shadow-lg">
          Restore your car’s showroom shine
        </h1>

        <p className="mt-4 text-lg md:text-xl text-[#93afbd]">
          Inside &amp; out — Manawatu-Rangitikei. Mobile or at our Marton location.
        </p>

        <a
          href="/booking"
          className="inline-block mt-8 bg-[#538e79] hover:bg-[#437564] text-white font-semibold px-8 py-3 rounded-lg transition shadow-lg"
        >
          View Services
        </a>
      </div>
    </section>
  );
}
