export default function Hero() {
  return (
    <section
      className="relative bg-white flex items-center justify-center h-[500px] md:h-[600px]"
      style={{ backgroundImage: "url('/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="bg-black/40 w-full h-full absolute"></div> {/* semi-transparent overlay */}
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#538e79] drop-shadow-lg">
          Restore your car’s showroom shine
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#93afbd]">
          Inside & out — Manawatu-Rangitikei. Mobile or at our Marton location.
        </p>
        <a
          href="/booking"
          className="inline-block mt-6 bg-[#538e79] hover:bg-[#437564] text-white font-semibold px-8 py-3 rounded-lg transition"
        >
          Book Online
        </a>
      </div>
    </section>
  );
}
