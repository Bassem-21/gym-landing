import { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  // ✅ map each label to a section id on your page
  const phone = "96170134290";
  const message = encodeURIComponent(
    "Hello, I want to book a free trial session"
  );

  const whatsappLink = `https://wa.me/${phone}?text=${message}`;

  const columns = useMemo(
    () => [
      {
        title: "About",
        links: [{ label: "About us", href: "#about" }],
      },
      {
        title: "Services",
        links: [
          { label: "Programs", href: "#schedule" },
          { label: "Coaches", href: "#coaches" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Contact us", href: "#contact" },
        ],
      },
      {
        title: "FAQ",
        links: [
          { label: "Payment", href: "#pricing" },
          { label: "Monthy pay", href: "#pricing" },
          { label: "Work time", href: "#schedule" },
        ],
      },
    ],
    []
  );

  // ✅ smooth scroll helper
  const handleSmoothScroll = (e, href) => {
    if (!href?.startsWith("#")) return;

    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer id="contact" className="section section-dark p-0">
      {/* ===== Top CTA strip (background image) ===== */}
      <div className="relative overflow-hidden">
        <div
          className="h-[300px] md:h-[320px] w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=2070&auto=format&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

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

              <form
                className="
                  mt-8 mx-auto w-full max-w-xl
                  flex flex-col md:flex-row
                  items-stretch gap-3 md:gap-0 justify-center
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
                    outline-none focus:border-white/30
                  "
                />

                <button
                  type="submit"
                  className="
                    rounded-xl md:rounded-l-none
                    bg-brand-green
                    text-black font-extrabold tracking-[0.12em] uppercase
                    px-10 py-3
                    shadow-[0_12px_30px_rgba(0,0,0,0.35)]
                    hover:brightness-110 transition
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
            <div className="md:col-span-4">
              <div className="text-white font-extrabold tracking-[0.08em] uppercase">
                GYMTEAM
              </div>

              <p className="mt-3 text-sm text-white/50 max-w-xs leading-relaxed">
                Lorem ipsum is simply dummy text of the printing and typesetting industry
              </p>

            <div className="mt-5 flex gap-3">
              <SocialIcon icon={faInstagram} href="#" label="Instagram" />
              <SocialIcon icon={faWhatsapp} href={whatsappLink} label="WhatsApp" />
            </div>
            </div>

            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-10">
              {columns.map((col) => (
                <FooterCol
                  key={col.title}
                  title={col.title}
                  links={col.links}
                  onLinkClick={handleSmoothScroll}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 h-px bg-white/10" />

          <div className="mt-5 text-xs text-white/35">
            Copyright 2023 All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, onLinkClick }) {
  return (
    <div>
      <div className="text-[rgba(92,113,70,0.95)] font-extrabold tracking-[0.06em] uppercase text-sm">
        {title}
      </div>

      <ul className="mt-4 space-y-3">
        {links.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={(e) => onLinkClick(e, item.href)}
              className="text-sm text-white/55 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ icon, href = "#", label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        h-9 w-9 rounded-full
        grid place-items-center
        border border-[rgba(92,113,70,0.7)]
        text-brand-green
        hover:bg-white/5 transition
      "
    >
      <FontAwesomeIcon icon={icon} className="text-sm" />
    </a>
  );
}