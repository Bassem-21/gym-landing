import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faPersonRunning,
  faHeartPulse,
  faBolt,
  faBullseye,
  faAppleWhole
} from "@fortawesome/free-solid-svg-icons";

export default function WhyChooseUs() {
  const items = useMemo(
    () => [
      {
        title: "MUSCLES BUILDING",
        desc:
          "Lorem ipsum dolor sit amet consectetur. Neque dolor in semper aliquet facilisis tristique placerat sit dummy text ever.",
        icon: faDumbbell,
        secondaryIcon: faBolt,
      },
      {
        title: "FUNCTIONAL TRAINING",
        desc:
          "Lorem ipsum dolor sit amet consectetur. Neque dolor in semper aliquet facilisis tristique placerat sit dummy text ever.",
        icon: faPersonRunning,
        secondaryIcon: faBullseye,
      },
      {
        title: "RECOVERY & ENDURANCE",
        desc:
          "Lorem ipsum dolor sit amet consectetur. Neque dolor in semper aliquet facilisis tristique placerat sit dummy text ever.",
        icon: faHeartPulse,
        secondaryIcon: faAppleWhole,
      },
    ],
    []
  );

  const [active, setActive] = useState(0);

  const clamp = (n) => {
    const len = items.length;
    return ((n % len) + len) % len;
  };

  const prev = () => setActive((v) => clamp(v - 1));
  const next = () => setActive((v) => clamp(v + 1));

  const visible = [
    items[clamp(active)],
    items[clamp(active + 1)],
    items[clamp(active + 2)],
  ];

  return (
    <section className="section section-dark pb-8" id="why">
      <div className="container-page border-b border-white/15 pb-16">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.18em] uppercase">
          WHY CHOOSE US
        </h2>

        <div className="relative mt-10 hidden sm:block">
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14
                       h-10 w-10 rounded-full border border-white/20
                       bg-black/40 grid place-items-center hover:bg-white/10 transition"
          >
            <span className="text-white text-xl leading-none">‹</span>
          </button>

          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14
                       h-10 w-10 rounded-full border border-white/20
                       bg-black/40 grid place-items-center hover:bg-white/10 transition"
          >
            <span className="text-white text-xl leading-none">›</span>
          </button>

          <div className="grid grid-cols-3 gap-7">
            {visible.map((card, i) => (
              <ChooseCard
                key={`${card.title}-${i}`}
                featured={i === 0}
                title={card.title}
                desc={card.desc}
                icon={card.icon}
                secondaryIcon={card.secondaryIcon}
              />
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {items.map((_, i) => {
              const isOn = i === clamp(active);
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={[
                    "h-2 rounded-full transition",
                    isOn ? "w-7 bg-white/80" : "w-2 bg-white/25 hover:bg-white/40",
                  ].join(" ")}
                />
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:hidden">
          {items.map((card, i) => (
            <ChooseCard
              key={`${card.title}-m-${i}`}
              featured={i === 0}
              title={card.title}
              desc={card.desc}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ChooseCard({ featured, title, desc, icon, secondaryIcon }) {
  const featuredBg = "bg-[var(--color-brand-green)] text-black";
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
        <div className="flex items-start justify-between">
          <div className={featured ? "text-black" : "text-white"}>
            <FontAwesomeIcon icon={icon} className="text-[44px] opacity-90" />
          </div>

          <CircleIcon featured={featured} icon={secondaryIcon} />
        </div>

        <h3 className="mt-6 text-sm md:text-base font-extrabold tracking-[0.18em] uppercase">
          {title}
        </h3>

        <p
          className={[
            "mt-4 text-sm leading-relaxed",
            featured ? "text-black/70" : "text-white/70",
          ].join(" ")}
        >
          {desc}
        </p>

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
            <CircleIcon featured={featured} icon={secondaryIcon} />
          </button>
        </div>
      </div>
    </article>
  );
}

function CircleIcon({ featured, icon }) {
  return (
    <div
      className={[
        "h-9 w-9 rounded-full grid place-items-center border",
        featured ? "border-black/15 bg-black/5" : "border-white/15 bg-black/25",
      ].join(" ")}
      aria-hidden="true"
    >
      <FontAwesomeIcon
        icon={icon}
        className={featured ? "text-[#d4751b]" : "text-[#d4751b]"}
      />
    </div>
  );
}