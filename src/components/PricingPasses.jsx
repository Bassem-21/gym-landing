// src/components/PricingPasses.jsx
import { useMemo, useRef, useState } from "react";

export default function PricingPasses() {
  const plans = useMemo(
    () => [
      {
        id: "single",
        name: "SINGLE",
        monthly: 40,
        yearly: 105,
        features: [
          "Full access to gym equipment",
          "Flexible training schedule",
          "Supportive training environment",
          "Beginner-friendly access",
        ],
      },
      {
        id: "siblings",
        name: "SIBLINGS",
        monthly: 70,
        yearly: 180,
        features: [
          "More affordable shared membership",
          "Flexible workout hours",
          "Train together and stay motivated",
        ],
      },
      {
        id: "crossfit-2",
        name: "PERSONAL TRAINING",
        monthly: 180,
        yearly: 160 * 12,
        features: [
          "1-on-1 coaching sessions",
          "Personalized workout plans",
          "Technique correction & guidance",
          "Goal-based progress tracking",
        ],
      },
      {
        id: "open-2",
        name: "PREMIUM PASS",
        monthly: 149,
        yearly: 135 * 12,
        features: [
          "Full gym + class access",
          "Priority booking for sessions",
          "Nutrition guidance included",
          "Premium support & follow-up",
        ],
      },
    ],
    []
  );

  const [billing, setBilling] = useState("monthly");
  const scrollerRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const totalDesktopSlides = Math.ceil(plans.length / 2);

  const visibleDesktopPlans = [
    plans[activeDot * 2],
    plans[activeDot * 2 + 1],
  ].filter(Boolean);

  const onMobileScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardW = el.clientWidth * 0.86;
    const i = Math.round(el.scrollLeft / cardW);
    setActiveDot(Math.max(0, Math.min(plans.length - 1, i)));
  };

  const prev = () => {
    setActiveDot((d) => (d - 1 + totalDesktopSlides) % totalDesktopSlides);
  };

  const next = () => {
    setActiveDot((d) => (d + 1) % totalDesktopSlides);
  };

  return (
    <section id="pricing" className="section section-dark pb-8">
      <div className="container-page border-b border-white/15 pb-16">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-[0.18em] uppercase">
          OUR GYM PASSES
        </h2>

        <div className="mt-4 flex items-center justify-center gap-3 text-xs text-white/55">
          <span>Monthly</span>
          <button
            type="button"
            onClick={() =>
              setBilling((b) => (b === "monthly" ? "yearly" : "monthly"))
            }
            aria-label="Toggle billing"
            className="relative h-6 w-12 rounded-full bg-white/15 border border-white/15 transition"
          >
            <span
              className={[
                "absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full",
                "bg-brand-orange shadow-[0_6px_18px_rgba(0,0,0,0.35)] transition",
                billing === "monthly" ? "left-1" : "left-7",
              ].join(" ")}
            />
          </button>
          <span>3 Months</span>
        </div>

        {/* Desktop */}
        <div className="relative mt-10 hidden md:block">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14
                       h-10 w-10 rounded-full border border-white/20
                       bg-black/40 hover:bg-white/10 transition"
          >
            <span className="text-white/90 text-xl leading-none">‹</span>
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10
                       h-10 w-10 rounded-full border border-white/20
                       bg-black/40 hover:bg-white/10 transition"
          >
            <span className="text-white/90 text-xl leading-none">›</span>
          </button>

          <div className="relative mx-auto max-w-2xl">
            <div className="grid grid-cols-2 gap-12 items-start">
              {visibleDesktopPlans.map((p) => (
                <PlanCard key={p.id} plan={p} billing={billing} />
              ))}
            </div>

            {visibleDesktopPlans.length === 2 && (
              <div className="pointer-events-none absolute left-1/2 top-6 bottom-6 w-px bg-white/10" />
            )}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: totalDesktopSlides }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveDot(i)}
                aria-label={`Go to pricing slide ${i + 1}`}
                className={[
                  "h-1.5 rounded-full transition",
                  i === activeDot ? "w-6 bg-white/70" : "w-3 bg-white/20",
                ].join(" ")}
              />
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="mt-10 md:hidden">
          <div
            ref={scrollerRef}
            onScroll={onMobileScroll}
            className="
              hide-scrollbar
              flex gap-4 overflow-x-auto pb-4
              snap-x snap-mandatory
              [-ms-overflow-style:none] [scrollbar-width:none]
            "
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <style>{`
              .hide-scrollbar::-webkit-scrollbar { display:none; }
            `}</style>

            {plans.map((p) => (
              <div
                key={p.id}
                className="snap-start shrink-0 w-[86%] min-w-[86%]"
              >
                <PlanCard plan={p} billing={billing} />
              </div>
            ))}
          </div>

          <div className="mt-2 flex items-center justify-center gap-2">
            {plans.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  const el = scrollerRef.current;
                  if (!el) return;
                  const cardW = el.clientWidth * 0.86;
                  el.scrollTo({ left: i * cardW, behavior: "smooth" });
                  setActiveDot(i);
                }}
                aria-label={`Go to plan ${i + 1}`}
                className={[
                  "h-1.5 rounded-full transition",
                  i === activeDot ? "w-6 bg-white/70" : "w-3 bg-white/20",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan, billing }) {
  const price = billing === "monthly" ? plan.monthly : plan.yearly;

  return (
    <div className="text-center">
      <div className="text-xs tracking-[0.22em] uppercase text-white/70 font-extrabold">
        {plan.name}
      </div>

      <div className="mt-3 flex items-end justify-center gap-1">
        <div className="text-5xl font-extrabold text-white">{price}</div>
        <div className="pb-2 text-white/70 font-extrabold">$</div>
        <div className="pb-2 text-[10px] tracking-[0.18em] uppercase text-white/40">
        {billing === "monthly" ? "/mo" : "/3 mo"}
        </div>
      </div>

      <div className="mt-6 mx-auto max-w-sm space-y-3 text-left">
        {plan.features.map((f, idx) => (
          <div key={idx} className="flex items-start gap-3 text-sm text-white/55">
            <span className="mt-0.5 inline-flex h-4 w-4 rounded-full border border-white/20 text-white/50 items-center justify-center text-[10px]">
              ✓
            </span>
            <span className="leading-relaxed">{f}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="
          mt-8 inline-flex items-center justify-center
          rounded-full px-10 py-3
          bg-brand-green
          text-black font-extrabold tracking-[0.16em] uppercase text-xs
          shadow-[0_14px_30px_rgba(0,0,0,0.35)]
          hover:brightness-110 transition
        "
      >
        PURCHASE NOW
      </button>
    </div>
  );
}
