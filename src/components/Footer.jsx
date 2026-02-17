import { useMemo } from "react";

export default function Footer() {
  const columns = useMemo(
    () => [
      {
        title: "About",
        links: ["About us",],
      },
      {
        title: "Services",
        links: ["How to work", "Works", "Price"],
      },
      {
        title: "Support",
        links: ["Contact us", "Our channel", "Instagram", "Telegram"],
      },
      {
        title: "FAQ",
        links: ["Payment", "Monthy pay", "Work time", "More"],
      },
    ],
    []
  );

  return (
    <footer id="contact" className="section section-dark p-0">
      {/* ===== Top CTA strip (background image) ===== */}
      <div className="relative overflow-hidden">
        {/* Background image */}
        <div
          className="h-[300px] md:h-[320px] w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=2070&auto=format&fit=crop)",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container-page w-full">
            <div className="mx-auto max-w-4xl text-center my-4">
              <h2 className="text-lg md:text-5xl font-extrabold tracking-[0.12em] uppercase text-white">
                GET YOUR FIRST TRIAL VISIT
              </h2>

              <p className="mt-3 text-xs sm:text-sm text-white/55 max-w-2xl mx-auto leading-relaxed">
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum.
              </p>

              {/* Form */}
              <form
                className="
                  mt-8 mx-auto
                  w-full max-w-xl
                  flex flex-col md:flex-row
                  items-stretch
                  gap-3 md:gap-0
                  justify-center
                "
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="jahongirov@gmail.com"
                  className="
                    w-full md:w-[360px]
                    rounded-xl md:rounded-r-none
                    bg-black/55 border border-white/15
                    px-5 py-3
                    text-white/85 placeholder:text-white/35
                    outline-none
                    focus:border-white/30
                  "
                />

                <button
                  type="submit"
                  className="
                    rounded-xl md:rounded-l-none
                    bg-[rgba(200,255,61,0.95)]
                    text-black font-extrabold tracking-[0.12em] uppercase
                    px-10 py-3
                    shadow-[0_12px_30px_rgba(0,0,0,0.35)]
                    hover:brightness-110
                    transition
                  "
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Bottom footer ===== */}
      <div className="bg-black">
        <div className="container-page py-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 px-5">
            {/* Brand block */}
            <div className="md:col-span-4">
              <div className="text-white font-extrabold tracking-[0.08em] uppercase">
                GYMTEAM
              </div>

              <p className="mt-3 text-sm text-white/50 max-w-xs leading-relaxed">
                Lorem ipsum is simply dummy text of the printing and typesetting industry
              </p>

              {/* Social icons */}
              <div className="mt-5 flex gap-3">
                <SocialIcon />
                <SocialIcon />
                <SocialIcon />
              </div>
            </div>

            {/* Link columns */}
            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-10">
              {columns.map((col) => (
                <FooterCol key={col.title} title={col.title} links={col.links} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="mt-10 h-px bg-white/10" />

          {/* Copyright */}
          <div className="mt-5 text-xs text-white/35">
            Copyright 2023 All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div className="text-[rgba(92,113,70,0.95)] font-extrabold tracking-[0.06em] uppercase text-sm">
        {title}
      </div>

      <ul className="mt-4 space-y-3">
        {links.map((t) => (
          <li key={t}>
            <a
              href="#"
              className="text-sm text-white/55 hover:text-white transition-colors"
            >
              {t}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon() {
  return (
    <button
      className="
        h-9 w-9 rounded-full
        grid place-items-center
        border border-[rgba(92,113,70,0.7)]
        text-[rgba(200,255,61,0.95)]
        hover:bg-white/5 transition
      "
      aria-label="Social"
      type="button"
    >
      {/* simple glyph (replace later with real icons) */}
      <span className="text-sm">⦿</span>
    </button>
  );
}
