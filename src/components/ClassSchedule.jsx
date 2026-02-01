// src/components/ClassSchedule.jsx
import { useMemo } from "react";

export default function ClassSchedule() {
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

  // ✅ Data-first: same source drives desktop table + mobile cards
  const schedule = useMemo(
    () => [
      {
        time: "06:00",
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
        time: "12:00",
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
    ],
    []
  );

  return (
    <section id="schedule" className="section section-dark">
      <div className="container-page">
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

        {/* ✅ Desktop / Tablet (table like screenshot) */}
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
                {/* thin orange line under header */}
                <tr>
                  <th colSpan={8} className="p-0">
                    <div className="h-[2px] bg-(--color-brand-orange)" />
                  </th>
                </tr>
              </thead>

              <tbody>
                {schedule.map((row, idx) => (
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

        {/* ✅ Mobile (cards like screenshot) */}
        <div className="mt-10 md:hidden space-y-6">
          {schedule.map((row) => (
            <div
              key={row.time}
              className="rounded-2xl border border-white/10 bg-white/10 p-6"
            >
              <div className="text-(--color-brand-orange) font-extrabold text-2xl tracking-[0.04em]">
                {row.time}
              </div>

              {/* 2-column list like screenshot */}
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
      </div>
    </section>
  );
}

function Pill({ value }) {
  if (!value || value === "-") {
    return <span className="text-white/30">-</span>;
  }

  // dark green-ish pill like screenshot
  return (
    <span className="inline-flex items-center justify-center rounded-lg bg-[rgba(92,113,70,0.18)] px-5 py-2 text-sm font-semibold text-[rgba(92,113,70,0.95)]">
      {value}
    </span>
  );
}
