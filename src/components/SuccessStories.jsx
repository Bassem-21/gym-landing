import { useMemo, useState, useRef } from "react";

export default function SuccessStories() {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const stories = useMemo(
    () => [
      {
        id: "jake",
        name: "Jake Morrison",
        age: 34,
        program: "WEIGHT LOSS PROGRAM",
        durationLabel: "6 Months",
        beforeImg:
          "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1400&auto=format&fit=crop",
        afterImg:
          "https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?q=80&w=1400&auto=format&fit=crop",
        metrics: [
          { value: "45 lbs", label: "WEIGHT LOST", icon: "↘" },
          { value: "32% to 15%", label: "BODY FAT", icon: "↘" },
          { value: "6 Months", label: "DURATION", icon: "⏱" },
        ],
        quote:
          "“I walked in feeling hopeless about my health. The coaches built me a plan I could actually stick to. 45 pounds later, I feel like a new person.”",
      },
      {
        id: "sarah",
        name: "Sarah Kim",
        age: 28,
        program: "BODY TRANSFORMATION",
        durationLabel: "8 Months",
        beforeImg:
          "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1400&auto=format&fit=crop",
        afterImg:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop",
        metrics: [
          { value: "35 lbs", label: "WEIGHT LOST", icon: "↘" },
          { value: "38% to 22%", label: "BODY FAT", icon: "↘" },
          { value: "8 Months", label: "DURATION", icon: "⏱" },
        ],
        quote:
          "“I never thought I’d enjoy working out. The community here kept me motivated every single day. My confidence is through the roof now.”",
      },
      {
        id: "marcus",
        name: "Marcus Chen",
        age: 23,
        program: "MUSCLE BUILDING",
        durationLabel: "10 Months",
        beforeImg:
          "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1400&auto=format&fit=crop",
        afterImg:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop",
        metrics: [
          { value: "30 lbs", label: "MUSCLE GAINED", icon: "↗" },
          { value: "95 to 245 lbs", label: "BENCH PRESS", icon: "↗" },
          { value: "10 Months", label: "DURATION", icon: "⏱" },
        ],
        quote:
          "“I was the skinniest guy in every room. The strength program here completely changed my physique and my mindset. I finally feel strong.”",
      },
      {
        id: "jad",
        name: "jad thought",
        age: 23,
        program: "POWER LIFTING",
        durationLabel: "10 Months",
        beforeImg:
          "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1400&auto=format&fit=crop",
        afterImg:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop",
        metrics: [
          { value: "30 lbs", label: "MUSCLE GAINED", icon: "↗" },
          { value: "95 to 245 lbs", label: "BENCH PRESS", icon: "↗" },
          { value: "10 Months", label: "DURATION", icon: "⏱" },
        ],
        quote:
          "“I was the skinniest guy in every room. The strength program here completely changed my physique and my mindset. I finally feel strong.”",
      },
    ],
    []
  );
  
  const visibleStories = showAll ? stories : stories.slice(0, 3);

  return (
    <section id="stories" ref={sectionRef} className="section section-dark">
      <div className="container-page">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-[0.08em] uppercase">
            <span className="text-white">REAL </span>
            <span className="text-(--color-brand-orange)">TRANSFORMATIONS</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/60 max-w-2xl mx-auto">
            These members put in the work and changed their lives. Swipe to see their
            incredible before &amp; after results.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleStories.map((s) => (
            <StoryCard key={s.id} story={s} />
          ))}
        </div>
        {stories.length > 3 && (
            <div className="mt-10 flex justify-center">
            <button
                type="button"
                onClick={() => {
                    if (showAll) {
                        // 1) Scroll first (so you don't flash the footer)
                        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                    
                        // 2) Collapse AFTER the scroll begins
                        window.setTimeout(() => {
                          setShowAll(false);
                        }, 350); // tweak 200–350 if needed
                      } else {
                        setShowAll(true);
                      }
                }}
                className="btn-secondary"
                >
                {showAll ? "View less" : "View more"}
            </button>
            </div>
        )}
      </div>
    </section>
  );
}

function StoryCard({ story }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
      {/* Image compare */}
      <BeforeAfter
        beforeImg={story.beforeImg}
        afterImg={story.afterImg}
        program={story.program}
        durationLabel={story.durationLabel}
      />

      {/* Metrics row */}
      <div className="bg-black/35 px-6 py-5 border-t border-white/10">
        <div className="grid grid-cols-3 gap-4">
          {story.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-(--color-brand-orange) text-xs font-extrabold">
                {m.icon}
              </div>
              <div className="mt-1 text-white font-extrabold text-sm sm:text-xs">{m.value}</div>   
              <div className="mt-1 text-[10px] tracking-[0.18em] uppercase text-white/45">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Quote + name */}
        <div className="mt-5 text-sm text-white/70 leading-relaxed italic">
          {story.quote}
        </div>

        <div className="mt-4 flex items-baseline gap-2">
          <div className="text-white font-extrabold text-sm">{story.name}</div>
          <div className="text-white/40 text-xs">Age {story.age}</div>
        </div>
      </div>
    </article>
  );
}

function BeforeAfter({ beforeImg, afterImg, program, durationLabel }) {
  // 0..100 (where the vertical divider is)
  const [pos, setPos] = useState(50);

  return (
    <div className="relative h-[420px] bg-black">
      {/* AFTER (full) */}
      <img
        src={afterImg}
        alt="After"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />

      {/* BEFORE (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
        aria-hidden="true"
      >
        <img
          src={beforeImg}
          alt="Before"
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>

      {/* Subtle dark gradient bottom like screenshot */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

      {/* BEFORE / AFTER pills */}
      <div className="absolute top-4 left-4">
        <span className="rounded-full bg-black/60 border border-white/10 px-3 py-1 text-[10px] tracking-[0.18em] uppercase text-white/80">
          BEFORE
        </span>
      </div>

      <div className="absolute top-4 right-4">
        <span className="rounded-full bg-(--color-brand-orange) px-3 py-1 text-[10px] tracking-[0.18em] uppercase text-black font-extrabold">
          AFTER
        </span>
      </div>

      {/* Bottom labels */}
      <div className="absolute bottom-3 left-4">
        <span className="rounded-lg bg-black/55 border border-white/10 px-3 py-1 text-[10px] tracking-[0.14em] uppercase text-[rgba(92,113,70,0.95)]">
          {program}
        </span>
      </div>

      <div className="absolute bottom-3 right-4 text-[10px] tracking-[0.14em] uppercase text-white/75 font-semibold">
        {durationLabel}
      </div>

      {/* Vertical divider line + handle */}
      <div
        className="absolute top-0 bottom-0"
        style={{ left: `calc(${pos}% - 1px)` }}
        aria-hidden="true"
      >
        <div className="h-full w-[2px] bg-white/70" />
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2">
          <div className="h-10 w-10 rounded-full bg-white/90 grid place-items-center shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
            <span className="text-black font-extrabold text-lg">↔</span>
          </div>
        </div>
      </div>

      {/* Range input (invisible but draggable) */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Before and after slider"
        className="
          absolute inset-0 w-full h-full
          opacity-0 cursor-ew-resize
        "
      />
    </div>
  );
}
