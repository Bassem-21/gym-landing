import { useMemo, useState } from "react";

export default function WhyChooseUs() {
  const items = useMemo(
    () => [
      {
        title: "MUSCLES BUILDING",
        desc:
          "Lorem ipsum dolor sit amet consectetur. Neque dolor in semper aliquet facilisis tristique placerat sit dummy text ever.",
        // simple “equipment” icon svg (top-left)
        icon: DumbbellIcon,
      },
      {
        title: "MUSCLES BUILDING",
        desc:
          "Lorem ipsum dolor sit amet consectetur. Neque dolor in semper aliquet facilisis tristique placerat sit dummy text ever.",
        icon: GripIcon,
      },
      {
        title: "MUSCLES BUILDING",
        desc:
          "Lorem ipsum dolor sit amet consectetur. Neque dolor in semper aliquet facilisis tristique placerat sit dummy text ever.",
        icon: BottleIcon,
      },
    ],
    [],
  );

  // slider index (even though we always show 3, this lets arrows/dots exist like reference)
  const [active, setActive] = useState(0);

  const clamp = (n) => {
    const len = items.length;
    return ((n % len) + len) % len;
  };

  const prev = () => setActive((v) => clamp(v - 1));
  const next = () => setActive((v) => clamp(v + 1));

  // Always render 3 cards like reference; featured is the left card
  const visible = [
    items[clamp(active)],
    items[clamp(active + 1)],
    items[clamp(active + 2)],
  ];

  return (
    <section className="section section-charcoal" id="why">
      <div className="container-page">
        {/* Title (LEFT-aligned like reference) */}
        <h2 className="text-left text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.18em] uppercase">
          WHY CHOOSE US
        </h2>

        {/* Desktop/tablet row */}
        <div className="relative mt-10 hidden sm:block">
          {/* Arrow LEFT (outside cards) */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-20
                       h-11 w-11 rounded-full grid place-items-center
                       border border-white/15 bg-black/35 backdrop-blur
                       hover:bg-white/10 transition"
          >
            <span className="text-white text-xl leading-none">‹</span>
          </button>

          {/* Arrow RIGHT (outside cards) */}
          <button
            onClick={next}
            aria-label="Next"
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-20
                       h-11 w-11 rounded-full grid place-items-center
                       border border-white/15 bg-black/35 backdrop-blur
                       hover:bg-white/10 transition"
          >
            <span className="text-white text-xl leading-none">›</span>
          </button>

          {/* Cards */}
          <div className="grid grid-cols-3 gap-7">
            {visible.map((card, i) => (
              <ChooseCard
                key={`${card.title}-${i}`}
                featured={i === 0}
                title={card.title}
                desc={card.desc}
                Icon={card.icon}
              />
            ))}
          </div>

          {/* Dots (3 dots like reference) */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {[0, 1, 2].map((i) => {
              const isOn = i === 0; // reference shows first dot active (featured card)
              return (
                <span
                  key={i}
                  className={[
                    "h-2 rounded-full transition",
                    isOn ? "w-7 bg-white/80" : "w-2 bg-white/25",
                  ].join(" ")}
                />
              );
            })}
          </div>
        </div>

        {/* Mobile (stacked vertical like reference) */}
        <div className="mt-8 grid gap-6 sm:hidden">
          {items.map((card, i) => (
            <ChooseCard
              key={`${card.title}-m-${i}`}
              featured={i === 0}
              title={card.title}
              desc={card.desc}
              Icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ChooseCard({ featured, title, desc, Icon }) {
  // neon-lime like reference (not your brand green)
  const featuredBg = "bg-[#C8FF3D] text-black";
  const normalBg = "bg-white/10 text-white";

  return (
    <article
      className={[
        "relative overflow-hidden rounded-2xl",
        "border shadow-sm",
        featured
          ? `${featuredBg} border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.25)]`
          : `${normalBg} border-white/10 backdrop-blur shadow-[0_10px_30px_rgba(0,0,0,0.25)]`,
      ].join(" ")}
    >
      <div className="p-7">
        {/* top row: icon (left) + small bolt circle (right) */}
        <div className="flex items-start justify-between">
          <div className={featured ? "text-black" : "text-white"}>
            <Icon />
          </div>

          <BoltCircle featured={featured} />
        </div>

        {/* title */}
        <h3 className="mt-6 text-sm md:text-base font-extrabold tracking-[0.18em] uppercase">
          {title}
        </h3>

        {/* description */}
        <p
          className={[
            "mt-4 text-sm leading-relaxed",
            featured ? "text-black/70" : "text-white/70",
          ].join(" ")}
        >
          {desc}
        </p>

        {/* bottom row: Learn more + bottom-right bolt circle */}
        <div className="mt-8 flex items-center justify-between">
          <a
            href="#programs"
            className={[
              "text-xs font-extrabold tracking-[0.18em] uppercase inline-flex items-center gap-2",
              featured ? "text-black" : "text-white",
            ].join(" ")}
          >
            LEARN MORE <span aria-hidden="true">↗</span>
          </a>

          <button
            className={[
              "h-10 w-10 rounded-full grid place-items-center border transition",
              featured
                ? "border-black/15 bg-black/5 hover:bg-black/10"
                : "border-white/15 bg-black/25 hover:bg-white/10",
            ].join(" ")}
            aria-label="Open"
          >
            <BoltIcon featured={featured} />
          </button>
        </div>
      </div>
    </article>
  );
}

/* ---------- Small UI bits (match reference) ---------- */

function BoltCircle({ featured }) {
  return (
    <div
      className={[
        "h-9 w-9 rounded-full grid place-items-center border",
        featured ? "border-black/15 bg-black/5" : "border-white/15 bg-black/25",
      ].join(" ")}
      aria-hidden="true"
    >
      <BoltIcon featured={featured} />
    </div>
  );
}

function BoltIcon({ featured }) {
  // reference bolt looks orange-ish inside circles
  const fill = featured ? "#d4751b" : "#d4751b";
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M13 2L3 14h7l-1 8 12-14h-7l-1-6z"
        fill={fill}
      />
    </svg>
  );
}

/* ---------- Card “equipment icons” (simple & small like reference) ---------- */

function DumbbellIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 64 64" aria-hidden="true">
      <rect
        x="10"
        y="24"
        width="10"
        height="16"
        rx="3"
        fill="currentColor"
        opacity="0.85"
      />
      <rect
        x="44"
        y="24"
        width="10"
        height="16"
        rx="3"
        fill="currentColor"
        opacity="0.85"
      />
      <rect
        x="20"
        y="28"
        width="24"
        height="8"
        rx="4"
        fill="currentColor"
        opacity="0.85"
      />
      <rect
        x="6"
        y="22"
        width="4"
        height="20"
        rx="2"
        fill="currentColor"
        opacity="0.6"
      />
      <rect
        x="54"
        y="22"
        width="4"
        height="20"
        rx="2"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  );
}

function GripIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M18 46l8-26c1-3 5-3 6 0l8 26"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      <circle cx="20" cy="46" r="6" fill="currentColor" opacity="0.7" />
      <circle cx="44" cy="46" r="6" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

function BottleIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M26 8h12v8c0 2 2 4 4 6v30c0 6-4 10-10 10H32c-6 0-10-4-10-10V22c2-2 4-4 4-6V8z"
        fill="currentColor"
        opacity="0.85"
      />
      <rect
        x="26"
        y="8"
        width="12"
        height="6"
        rx="2"
        fill="currentColor"
        opacity="0.65"
      />
    </svg>
  );
}
