import { useEffect, useMemo, useRef, useState } from "react";

export default function OurCoaches() {
  const coaches = useMemo(
    () => [
      {
        name: "MARCUS RODRIGUEZ",
        role: "Strength & Conditioning",
        bio:
          "15+ years of competitive powerlifting experience. Specializes in compound movements and progressive overload.",
        img: "https://images.unsplash.com/photo-1541534401786-2077eed87a6f?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "SARAH CHEN",
        role: "CrossFit & HIIT",
        bio:
          "Former Olympic athlete turned coach. Expert in high-intensity training and metabolic conditioning.",
        img: "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "DAVID THOMPSON",
        role: "Sports Performance",
        bio:
          "Sports scientist with a focus on athletic performance optimization and injury prevention.",
        img: "https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "NINA PATEL",
        role: "Nutrition & Wellness",
        bio:
          "Registered dietitian combining nutrition science with sustainable lifestyle changes.",
        img: "https://images.unsplash.com/photo-1550525811-e5869dd03032?q=80&w=1200&auto=format&fit=crop",
      }
    ],
    []
  );

  // ✅ Mobile dots state
  const [activeIdx, setActiveIdx] = useState(0);
  const mobileScrollRef = useRef(null);

  useEffect(() => {
    const el = mobileScrollRef.current;
    if (!el) return;

    // Track which card is most visible (closest to container left)
    const onScroll = () => {
      const children = Array.from(el.querySelectorAll("[data-coach-card='true']"));
      if (!children.length) return;

      const left = el.getBoundingClientRect().left;
      let bestIdx = 0;
      let bestDist = Infinity;

      children.forEach((child, idx) => {
        const rect = child.getBoundingClientRect();
        const dist = Math.abs(rect.left - left);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      });

      setActiveIdx(bestIdx);
    };

    // Initial + listener
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToIndex = (idx) => {
    const el = mobileScrollRef.current;
    if (!el) return;

    const children = Array.from(el.querySelectorAll("[data-coach-card='true']"));
    const target = children[idx];
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setActiveIdx(idx);
  };

  return (
    <section id="coaches" className="section section-charcoal">
      <div className="container-page">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-[0.12em] uppercase">
            MEET OUR{" "}
            <span className="text-color-brand-orange">ELITE COACHES</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/70 max-w-2xl mx-auto">
            Train with certified professionals who are passionate about your success
          </p>
        </div>

        {/* ✅ Desktop / Tablet grid */}
        <div className="mt-12 hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {coaches.map((c) => (
            <CoachCard key={c.name} coach={c} />
          ))}
        </div>

        {/* ✅ Mobile: horizontal scroll + dots */}
        <div className="mt-10 md:hidden">
          <div
            ref={mobileScrollRef}
            className="
              coach-scroll
              flex gap-5 overflow-x-auto pb-4
              snap-x snap-mandatory
              [-ms-overflow-style:none] [scrollbar-width:none]
            "
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {/* hide scrollbar (webkit) */}
            <style>{`
              .coach-scroll::-webkit-scrollbar { display: none; }
            `}</style>

            {coaches.map((c) => (
              <div
                key={c.name}
                data-coach-card="true"
                className="snap-center shrink-0 w-[clamp(240px,85vw,200px)]"
              >
                <CoachCard coach={c} />
              </div>
            ))}
          </div>

          {/* ✅ Dots indicator (replaces hint text) */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {coaches.map((_, i) => {
              const isActive = i === activeIdx;
              return (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Go to coach ${i + 1}`}
                  className={[
                    "h-2 rounded-full transition",
                    isActive ? "w-7 bg-white/80" : "w-2 bg-white/25 hover:bg-white/40",
                  ].join(" ")}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CoachCard({ coach }) {
  return (
    <article
      className="
        rounded-2xl overflow-hidden
        border border-white/10
        bg-white/5
        flex flex-col
        h-full
        min-h-[520px] md:min-h-[540px]
      "
    >
      {/* ✅ Image area fixed, so all cards match Marcus style */}
      <div className="relative h-[300px] md:h-[280px] lg:h-[290px] bg-black">
        <img
          src={coach.img}
          alt={coach.name}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-x-0 top-0 h-14 bg-linear-to-b from-black/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
      </div>

      {/* ✅ Text block stretches to fill remaining space */}
      <div className="p-5 md:p-6 bg-[#2b2b2a] flex flex-col flex-1">
        <h3 className="font-extrabold tracking-[0.08em] text-white text-sm uppercase">
          {coach.name}
        </h3>

        <p className="mt-2 text-sm font-semibold text-color-brand-orange">
          {coach.role}
        </p>

        <p className="mt-3 text-sm text-white/65 leading-relaxed">
          {coach.bio}
        </p>

        {/* ✅ Spacer so short text still results in full card like Marcus */}
        <div className="flex-1" />

        {/* Optional tiny bottom fade line (adds “finished” feel like full cards) */}
        <div className="mt-5 h-px w-full bg-white/10" />
      </div>
    </article>
  );
}
