import { useMemo, useRef, useState } from "react";

export default function PricingPasses() {
  const plans = useMemo(
    () => [
      {
        id: "crossfit",
        name: "CROSSFIT",
        monthly: 120,
        yearly: 109 * 12, // example (you can change)
        features: [
          "Lorem ipsum is simply dummy text",
          "Contrary to popular belief, Lorem ipsum is",
          "Contrary to popular belief, Lorem ipsum",
          "Lorem ipsum is simply dummy text",
        ],
      },
      {
        id: "open",
        name: "OPEN GYM",
        monthly: 109,
        yearly: 99 * 12, // example (you can change)
        features: [
          "Lorem ipsum is simply dummy text",
          "Contrary to popular belief, Lorem ipsum is",
          "Contrary to popular belief, Lorem ipsum",
          "Lorem ipsum is simply dummy text",
        ],
      },
    ],
    []
  );

  const [billing, setBilling] = useState("monthly"); // "monthly" | "yearly"

  // mobile swipe + dots
  const scrollerRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const onMobileScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardW = el.clientWidth * 0.86; // matches snap width below
    const i = Math.round(el.scrollLeft / cardW);
    setActiveDot(Math.max(0, Math.min(plans.length - 1, i)));
  };

  // optional arrows (desktop look)
  const prev = () => {
    setActiveDot((d) => (d - 1 + plans.length) % plans.length);
  };
  const next = () => {
    setActiveDot((d) => (d + 1) % plans.length);
  };

  return (
    <section id="pricing" className="section section-dark">
      <div className="container-page">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-[0.18em] uppercase">
          OUR GYM PASSES
        </h2>

        {/* Toggle */}
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
                "bg-(--color-brand-orange) shadow-[0_6px_18px_rgba(0,0,0,0.35)] transition",
                billing === "monthly" ? "left-1" : "left-7",
              ].join(" ")}
            />
          </button>
          <span>Yearly</span>
        </div>

        {/* Desktop layout */}
        <div className="relative mt-10 hidden md:block">
          {/* Arrows (visual like screenshot) */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10
                       h-10 w-10 rounded-full border border-white/20
                       bg-black/40 grid place-items-center hover:bg-white/10 transition"
          >
            <span className="text-white/90 text-xl">‹</span>
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10
                       h-10 w-10 rounded-full border border-white/20
                       bg-black/40 grid place-items-center hover:bg-white/10 transition"
          >
            <span className="text-white/90 text-xl">›</span>
          </button>

          {/* Two columns + divider */}
          <div className="relative mx-auto max-w-2xl">
            <div className="grid grid-cols-2 gap-12 items-start">
              {plans.map((p) => (
                <PlanCard key={p.id} plan={p} billing={billing} />
              ))}
            </div>

            {/* center divider */}
            <div className="pointer-events-none absolute left-1/2 top-6 bottom-6 w-px bg-white/10" />
          </div>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {plans.map((_, i) => (
              <span
                key={i}
                className={[
                  "h-1.5 rounded-full transition",
                  i === activeDot ? "w-6 bg-white/70" : "w-3 bg-white/20",
                ].join(" ")}
              />
            ))}
          </div>
        </div>

        {/* Mobile layout (swipe) */}
        <div className="mt-10 md:hidden">
          <div
            ref={scrollerRef}
            onScroll={onMobileScroll}
            className="
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

          {/* dots */}
          <div className="mt-2 flex items-center justify-center gap-2">
            {plans.map((_, i) => (
              <span
                key={i}
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
          /mo
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
          bg-[rgba(200,255,61,0.95)]
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
