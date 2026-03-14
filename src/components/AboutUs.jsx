export default function AboutOurGym() {
  return (
    <section id="about" className="section section-dark">
      <div className="container-page">
        {/* Title */}
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

          {/* Dark overlay */}
          <div className="absolute inset-x-0 bottom-0 h-28 md:h-32 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

          {/* Desktop/Laptop overlay row */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 hidden sm:flex items-end justify-between gap-6">
            <p className="text-white/70 text-xs sm:text-sm max-w-xl leading-relaxed">
              Our gym is built for people who want real results. With professional
              coaches, modern equipment, and structured training programs, we
              create an environment where every member can improve strength,
              endurance, and overall fitness. Whether you are just starting your
              journey or pushing toward new performance goals, our community is
              here to support your progress.
            </p>

            <div className="shrink-0">
              <span className="inline-flex items-center justify-center rounded-xl bg-brand-green px-10 py-4 text-black font-extrabold tracking-[0.15em] uppercase shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
                10 YEARS
              </span>
            </div>
          </div>

          {/* Mobile badge */}
          <div className="absolute left-4 bottom-4 sm:hidden">
            <span className="inline-flex items-center justify-center rounded-xl bg-brand-green px-8 py-3 text-black font-extrabold tracking-[0.15em] uppercase shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
              10 YEARS
            </span>
          </div>
        </div>

        {/* Mobile paragraph */}
        <p className="mt-6 sm:hidden text-white/70 text-xs leading-relaxed">
          For over a decade we have helped people transform their health and
          confidence. Our gym combines expert coaching, motivating group
          sessions, and a welcoming community so every member can train
          consistently and reach their personal fitness goals.
        </p>

        {/* Bottom grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-10">
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

          {/* Text blocks */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 content-center">
            <div>
              <h3 className="text-base sm:text-lg font-extrabold leading-tight">
                <span className="text-brand-orange">Professional</span>{" "}
                <span className="text-white">Coaching</span>
                <br />
                <span className="text-white">and Guidance</span>
              </h3>

              <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-sm">
                Our certified trainers create personalized programs tailored to
                your goals, helping you improve technique, stay motivated, and
                train safely while progressing every week.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-extrabold leading-tight">
                <span className="text-brand-orange">Modern</span>{" "}
                <span className="text-white">Equipment</span>
                <br />
                <span className="text-white">and Facilities</span>
              </h3>

              <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-sm">
                Train with high-quality strength and cardio equipment designed
                to support all fitness levels, from beginners starting their
                journey to experienced athletes improving performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CirclePhoto({ src, accent = "left" }) {
  const ringGap =
    accent === "left"
      ? "conic-gradient(from 230deg, #3f5f2a 0 270deg, transparent 270deg 360deg)"
      : "conic-gradient(from 50deg, transparent 0 90deg, #3f5f2a 90deg 360deg)";

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
