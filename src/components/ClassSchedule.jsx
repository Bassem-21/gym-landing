// src/components/ClassSchedule.jsx
import { useMemo, useRef, useState } from "react";

const START = 8 * 60; // 08:00
const MID = 12 * 60; // 12:00
const END = 22 * 60; // 22:00

export default function ClassSchedule() {
  const sectionRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const days = useMemo(
    () => ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    []
  );

  const dayShort = useMemo(
    () => ({
      Monday: "Mon:",
      Tuesday: "Tue:",
      Wednesday: "Wed:",
      Thursday: "Thu:",
      Friday: "Fri:",
      Saturday: "Sat:",
      Sunday: "Sun:",
    }),
    []
  );

  // ✅ Schedule 08:00 → 22:00 (hourly rows after 13:00 included)
  // NOTE: Replace these classes with your real schedule any time.
  const schedule = useMemo(
    () => [
      // 08 → 12 (default visible)
      {
        time: "08:00",
        classes: {
          Monday: "CrossFit",
          Tuesday: "Strength",
          Wednesday: "HIIT",
          Thursday: "Yoga",
          Friday: "Boxing",
          Saturday: "Open Gym",
          Sunday: "-",
        },
      },
      {
        time: "09:00",
        classes: {
          Monday: "Yoga",
          Tuesday: "CrossFit",
          Wednesday: "Strength",
          Thursday: "HIIT",
          Friday: "CrossFit",
          Saturday: "HIIT",
          Sunday: "Yoga",
        },
      },
      {
        time: "10:00",
        classes: {
          Monday: "HIIT",
          Tuesday: "Boxing",
          Wednesday: "CrossFit",
          Thursday: "Strength",
          Friday: "Yoga",
          Saturday: "CrossFit",
          Sunday: "-",
        },
      },
      {
        time: "11:00",
        classes: {
          Monday: "Strength",
          Tuesday: "HIIT",
          Wednesday: "Boxing",
          Thursday: "CrossFit",
          Friday: "Strength",
          Saturday: "Boxing",
          Sunday: "Open Gym",
        },
      },
      {
        time: "12:00",
        classes: {
          Monday: "Boxing",
          Tuesday: "Yoga",
          Wednesday: "HIIT",
          Thursday: "Boxing",
          Friday: "Open Gym",
          Saturday: "HIIT",
          Sunday: "-",
        },
      },

      // 13 → 22 (shown when View more)
      {
        time: "13:00",
        classes: {
          Monday: "Open Gym",
          Tuesday: "Open Gym",
          Wednesday: "Open Gym",
          Thursday: "Open Gym",
          Friday: "Open Gym",
          Saturday: "Open Gym",
          Sunday: "-",
        },
      },
      {
        time: "14:00",
        classes: {
          Monday: "Mobility",
          Tuesday: "Open Gym",
          Wednesday: "Mobility",
          Thursday: "Open Gym",
          Friday: "Mobility",
          Saturday: "Open Gym",
          Sunday: "-",
        },
      },
      {
        time: "15:00",
        classes: {
          Monday: "Strength",
          Tuesday: "HIIT",
          Wednesday: "Yoga",
          Thursday: "CrossFit",
          Friday: "Boxing",
          Saturday: "Open Gym",
          Sunday: "-",
        },
      },
      {
        time: "16:00",
        classes: {
          Monday: "Open Gym",
          Tuesday: "Open Gym",
          Wednesday: "Open Gym",
          Thursday: "Open Gym",
          Friday: "Open Gym",
          Saturday: "Open Gym",
          Sunday: "-",
        },
      },
      {
        time: "17:00",
        classes: {
          Monday: "Strength",
          Tuesday: "HIIT",
          Wednesday: "Boxing",
          Thursday: "CrossFit",
          Friday: "Strength",
          Saturday: "Boxing",
          Sunday: "Open Gym",
        },
      },
      {
        time: "18:00",
        classes: {
          Monday: "Yoga",
          Tuesday: "CrossFit",
          Wednesday: "Strength",
          Thursday: "HIIT",
          Friday: "CrossFit",
          Saturday: "HIIT",
          Sunday: "-",
        },
      },
      {
        time: "19:00",
        classes: {
          Monday: "Boxing",
          Tuesday: "Yoga",
          Wednesday: "HIIT",
          Thursday: "Boxing",
          Friday: "Open Gym",
          Saturday: "HIIT",
          Sunday: "-",
        },
      },
      {
        time: "20:00",
        classes: {
          Monday: "Open Gym",
          Tuesday: "Open Gym",
          Wednesday: "Open Gym",
          Thursday: "Open Gym",
          Friday: "Open Gym",
          Saturday: "Open Gym",
          Sunday: "-",
        },
      },
      {
        time: "21:00",
        classes: {
          Monday: "Open Gym",
          Tuesday: "Open Gym",
          Wednesday: "Open Gym",
          Thursday: "Open Gym",
          Friday: "Open Gym",
          Saturday: "Open Gym",
          Sunday: "-",
        },
      },
      {
        time: "22:00",
        classes: {
          Monday: "Open Gym",
          Tuesday: "Open Gym",
          Wednesday: "Open Gym",
          Thursday: "Open Gym",
          Friday: "Open Gym",
          Saturday: "Open Gym",
          Sunday: "Open Gym",
        },
      },
    ],
    []
  );

  const toMinutes = (t) => {
    const [hh, mm] = t.split(":").map(Number);
    return hh * 60 + mm;
  };

  const visibleSchedule = useMemo(() => {
    const inRange = schedule.filter((r) => {
      const m = toMinutes(r.time);
      return m >= START && m <= END;
    });

    if (showAll) return inRange;

    return inRange.filter((r) => {
      const m = toMinutes(r.time);
      return m >= START && m <= MID;
    });
  }, [schedule, showAll]);

  const handleToggle = () => {
    if (showAll) {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => setShowAll(false), 250);
    } else {
      setShowAll(true);
    }
  };

  return (
    <section ref={sectionRef} id="schedule" className="section section-dark pb-8">
      <div className="container-page border-b border-white/15 pb-16">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-[0.08em] uppercase">
            <span className="text-white">CLASS </span>
            <span className="text-(--color-brand-orange)">SCHEDULE</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/65">
            Choose from a variety of classes throughout the week
          </p>
        </div>

        {/* Desktop / Tablet table */}
        <div className="mt-14 hidden md:block">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white/10">
                  <th className="text-left px-6 py-5 text-white/70 font-semibold">
                    Time
                  </th>
                  {days.map((d) => (
                    <th
                      key={d}
                      className="text-center px-6 py-5 text-white/70 font-semibold"
                    >
                      {d}
                    </th>
                  ))}
                </tr>

                <tr>
                  <th colSpan={8} className="p-0">
                    <div className="h-[2px] bg-(--color-brand-orange)" />
                  </th>
                </tr>
              </thead>

              <tbody>
                {visibleSchedule.map((row, idx) => (
                  <tr
                    key={row.time}
                    className={[
                      idx % 2 === 0 ? "bg-black/30" : "bg-neutral-900",
                      "border-t border-white/10",
                    ].join(" ")}
                  >
                    <td className="px-4 py-4 text-left font-extrabold text-(--color-brand-orange)">
                      {row.time}
                    </td>

                    {days.map((d) => (
                      <td key={d} className="px-4 py-4 text-center">
                        <Pill value={row.classes[d]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="mt-10 md:hidden space-y-6">
          {visibleSchedule.map((row) => (
            <div
              key={row.time}
              className="rounded-2xl border border-white/10 bg-white/10 p-6"
            >
              <div className="text-(--color-brand-orange) font-extrabold text-2xl tracking-[0.04em]">
                {row.time}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-4">
                {days.map((d) => (
                  <div key={d} className="flex items-baseline justify-between gap-4">
                    <span className="text-white/55">{dayShort[d]}</span>
                    <span
                      className={[
                        "font-semibold",
                        row.classes[d] === "-" ? "text-white/30" : "text-white",
                      ].join(" ")}
                    >
                      {row.classes[d]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View more / less */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={handleToggle}
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold
                       border border-white/20 text-white hover:bg-white/10 transition"
          >
            {showAll ? "View less" : "View more"}
          </button>
        </div>
      </div>
    </section>
  );
}

function Pill({ value }) {
  if (!value || value === "-") return <span className="text-white/30">-</span>;

  return (
    <span className="inline-flex items-center justify-center rounded-lg bg-[rgba(92,113,70,0.18)] px-5 py-2 text-sm font-semibold text-[rgba(92,113,70,0.95)]">
      {value}
    </span>
  );
}
