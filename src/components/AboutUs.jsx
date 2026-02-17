export default function AboutOurGym() {
  return (
    <section id="about" className="section section-dark">
      <div className="container-page">
        {/* Title (keep as you had it) */}
        <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-[0.18em] uppercase mb-10">
          ABOUT OUR GYM
        </h2>

        {/* Top card with image + overlay content */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          {/* Image */}
          <div
            className="h-[260px] sm:h-[360px] md:h-[420px] w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop)",
            }}
          />

          {/* Dark overlay at bottom to mimic screenshot (desktop/laptop) */}
          <div className="absolute inset-x-0 bottom-0 h-28 md:h-32 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

          {/* ✅ Desktop/Laptop overlay row (unchanged) */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 hidden sm:flex items-end justify-between gap-6">
            <p className="text-white/70 text-xs sm:text-sm max-w-xl leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Sit proin a ultrices sit.
              Pharetra enim sed neque dolor viverra in elementum ultrices
              cursus. Egestas sagittis neque elit pharetra odio semper
              consectetur. Praesent ac tortor id sed sit tortor eu potenti
              gravida.
            </p>

            <div className="shrink-0">
              <span className="inline-flex items-center justify-center rounded-xl bg-lime-300 px-10 py-4 text-black font-extrabold tracking-[0.15em] uppercase shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
                10 YEARS
              </span>
            </div>
          </div>

          {/* ✅ Mobile badge (left over image like your phone screenshot) */}
          <div className="absolute left-4 bottom-4 sm:hidden">
            <span className="inline-flex items-center justify-center rounded-xl bg-lime-300 px-8 py-3 text-black font-extrabold tracking-[0.15em] uppercase shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
              10 YEARS
            </span>
          </div>
        </div>

        {/* ✅ Mobile paragraph UNDER the image (phone screenshot layout) */}
        <p className="mt-6 sm:hidden text-white/70 text-xs leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Sit proin a ultrices sit.
          Pharetra enim sed neque dolor viverra in elementum ultrices cursus.
          Egestas sagittis neque elit pharetra odio semper consectetur.
          Praesent ac tortor id sed sit tortor eu potenti gravida.
        </p>

        {/* Bottom grid: circular images + two text blocks (unchanged for laptop) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Circles */}
          <div className="md:col-span-5 flex gap-8 justify-center md:justify-start">
            <CirclePhoto
              src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=800&auto=format&fit=crop"
              accent="left"
            />
            <CirclePhoto
              src="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=800&auto=format&fit=crop"
              accent="right"
            />
          </div>

          {/* Text blocks (stack on mobile, 2 cols from sm+, unchanged) */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <InfoBlock />
            <InfoBlock />
          </div>
        </div>
      </div>
    </section>
  );
}

function CirclePhoto({ src, accent = "left" }) {
  const ringGap =
    accent === "left"
      ? "conic-gradient(from 230deg, #C8FF3D 0 270deg, transparent 270deg 360deg)"
      : "conic-gradient(from 50deg, transparent 0 90deg, #C8FF3D 90deg 360deg)";

  return (
    <div className="relative w-40 aspect-square sm:w-44">
      <div className="absolute inset-0 rounded-full" style={{ background: ringGap }} />
      <div className="absolute inset-[6px] rounded-full bg-black">
        <div
          className="absolute inset-[4px] rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url(${src})` }}
        />
      </div>
    </div>
  );
}

function InfoBlock() {
  return (
    <div>
      <h3 className="text-base sm:text-lg font-extrabold leading-tight">
        <span className="text-(--color-brand-orange)">Lorem</span>{" "}
        <span className="text-white">ipsum dolor</span>
        <br />
        <span className="text-white">sit amet</span>
      </h3>

      <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-sm">
        Lorem ipsum dolor sit amet consectetur. Sit proin a ultrices sit.
        Pharetra enim sed.
      </p>
    </div>
  );
}
